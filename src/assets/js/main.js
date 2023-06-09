//= components/jquery.min.js
//= components/slick.min.js

$(".header__slider").slick({
  infinite: true,
  fade: true,
  prevArrow:
    '<img class="slider-arrows slider-arrows__left" src="./assets/images/icons/arrows-left.svg" alt=""></img>',
  nextArrow:
    '<img class="slider-arrows slider-arrows__right" src="./assets/images/icons/arrows-right.svg" alt=""></img>',
  asNavFor: ".slider-dotshead",
});

$(".slider-dotshead").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  asNavFor: ".header__slider",
});

$(".surf-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:
    '<img class="slider-arrows slider-arrows__left" src="./assets/images/icons/arrows-left.svg" alt=""></img>',
  nextArrow:
    '<img class="slider-arrows slider-arrows__right" src="./assets/images/icons/arrows-right.svg" alt=""></img>',
  asNavFor: ".slider-map",
});

$(".slider-map").slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".surf-slider",
  focusOnSelect: true,
});

$(".travel__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  prevArrow:
    '<img class="slider-arrows slider-arrows__left" src="./assets/images/icons/arrows-left.svg" alt=""></img>',
  nextArrow:
    '<img class="slider-arrows slider-arrows__right" src="./assets/images/icons/arrows-right.svg" alt=""></img>',
});
