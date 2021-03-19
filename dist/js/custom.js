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
});

$(document).ready(function () {
   $('.js-slider-main').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      cssEase: 'linear'
   });
});