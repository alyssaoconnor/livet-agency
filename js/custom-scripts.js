/* START of jQuery */

/*======== Page Preloader ========*/

jQuery(window).load(function(){
  $("#loader").fadeOut(1000);
});

  jQuery(document).ready(function(){

    /*======== Remove Focus fron nav links ========*/

    $(".main-nav li a, .btn").mouseup(function(){
        $(this).blur();
    });

    /*======== Back to top of the page ========*/

    	$('.navbar-brand a').click(function(e){
    		e.preventDefault();
    		$('html, body').animate({
    		scrollTop: 0
    		}, 600);
    	});


    /*======== Move to a section ========*/

    	$('.main-nav a, #header a').click(function(){
    		$('html, body').animate({
    			scrollTop: $( $.attr(this, 'href') ).offset().top
    		}, 1300);
    		return false;
    	});


      /*======== Back to top of the page ========*/

      	$('.navbar-brand img').click(function(e){
      		e.preventDefault();
      		$('html, body').animate({
      		scrollTop: 0
      		}, 600);
      	});


        /*======== Mobile menu collapse ========*/

        $('.navbar-collapse a').click(function (e) {
            $('.navbar-collapse').collapse('toggle');
          });


        /*======== Show more / Show less ========*/

        $(".services-first-grid button").on("click", function(){

          var el = $(this);

          if (el.text() == el.data("text-swap")) {
            el.text(el.data("text"));
          } else {
            el.data("text",el.text());
            el.text(el.data("text-swap"));
          };
        });


      /*======== Carousel sliders ========*/

      $("#carousel-testimonials, #carousel-customers").carousel();

});

/* END of jQuery */

/* END JavaSctipt */
