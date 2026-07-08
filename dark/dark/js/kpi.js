(function () {
  'use strict';

  var values = document.querySelectorAll('.kpi-value[data-count-to]');
  if (!values.length) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animate(el) {
    var target = parseInt(el.getAttribute('data-count-to'), 10) || 0;
    if (reduceMotion) { el.textContent = target; return; }
    var start = performance.now();
    var duration = 900;
    function frame(now) {
      var progress = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(frame);
      else el.textContent = target;
    }
    requestAnimationFrame(frame);
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    values.forEach(function (el) { observer.observe(el); });
  } else {
    values.forEach(animate);
  }
})();
