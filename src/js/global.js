document.addEventListener("DOMContentLoaded", function() {

	// Shrink header on scroll
  var docElem = document.documentElement,
			header = document.querySelector( '.header' ),
			didScroll = false,
			changeHeaderOn = 200;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
      header.classList.add('shrink');
		}
		else {
      header.classList.remove('shrink');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

	// dropdown
	var dropdownItem = document.querySelector('.has-dropdown')
	var dropdownMenu = document.querySelector('.dropdown')

	dropdownItem.addEventListener('mousemove', function(){
		this.classList.add('is-active')
		dropdownMenu.classList.add('is-active')
	});
	dropdownItem.addEventListener('mouseleave', function(){
		this.classList.remove('is-active')
		dropdownMenu.classList.remove('is-active')
	});

	// mobile nav
	var mobileBtn = document.querySelector('.mobile-btn')
	var mobileNav = document.querySelector('.mobile-nav')

	mobileBtn.addEventListener('click', function(){
		this.querySelector('.hamburger--spin').classList.toggle('is-active')
		mobileNav.classList.toggle('is-active')
	})

	// Anime top shapes
  const anime = require('animejs')

  anime.default({
    targets: '.top__gradient-front path',
    d: 'M11,0 C11,-10 260,-60 738,136 C1021,251 1415,171 1415,171 L1415,623 L0,623 L0,14 L11,7 Z',
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'linear'
  });
  anime.default({
    targets: '.top__gradient-back path',
    d: 'M4,8 C4,-20 224,-33 468,58 C711,171 868,290 1155,268 C1270,258 1411,165 1412,165 L1412,692 L0,692 L4,8 Z',
    duration: 2500,
    loop: true,
    direction: 'alternate',
    easing: 'linear'
  });
});