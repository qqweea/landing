var trainers = new Swiper('.trainers__slider', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var video__slider = new Swiper('.video__slider', {
  slidesPerView: 3,
  spaceBetween: 50,
  initialSlide: 1,
  centeredSlides: true,
  autoheight: true,
  slideToClickedSlide: true,
  on:  {
    transitionEnd: function () {
      this.pagination.update();
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});


  function reinit() {
    trainers.init();
  }

  document.addEventListener("resize", reinit, false);

  $('.trainers__slider').on('mouseenter', function(e){
    trainers.autoplay.stop();
  })
  $('.trainers__slider').on('mouseleave', function(e){
    trainers.autoplay.start();
  })
