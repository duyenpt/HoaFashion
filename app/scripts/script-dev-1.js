console.log('Hello from dev 1');




(function ($) {

var ResponsiveMenu =  {
        menuType: 'desktop',
        initial: function(winWidth) {
            ResponsiveMenu.menuWidthDetect(winWidth);
            ResponsiveMenu.menuBtnClick();
            ResponsiveMenu.parentMenuClick();
        },
        menuWidthDetect: function(winWidth) {
            var currMenuType = 'desktop';
            if (matchMedia('only screen and (max-width: 991px)').matches) {
                currMenuType = 'mobile';
            }
            if ( currMenuType !== ResponsiveMenu.menuType ) {
                ResponsiveMenu.menuType = currMenuType;
                if ( currMenuType === 'mobile' ) {
                    $('.mainnav li.mega a').after($('.mega-wrap ul.sub-menu'));
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi');
                    $('.header-wrap').find('.header-nav').after($mobileMenu);

                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');
                    hasChildMenu.children('ul').hide();
                    // hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    $('.mega-wrap .mega-menu').append($('.mainnav li.mega ul.sub-menu').show());
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');
                    $desktopMenu.find('.sub-menu').removeAttr('style');
                    $('.header-wrap').find('.btn-menu').after($desktopMenu);
                    $('.btn-submenu').remove();
                }
            } // clone and insert menu
        },
        menuBtnClick: function() {
            $('.btn-menu').on('click', function() {
                $('#mainnav-mobi').slideToggle(300);
                $(this).toggleClass('active');
            });
        }, // click on moblie button
        parentMenuClick: function() {
            $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
                if ( $(this).has('ul') ) {
                    e.stopImmediatePropagation()
                    $(this).next('ul').slideToggle(300);
                    $(this).toggleClass('active');
                }
            });
        } // click on sub-menu button
    };

  var setupMegaMenu = function() {
    $('#mainnav > ul > li.mega a').hover( function() {
      $('.mega-wrap').fadeIn('300');
    },function(){
      setTimeout(function(){ 
        if ($('.mega-wrap:hover').length == 0) {
            $('.mega-wrap').fadeOut('300');
        } 
      }, 50);
    });
    $('.mega-wrap').mouseleave(function(event) {
      event.preventDefault();
    },function(event) {
      $('.mega-wrap').fadeOut('300');
    });
  };

  
    


	// **********************************************************************//
	// ! Window ready
	// **********************************************************************//
	$(document).ready(function () {
		ResponsiveMenu.initial($(window).width());
        $(window).resize(function() {
          ResponsiveMenu.menuWidthDetect($(this).width());
        });
        setupMegaMenu();

        new WOW().init();

        if($(window).width() < 767) {
            $('.wow').removeClass('wow');   
        }

        $(".footer-links h3").click(function() {
            if($(window).width() < 750){
              $(this).toggleClass("active");
              $(this).next().slideToggle();
          	}    
        }); 
        $('.close-header-search').click(function(){
            $('.header-search').removeClass('open');
        });
        $('.search-open').click(function(){
            $('.header-search').addClass('open');
        });

        $(window).scroll(function () {
            var scroll = $(this).scrollTop();
            if (scroll >= 350) {
                $('body').addClass('fixed-header');
            } else {
                $('body').removeClass('fixed-header');
            }
        });

        
        var menuLinks = $('.navbar .navbar-collapse .navbar-nav li a .fa');
        $(menuLinks).on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('fa-plus fa-minus');
            $(this).parent().next().slideToggle();
        });


        $('.navbar-toggler').click(function(e){
          e.stopPropagation();
          $('body').addClass('open-menu');
        });

        $('.closemobileMenu').click(function(){
          $('body').removeClass('open-menu');
        });

        $('.swatches li').hover(function(){
          var srcImg = $(this).attr('rel');
          console.log(srcImg);
           $(this).parents('.tile-prpoduct').find('.variantImg').attr('src',srcImg);
          $(this).parents('.tile-prpoduct').find('.img-link').addClass('showVariantImg')
        }, function(){
          $(this).parents('.tile-prpoduct').find('.img-link').removeClass('showVariantImg')
        });


        $('.slider-products').slick({
            dots: false,
            infinite: true,
            slidesToShow:5,
            slidesToScroll: 1,
            autoplay: false,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },        
              {
                breakpoint: 750,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
            ]
          });
          $('.slider-products').resize();
          // End Slider
 

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
	  if($(window).width() < 767) {
        $('.wow').removeClass('wow');   
    }
	});

})(jQuery);


