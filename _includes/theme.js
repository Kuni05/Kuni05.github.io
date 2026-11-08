(function () {
  var key = 'homepage-theme';
  var root = document.documentElement;
  var system = window.matchMedia('(prefers-color-scheme: dark)');
  var chromeColor = document.querySelector('meta[name="theme-color"]');
  var preference;
  var button;

  function apply() {
    var explicit = preference === 'dark' || preference === 'light';
    var dark = explicit ? preference === 'dark' : system.matches;
    root.dataset.theme = dark ? 'dark' : 'light';
    chromeColor.content = dark ? '#191b1e' : '#ffffff';
    if (!button) return;

    button.setAttribute('aria-pressed', String(dark));
    button.querySelector('i').className = dark ? 'fas fa-sun' : 'fas fa-moon';
    button.title = root.lang === 'zh-CN'
      ? (dark ? '切换到浅色模式' : '切换到深色模式')
      : (dark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  // Apply the saved choice before the first stylesheet can paint the page.
  try { preference = localStorage.getItem(key); } catch (_) {}
  apply();
  if (system.addEventListener) system.addEventListener('change', apply);
  else system.addListener(apply);
  window.addEventListener('storage', function (event) {
    if (event.key !== key && event.key !== null) return;
    preference = event.newValue;
    apply();
  });
  document.addEventListener('DOMContentLoaded', function () {
    button = document.getElementById('theme-toggle');
    if (!button) return;
    apply();
    button.hidden = false;
    button.addEventListener('click', function () {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(key, preference); } catch (_) {}
      apply();
    });
  });
}());
