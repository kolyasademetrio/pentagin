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
   $('.js-slider-main').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      cssEase: 'linear',
      prevArrow: "<button type='button' class='mfp-arrow mfp-arrow-left mfp-prevent-close'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='mfp-arrow mfp-arrow-right mfp-prevent-close'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [
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
               centerPadding: '0px',
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               centerMode: true,
               centerPadding: '0px',
            }
         }
      ]
   });

   $('#tokenfield').tokenfield({
      autocomplete: {
        source: ['red','blue','green','yellow','violet','brown','purple','black','white'],
        delay: 100
      },
      showAutocompleteOnFocus: true,
      el: $('.keywords'),
    })

    var word_arrays = [
      {text: "#lost credit card", weight: 20, link: 'http://github.com/mistic100/jQCloud', html: {class: "category credit"}},
      {text: "#credit limit", weight: 10.5, link: 'http://github.com/mistic100/jQCloud', html: {class: "category credit"}},
      {text: "#news credit card", weight: 9.4, link: 'http://github.com/mistic100/jQCloud', html: {class: "category credit"}},
      {text: "#credit card fees", weight: 8, link: 'http://github.com/mistic100/jQCloud', html: {class: "category credit"}},
      {text: "#credit card stolen", weight: 7.5, link: 'http://github.com/mistic100/jQCloud', html: {class: "category credit"}},
      {text: "#credit card", weight: 40, link: 'http://github.com/mistic100/jQCloud', html: {class: "category card"}},
      {text: "#card", weight: 6.8, link: 'http://github.com/mistic100/jQCloud', html: {class: "category card"}},
      {text: "#debit card", weight: 6.1, link: 'http://github.com/mistic100/jQCloud', html: {class: "category card"}},
      {text: "#card charges", weight: 15, link: 'http://github.com/mistic100/jQCloud', html: {class: "category card"}},
      {text: "#new card", weight: 3, link: 'http://github.com/mistic100/jQCloud', html: {class: "category card"}},
      {text: "#avoid fees", weight: 30, link: 'http://github.com/mistic100/jQCloud', html: {class: "category fees"}},
      {text: "#banking fees", weight: 2.8, link: 'http://github.com/mistic100/jQCloud', html: {class: "category fees"}},
      {text: "#withdraw fees", weight: 1.75, link: 'http://github.com/mistic100/jQCloud', html: {class: "category fees"}},
      {text: "#deposit fees", weight: 4, link: 'http://github.com/mistic100/jQCloud', html: {class: "category fees"}},
      {text: "#card fees", weight: 16, link: 'http://github.com/mistic100/jQCloud', html: {class: "category fees"}},
      {text: "#withdraw money", weight: 70, link: 'http://github.com/mistic100/jQCloud', html: {class: "category money"}},
      {text: "#deposit money", weight: 1, link: 'http://github.com/mistic100/jQCloud', html: {class: "category money"}},
      {text: "#lodge money", weight: 9, link: 'http://github.com/mistic100/jQCloud', html: {class: "category money"}},
      {text: "#saving money", weight: 4, link: 'http://github.com/mistic100/jQCloud', html: {class: "category money"}},
      {text: "#money security", weight: 12, link: 'http://github.com/mistic100/jQCloud', html: {class: "category money"}},
      {text: "#atm withdraw", weight: 30, link: 'http://github.com/mistic100/jQCloud', html: {class: "category withdraw"}},
      {text: "#withdraw money", weight: 7, link: 'http://github.com/mistic100/jQCloud', html: {class: "category withdraw"}},
      {text: "#card card withdraw", weight: 3, link: 'http://github.com/mistic100/jQCloud', html: {class: "category withdraw"}},
      {text: "#debit card withdraw", weight: 4, link: 'http://github.com/mistic100/jQCloud', html: {class: "category withdraw"}},
      {text: "#withdraw", weight: 9.1, link: 'http://github.com/mistic100/jQCloud', html: {class: "category withdraw"}},
    ];
   //http://mistic100.github.io/jQCloud/demo.html
  
    $(".words-cloud").jQCloud(word_arrays, {
      // width: 500,
      height: 350,
      autoResize: true,
      afterCloudRender: function() {
      //   $('.words-cloud > span').on('click', function(e){
      //     e.preventDefault();
      //     console.log(e.target.innerHTML);
      //     $('.detailed-tags').prepend("<div class='tag'>" + e.target.innerHTML + "</div>")
      //   });
      }
    });
});