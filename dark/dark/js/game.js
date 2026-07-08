(function () {
  'use strict';

  var openBtn = document.getElementById('openGame');
  var modal = document.getElementById('gameModal');
  if (!openBtn || !modal) return;

  var canvas = document.getElementById('gameCanvas');
  var overlay = document.getElementById('gameOverlay');
  var startBtn = document.getElementById('gameStart');
  var scoreEl = document.getElementById('gameScore');
  var bestEl = document.getElementById('gameBest');
  var livesEl = document.getElementById('gameLives');
  var overlayTitle = overlay.querySelector('.game-overlay-title');
  var overlayText = overlay.querySelector('.game-overlay-text');
  var triggerBest = document.querySelector('.game-trigger-best');
  var closeButtons = modal.querySelectorAll('[data-close]');
  var ctx = canvas.getContext('2d');

  var STORAGE_KEY = 'outliers-best-score';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var state = null;
  var rafId = null;
  var lastFocused = null;

  function css(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function getBest() {
    try { return parseInt(localStorage.getItem(STORAGE_KEY), 10) || 0; } catch (e) { return 0; }
  }
  function setBest(v) {
    try { localStorage.setItem(STORAGE_KEY, String(v)); } catch (e) {}
  }

  function renderBest() {
    var best = getBest();
    bestEl.textContent = best;
    if (triggerBest) {
      triggerBest.textContent = best > 0 ? 'Meilleur score : ' + best : 'Sois le premier à jouer !';
    }
  }
  renderBest();

  /* ---- Modal open/close ---------------------------------------------------- */
  function openModal() {
    lastFocused = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    resizeCanvas();
    resetToIdle();
    document.addEventListener('keydown', onKeydown);
    (startBtn || modal).focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    stopLoop();
    document.removeEventListener('keydown', onKeydown);
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  function onKeydown(e) {
    if (e.key === 'Escape') closeModal();
  }

  openBtn.addEventListener('click', openModal);
  closeButtons.forEach(function (btn) { btn.addEventListener('click', closeModal); });

  /* ---- Canvas sizing --------------------------------------------------------- */
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var W = 0, H = 0;

  function resizeCanvas() {
    var wrap = canvas.parentElement;
    W = wrap.clientWidth;
    H = wrap.clientHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener('resize', function () {
    if (modal.classList.contains('is-open')) resizeCanvas();
  });

  /* ---- Game state -------------------------------------------------------------- */
  function freshState() {
    return {
      score: 0,
      lives: 3,
      points: [],
      particles: [],
      combo: 0,
      spawnAcc: 0,
      spawnInterval: 900,
      elapsed: 0,
      running: false
    };
  }

  function resetToIdle() {
    stopLoop();
    state = freshState();
    scoreEl.textContent = '0';
    livesEl.textContent = '3';
    overlay.hidden = false;
    overlayTitle.textContent = 'Catch the Outliers';
    overlayText.innerHTML = 'Cliquez sur les points <span class="outlier-sample"></span> anormaux avant qu\'ils touchent la ligne de seuil. Évitez de cliquer sur les points normaux.';
    startBtn.textContent = 'Commencer';
    ctx.clearRect(0, 0, W, H);
  }

  startBtn.addEventListener('click', function () {
    overlay.hidden = true;
    state = freshState();
    state.running = true;
    scoreEl.textContent = '0';
    livesEl.textContent = '3';
    lastTime = null;
    rafId = requestAnimationFrame(loop);
  });

  function stopLoop() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  }

  /* ---- Spawning ------------------------------------------------------------------ */
  function spawnPoint() {
    var isOutlier = Math.random() < 0.24;
    state.points.push({
      x: 20 + Math.random() * (W - 40),
      y: -10,
      r: isOutlier ? 8 : 5,
      speed: (isOutlier ? 55 : 50) + Math.random() * 20 + Math.min(state.score * 0.5, 60),
      isOutlier: isOutlier,
      phase: Math.random() * Math.PI * 2
    });
  }

  /* ---- Feedback fx ---------------------------------------------------------------- */
  function addParticle(x, y, text, color) {
    state.particles.push({ x: x, y: y, text: text, color: color, life: 1 });
  }

  function pulse(el, cls) {
    el.classList.remove(cls);
    void el.offsetWidth;
    el.classList.add(cls);
  }

  var shakeUntil = 0;

  function registerCatch(point, x, y) {
    state.combo++;
    var gain = 10 + Math.min(state.combo - 1, 5) * 4;
    state.score += gain;
    scoreEl.textContent = state.score;
    pulse(scoreEl, 'is-pulsing');
    addParticle(x, y, '+' + gain, css('--accent2'));
  }

  function registerMistake(x, y) {
    state.combo = 0;
    state.lives--;
    livesEl.textContent = Math.max(0, state.lives);
    pulse(livesEl, 'is-pulsing');
    addParticle(x, y, '-1 vie', css('--danger'));
    if (!reduceMotion) shakeUntil = performance.now() + 260;
    if (state.lives <= 0) endGame();
  }

  function endGame() {
    state.running = false;
    stopLoop();
    var best = getBest();
    var isNewBest = state.score > best;
    if (isNewBest) { setBest(state.score); best = state.score; }
    renderBest();
    overlay.hidden = false;
    overlayTitle.textContent = 'Partie terminée';
    overlayText.textContent = 'Score final : ' + state.score + (isNewBest ? ' — nouveau record !' : ' · Meilleur score : ' + best);
    startBtn.textContent = 'Rejouer';
  }

  /* ---- Input ------------------------------------------------------------------------ */
  canvas.addEventListener('pointerdown', function (e) {
    if (!state || !state.running) return;
    var rect = canvas.getBoundingClientRect();
    var x = (e.clientX - rect.left) * (W / rect.width);
    var y = (e.clientY - rect.top) * (H / rect.height);

    var hitIndex = -1;
    var hitDist = Infinity;
    state.points.forEach(function (p, i) {
      var d = Math.hypot(p.x - x, p.y - y);
      if (d <= p.r + 8 && d < hitDist) { hitDist = d; hitIndex = i; }
    });
    if (hitIndex === -1) return;

    var point = state.points[hitIndex];
    state.points.splice(hitIndex, 1);
    if (point.isOutlier) {
      registerCatch(point, point.x, point.y);
    } else {
      registerMistake(point.x, point.y);
    }
  });

  /* ---- Loop --------------------------------------------------------------------------- */
  var lastTime = null;
  var THRESHOLD_RATIO = 0.86;

  function loop(now) {
    if (!state || !state.running) return;
    if (lastTime === null) lastTime = now;
    var dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;
    state.elapsed += dt;

    state.spawnInterval = Math.max(380, 900 - state.score * 6);
    state.spawnAcc += dt * 1000;
    if (state.spawnAcc >= state.spawnInterval) {
      state.spawnAcc = 0;
      spawnPoint();
    }

    var thresholdY = H * THRESHOLD_RATIO;
    for (var i = state.points.length - 1; i >= 0; i--) {
      var p = state.points[i];
      p.y += p.speed * dt;
      if (p.y >= thresholdY) {
        state.points.splice(i, 1);
        if (p.isOutlier) registerMistake(p.x, thresholdY);
      }
    }

    state.particles.forEach(function (fx) { fx.y -= reduceMotion ? 0 : 24 * dt; fx.life -= dt * 1.6; });
    state.particles = state.particles.filter(function (fx) { return fx.life > 0; });

    render(now, thresholdY);

    if (state.running) rafId = requestAnimationFrame(loop);
  }

  function render(now, thresholdY) {
    var shakeX = 0, shakeY = 0;
    if (now < shakeUntil) {
      shakeX = (Math.random() - 0.5) * 6;
      shakeY = (Math.random() - 0.5) * 6;
    }
    ctx.save();
    ctx.clearRect(0, 0, W, H);
    ctx.translate(shakeX, shakeY);

    if (now < shakeUntil) {
      ctx.fillStyle = css('--danger');
      ctx.globalAlpha = 0.08;
      ctx.fillRect(-10, -10, W + 20, H + 20);
      ctx.globalAlpha = 1;
    }

    ctx.setLineDash([6, 6]);
    ctx.strokeStyle = css('--border');
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, thresholdY);
    ctx.lineTo(W, thresholdY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = css('--text-faint');
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.fillText('seuil de détection', 8, thresholdY - 6);

    state.points.forEach(function (p) {
      var wobble = Math.sin(now / 260 + p.phase) * (p.isOutlier ? 2 : 1);
      ctx.beginPath();
      ctx.arc(p.x + wobble, p.y, p.r, 0, Math.PI * 2);
      if (p.isOutlier) {
        ctx.shadowBlur = 14 + Math.sin(now / 140) * 4;
        ctx.shadowColor = css('--accent2');
        ctx.fillStyle = css('--accent2');
      } else {
        ctx.shadowBlur = 0;
        ctx.fillStyle = css('--text-faint');
      }
      ctx.fill();
    });
    ctx.shadowBlur = 0;

    state.particles.forEach(function (fx) {
      ctx.globalAlpha = Math.max(0, fx.life);
      ctx.fillStyle = fx.color;
      ctx.font = '600 13px "JetBrains Mono", monospace';
      ctx.fillText(fx.text, fx.x, fx.y);
    });
    ctx.globalAlpha = 1;
    ctx.restore();
  }
})();
