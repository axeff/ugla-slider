UGLA-Slider
===========

Supposed to become a jQuery-Plugin some day
-------------------------------------------

Usage:
You need a wrapper called "projects" and put your contents each in a "container"
<code>
	`<div>`
		`<div id="projects">`
			`<div class="container">`
			   `Content Page 1`
			`</div>`
			`<div class="container">`
				`Content Page 2`
			`</div>`
			`<div class="container">`
				`Content Page 3`
			`</div>`
			`<div class="container">`
				`Content Page 4`
			`</div>`
		`</div>`
	`</div>`
	`<div id="slider" style="left:0;"><a class="left" href="#">left</a><a class="right" href="#">right</a></div>`
</code>

Call uglaSlide() on the wrapper "projects" and pass the configuration object

<code>
	$(document).ready(function(){
		$("#projects").uglaSlide({
			'left': $("#slider .left"), //the jQuery Object of the left-link to be clicked
			'right': $("#slider .right"), //the jQuery Object of the right-link to be clicked
			'menu': $('#projectssubmenu li a') //not implmented yet... for navigation menu
		});
	});
</code>

Contents:
*	ugla-slider.js
*	index.html
