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
            console.log('123');
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

        //banner
        $('.banner-home').slick({
          dots: false,
          arrows: false,
          slideToShow:1,
          autoplay:true,
          autoplayspeed:3000,
          fade: true
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
})(jQuery)});