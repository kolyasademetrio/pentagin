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