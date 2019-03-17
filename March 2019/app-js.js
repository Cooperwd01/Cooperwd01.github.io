function hover(element) {
  element.setAttribute('src', 'images/the-jokes.jpg');
}

function unhover(element) {
  element.setAttribute('src', 'images/the-jerks.jpg');
}

 /*$(function(){
  $(window).on('load scroll resize orientationchange', function () {
          if($(this).scrollTop() > 10) { 
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
          if($(this).scrollTop() > 10) { 
              $('.nav-link').addClass('nav-scroll');
          } else {
              $('.nav-link').removeClass('nav-scroll');
          }
          if($(this).scrollTop() > 10) { 
              $('.nav-item').addClass('scroll-text');
          } else {
              $('.nav-item').removeClass('scroll-text');
          }
          if($(this).scrollTop() > 10) { 
              $('.nav-img').attr('src', 'images/mouse-green.png');
          } else {
              $('.nav-img').attr('src', 'images/mouse-white.png');
          }
        });
});*/