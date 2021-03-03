$(document).ready(function(){
    $("#sofabtn").click(function(){
        $(".sofa").show('slow');
        $(".hoga").hide('slow');
        $(".light").hide('slow');
        $(".furnituree").hide('slow');

    });

    $("#allbtn").click(function(){
        $(".sofa").show('slow');
        $(".hoga").show('slow');
        $(".light").show('slow');
        $(".furnituree").show('slow');

    });

    $("#lightbtn").click(function(){
        $(".sofa").hide('slow');
        $(".hoga").hide('slow');
        $(".light").show('slow');
        $(".furnituree").hide('slow');
    });

    $("#furnbtn").click(function(){
        $(".sofa").hide('slow');
        $(".hoga").hide('slow');
        $(".light").hide('slow');
        $(".furnituree").show('slow');
    });
})

$(function(){   
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        prevArrow: '<span class="prev_arrow">BACK</span>',
        nextArrow: '<span class="next_arrow">NEXT</span>',
    });

    $('.slider1').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        
        prevArrow: '<span class="prev_arrow">BACK</span>',
        nextArrow: '<span class="next_arrow">NEXT</span>',
    });

    
});

