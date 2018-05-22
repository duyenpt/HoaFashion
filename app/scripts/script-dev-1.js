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

  //banner
  var theme = theme || {};
  theme.Slideshow = (function() {
      this.$slideshow = null;
      var classes = {
        wrapper: 'slideshow-wrapper',
        slideshow: 'slideshow',
        currentSlide: 'slick-current'
      };

      function slideshow(el) {
        this.$slideshow = $(el);
        this.$wrapper = this.$slideshow.closest('.' + classes.wrapper);
        this.$pause = this.$wrapper.find('.' + classes.pauseButton);

        this.settings = {
          accessibility: true,
          arrows: true,
          dots: false,
          fade: true,
          rtl:theme.rtl,
          draggable: true,
          touchThreshold: 20,
          autoplay: this.$slideshow.data('autoplay'),
          autoplaySpeed: this.$slideshow.data('speed')
        };

        this.$slideshow.on('beforeChange', beforeChange.bind(this));
        this.$slideshow.on('init', slideshowA11y.bind(this));
        this.$slideshow.slick(this.settings);
      }

      function slideshowA11y(event, obj) {
        var $slider = obj.$slider;
        var $list = obj.$list;
        var $wrapper = this.$wrapper;
        var autoplay = this.settings.autoplay;

        // Remove default Slick aria-live attr until slider is focused
        $list.removeAttr('aria-live');

        // Add arrow key support when focused
        if (obj.$dots) {
          obj.$dots.on('keydown', function(evt) {
            if (evt.which === 37) {
              $slider.slick('slickPrev');
            }

            if (evt.which === 39) {
              $slider.slick('slickNext');
            }

            // Update focus on newly selected tab
            if ((evt.which === 37) || (evt.which === 39)) {
              obj.$dots.find('.slick-active button').focus();
            }
          });
        }
      }

      function beforeChange(event, slick, currentSlide, nextSlide) {
        var $slider = slick.$slider;
        var $currentSlide = $slider.find('.' + classes.currentSlide);
        var $nextSlide = $slider.find('.slideshow__slide[data-slick-index="' + nextSlide + '"]');
      }

      function getSlideshowId($el) {
        return '#Slideshow-' + $el.data('id');
      }

      return slideshow;
    })();
	

	// **********************************************************************//
	// ! Window ready
	// **********************************************************************//
	$(document).ready(function () {
		ResponsiveMenu.initial($(window).width());
        $(window).resize(function() {
          ResponsiveMenu.menuWidthDetect($(this).width());
        });
        setupMegaMenu();

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