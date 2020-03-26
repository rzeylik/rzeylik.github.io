$(function(){

  $('.comments__slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    responsive: [
   {
     breakpoint: 900,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
     }
   }]
  });

  $(".menu__navigation-link").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
  });

  $(".menu__navigation-item").mouseleave(function(){
    $(this).addClass("fade-reverse");
  });

  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });

  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });

  var toggle__flag = 0;

  $('.menu__burger').click(function(){
    //$('.background-dark').css('display', 'block');
    //$('.background-dark').css('opacity', '1');
    $('.menu__navigation').animate({right: '0px'});
    setTimeout(function(){
      toggle__flag = 1;
    }, 500);
  });

  $('.menu__burger_close').click(function(){
    //$('.background-dark').css('opacity', '0');
    $('.menu__navigation').animate({right: '-200px'});
    setTimeout(function(){
      //$('.background-dark').css('display', 'none');
      toggle__flag = 0;
    }, 500);
  });

  $('.menu__navigation-link').click(function(){
    if (toggle__flag ==  1) {
      //$('.menu__burger').toggleClass('menu__burger_active');
      //$('.background-dark').css('opacity', '0');
      $('.menu__navigation').animate({right: '-200px'});
      setTimeout(function(){
        //$('.background-dark').css('display', 'none');
        toggle__flag = 0;
      }, 500);
    }

  });

});
