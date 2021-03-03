$(function(){   
    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        
        prevArrow: '<span class="prev_arrow"><i class="fas fa-2x fa-angle-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-2x fa-angle-right"></i></span>',
    });

    $('.slider1').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        prevArrow: '<span class="prev_arrow"><i class="fas fa-2x fa-angle-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-2x fa-angle-right"></i></span>',
    });

    $('.slider2').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        
        prevArrow: '<span class="prev_arrow"><i class="fas fa-2x fa-angle-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-2x fa-angle-right"></i></span>',
    });
});