(function () {
  'use strict';
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  function currentTheme() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
    toggle.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
  }

  toggle.setAttribute('aria-pressed', currentTheme() === 'light' ? 'true' : 'false');
  toggle.addEventListener('click', function () {
    setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
  });
})();
