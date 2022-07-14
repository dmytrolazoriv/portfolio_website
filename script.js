$(document).ready(function() {
  $('.header__menu-button').click(function() {
      $('.menu').toggleClass('menu_open', 500);
      $(this).toggleClass('header_open');
      $('.header__menu-button-wrapper').toggleClass;
      $('.header__menu-button-wrapper_open');
      $('.header__social-menu').css('margin-bottom', '120px');
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
      $('.portfolio__in-detail-wrapper').css('background-color', 'rgba(0, 0, 0, .8)');
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


$(document).ready(function() {
  if ($('html').attr('lang' === defaultLang)) {
     $('html').attr('lang', 'en');
   } else {
     $('html').attr('lang', defaultLang);
   }
 });


// menu start
if ($('#language-selected').is(':empty')){
  $( ".menu-dropdown li" ).each(function() {
    if($(this).attr('class') == 'selected'){
      var selected = $(this).find('.lang-code').html().toUpperCase();
        console.log($(this).find('.lang-code').html().toUpperCase());
        $("#language-selected").html(selected);
    }
  });
}

// The next following line displays and set selected language
  $(".dropdownbox").click(function() {
  $(".menu-dropdown").toggleClass("showMenu");
    $(".menu-dropdown > li").click(function() {
      var selected = $(this).find('.lang-code').html().toUpperCase();
      console.log($(this).find('.lang-code').html().toUpperCase());
      $("#language-selected").html(selected);
        var changeText = function(e) {
        var langSel = $("#language-selected");
        var textToRep = langSel.text();
        var newTextUa = textToRep.replace("УКР&#9660;", "УКР&nbsp;&#9660;");
        var newTextEn = textToRep.replace("ENG&#9660;", "ENG&nbsp;&#9660;");
        langSel.text(newTextUa);
        langSel.text(newTextEn);
      };
      if ($("#language-selected:contains('ENG&#9660;')")) {
        $("#language-selected").click(function() {
          $("#language-selected").text(newTextEn);
        });
      } else if ($("#language-selected:contains('УКР&#9660;')")) {
        $("#language-selected").click(function() {
          $("#language-selected").text(newTextUa);
        });
      }
      $(".menu-dropdown").removeClass("showMenu");	        
      });
  });

  // Close language select box if nothing is selected
  $("#dropdown-wrapper").mouseleave(function() {
    $(".menu-dropdown").removeClass("showMenu");
  });
// menu end

$(document).ready(function() {
    $.validator.addMethod( "lettersonly", function(value, element) {
      return this.optional(element) || /[А-Я][а-яєі]+/g.test(value);
    }, "Letters only please." );

    $.validator.addMethod("phoneUA", function( phone_number, element ) {
    phone_number = phone_number.replace(/\s+/g, "");
    return this.optional(element ) || phone_number.length > 9 &&
      phone_number.match(/^\+?3?8?(0[\s\.-]\d{2}[\s\.-]\d{3}[\s\.-]\d{2}[\s\.-]\d{2})$/);
    }, "Please specify a valid phone number.");

    $("#contacts__form").validate({
      rules: {
          contacts__name: {
            required: true,
            lettersonly: true,
            minlength: 10
          },
          contacts__email: {
            required: true,
            email: true
          },
          contacts__phone: {
            required: true,
            phoneUA: true
          },
          contacts__message: {
            required: true,
            minlength: 20
          }
      },
      messages: {
          contacts__name: {
            required: "Будь ласка, введіть ваше ім'я та прізвище.",
            lettersonly: "Ім'я та прізвище має містити тільки букви",
            minlength: "Ваше ім'я та прізвище має складатися щонайменше з 10 символів."
          },
          contacts__email: {
            required: "Будь ласка, введіть адресу електронної пошти.",
            email: "Будь ласка, введіть дійсну адресу електронної пошти.",
          },
          contacts__phone: {
            required: "Будь ласка, вкажіть номер телефону.",
            phoneUA: "Введіть номер телефону у форматі: +380-XX-XXX-XX-XX."
          },
          contacts__message: {
            required: "Будь ласка, залиште своє повідомлення.",
            minlength: "Ваше повідомлення має містити принаймні 10 символів."
          }
      }
    });
});

// == NEW FORM FOR VALIDATION START ==
$('#contacts__form').on('submit', function(event) {
  event.preventDefault(); // prevent reload
  if ($('#contacts__form').valid()) {
      var formData = new FormData(this);
      formData.append('service_id', 'service_rjl8246');
      formData.append('template_id', 'template_mmgg66s');
      formData.append('user_id', 'znFcw9hJrkZa2nhWl');
      // formData.append('parameters', parameters);

      $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
          type: 'POST',
          data: formData,
          contentType: false, // auto-detection
          processData: false // no need to parse formData to string
      }).done(function() {
          $("#contacts__form").validate().resetForm();
          $('.modal__forms').addClass('show__forms fade__forms');
          $('.modal__backdrop').addClass('show__backdrop');
          $('.modal__btn-close').on('click', function(e) {
              e.preventDefault();
              $('.modal__forms').removeClass('show__forms fade__forms');
              $('.modal__backdrop').removeClass('show__backdrop fade__backdrop');
            });
          // var para = $('.contacts__contacts-para');
          // para.html('Повідомлення відправлено. Дякую!'
          // + '<br>' + 'Я зв\'яжусь з вами найближчим часом.');
      }).fail(function(error) {
          alert('Щось пішло не так... ' + JSON.stringify(error));
      });
  }

  });
// == NEW FORM FOR VALIDATION END ==