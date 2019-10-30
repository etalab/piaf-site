document.addEventListener("DOMContentLoaded", function() {
  // Count up key figures
  const countUp = require('countup.js')

  let elements = document.querySelectorAll('.countup')

  elements.forEach(element => {
    let elementCount = element.dataset.count  
    let counter = new countUp.CountUp(element, elementCount, {duration: 4, separator: ' '});
    counter.start();
  });


  // Accordion
  const BadgerAccordion = require('badger-accordion');
  const accordionDomNode = document.querySelector('.js-badger-accordion');

  const accordion = new BadgerAccordion.default(accordionDomNode);

});