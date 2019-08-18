$(document).ready(function(){

    function stickyNavigationBar() {
        $("#sticky-navbar").sticky({ topSpacing:0 });
    }

    function animateScrollTopPosition() {
        $("body").on("click", "#sticky-navbar .navbar-nav li a", function(event) {
            event.preventDefault();

            var hash = this.hash;
            
            if ($(hash).length <= 0) {
                return false;
            };

            $("html, body").animate({
                scrollTop: $(hash).offset().top,
            }, 600, 'easeInOutCirc', function() {
                return false;
            })
        });
    }

    function scrollSpy() {

        var scrollSpy = $('.scrollspy');

        if (scrollSpy.length <= 0) {
            return false;
        }

        var current;
        $(scrollSpy).each(function(index, obj) {
            if ( $('#'+ $(obj).attr('id')).offset().top <= $(window).scrollTop() ) {
                current = $(obj).attr('id');
            }
        });

        $("#sticky-navbar .navbar-nav li a[href='#" + current + "']").addClass('active');
        $("#sticky-navbar .navbar-nav li a").not("a[href='#" + current + "']").removeClass('active');      
    }

    stickyNavigationBar();
    animateScrollTopPosition();
    scrollSpy();

    $(window).scroll( function() {
        scrollSpy();
    });
});