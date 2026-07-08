(function () {
  'use strict';

  /* ---- Mobile navigation ------------------------------------------------ */
  var toggle = document.querySelector('.nav-toggle');
  var sidebar = document.getElementById('sidebar');
  var overlay = document.querySelector('.nav-overlay');

  function openNav() {
    sidebar.classList.add('is-open');
    overlay.classList.add('is-open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if (toggle && sidebar && overlay) {
    toggle.addEventListener('click', function () {
      sidebar.classList.contains('is-open') ? closeNav() : openNav();
    });
    overlay.addEventListener('click', closeNav);
    sidebar.querySelectorAll('.nav-menu a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  }

  /* ---- Scroll reveal ------------------------------------------------------ */
  var revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Back to top + scroll progress --------------------------------------- */
  var toTop = document.querySelector('.to-top');
  if (toTop) {
    var onScroll = function () {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      toTop.style.setProperty('--progress', progress.toFixed(1));
      toTop.classList.toggle('is-visible', scrollTop > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- Scroll-spy (home page only: highlights the sidebar item matching the section in view) ---- */
  var homeHero = document.querySelector('#about.hero');
  var navLinks = document.querySelectorAll('.nav-menu a');
  if (homeHero && navLinks.length && 'IntersectionObserver' in window) {
    var spySections = [
      { el: document.getElementById('about'), href: 'index.html' },
      { el: document.getElementById('services'), href: 'services.html' },
      { el: document.getElementById('portfolio'), href: 'portfolio.html' }
    ].filter(function (s) { return s.el; });

    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var match = spySections.filter(function (s) { return s.el === entry.target; })[0];
          if (!match) return;
          navLinks.forEach(function (a) {
            var li = a.closest('li');
            if (li) li.classList.toggle('active', a.getAttribute('href') === match.href);
          });
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    spySections.forEach(function (s) { spyObserver.observe(s.el); });
  }

  /* ---- Portfolio filter ------------------------------------------------------ */
  var filterBar = document.querySelector('[data-filter-bar]');
  if (filterBar) {
    var filterButtons = filterBar.querySelectorAll('[data-filter]');
    var items = document.querySelectorAll('[data-category]');
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');
        filterButtons.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        items.forEach(function (item) {
          var match = filter === '*' || item.getAttribute('data-category').indexOf(filter) !== -1;
          item.hidden = !match;
        });
      });
    });
  }

  /* ---- Shared toast helper (used by copy-to-clipboard and the Konami easter egg) ---- */
  var toastTimer = null;
  window.showToast = function (message, duration) {
    var toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    clearTimeout(toastTimer);
    requestAnimationFrame(function () { toast.classList.add('is-visible'); });
    toastTimer = setTimeout(function () {
      toast.classList.remove('is-visible');
    }, duration || 2200);
  };
})();
