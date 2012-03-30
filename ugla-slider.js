(function( $ ) {
  var submenu = 1;

  $.fn.uglaSlide = function(options) {
  	var $self = $(this);
	$self.css({
		'-webkit-transition': 'all 0.5s ease-in-out',
	    '-moz-transition': 'all 0.5s ease-in-out',
	    '-o-transition': 'all 0.5s ease-in-out',
	    '-ms-transition': 'all 0.5s ease-in-out'
	});

    // Do your awesome plugin stuff here
	//First we do some CSS stuff to float the project containers
	$self.find('.container').css({'float':'left'});
	$(this).css({'position':'absolute'});

	//and hide all but the first by overlapping an absolute positioned "mask" width the size of one .container
	$(this).css('width',eval($self.find('.container').length * $self.find('.container').width())+'px');
	
	$(this).parent().append($("<div id='mask'></div>").css({
		'background-color': $self.parent().css('background-color'),
		'top' : $self.offset().top + 'px',
		'left' : $self.offset().left + 'px',
		'position' : 'absolute',
		'z-index' : '100',
		'overflow' : 'hidden'
	}).append($(this)));

	//somehow the correct width and height is not available while appending the "mask" so we rescale it afterwards...
	$('#mask').css({
		'width' : $self.find('.container').width() + "px",
		'height' : $self.find('.container').height() + "px",
	});
							
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
	
	var moveright = function() {
		var pos = $self.position().left;
		pos = eval(pos - $self.find('.container').width());

		if (pos < eval(0-eval(eval($self.find('.container').length - 1) * $self.find('.container').width()))){
			pos = 0;
			submenu = 1;
		}else{
			submenu += 1;	
		}

		$self.css({
			'-webkit-transform':'translateX('+pos+'px)',
			'-moz-transform':'translateX('+pos+'px)',
			'-ms-transform':'translateX('+pos+'px)',	
			'-o-transform':'translateX('+pos+'px)'
		});

		$("#projectssubmenu").find(".active").toggleClass("active");
		$("#projectssubmenu").find(".item-"+submenu).toggleClass("active");

	}

	var moveleft = function(){
		var pos = $self.position().left;
		pos = eval(pos + $self.find('.container').width());

		if (pos > 0) {
			pos = eval(0-eval(eval($self.find('.container').length - 1) * $self.find('.container').width()));
			submenu = 4;
		}else{
			submenu -= 1;
		}

		$self.css({
			'-webkit-transform':'translateX('+pos+'px)',
			'-moz-transform':'translateX('+pos+'px)',
			'-ms-transform':'translateX('+pos+'px)',	
			'-o-transform':'translateX('+pos+'px)'
		});

		$("#projectssubmenu").find(".active").toggleClass("active");
		$("#projectssubmenu").find(".item-"+submenu).toggleClass("active");

	}


	var clickmenu = function(handler){
		if ($(handler).hasClass("active")) return false;
		else{

			var sel_index	=	eval($(handler).attr('class').substring(5) - 1);

			var pos			=	eval(sel_index * $self.find('.container').width());

			submenu			=	eval(1 + sel_index);

			$self.animate({left: '-'+pos+'px'},500);

			$("#projectssubmenu").find(".active").toggleClass("active");

			$(handler).toggleClass("active");


		}


	}	
	
  };



})( jQuery );





