UGLA-Slider
===========

_[...] it slides back to the beginning, after reach of the end [...]_


**Tested on**<br>
*	Chrome (Mac)<br>
*	Firefox (Mac)<br>
*	Safari (Mac)<br>
<br>
**DEMO**<br>
<a href="http://ugla-media.vs188017.vserver.de/projekte/">DEMO 1</a><br>
<a href="http://povmedia.de">DEMO 2</a>



Usage:
You need a wrapper (in this example called "#projects") and put your contents each in a "container" in that wrapper<br>
<code>
	

	<div id="projects">
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

	<div id="slider" style="left:0;"><a class="left" href="#">left</a><a class="right" href="#">right</a></div>

</code>
Call uglaSlide() on the wrapper "#projects" and pass the configuration object

<code>
	
	$(document).ready(function(){
		$("#projects").uglaSlide({
			'left': $("#slider .left"), //the jQuery Object of the left-link to be clicked
			'right': $("#slider .right"), //the jQuery Object of the right-link to be clicked
			'menu': $('#projectssubmenu li a') //not implmented yet... for navigation menu
		});
	});
	
</code>

Contents:<br>
*	ugla-slider.js<br>
*	index.html
