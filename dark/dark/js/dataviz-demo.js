(function () {
  'use strict';

  var canvas = document.getElementById('growthChart');
  var slider = document.getElementById('growthSlider');
  var output = document.getElementById('growthValue');
  if (!canvas || !slider || !output || typeof Chart === 'undefined') return;

  var MONTHS = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
  var BASE = 100;

  function css(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function projection(rate) {
    var values = [];
    for (var i = 0; i < MONTHS.length; i++) {
      values.push(Math.round(BASE * Math.pow(1 + rate / 100, i) * 10) / 10);
    }
    return values;
  }

  function neutral() {
    return MONTHS.map(function () { return BASE; });
  }

  var chart = new Chart(canvas.getContext('2d'), {
    type: 'line',
    data: {
      labels: MONTHS,
      datasets: [
        {
          label: 'Scénario neutre (0%)',
          data: neutral(),
          borderColor: css('--text-faint'),
          borderDash: [4, 4],
          borderWidth: 1.5,
          pointRadius: 0,
          tension: 0
        },
        {
          label: 'Projection',
          data: projection(parseFloat(slider.value)),
          borderColor: css('--accent2'),
          backgroundColor: hexToRgba(css('--accent2'), 0.14),
          borderWidth: 2.5,
          pointBackgroundColor: css('--accent2'),
          pointRadius: 3,
          pointHoverRadius: 6,
          fill: true,
          tension: 0.35
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      animation: { duration: 500, easing: 'easeOutQuart' },
      plugins: {
        legend: {
          labels: { color: css('--text-muted'), font: { family: 'Inter', size: 12 }, usePointStyle: true }
        },
        tooltip: {
          backgroundColor: css('--bg-elevated-2'),
          titleColor: css('--text'),
          bodyColor: css('--text-muted'),
          borderColor: css('--border'),
          borderWidth: 1,
          padding: 10
        }
      },
      scales: {
        x: { ticks: { color: css('--text-faint') }, grid: { color: css('--border-soft') } },
        y: { ticks: { color: css('--text-faint') }, grid: { color: css('--border-soft') } }
      }
    }
  });

  function hexToRgba(hex, alpha) {
    var h = hex.replace('#', '');
    if (h.length === 3) h = h.split('').map(function (c) { return c + c; }).join('');
    var r = parseInt(h.substring(0, 2), 16);
    var g = parseInt(h.substring(2, 4), 16);
    var b = parseInt(h.substring(4, 6), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
  }

  function updateLabel(rate) {
    output.textContent = (rate > 0 ? '+' : '') + rate.toFixed(1) + '%';
  }

  slider.addEventListener('input', function () {
    var rate = parseFloat(slider.value);
    updateLabel(rate);
    chart.data.datasets[1].data = projection(rate);
    chart.update();
  });
  updateLabel(parseFloat(slider.value));

  if ('MutationObserver' in window) {
    var mo = new MutationObserver(function () {
      chart.data.datasets[0].borderColor = css('--text-faint');
      chart.data.datasets[1].borderColor = css('--accent2');
      chart.data.datasets[1].backgroundColor = hexToRgba(css('--accent2'), 0.14);
      chart.data.datasets[1].pointBackgroundColor = css('--accent2');
      chart.options.plugins.legend.labels.color = css('--text-muted');
      chart.options.plugins.tooltip.backgroundColor = css('--bg-elevated-2');
      chart.options.plugins.tooltip.titleColor = css('--text');
      chart.options.plugins.tooltip.bodyColor = css('--text-muted');
      chart.options.plugins.tooltip.borderColor = css('--border');
      chart.options.scales.x.ticks.color = css('--text-faint');
      chart.options.scales.x.grid.color = css('--border-soft');
      chart.options.scales.y.ticks.color = css('--text-faint');
      chart.options.scales.y.grid.color = css('--border-soft');
      chart.update();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }
})();
