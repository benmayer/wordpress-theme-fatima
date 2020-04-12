// ======================================================================= Namespace
var fatima = fatima || {},
	$ = jQuery;


// =======================================================================  Menu
fatima.menu = {

	init: function() {

		// Make sub menus accessible via keyboard navigation
		fatima.menu.focusableSubMenus();

	},

	focusableSubMenus: function() {

		$( '.menu a' ).on( 'focus', function() {
			if ( $( this ).parent( 'li' ).hasClass( 'menu-item-has-children' ) ) {
				$( this ).next( 'ul' ).addClass( 'focusable' );
			} else {
				$( this ).closest( 'ul' ).find( 'ul' ).removeClass( 'focusable' );
			}
		} );

	},

} // fatima.menu


// =======================================================================  Resize videos
fatima.intrinsicRatioEmbeds = {

	init: function() {

		// Resize videos after their container
		var vidSelector = 'iframe, object, video';
		var resizeVideo = function( sSel ) {
			$( sSel ).each( function() {
				var $video = $( this ),
					$container = $video.parent(),
					iTargetWidth = $container.width();

				if ( ! $video.attr( 'data-origwidth' ) ) {
					$video.attr( 'data-origwidth', $video.attr( 'width' ) );
					$video.attr( 'data-origheight', $video.attr( 'height' ) );
				}

				var ratio = iTargetWidth / $video.attr( 'data-origwidth' );

				$video.css( 'width', iTargetWidth + 'px' );
				$video.css( 'height', ( $video.attr( 'data-origheight' ) * ratio ) + 'px' );
			});
		};

		resizeVideo( vidSelector );

		$( window ).resize( function() {
			resizeVideo( vidSelector );
		} );

	},

} // fatima.intrinsicRatioEmbeds


// ======================================================================= Function calls
$( document ).ready( function( ) {
	fatima.menu.init();						// Menus
	fatima.intrinsicRatioEmbeds.init();		// Embed resizing
} );
