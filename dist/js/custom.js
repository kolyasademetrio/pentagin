document.addEventListener('DOMContentLoaded', function (e) {
   function menuToggle(e, containerClassName, targetClassName, activeClassName) {
      return function (e) {
         e.currentTarget
            .closest(`.${containerClassName}`)
            .querySelector(`.${targetClassName}`)
            .classList.toggle(activeClassName);
      }
   }


   const headerMenuBtn = document.querySelector('.js-header-menu-btn');
   if (headerMenuBtn.length) {
      headerMenuBtn.addEventListener('click', menuToggle(e, 'header', 'header__menu', 'active'));
   }


   const footerMenuBtns = document.querySelectorAll('.js-footer-menu-item');
   if (footerMenuBtns.length) {
      footerMenuBtns.forEach(function (el, index) {
         if (el) {
            el.addEventListener('click', menuToggle(e, 'footer__item', 'footer__list', 'active'));
         }
      });
   }

});

$(document).ready(function () {
   if ( $('.js-slider-main').length ) {
      $('.js-slider-main').slick({
         centerMode: true,
         centerPadding: '30px',
         slidesToShow: 4,
         slidesToScroll: 1,
         infinite: true,
         cssEase: 'linear',
         prevArrow: "<button type='button' class='mfp-arrow mfp-arrow-left mfp-prevent-close'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
         nextArrow: "<button type='button' class='mfp-arrow mfp-arrow-right mfp-prevent-close'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
         responsive: [
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
               }
            },
            {
               breakpoint: 1024,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
               }
            },
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: '30px',
               }
            },
            {
               breakpoint: 480,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: '30px',
               }
            }
         ]
      });
   }

   if ( $('.js-slider-good').length && $('.js-slider-good-nav').length ) {
      $('.js-slider-good').slick({
         centerMode: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         fade: true,
         cssEase: 'linear',
         arrows: false,
         prevArrow: "<button type='button' class='mfp-arrow mfp-arrow-left mfp-prevent-close'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
         nextArrow: "<button type='button' class='mfp-arrow mfp-arrow-right mfp-prevent-close'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      });

      $('.js-slider-good-nav').slick({
         centerMode: false,
         slidesToShow: 2,
         slidesToScroll: 2,
         cssEase: 'linear',
         asNavFor: '.js-slider-good',
         focusOnSelect: true,
         vertical: true,
         centerPadding: '30px',
         arrows: false,
      });
   }
   

   // $('#tokenfield').tokenfield({
   //    autocomplete: {
   //      source: ['red','blue','green','yellow','violet','brown','purple','black','white'],
   //      delay: 100
   //    },
   //    showAutocompleteOnFocus: true,
   //    el: $('.keywords'),
   //  })

    var word_arrays = [
      {text: "#beergick", weight: 18, link: 'http://github.com/mistic100/jQCloud', html: {class: "category credit"}},
      {text: "#titicat", weight: 15, link: 'http://github.com/mistic100/jQCloud', html: {class: "category credit"}},
      {text: "#bigpick", weight: 15, link: 'http://github.com/mistic100/jQCloud', html: {class: "category credit"}},
      {text: "#chaka", weight: 16, link: 'http://github.com/mistic100/jQCloud', html: {class: "category credit"}},
      {text: "#femen power", weight: 22, link: 'http://github.com/mistic100/jQCloud', html: {class: "category credit"}},
      {text: "#assault", weight: 16, link: 'http://github.com/mistic100/jQCloud', html: {class: "category card"}},
    ];
   //http://mistic100.github.io/jQCloud/demo.html
    $(".words-cloud").jQCloud(word_arrays, {
      // width: 500,
      height: 130,
      autoResize: true,
      afterCloudRender: function() {
      //   $('.words-cloud > span').on('click', function(e){
      //     e.preventDefault();
      //     console.log(e.target.innerHTML);
      //     $('.detailed-tags').prepend("<div class='tag'>" + e.target.innerHTML + "</div>")
      //   });
      }
    });

    if ( $('.filters__item_selectric .filters__select').length ) {
       $('.filters__item_selectric .filters__select').selectric();
    }


});