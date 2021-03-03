$(document).ready(function(){
    $("#home").mouseenter(function(){
        $("#homemenu").show(150);
    });
    $("#homemenu").mouseleave(function(){
        $("#homemenu").hide(150);
    });

    $(".banner").mouseenter(function(){
        $("#homemenu").hide(150);
    });
});