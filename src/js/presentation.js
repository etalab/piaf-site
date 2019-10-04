document.addEventListener("DOMContentLoaded", function() {
  const countUp = require('countup.js')


  let elements = document.querySelectorAll('.countup')

  elements.forEach(element => {
    let elementCount = element.dataset.count  
    let counter = new countUp.CountUp(element, elementCount, {duration: 4});
    counter.start();
  });

  

});