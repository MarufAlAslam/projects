

$(document).ready(function(){

    AOS.init();

var counter=0;
    $(".navbar-toggler").click(function(){
        
        if(counter%2==0){
            $(".navbar-toggler").css("transition","all 1s ease");
        $(".navbar-toggler").css("transform","rotate(180deg)");
            $("#nav").slideDown('slow');
        }
        else{
            $(".navbar-toggler").css("transition","all 1s ease");
             $(".navbar-toggler").css("transform","rotate(-0deg)");
            $("#nav").slideUp('slow');
        }
        counter++;
    });


    $("#tabBtn1").click(function(){
        $("#tab1").show('slow');
        $("#tab2").hide('slow');
        $("#tab3").hide('slow');

        $("#tabBtn1").css("background","#ff8b38",'slow');
        $("#tabBtn2").css("background","#333333",'slow');
        $("#tabBtn3").css("background","#333333",'slow');
        
    });
    $("#tabBtn2").click(function(){
        $("#tab1").hide('slow');
        $("#tab2").show('slow');
        $("#tab3").hide('slow');

        $("#tabBtn1").css("background","#333333",'slow');
        $("#tabBtn3").css("background","#333333",'slow')
        $("#tabBtn2").css("background","#ff8b38",'slow')
    });

    $("#tabBtn3").click(function(){
        $("#tab1").hide('slow');
        $("#tab2").hide('slow');
        $("#tab3").show('slow');

        
        $("#tabBtn2").css("background","#333333",'slow');
        $("#tabBtn1").css("background","#333333",'slow')
        $("#tabBtn3").css("background","#ff8b38",'slow')
    });

    $(".cardone").mouseenter(function(){
        $(".hidden-button").slideDown('slow');
    });
    
    $(".cardone").mouseleave(function(){
        $(".hidden-button").slideUp('slow');
    });


    $(".cardtwo").mouseenter(function(){
        $(".hidden-button1").slideDown('slow');
    });
    
    $(".cardtwo").mouseleave(function(){
        $(".hidden-button1").slideUp('slow');
    });


    $(".cardthree").mouseenter(function(){
        $(".hidden-button2").slideDown('slow');
    });
    
    $(".cardthree").mouseleave(function(){
        $(".hidden-button2").slideUp('slow');
    });
    


    // form validation
    // name check
    function NameCheck(){
        var val = $('#name').val();
    
        // regex
        var reg = /^[a-z A-Z, .'-]{3,15}$/;
    
        if(reg.test(val)){
            $('.reg-error').html('<span style="color:green">Success</span>');
        }
        else{
            $('.reg-error').text("invalid");
            $('#name').css("border","red")
        }
    }
    
    // mail check
    function MailCheck(){
        var val = $('#mail').val();
    
        // regex
        var reg = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    
        if(reg.test(val)){
            $('.reg-error').html('<span style="color:green">Success</span>');
        }
        else{
            $('.reg-error').text("invalid");
            $('#mail').css("border","red")
        }
    }

    // password check
    function PassCheck(){
        var val = $('#password').val();
    
        // regex
        var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
    
        if(reg.test(val)){
            $('.reg-error').html('<span style="color:green">Success</span>');
        }
        else{
            $('.reg-error').text("Password must be 4-8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.");
            $('#password').css("border","red")
        }
    }

    $("#name").keyup(function(){
        NameCheck();
    });
    $("#mail").keyup(function(){
        MailCheck();
    });
    $("#password").keyup(function(){
        PassCheck();
    });




    // contact form validation
    // name check
    function ContactNameCheck(){
        var val = $('#contact-name').val();
    
        // regex
        var reg = /^[a-z A-Z, .'-]{3,15}$/;
    
        if(reg.test(val)){
            $('.contact-error').html('<span style="color:green">Success</span>');
        }
        else{
            $('.contact-error').text("invalid");
           
        }
    }
    
    // mail check
    function ContactMailCheck(){
        var val = $('#contact-mail').val();
    
        // regex
        var reg = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    
        if(reg.test(val)){
            $('.contact-error').html('<span style="color:green">Success</span>');
        }
        else{
            $('.contact-error').text("invalid");
            
        }
    }

    $("#contact-name").keyup(function(){
        ContactNameCheck();
    });
    $("#contact-mail").keyup(function(){
        ContactMailCheck();
    });

    // back to top button
$(window).scroll(function(){
    if($(this).scrollTop()>300){
        $("#upbtn").fadeIn();
    }
    else{
        $("#upbtn").fadeOut();
    }
});

$("#upbtn").click(function(){
    $("html,body").animate({scrollTop:0},1000);
});

// $("#featuresbtn").click(function(){
//     $("#feat").animate({
//         top:0px
//     });
// })
});


