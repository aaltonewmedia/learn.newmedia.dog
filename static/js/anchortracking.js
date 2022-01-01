window.onload = function() {

	var toc = document.querySelector( '.book-toc-content' );
	var tocItems;

	// Factor of screen size that the element must cross
	// before it's considered visible
	var TOP_MARGIN = 0.0,
		BOTTOM_MARGIN = 0.1;

	window.addEventListener( 'resize', getItems, false );
	window.addEventListener( 'scroll', sync, false );

	getItems();

	function getItems() {

		tocItems = [].slice.call( toc.querySelectorAll( 'li' ) );

		// Cache element references and measurements
		tocItems = tocItems.map( function( item ) {
			var anchor = item.querySelector( 'a' );
			var target = document.getElementById( anchor.getAttribute( 'href' ).slice( 1 ) );

			return {
				listItem: item,
				anchor: anchor,
				target: target
			};
		} );

		// Remove missing targets
		tocItems = tocItems.filter( function( item ) {
			return !!item.target;
		} );

		sync();
	}

	function sync() {

		var windowHeight = window.innerHeight;
		var visibleItems = 0;

		tocItems.forEach( function( item ) {

			var targetBounds = item.target.getBoundingClientRect();

			if( targetBounds.bottom > windowHeight * TOP_MARGIN && targetBounds.top < windowHeight * ( 1 - BOTTOM_MARGIN ) ) {
				visibleItems += 1;
				item.anchor.classList.add( 'visible' );
			}
			else {
				item.anchor.classList.remove( 'visible' );
			}

		} );

	}

};