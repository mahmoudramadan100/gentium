$(function(){

    $(".owl-carousel").owlCarousel({
    //     dots: true,
    //     nav: true,
    //     autoplay: true,
    //     lazyLoad: true,
    //     autoplayHoverPause: true,
    //     dotsEach: true,
    //     loop:true,
    // margin:10,
    // responsiveClass:true,
    // responsive:{
    //     0:{
    //         items:1,
    //         nav:true
    //     },
    //     600:{
    //         items:2,
    //         nav:false
    //     },
    //     1000:{
    //         items:3,
    //         nav:true,
    //         loop:false
    //     }
    // }
    });


    $('#responsive').lightSlider({
        item:3,
        loop:false,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        auto: true,
        pauseOnHover: true,
        slideMargin: 20,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  

    $('#slider').lightSlider({
        item:3,
        loop:false,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        auto: true,
        pauseOnHover: true,
        slideMargin: 20,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });

    // $(window).scroll(function(){
    //     var scroll = $(window).scrollTop();
    //       if (scroll > (500)) {
    //         $(".nav").css({
    //             "background": "white",
    //             "position": "fixed",
    //             "z-index": "9999",
    //         });
    //       }
    
    //       else{
    //           $(".nav").css({
    //             "background": "transparent",
    //             "position": "relative",
    //           });   
    //       }
    //   })

        $(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
            if ($(this).scrollTop() > 500) {
                $('.scroll').fadeIn();
            } else {
                $('.scroll').hide();
            }
        });

        // $(window).scroll(function () {
        //     // set distance user needs to scroll before we fadeIn navbar
        //     if ($(this).scrollTop() > 5000) {
        //         $('.detalis').css({
        //             "position": "fixed",
        //         });
        //     } else {
        //         $('.detalis').css({
        //             "position": "relative",
        //         });
        //     }
        // });
      


  $('.sidenav').sidenav();
  $('.scrollspy').scrollSpy();
  $(".dropdown-trigger").dropdown();
  $('.collapsible').collapsible();
  
 
      
});