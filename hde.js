
var toggle = document.getElementById('toggle');
var cerrar = document.getElementById('close');
var vertical_nav = document.getElementById('vertical_nav');
toggle.addEventListener('click', () => {
  vertical_nav.classList.toggle('show');
  toggle.classList.toggle('hide');
  cerrar.classList.toggle('show');
});
cerrar.addEventListener('click', () => {
  vertical_nav.classList.toggle('show');
  toggle.classList.toggle('hide');
  cerrar.classList.toggle('show');
});
