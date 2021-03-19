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








   function collapseSection(element) {
      // get the height of the element's inner content, regardless of its actual size
      var sectionHeight = element.scrollHeight;

      // temporarily disable all css transitions
      var elementTransition = element.style.transition;
      element.style.transition = '';

      // on the next frame (as soon as the previous style change has taken effect),
      // explicitly set the element's height to its current pixel height, so we 
      // aren't transitioning out of 'auto'
      requestAnimationFrame(function () {
         element.style.height = sectionHeight + 'px';
         element.style.transition = elementTransition;

         // on the next frame (as soon as the previous style change has taken effect),
         // have the element transition to height: 0
         requestAnimationFrame(function () {
            element.style.height = 0 + 'px';
         });
      });

      // mark the section as "currently collapsed"
      element.setAttribute('data-collapsed', 'true');
   }

   function expandSection(element) {
      // get the height of the element's inner content, regardless of its actual size
      var sectionHeight = element.scrollHeight;

      // have the element transition to the height of its inner content
      element.style.height = sectionHeight + 'px';

      // when the next css transition finishes (which should be the one we just triggered)
      element.addEventListener('transitionend', function (e) {
         // remove this event listener so it only gets triggered once
         element.removeEventListener('transitionend', arguments.callee);

         // remove "height" from the element's inline styles, so it can return to its initial value
         element.style.height = null;
      });

      // mark the section as "currently not collapsed"
      element.setAttribute('data-collapsed', 'false');
   }

   // document.querySelector('#toggle-button').addEventListener('click', function (e) {
   //    var section = document.querySelector('.section.collapsible');
   //    var isCollapsed = section.getAttribute('data-collapsed') === 'true';

   //    if (isCollapsed) {
   //       expandSection(section)
   //       section.setAttribute('data-collapsed', 'false')
   //    } else {
   //       collapseSection(section)
   //    }
   // });

   const footerMenuBtns = document.querySelectorAll('.js-footer-menu-item');
   if (footerMenuBtns.length) {
      footerMenuBtns.forEach(function (el, index) {
         if (el) {
            //el.addEventListener('click', menuToggle(e, 'footer__item', 'footer__list', 'active'));

            //e.currentTarget
            //  .closest(`.${containerClassName}`)
            //  .querySelector(`.${targetClassName}`)
            //  .classList.toggle(activeClassName);
            el.addEventListener('click', function (e) {
               var section = e.currentTarget.closest('.footer__item').querySelector('.footer__list');
               var isCollapsed = section.getAttribute('data-collapsed') === 'true';

               if (isCollapsed) {
                  expandSection(section)
                  section.setAttribute('data-collapsed', 'false')
               } else {
                  collapseSection(section)
               }
            });
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