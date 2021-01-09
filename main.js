const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

// Utilizado como index das imagens
let activeSlide = 0

// Adiciona um ouvidor de eventos do tipo "click" em "left", que executa uma função
leftBtn.addEventListener('click', () => {
  // Decrementa "activeSlide"
  activeSlide--
  
  // Se "activeSlide" for menor que "0" ("-1"), ele entra
  if(activeSlide < 0) {
    // "activeSlide" igual ao comprimento de "slides" - 1
    activeSlide = slides.length - 1
  }
  
  // Chama as funções "setBgToBody" e "setActiveSlide"
  setBgToBody()
  setActiveSlide()
})


// Adiciona um ouvidor de eventos do tipo "click" em "rightBtn", que executa uma função
rightBtn.addEventListener('click', () => {
  // Incrementa "activeSlide"
  activeSlide++
  
  // Se "activeSlide" for maior que o comprimento de "slides" - 1, ele entra
  if(activeSlide > slides.length - 1) {
    // "activeSlide" igual a "0"
    activeSlide = 0
  }
  
  // Chama as funções "setBgToBody" e "setActiveSlide"
  setBgToBody()
  setActiveSlide()
})


// Chama a função "setBgToBody" assim que a página carrega
setBgToBody()


// Função "setBgToBody"
function setBgToBody() {
  // Define o "backgroundImage" de body igual ao item de "slides" que tenha o index correspondente a "activeSlide"
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}


// Função "setActiveSlide"
function setActiveSlide() {
  // Para cada item em "slides", ele executa uma função, passando "slide" (o item) e tirando a classe sua "active"
  slides.forEach(slide => slide.classList.remove('active'))
  
  // Adiciona a classe "active" ao item de "slides" que tenha o index correspondente a "activeSlide"
  slides[activeSlide].classList.add('active')
}