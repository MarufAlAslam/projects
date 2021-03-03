
$(document).ready(function(){
	// fadeIn() for smoth loading
	$(".menu-container").fadeIn();
	
	
	$(".menu-container .manu ul li:has(ul)").children("ul").not("ul li ul li ul").addClass("have_dropdown");
	
	//Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu
	$(".menu-container .manu ul li ul:has(li ul li)").removeClass("have_dropdown").addClass("have_dropdown_n_style");
	
	 //Checks if li has sub (ul) and adds class for toggle icon 
	$(".menu-container .manu ul li:has('ul')").children("a").not(".manu ul li ul li a").append("<span class='drop_down_icon fa fa-angle-down'></span>");
	
	
	if ($(window).width() < 756) {
		//If width is less or equal to 943px dropdowns are displayed on click
		$(".menu-container .manu ul li a").not("ul li ul li a").click(function(){
			$(this).removeAttr("href");
		});
         $(".menu-container .manu ul li").click(function(){
			$(this).children(".have_dropdown").not(".have_dropdown li a").slideToggle(100);
		});

		$(".menu-container .manu ul li").click(function(){
			$(this).children(".have_dropdown_n_style").not(".have_dropdown_n_style li a").slideToggle(100);
		}); 
		
		//================================================================
		
		$(".nav_menu_toggler_icon").click(function(){
			$(".menu-container .manu").slideToggle();
		});
		
     }else{
		
		//If width is more than 756px dropdowns are displayed on hover
		 
		$(".menu-container .manu ul li").hover(function(){
			$(this).children(".have_dropdown").not(".have_dropdown li a").slideDown(100);
		},function(){
			$(this).children(".have_dropdown").not(".have_dropdown li a").slideUp(100);
		});

		$(".menu-container .manu ul li").hover(function(){
			$(this).children(".have_dropdown_n_style").not(".have_dropdown_n_style li a").slideDown(100);
		},function(){
			$(this).children(".have_dropdown_n_style").not(".have_dropdown_n_style li a").slideUp(100);
		}); 
	 }
});