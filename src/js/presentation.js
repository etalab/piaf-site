document.addEventListener("DOMContentLoaded", function() {
  // Count up key figures
  const countUp = require('countup.js')

  let elements = document.querySelectorAll('.countup')

  elements.forEach(element => {
    let elementCount = element.dataset.count  
    let counter = new countUp.CountUp(element, elementCount, {duration: 4, separator: ' '});
    counter.start();
  });

  // Anime top shapes
  const anime = require('animejs')

  anime.default({
    targets: '.presentation-top__gradient-front path',
    d: 'M11,0 C11,-10 260,-60 738,136 C1021,251 1415,171 1415,171 L1415,623 L0,623 L0,14 L11,7 Z',
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'linear'
  });
  anime.default({
    targets: '.presentation-top__gradient-back path',
    d: 'M4,8 C4,-20 224,-33 468,58 C711,171 868,290 1155,268 C1270,258 1411,165 1412,165 L1412,692 L0,692 L4,8 Z',
    duration: 2500,
    loop: true,
    direction: 'alternate',
    easing: 'linear'
  });

  const BadgerAccordion = require('badger-accordion');

  // Creating a new instance of the accordion
  const accordionDomNode = document.querySelector('.js-badger-accordion');

  const accordion = new BadgerAccordion.default(accordionDomNode);

});