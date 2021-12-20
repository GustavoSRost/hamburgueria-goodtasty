/*const btnMobile = document.getElementById('btn-mobile')
function toggleMenu(event) {
  if(event.type === 'touchstart')event.preventDefault()
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
  const active = nav.classlist.contains('active')
  event.currentTarget.setAttribute('aria-expanded', 'true')
  if(active){
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else{
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
  }
}*/

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

$('.slide > :first').addClass('active');

function rotateSlide() {
  var activeSlide = $('.slide > :active'),
      nextSlide = activeSlide.next();
  if(nextSlide.length == 0){
    nextSlide = $('.slide > :first')
  }
  activeSlide.removeClass('active');
  nextSlide.addClass('active');
}



/*
const galeria = document.querySelectorAll('.lanches img');
const galeriaContainer = document.querySelector('.lanches');

function trocarImagem(event) {
  const img = event.currentTarget
  const media = matchMedia("(min-width:1000px)").matches
  if(media){
    galeriaContainer.prepend(img)
  }
  
}

function eventosGaleria(img){
  img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria)*/