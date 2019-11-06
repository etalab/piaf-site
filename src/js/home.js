document.addEventListener("DOMContentLoaded", function() {
  const anime = require('animejs')

  anime.default({
    targets: '.highlight-svg__front path',
    d: 'M24.2,51.1c0,0,23.4-63.7,114.2-16.1s83.4,91.2,83.4,91.2s4.7,15.4-46,54.3s-74.8,34.5-119-3.5  S10.3,135,14.2,107.1S24.2,51.1,24.2,51.1z',
    easing: 'easeInOutSine',
    duration: 2500,
    direction: 'alternate',
    loop: true
  })

  anime.default({
    targets: '.highlight-svg__back path',
    d: 'M45.2,60.2c0,0,42.5-50.1,98,0.4s45.1,83.3,45.1,83.3s-7.2,31-52.7,46.7c-45.5,15.7-78.3,16.7-102-17.8  C9.7,138.2,11,112.6,20,94.7C29,76.8,45.2,60.2,45.2,60.2z',
    easing: 'easeInOutSine',
    duration: 3500,
    direction: 'alternate',
    loop: true
  })
});