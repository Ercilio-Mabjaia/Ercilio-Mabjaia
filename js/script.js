(function ($) {

  "use strict";


  var initChocolat = function () {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }


  $(document).ready(function () {


    $(".hover").mouseleave(
      function () {
        $(this).removeClass("hover");
      }
    );

    var swiper = new Swiper(".testimonial-swiper", {
      slidesPerView: 2,
      spaceBetween: 40,
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {

        390: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        450: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }


    });


    AOS.init({
      duration: 600,
      once: true,
    })



    window.addEventListener("load", (event) => {
      $('.isotope-container').isotope({
        itemSelector: '.item',
        layoutMode: 'masonry'
      });



      var $container = $('.isotope-container').isotope({
        itemSelector: '.item',
        layoutMode: 'masonry'
      });

      $(document).ready(function () {
        $('.filter-button').click(function () {
          $('.filter-button').removeClass('active');
          $(this).addClass('active');
        });
      });

      $('.filter-button').click(function () {
        var filterValue = $(this).attr('data-filter');
        if (filterValue === '*') {
          $container.isotope({ filter: '*' });
        } else {
          $container.isotope({ filter: filterValue });
        }
      });

    });


    initChocolat();


  });



})(jQuery);