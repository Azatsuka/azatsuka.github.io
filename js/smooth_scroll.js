$(document).ready(function(){

    $("a").on('click', function(){

        if(this.hash !== ""){

            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
                window.location.hash = hash;
            });
        }
    });
});