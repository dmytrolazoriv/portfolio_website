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

var lang = new Lang();

lang.dynamic('en', 'langpack/en.json');
lang.dynamic('ua', 'langpack/ua.json');

lang.init({
  defaultLang: 'ua'
});

// $(document).ready(function() {
//   if ($('html').attr('lang' === 'ua')) {
//     $('html').attr('lang', 'en');
//   } else {
//     $('html').attr('lang', 'ua');
//   }
// });