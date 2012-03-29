(function( $ ) {
  $.fn.uglaSlide = function(options) {
  
    // Do your awesome plugin stuff here
	//First we do some CSS stuff to float the project containers
	$("#projects > .container").css({'float':'left'});
	$(this).css({'position':'absolute'});

	//and hide all but the first by shrinking the focus
	$(this).css('width',eval($('#projects > .container').length * $('#projects > .container').width())+'px');
	$(this).parent().append($("<div id='mask'></div>").css({
		'background-color': $('#projects').parent().css('background-color'),
		'width' : $('#projects > .container').width() + "px",
		'height' : $('#projects > .container').height() + "px",
		'top' : $('#projects').offset().top + 'px',
		'left' : $('#projects').offset().left + 'px',
		'position' : 'absolute',
		'z-index' : '100',
		'overflow' : 'hidden'
	}).append($(this)))

							
	options.left.bind('click',function(){
		moveleft();
		return false;
	});
	
	options.right.bind('click', function(){
		moveright();
		return false;
	});
	
	options.menu.click(function(){
		
		clickmenu(this);
		return false;
	});
  };
})( jQuery );



var submenu = 1;

var moveright = function() {
	var pos = $('#projects').position().left;
	pos = eval(pos - $('#projects > .container').width());
	
	if (pos < eval(0-eval(eval($('#projects > .container').length - 1) * $('#projects > .container').width()))){
		pos = 0;
		submenu = 1;
	}else{
		submenu += 1;	
	}
	
	$('#projects').animate({left: pos+'px'},500);
	
	$("#projectssubmenu").find(".active").toggleClass("active");
	$("#projectssubmenu").find(".item-"+submenu).toggleClass("active");;

}

var moveleft = function(){
	var pos = $('#projects').position().left;
	pos = eval(pos + $('#projects > .container').width());
	
	if (pos > 0) {
		pos = eval(0-eval(eval($('#projects > .container').length - 1) * $('#projects > .container').width()));
		submenu = 4;
	}else{
		submenu -= 1;
	}
	
	$('#projects').animate({left: pos+'px'},500);
	
	$("#projectssubmenu").find(".active").toggleClass("active");
	$("#projectssubmenu").find(".item-"+submenu).toggleClass("active");;

}


var clickmenu = function(handler){
	if ($(handler).hasClass("active")) return false;
	else{

		var sel_index	=	eval($(handler).attr('class').substring(5) - 1);
		
		var pos			=	eval(sel_index * $('#projects > .container').width());
		
		submenu			=	eval(1 + sel_index);
		
		$('#projects').animate({left: '-'+pos+'px'},500);
		
		$("#projectssubmenu").find(".active").toggleClass("active");

		$(handler).toggleClass("active");
		

	}


}