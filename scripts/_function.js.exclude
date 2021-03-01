$(document).ready(function () {
   /*
    $(".search").click(function(){
		$(".searchForm").slideToggle();
	})
   */

    /* mobile menu */
    $(".menuBtn").click(function () {
        if ($(".menuBtn").hasClass("active")) {
            $(this).removeClass("active");
            $(".mobileMenu").removeClass("active");
        } else {
            $(this).addClass("active");
            $(".mobileMenu").addClass("active");
        }
    });

    /* search */
    $(".searchBtn").click(function () {
        if ($(".searchBtn").hasClass("active")) {
            $(this).removeClass("active");
            $(".mobileSearch").removeClass("active");
        } else {
            $(this).addClass("active");
            $(".mobileSearch").addClass("active");
        }
    });


    $('.banner ul').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplaySpeed: 5000,
        dots: false,
        overPause: false,
    });


    $('.down').click(function(e){
		var link = $(this).attr('href');
			$('html, body') .animate({
				scrollTop: $(link) .offset().top - 0
			}, 3000);
	});	


    $('.reference').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.dotsLi li').mouseenter(function(){
        $(this).find('p').fadeIn();
      }).mouseleave(function(){
        $(this).find('p').fadeOut();
      }); 

});