$('document').ready(function() {
    $('.navbar a').click(function(e) {
        e.preventDefault();
        $('.navbar a').removeClass('current-page');
        $(this).addClass('current-page');
    });
});

$(function(){
    $("#navbar-placeholder").load("navbar.html");
});
