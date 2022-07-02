$(document).ready(function() {
  $('.header__menu-button').click(function() {
      $('.menu').toggleClass('menu_open', 500);
      $(this).toggleClass('header_open');
      $('.header__menu-button-wrapper').toggleClass('header__menu-button-wrapper_open');
      $('.header__top').toggleClass('header__top_open');
    });
});

  // $('.portfolio__in-detail-wrapper').hover(function() {
  //   $(this).siblings('portfolio__in-detail-wrapper_hover').removeClass('portfolio__in-detail-wrapper_hover');
  //   $(this).addClass('portfolio__in-detail-wrapper_hover');
  // });

//   $('.portfolio__in-detail-wrapper').hover(function() {
//     console.log("There is hover!");
//     $(this).addClass('portfolio__in-detail-wrapper_hover');
//     $(this).removeClass('blue');
// });

$(document).ready(function() {
  $('.portfolio__in-detail-wrapper').hover(function() {
    if($(this).hasClass('portfolio__in-detail-wrapper_hover')) {
      $(this).removeClass('portfolio__in-detail-wrapper_hover');
    } else {
      $(this).addClass('portfolio__in-detail-wrapper_hover');
    }
  });
});

// $(document).ready(function() {
//   $('body').animate({
//       scrollTop: 0
//   }, 800);
//   $('.footer__link-backtotop').click(function() {
//       $('body,html').animate({
//           scrollTop: 0
//       }, 800);
//       return false;
//   });
// });

$(document).ready(function() {
  // handle links with @href started with '#' only
  $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({
      scrollTop: pos
    }, 1000);
  });
});

// var arrLang = {
//   'ua': {
//     'about__me': 'Про мене',
//     'skills': 'Навички',
//     'portfolio': 'Портфоліо',
//     'contact__me': 'Зв\'яжіться зі мною'
//   },
//   'en': {
//     'about__me': 'About me',
//     'skills': 'Skills',
//     'portfolio': 'Portfolio',
//     'contact__me': 'CONTACT ME',
//     'name': "ENTER YOUR NAME*",
//   },
// }

// $(document).ready(function() {
//   $(function() {
//     $('.menu__lang-link').click(function() {
//       var lang = $(this).attr('id');

//       $('.lang').each(function(index, item) {
//         $(this).text(arrLang[lang][$(this).attr('key')]);
//       });
//     });
//   });
// });