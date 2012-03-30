(function( $ ) {
  var submenu = 1;

  $.fn.uglaSlide = function(opts) {
  	var $self = $(this);

	if ((typeof opts == "undefined" || typeof opts.right == "undefined") && !$(".slider.right").length)
		$($self[0]).parent().prepend($("<a class='slider right' href='#'>&gt;&gt;</a>"));
	
	if ((typeof opts == "undefined" || typeof opts.left == "undefined") && !$(".slider.left").length)
		$($self[0]).parent().prepend($("<a class='slider left' href='#'>&lt;&lt;</a>"));
		

	// default configuration  
    var config = $.extend({}, {  
        left: $(".slider.left"),
  		right: $(".slider.right"),
		menu: null
    }, opts);

	$self.css({
		'-webkit-transition': 'all 0.5s ease-in-out',
		'-moz-transition': 'all 0.5s ease-in-out',
		'-o-transition': 'all 0.5s ease-in-out',
		'-ms-transition': 'all 0.5s ease-in-out'
	});

    // Do your awesome plugin stuff here
	//First we do some CSS stuff to float the project containers
	$self.find('.container').css({'float':'left'});
	$self.css({'position':'absolute'});


	$self.each(function(){
		//and hide all but the first by overlapping an absolute positioned "mask" width the size of one .container
		$(this).css('width',eval($(this).find('.container').length * $(this).find('.container').outerWidth())+'px');
		$(this).parent().append($("<div class='mask'></div>").css({
			'background-color': $self.parent().css('background-color'),
			'top' : $self.offset().top + 'px',
			'left' : $self.offset().left + 'px',
			'position' : 'relative',
			'z-index' : '100',
			'overflow' : 'hidden'
		}).append($(this)));
	});


	//somehow the correct width and height is not available while appending the "mask" so we rescale it afterwards...
	$('.mask').css({
		'width' : $self.find('.container').outerWidth() + "px",
		'height' : $self.find('.container').outerHeight() + "px",
	});
							
	config.left.bind('click',function(){
		moveleft();
		return false;
	});
	
	config.right.bind('click', function(){
		moveright();
		return false;
	});
	
	if (config.menu != null){
		config.menu.click(function(){
		
			clickmenu(this);
			return false;
		});
	}
	var moveright = function() {

		$self.each(function(){
			var pos = $(this).position().left;
			pos = eval(pos - $(this).find('.container').outerWidth());

			if (pos < eval(0-eval(eval($(this).find('.container').length - 1) * $(this).find('.container').outerWidth()))){
				pos = 0;
				submenu = 1;
			}else{
				submenu += 1;	
			}
			
			$(this).css({
				'-webkit-transform':'translateX('+pos+'px)',
				'-moz-transform':'translateX('+pos+'px)',
				'-ms-transform':'translateX('+pos+'px)',	
				'-o-transform':'translateX('+pos+'px)'
			});
		})

		$("#projectssubmenu").find(".active").toggleClass("active");
		$("#projectssubmenu").find(".item-"+submenu).toggleClass("active");

	}

	var moveleft = function(){
		
		$self.each(function(){
			var pos = $(this).position().left;
			pos = eval(pos + $(this).find('.container').outerWidth());

			if (pos > 0) {
				pos = eval(0-eval(eval($(this).find('.container').length - 1) *$(this).find('.container').outerWidth()));
				submenu = 4;
			}else{
				submenu -= 1;
			}
			
			$(this).css({
				'-webkit-transform':'translateX('+pos+'px)',
				'-moz-transform':'translateX('+pos+'px)',
				'-ms-transform':'translateX('+pos+'px)',	
				'-o-transform':'translateX('+pos+'px)'
			});
		})

		$("#projectssubmenu").find(".active").toggleClass("active");
		$("#projectssubmenu").find(".item-"+submenu).toggleClass("active");

	}


	var clickmenu = function(handler){
		if ($(handler).hasClass("active")) return false;
		else{

			var sel_index	=	eval($(handler).attr('class').substring(5) - 1);

			var pos			=	eval(sel_index * $self.find('.container').outerWidth());

			submenu			=	eval(1 + sel_index);

			$self.animate({left: '-'+pos+'px'},500);

			$("#projectssubmenu").find(".active").toggleClass("active");

			$(handler).toggleClass("active");


		}


	}	
	
  };

  return this;

})( jQuery );





