$(document).ready(function(){
    $('.slider').slick({
        prevArrow: '<span class="prev_arrow">BACK</i></span>',
        nextArrow: '<span class="next_arrow">NEXT</span>',
    });


    // responsive menu slick
    $('.menu-slide').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        edgeFriction:0.5,
        prevArrow: '<span class="prev_arrow">BACK</i></span>',
        nextArrow: '<span class="next_arrow">NEXT</span>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
        
      });
  });


  