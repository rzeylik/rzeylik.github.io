$(function(){
  $(".scroll-link").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
  });
  var flag = 0;
  $(".menu_burger, .menu_text").click(function (event) {
      $(".menu_right").fadeToggle(1000);
      if (flag == 0) {
        $(".menu_burger").addClass('active');
        flag++;
      } else {
        $(".menu_burger").removeClass('active');
        flag--;
      }
  });
});
