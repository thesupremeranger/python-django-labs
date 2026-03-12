$(document).ready(function(){
    $('.one-post').hover(function(event){
        $(event.currentTarget).find('.one-post-shadow').animate({opacity: '0.1'}, 300);
    }, function(event){
        $(event.currentTarget).find('.one-post-shadow').animate({opacity: '0'}, 300);
    });

    $('.header .logo').hover(function(){
        $(this).stop().animate({width: '120px'}, 300);
    }, function(){
        $(this).stop().animate({width: '100px'}, 300);
    });
});