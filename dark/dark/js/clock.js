(function () {
  'use strict';

  var el = document.getElementById('localClock');
  if (!el) return;

  var formatter = new Intl.DateTimeFormat('fr-FR', {
    timeZone: 'Africa/Abidjan',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  function tick() {
    el.textContent = formatter.format(new Date());
  }

  tick();
  setInterval(tick, 1000);
})();
