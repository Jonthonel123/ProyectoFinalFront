// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });

  // Or with jQuery
 
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  $(document).ready(function(){
    $('.slider').slider();
    $('.parallax').parallax();
  });
  let carousel = document.querySelector(".carousel");
  let fli = new Flickity(carousel, { wrapAround: true,autoPlay: true });
