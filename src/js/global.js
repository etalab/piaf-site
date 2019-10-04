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
});