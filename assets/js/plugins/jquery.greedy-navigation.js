(function () {
  var nav = document.getElementById('site-nav');
  if (!nav) return;

  var button = nav.querySelector('button');
  var visible = nav.querySelector('.visible-links');
  var overflow = nav.querySelector('.hidden-links');

  function setOpen(open) {
    button.setAttribute('aria-expanded', String(open));
    overflow.classList.toggle('hidden', !open);
  }

  function fitLinks() {
    // First try the full row: a menu should not create its own overflow.
    while (overflow.firstElementChild) visible.appendChild(overflow.firstElementChild);
    var available = nav.getBoundingClientRect().width;
    var fits = visible.getBoundingClientRect().width <= available;
    button.classList.toggle('hidden', fits);
    if (fits) {
      setOpen(false);
      return;
    }

    available -= button.getBoundingClientRect().width + 4;
    while (visible.lastElementChild && visible.getBoundingClientRect().width > available) {
      overflow.insertBefore(visible.lastElementChild, overflow.firstChild);
    }
  }

  button.addEventListener('click', function () {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });
  overflow.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('click', function (event) {
    if (!nav.contains(event.target) && button.getAttribute('aria-expanded') === 'true') setOpen(false);
  });
  nav.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });

  window.addEventListener('resize', fitLinks);
  if (document.fonts) document.fonts.ready.then(fitLinks);
  fitLinks();
}());
