function hover(element) {
  element.setAttribute('src', 'images/the-jokes.jpg');
}

function unhover(element) {
  element.setAttribute('src', 'images/the-jerks.jpg');
}


// Change nav bar on scroll
/* $(function(){
  $(window).on('load scroll resize orientationchange', function () {
          // checks if window is scrolled more than 500px, adds/removes solid class
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