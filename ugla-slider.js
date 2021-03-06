(function( $ ) {
  var countContainer = 1;

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
			speed: "0.5s",
		menu: null
	   }, opts);

	$self.css({
		'-webkit-transition': 'all '+config.speed+' ease-in-out',
		'-moz-transition': 'all '+config.speed+' ease-in-out',
		'-o-transition': 'all '+config.speed+' ease-in-out',
		'-ms-transition': 'all '+config.speed+' ease-in-out'
	});

	   // Do your awesome plugin stuff here
	//First we do some CSS stuff to float the project containers
	$self.find('.container').css({'float':'left'});
	$self.css({'position':'absolute'});


	$self.each(function(){
		//and hide all but the first by overlapping an absolute positioned "mask" width the size of one .container
		$(this).css('width',eval($(this).find('.container').length * $(this).find('.container').outerWidth())+'px');
		$(this).parent().append($("<div class='mask'></div>").css({
			'background-color': '#999', //'transparent', //$self.parent().css('background-color'),
			'top' : $self.offset().top + 'px',
			'left' : $self.offset().left + 'px',
			'position' : 'relative',
			'z-index' : '100',
			'overflow' : 'hidden',
			'width' : $self.find('.container').outerWidth() + "px",
			'height' : $self.find('.container').outerHeight() + "px",
		}).append($(this)));
		
	});

	//adjusting the transition after appending, else the initialisation would be animated too
	$('.mask').css({
		'-webkit-transition': 'all '+config.speed+' ease-in-out',
		'-moz-transition': 'all '+config.speed+' ease-in-out',
		'-o-transition': 'all '+config.speed+' ease-in-out',
		'-ms-transition': 'all '+config.speed+' ease-in-out'
	});

						
	config.left.bind('click',function(){
		move('left');
		return false;
	});

	config.right.bind('click', function(){
		move('right');
		return false;
	});

	var move = function(direction) {

		$self.each(function(){
			var pos = $(this).position().left;
		
			if (direction == 'right'){
				pos = eval(pos - $(this).find('.container').outerWidth());
				if (pos < eval(0-eval(eval($(this).find('.container').length - 1) * $(this).find('.container').outerWidth()))){
					pos = 0;
					countContainer = 1;
				}else{
					countContainer += 1;	
				}
			}
			else if (direction == 'left'){
				pos = eval(pos + $(this).find('.container').outerWidth());
				if (pos > 0) {
					pos = eval(0-eval(eval($(this).find('.container').length - 1) *$(this).find('.container').outerWidth()));
					countContainer = 4;
				}else{
					countContainer -= 1;
				}
			}

			resizeMask(countContainer);

			$(this).css({
				'-webkit-transform':'translateX('+pos+'px)',
				'-moz-transform':'translateX('+pos+'px)',
				'-ms-transform':'translateX('+pos+'px)',	
				'-o-transform':'translateX('+pos+'px)'
			});
		})
	}

	var resizeMask = function (count){
		$(".mask").css({
			'height' : $self.find('.container:nth('+eval(count-1)+')').outerHeight()+"px"
		});
	}
  };

  return this;

})( jQuery );





