(function () {
  'use strict';

  var CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  var buffer = [];
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('keydown', function (e) {
    buffer.push(e.key);
    if (buffer.length > CODE.length) buffer.shift();
    if (buffer.length === CODE.length && buffer.every(function (k, i) { return k === CODE[i]; })) {
      buffer = [];
      trigger();
    }
  });

  function trigger() {
    if (window.showToast) window.showToast('> easter_egg.unlock() — mode debug activé', 2800);
    if (!reduceMotion) burstParticles();
  }

  function burstParticles() {
    var canvas = document.createElement('canvas');
    canvas.className = 'konami-canvas';
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    var accent = getComputedStyle(document.documentElement).getPropertyValue('--accent2').trim() || '#33e1e8';
    var particles = [];
    var count = window.innerWidth < 640 ? 40 : 90;
    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: -20 - Math.random() * window.innerHeight * 0.5,
        r: 2 + Math.random() * 3,
        vy: 2 + Math.random() * 3,
        vx: (Math.random() - 0.5) * 1.5,
        life: 1
      });
    }

    var start = performance.now();
    var duration = 2600;

    function frame(now) {
      var elapsed = now - start;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach(function (p) {
        p.x += p.vx;
        p.y += p.vy;
        p.life = Math.max(0, 1 - elapsed / duration);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.globalAlpha = p.life;
        ctx.shadowBlur = 10;
        ctx.shadowColor = accent;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      if (elapsed < duration) {
        requestAnimationFrame(frame);
      } else {
        window.removeEventListener('resize', resize);
        canvas.remove();
      }
    }
    window.addEventListener('resize', resize);
    requestAnimationFrame(frame);
  }
})();
