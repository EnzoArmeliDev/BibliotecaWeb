// EVENTO DE SCROLL
window.addEventListener('scroll', function () {
  const header = document.getElementById('miHeader');

  if (window.scrollY > 25) { // si el usuario baja 25 pixeles entonces cambia de color el "header"
    header.classList.add('header-scroll');
  } else {
    header.classList.remove('header-scroll');
  }

});

