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
   if (headerMenuBtn) {
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
      slidesToShow: 3,
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
});