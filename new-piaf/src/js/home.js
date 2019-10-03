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

  // Animations on home
  let highlights = document.querySelectorAll('.home-top__highlight');
  highlights.forEach(highlight => {

    let animation = anime.default({
      targets: highlight.querySelector('.highlight-svg__front path'),
      d: 'M18,52 C18,52 50,-32 161,15 C232,63 232,141 232,141 C232,141 236,136 186,175 C135,204 94,248 50,210 C6,142 -3,137 0,109 C4,81 18,52 18,52 Z',
      duration: 1300,
      scale: .98,
      loop: true,
      autoplay: false,
      direction: 'alternate',
      easing: 'linear'
    });

    let animation_back = anime.default({
      targets: highlight.querySelector('.highlight-svg__back path'),
      d: 'M18,52 C18,52 50,-32 121,15 C232,63 232,91 232,111 C232,81 236,156 186,205 C135,244 94,248 50,210 C6,192 -3,137 0,109 C4,81 18,52 18,52 Z',
      duration: 1600,
      scale: .95,
      loop: true,
      autoplay: false,
      direction: 'alternate',
      easing: 'easeInOutSine'
    });

    highlight.addEventListener('mousemove', function(){
      animation.play()
      animation_back.play()
    });
    highlight.addEventListener('mouseleave', function(){
      animation.pause()
      animation_back.pause()
    });
  });

});