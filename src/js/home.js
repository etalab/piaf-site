document.addEventListener("DOMContentLoaded", function() {
  const anime = require('animejs')

  anime.default({
    targets: '.home-top__gradient-front path',
    d: 'M11,0 C11,-10 260,-60 738,136 C1021,251 1415,171 1415,171 L1415,623 L0,623 L0,14 L11,7 Z',
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'linear'
  });
  anime.default({
    targets: '.home-top__gradient-back path',
    d: 'M4,8 C4,-20 224,-33 468,58 C711,171 868,290 1155,268 C1270,258 1411,165 1412,165 L1412,692 L0,692 L4,8 Z',
    duration: 2500,
    loop: true,
    direction: 'alternate',
    easing: 'linear'
  });

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