window.scrollTo({ top: 0, behavior: 'smooth' });
$(window).scroll(function () {
    // sticky Header
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $("header").addClass("sticky");
        $(".nav-icon").addClass("sticky-icon");
        setTimeout(function () {
            $(".start_pos").removeClass("start_pos");
            $(".brand_logo_padding").removeClass("brand_logo_padding");
        });
        $(".navbar-brand img").css("display", "block");
    } else {
        $("header").removeClass("sticky");
        $(".nav-icon").removeClass("sticky-icon");
    }

    // sticky-nav
    var scrollNav = $(window).scrollTop();
    if (scrollNav >= 200) {
        $(".share").addClass("sticky-share");
    } else {
        $(".share").removeClass("sticky-share");
    }
    if ($(document).height() - $(window).height() - $(window).scrollTop() <= 500) {
        $(".share").removeClass("sticky-share");
        
    }

    // var t = $(".title"),
    //     o = $(window);
    // o.on("load resize", function () {
    //     var e = o.height(),
    //         n = o.scrollTop(),
    //         a = n + e;
    //     $.each(t, function () {
    //         var e = $(this),
    //             t = e.outerHeight(),
    //             o = e.offset().top + 300;
    //         if (n <= o + t && o <= a) {
    //             e.addClass("in_view");
    //         }
    //     })
    // });
});



$(document).ready(function () {
    // $(window).scrollTop(0);
    setTimeout(function () {
        $(".contact-img").addClass("contact_in_view");
    }, 1000);
    
// $(".load-animation.text_animate").addClass("in_view");

let imgItems = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'];

    $('#title-img-hover-effect').mousemove(function(event){
    var randomImg = imgItems[Math.floor(Math.random() * imgItems.length)];
        let pageX = event.clientX;
        let pageY = event.clientY;
        console.log(pageX); 
        //$('.items-wrapper .item').eq(randomImg).css('transform',"translateX("+pageX+"px)");
        $('.items-wrapper .item').css('opacity', 0)

        $('.items-wrapper .item').eq(randomImg).css({
            //transform: "translate("+pageX/1+"px, "+pageY/1+"px)",
            opacity:1,
            left:`${pageX - 100}px`,
            top:`${pageY - 300}px`,
            // visibility:visible
        })
    
    });


    // (function ($) {
    //     var $window = $(".next h3"),
    //         $html = $('.next h3');

    //     $window.resize(function resize() {
    //         if ($window.width() < 1500) {
    //             return $html.addClass('scroll-div');
    //         }

    //         $html.removeClass('scroll-div');
    //     }).trigger('resize');
    // })(jQuery);


    
    var rellax = new Rellax('.rellax');
    
    // for logo animation
    // if(window.scrollY==0){
    //   setTimeout(function(){
    //     $(".start_pos").removeClass("start_pos");
    //     $(".brand_logo_padding").removeClass("brand_logo_padding");
    //   }, 1000);
    //   $(".navbar-brand img").css("display", "block");
    // }
    // $(window).scroll(function(){
    //   if(window.scrollY > 0){
    //     $(".navbar-brand img").css("display", "none");
    //     $(".brand_logo_padding").removeClass("brand_logo_padding");
    //   }
    //   if(window.scrollY==0){
    //     $(".navbar-brand img").css("display", "block");
    //     $(".navbar-brand img").removeClass("start_pos");
    //   }
    // });

    if (window.matchMedia("(max-width: 1366px)").matches) {
        if ($(".next .text-center").width() > 1350) {
            $(".next").addClass("scroll-div");
        }
    }
    if (window.matchMedia("(max-width: 768px)").matches) {
        if ($(".next .text-center").width() > 500) {
            $(".next").addClass("scroll-div");
        }
    }

    wow = new WOW();
    wow.init();


    // var t = $(".text_animate"),
    //     o = $(window);
    // o.on("scroll resize", function() {
    //     var e = o.height(),
    //         n = o.scrollTop(),
    //         a = n + e;
    //     $.each(t, function() {
    //         var e = $(this),
    //             t = e.outerHeight(),
    //             o = e.offset().top + 300;
    //             if(n <= o + t && o <= a){
    //               e.addClass("in_view");
    //             }
    //     })
    // });
    
    

    $('.nav-icon').click(function () {
        $(this).toggleClass('open');
        $(".overlay-menu").toggleClass('open-menu');
        setTimeout(function () {
            $(".menu-img").toggleClass("in-veiw");
        }, 100);
    });

    jQuery(function ($) {
        var path = window.location.href;
        // because the 'href' property of the DOM element is the absolute path
        $('.navbar-light .navbar-nav .nav-link').each(function () {
            if (this.href === path) {
                $(this).addClass('active');
            }
        });
    });
    jQuery(function ($) {
        var path = window.location.href;
        // because the 'href' property of the DOM element is the absolute path
        $('.overlay-menu ul li a').each(function () {
            if (this.href === path) {
                $(this).addClass('active');
            }
        });
    });

    $('.project-slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
        if (!e.namespace) {
            return;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: false,
        margin: 0,
        responsiveClass: true,
        nav: true,
        navText: [" ", " "],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    // $(".hover-section ul li").hover(function () {
    //     $(this).children().toggleClass("hover-img-show");
    // });
    
    // Splitting();

    
 


});





var divisor = document.getElementById("divisor"),
    handle = document.getElementById("handle"),
    slider = document.getElementById("slider");

function moveDivisor() {
    handle.style.left = slider.value + "%";
    divisor.style.width = slider.value + "%";
}

window.onload = function () {
    moveDivisor();
};

$(function () {
    var loc = window.location.href; // returns the full URL
    // if (/index.html/.test(loc)) {
    //     $('body').addClass('home-page');
    // }
    if (/project.html/.test(loc)) {
        $('body').addClass('project-page');
    }
    if (/about-us.html/.test(loc)) {
        $('body').addClass('about-page');
    }
    if (/contact-us.html/.test(loc)) {
        $('body').addClass('contact-page');
    }
    if (/blog.html/.test(loc)) {
        $('body').addClass('blog-page');
    }
});

//document ready end


// // Animation
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//   const smoother = ScrollSmoother.create({
//     smooth: 2,
//     effects: true,
//   // normalizeScroll: true,
//     smoothTouch: 0.2,
//   });

Splitting();

  var isInViewport = function(elem) {
    var distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  // read the link on how above code works
  
  var findMe = document.querySelectorAll('.flip-text');
  
  window.addEventListener('scroll', function(event) {
  // add event on scroll
  findMe.forEach(element => {
      //for each .thisisatest
      if (isInViewport(element)) {
        //if in Viewport
        element.classList.add("flip-text-animation");
      }
  });
  }, false);

  
