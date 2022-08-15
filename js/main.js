$(function() {
  
  $('.features__item-title').on('click', function(){
        
    $('.features__item').removeClass('features__item--active');
    $(this).parent().addClass('features__item--active');
  
  });

  $('.carousel__items').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.menu__btn').on('click', function(){
    $('.menu').toggleClass('menu--active')
  });

});