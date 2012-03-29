$(document).ready(function(){
	$('#projects').css('width',eval($('.container').length * $('.container').width())+'px');
							
	$('#left').bind('click',function(){
		return moveleft();
	});
	
	$('#right').bind('click', function(){
		return moveright();
	});
	
	$('#projectssubmenu li a').click(function(){
		
		return clickmenu(this);
		
	});
});

var submenu = 1;

function moveright(){
	pos = $('#projects').position().left;
	pos = eval(pos - $('.container').width());
	
	if (pos < eval(0-eval(eval($('.container').length - 1) * $('.container').width()))){
		pos = 0;
		submenu = 1;
	}else{
		submenu += 1;	
	}
	
	$('#projects').animate({left: pos+'px'},500);
	
	$("#projectssubmenu").find(".active").toggleClass("active");
	$("#projectssubmenu").find(".item-"+submenu).toggleClass("active");;
	Cufon.replace('.navi a');
	
	return false;
}

function moveleft(){
	pos = $('#projects').position().left;
		
	pos = eval(pos + $('.container').width());
	
	if (pos > 0) {
		pos = eval(0-eval(eval($('.container').length - 1) * $('.container').width()));
		submenu = 4;
	}else{
		submenu -= 1;
	}
	
	$('#projects').animate({left: pos+'px'},500);
	
	$("#projectssubmenu").find(".active").toggleClass("active");
	$("#projectssubmenu").find(".item-"+submenu).toggleClass("active");;
	Cufon.replace('.navi a');
	
	return false;
}


function clickmenu(handler){
	if ($(handler).hasClass("active")) return false;
	else{

		var sel_index	=	eval($(handler).attr('class').substring(5) - 1);
		
		var pos			=	eval(sel_index * $('.container').width());
		
		submenu			=	eval(1 + sel_index);
		
		$('#projects').animate({left: '-'+pos+'px'},500);
		
		$("#projectssubmenu").find(".active").toggleClass("active");

		$(handler).toggleClass("active");
		
		Cufon.replace('.navi a');
	}
	
	
	return false;	
}