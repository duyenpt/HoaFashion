console.log('Hello from dev 1');



(function ($) {


	

	// **********************************************************************//
	// ! Window ready
	// **********************************************************************//
	$(document).ready(function () {
		$('.banner-home').slick({
			dots: false,
			arrows: false,
			slideToShow:1,
			autoplay:true,
			autoplayspeed:3000,
			fade: true
		});

		//validation
		$('#form-submit-email').validate({
			rules: {
				'email': {
					required: true,
				}
			},
			messages: {
				'email': 'Không để trống'
			}
		});

		$('#form-confirm-account').validate({
			rules: {
				'email': {
					required: true,
				},
				'tel': {
					required: true,
				},
				'cmt': {
					required: true,
				},
				'password': {
					required: true,
				}
			},
			messages: {
				'email': 'Không để trống',
				'tel': 'Không để trống',
				'cmt': 'Không để trống',
				'password': 'Không để trống'
			}
		});
		

		$('.faq_title a').click(function(e){
			e.preventDefault();
			if($(this).hasClass('is-active')){
				$(this).removeClass('is-active');
				$(this).parent().parent().find('.faq_content').stop().slideUp();
				$(this).parent().parent().removeClass('is-active');
			}else{
				$(this).addClass('is-active');
				$(this).parent().parent().find('.faq_content').stop().slideDown();
				$(this).parent().parent().addClass('is-active');
			}
		});

		$('.dotdotdot').dotdotdot();

		$('.open-deposit').click(function(){
			var par = $(this).parents('.parent').next('.child');
			par.toggleClass('show');
			$(this).parents('.parent').toggleClass('active');
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