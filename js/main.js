$(document).ready(main);

var contador = true;

function main(){
	//Mostrar y ocultar menu
	$('.menu_bar').click(function(){
		if (contador == true) {
			$('nav').animate({
				left: '0'
			});
			contador = false;
		}else{
			contador = true;
			$('nav').animate({
				left: '-100%'
			});
		}
	}); //End

	// Prevenir error
	$(".icon-menu").click(function(e) {
		e.preventDefault();
	});

	$(".menu_bar").click(function(e) {
		e.preventDefault();
	}); //End	

	//Mostrar y ocultar submenus
	$('.submenu').click(function() {
		$(this).children('.children').slideToggle();
	});//End
}