$(document).ready(function(){
  $('.slick-slider--big').slick({
    arrows: false,
    speed: 1000,
    initialSlide: 1,
    fade: true,
    asNavFor: ".slick-slider--min"
  });
});

$(document).ready(function(){
  $('.slick-slider--min').slick({
    arrows: true,
    slidesToShow: 3,
    speed: 1000,
    initialSlide: 1,
    centerMode: true,
    variableWidth: true,
    asNavFor: ".slick-slider--big"
  });
});
