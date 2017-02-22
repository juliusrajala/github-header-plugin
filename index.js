(function() {
  const [header] = document.getElementsByClassName('header');
  const [input] = document.getElementsByClassName('header-search-input');
  const [scope] = document.getElementsByClassName('header-search-scope');
  const [notification] = document.getElementsByClassName('mail-status');

  addClass(header, 'header-fix');
  addClass(input, 'input-fix');
  addClass(scope, 'search-scope-fix');
  addClass(notification, 'notification-fix');
})();

function addClass(el, className) {
  console.log('Element is ', el, className);
  el.classList.add(className);
}