
(function ($) {


	// **********************************************************************//
	// ! Window ready
	// **********************************************************************//
	$(document).ready(function () {
    //banner
    $('.slideshow').slick({
      dots: false,
      arrows: true,
      slideToShow:1,
      autoplay:true,
      autoplayspeed:3000,
      fade: true
    });

    //partner
    $('.partner').slick({
      dots: false,
      arrows: true,
      slidesToShow:7,
      autoplay:false,
      autoplayspeed:3000,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },        
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    });

    //
    $('.dotdotdot').dotdotdot();
  });
	// **********************************************************************//
	// ! Window load
	// **********************************************************************//
	$(window).on('load', function () {

	});

	// **********************************************************************//
	// ! Window resize
	// **********************************************************************//
	$(window).on('resize', function () {
	  
	});

})(jQuery);


