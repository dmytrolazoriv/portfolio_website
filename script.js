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


// form start
// $(document).ready(function() { 
//   // bind 'myForm' and provide a simple callback function 
//   $('.contacts__form').ajaxForm(function() { 
//       alert("Thank you for your comment!"); 
//   }); 
// });
// form end

// Submitting a form start
window.onload = function() {
  document.getElementById('contacts__form').addEventListener('submit', function(event) {
      event.preventDefault();
      const parameters = {
          contacts__name: document.getElementById("contacts__name").value,
          contacts__email: document.getElementById("contacts__email").value,
          contacts__phone: document.getElementById("contacts__phone").value,
          contacts__message: document.getElementById("contacts__message").value
      }
      emailjs.send('service_rjl8246', 'template_mmgg66s', parameters)
          .then(function(response) {
              alert('Дякую! Ваше повідомлення відправлено!');
          }, function(error) {
            alert('Щось пішло не так...');
          });
  });
}
// Submitting a form end