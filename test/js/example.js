(function () {

	'use strict';

	var template;

	// Create a global `template` variable, which will be used by the example
	template = window.template = read( 'example-template' );

	window.initExample = function () {
		var info;

		info = new Ractive({
			el: 'info',
			template: '#infoTemplate',
			data: {
				selected: 'readme'
			},
			preserveWhitespace: true,
			delimiters: [ '<%', '%>' ]
		});

		info.on( 'select', function ( event, tab ) {
			this.set( 'selected', tab );
		});

		// inject the example itself
		info.nodes[ 'template-tab' ].textContent = template;
		info.nodes[ 'javascript-tab' ].textContent = read( 'example-javascript' );
		info.nodes[ 'css-tab' ].textContent = read( 'example-css' );

		// prettyprint
		[].forEach.call( document.querySelectorAll( '.prettyprint' ), function ( el ) {
			hljs.highlightBlock( el );
		});
	};

}());

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-5602942-4', 'examples.ractivejs.org');
ga('send', 'pageview');

function read ( id ) {
	return document.getElementById( id ).textContent;
}