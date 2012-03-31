UGLA-Slider
===========

_[...] it slides back to the beginning, after reaching the end [...]_


**Tested on**<br>
*	Chrome (Mac)<br>
*	Firefox (Mac)<br>
*	Safari (Mac)<br>
<br>
**DEMO**<br>

<a href="http://bit.ly/ugla-slider-m">DEMO 1 (mobile touch develop branch)</a><br>
<a href="http://ugla-media.vs188017.vserver.de/projekte/">DEMO 2</a><br>
<a href="http://povmedia.de">DEMO 3</a>

Usage:
You need a wrapper (in this example called ".slider") and put your contents each in a "container" within that wrapper

<code>
	

	<div class="slider">
		<div class="container">
		   Content Page 1
		</div>
		<div class="container">
			Content Page 2
		</div>
		<div class="container">
			Content Page 3
		</div>
		<div class="container">
			Content Page 4
		</div>
	</div>


</code>

Call uglaSlide() on the wrapper ".slider" 

<code>
	
	$(document).ready(function(){
		$(".slider").uglaSlide();
	});
	
</code>

It will by default **prepend** a "&lt;&lt;" and "&gt;&gt;" link-set.
If you want to place your own links, feel free to do so, just tell the plugin where to find them.
Also the speed for the animations can be optionally adjusted (standard is 0.5s)

<code>

	$(".slider").uglaSlide({
       	left: $(".slider.left"),
		right: $(".slider.right"),
		speed: "0.5s",
	});

</code>

Contents:<br>
*	ugla-slider.js<br>
*	index.html
