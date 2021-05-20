/**
* Template Name: Maxim - v2.3.1
* Template URL: https://bootstrapmade.com/maxim-free-onepage-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  // $(document).ready(function() {
  //   if (window.location.hash) {
  //     var initial_nav = window.location.hash;
  //     if ($(initial_nav).length) {
  //       var scrollto = $(initial_nav).offset().top - scrolltoOffset;
  //       $('html, body').animate({
  //         scrollTop: scrollto
  //       }, 1500, 'easeInOutExpo');
  //     }
  //   }
  // });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('click', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // project
  $(function(){
    $('.online-tab').click(function(){
      $('#online').css('display','block');
      $('#space').css('display','none');
      $('#auction').css('display','none');
      $('#rental').css('display','none');
      $('#pb').css('display','none');
      $('#long-pro').css('display','none');

    })
    
    $('.space-tab').click(function(){
      $('#space').css('display','block');
      $('#online').css('display','none');
      $('#auction').css('display','none');
      $('#rental').css('display','none');
      $('#pb').css('display','none');
      $('#long-pro').css('display','none');
    })

    $('.auction-tab').click(function(){
      $('#auction').css('display','block');
      $('#space').css('display','none');
      $('#online').css('display','none');
      $('#rental').css('display','none');
      $('#pb').css('display','none');
      $('#long-pro').css('display','none');
    })
    
    $('.rental-tab').click(function(){
      $('#rental').css('display','block');
      $('#auction').css('display','none');
      $('#space').css('display','none');
      $('#online').css('display','none');
      $('#pb').css('display','none');
      $('#long-pro').css('display','none');
    })

    $('.pb-tab').click(function(){
      $('#pb').css('display','block');
      $('#rental').css('display','none');
      $('#auction').css('display','none');
      $('#space').css('display','none');
      $('#online').css('display','none');
      $('#long-pro').css('display','none');
    })

    
    $('.long-tab').click(function(){
      $('#long-pro').css('display','block');
      $('#pb').css('display','none');
      $('#rental').css('display','none');
      $('#auction').css('display','none');
      $('#space').css('display','none');
      $('#online').css('display','none');
    })
  })


  // Qna scroll fixed page

  $(window).scroll(function(){
    if($(this).scrollTop()>2798){
      $('.quest-3').removeClass('fixed3');
      $('.quest-3').css("margin-top","690px")
    }
    else if($(this).scrollTop()>2045){
      $('.quest-3').addClass('fixed3');
    } 
    else if ($(this).scrollTop()>1595){
      $('.quest-2').removeClass('fixed2');
      $('.quest-2').css("margin-top","602.47px");
    }
    else if ($(this).scrollTop()>998){
      $('.quest-2').addClass('fixed2');
    }
    else if($(this).scrollTop()>778){
      $('.quest-1').removeClass('fixed1');
      $('.quest-1').css("margin-top","690px")
    }

  })

  //scroll fixed end

  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollPosition);

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').mouseover(function(){
    $('.back-to-top').css('transform','translateY(5px)').css('transition','all .25s');
    $('.fa-envelope').css('color','#ffd800');

   })
   $('.back-to-top').mouseleave(function(){
    $('.back-to-top').css('transform','translateY(0px)');
    $('.fa-envelope').css('color','#fff');
   })


 
 

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  //slick slider
  $(document).ready(function(){
    $('.slick-slider').slick({
      setting-name: setting-value
    });
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);