//= components/jquery.min.js
//= components/slick.min.js

$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./assets/images/icons/arrows-left.svg" alt=""></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="./assets/images/icons/arrows-right.svg" alt=""></img>',
    asNavFor: ".slider-dots",
  });

  $(".slider-dots").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
  });
});
