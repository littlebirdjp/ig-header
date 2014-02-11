var $mainHeadBase = $( '#mainhead-base' );
$( '.mainhead-base-waypoint' ).each( function(i) {
	var $el = $( this ),
		animClassDown = $el.data( 'animateDown' ),
		animClassUp = $el.data( 'animateUp' );

	$el.waypoint( function( direction ) {
		if( direction === 'down' && animClassDown ) {
			$mainHeadBase.attr('class', 'mainhead-base ' + animClassDown);
		}
		else if( direction === 'up' && animClassUp ){
			$mainHeadBase.attr('class', 'mainhead-base ' + animClassUp);
		}
	}, { offset: '0' } );
} );

var $mainHeadContent = $( '#mainhead-content' );
$( '.mainhead-content-waypoint' ).each( function(i) {
	var $el = $( this ),
		animClassDown = $el.data( 'animateDown' ),
		animClassUp = $el.data( 'animateUp' );

	$el.waypoint( function( direction ) {
		if( direction === 'down' && animClassDown ) {
			$mainHeadContent.attr('class', 'mainhead-content ' + animClassDown);
		}
		else if( direction === 'up' && animClassUp ){
			$mainHeadContent.attr('class', 'mainhead-content ' + animClassUp);
		}
	}, { offset: '0' } );
} );

var $subHead1 = $( '#subhead1' );
$( '.subhead1-waypoint' ).each( function(i) {
	var $el = $( this ),
		animClassDown = $el.data( 'animateDown' ),
		animClassUp = $el.data( 'animateUp' );

	$el.waypoint( function( direction ) {
		if( direction === 'down' && animClassDown ) {
			$subHead1.attr('class', 'subhead ' + animClassDown);
		}
		else if( direction === 'up' && animClassUp ){
			$subHead1.attr('class', 'subhead ' + animClassUp);
		}
	}, { offset: '40' } );
} );

var $subHead1Base = $( '#subhead1-base' );
$( '.subhead1-base-waypoint' ).each( function(i) {
	var $el = $( this ),
		animClassDown = $el.data( 'animateDown' ),
		animClassUp = $el.data( 'animateUp' );

	$el.waypoint( function( direction ) {
		if( direction === 'down' && animClassDown ) {
			$subHead1Base.attr('class', 'subhead-base ' + animClassDown);
		}
		else if( direction === 'up' && animClassUp ){
			$subHead1Base.attr('class', 'subhead-base ' + animClassUp);
		}
	}, { offset: '40' } );
} );

var $subHead2 = $( '#subhead2' );
$( '.subhead2-waypoint' ).each( function(i) {
	var $el = $( this ),
		animClassDown = $el.data( 'animateDown' ),
		animClassUp = $el.data( 'animateUp' );

	$el.waypoint( function( direction ) {
		if( direction === 'down' && animClassDown ) {
			$subHead2.attr('class', 'subhead ' + animClassDown);
		}
		else if( direction === 'up' && animClassUp ){
			$subHead2.attr('class', 'subhead ' + animClassUp);
		}
	}, { offset: '40' } );
} );

var $subHead2Base = $( '#subhead2-base' );
$( '.subhead2-base-waypoint' ).each( function(i) {
	var $el = $( this ),
		animClassDown = $el.data( 'animateDown' ),
		animClassUp = $el.data( 'animateUp' );

	$el.waypoint( function( direction ) {
		if( direction === 'down' && animClassDown ) {
			$subHead2Base.attr('class', 'subhead-base ' + animClassDown);
		}
		else if( direction === 'up' && animClassUp ){
			$subHead2Base.attr('class', 'subhead-base ' + animClassUp);
		}
	}, { offset: '40' } );
} );

var $subHead3 = $( '#subhead3' );
$( '.subhead3-waypoint' ).each( function(i) {
	var $el = $( this ),
		animClassDown = $el.data( 'animateDown' ),
		animClassUp = $el.data( 'animateUp' );

	$el.waypoint( function( direction ) {
		if( direction === 'down' && animClassDown ) {
			$subHead3.attr('class', 'subhead ' + animClassDown);
		}
		else if( direction === 'up' && animClassUp ){
			$subHead3.attr('class', 'subhead ' + animClassUp);
		}
	}, { offset: '40' } );
} );

var $subHead3Base = $( '#subhead3-base' );
$( '.subhead3-base-waypoint' ).each( function(i) {
	var $el = $( this ),
		animClassDown = $el.data( 'animateDown' ),
		animClassUp = $el.data( 'animateUp' );

	$el.waypoint( function( direction ) {
		if( direction === 'down' && animClassDown ) {
			$subHead3Base.attr('class', 'subhead-base ' + animClassDown);
		}
		else if( direction === 'up' && animClassUp ){
			$subHead3Base.attr('class', 'subhead-base ' + animClassUp);
		}
	}, { offset: '40' } );
} );