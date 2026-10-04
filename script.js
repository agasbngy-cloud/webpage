(function () {
  'use strict';
  document.documentElement.classList.add('js');

  // Mobile menu
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  function setMenu(open) {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setMenu(false); toggle.focus(); } });

  // Active section highlight
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
  var sections = links.map(function (l) { return document.querySelector(l.getAttribute('href')); });
  function onScroll() {
    var y = window.scrollY + 120, current = 0;
    sections.forEach(function (s, i) { if (s && s.offsetTop <= y) current = i; });
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) current = sections.length - 1;
    links.forEach(function (l, i) {
      l.classList.toggle('is-active', i === current);
      if (i === current) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll reveal
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Contact form validation (demo only: no server)
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  var rules = {
    name: function (v) { return v.trim().length >= 2 ? '' : 'Please enter your name.'; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email address.'; },
    subject: function (v) { return v.trim().length >= 3 ? '' : 'Please enter a subject.'; },
    message: function (v) { return v.trim().length >= 10 ? '' : 'Message should be at least 10 characters.'; }
  };
  function check(name) {
    var input = form.elements[name], msg = rules[name](input.value);
    document.getElementById(name + '-error').textContent = msg;
    input.closest('.field').classList.toggle('has-error', !!msg);
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  }
  Object.keys(rules).forEach(function (n) { form.elements[n].addEventListener('blur', function () { check(n); }); });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var firstBad = null;
    Object.keys(rules).forEach(function (n) { if (!check(n) && !firstBad) firstBad = n; });
    if (firstBad) { status.textContent = ''; form.elements[firstBad].focus(); return; }
    // TODO: connect to a form service (see README) to actually send the message.
    status.textContent = 'Thanks! Your message passed validation. (Demo: nothing was sent yet.)';
    form.reset();
  });
})();
