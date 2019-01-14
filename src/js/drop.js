$(document).ready(function() {
    $('#likeMe').mouseover(function(){
        $('.dropBlock__likeMe').addClass('dropBlock__likeMe_wide');
        $('.dropBlock__likeMe_wide').removeClass('dropBlock__likeMe');
        $('.dropBlock__likeMe_item').addClass('dropBlock__likeMe_wide_item');
        $('.dropBlock__likeMe_wide_item').removeClass('dropBlock__likeMe_item');
    });
    
  
    $('#likeMe').mouseout(function(){
        $('.dropBlock__likeMe_wide').addClass('dropBlock__likeMe');
        $('.dropBlock__likeMe').removeClass('dropBlock__likeMe_wide');
        $('.dropBlock__likeMe_wide_item').addClass('dropBlock__likeMe_item');
        $('.dropBlock__likeMe_item').removeClass('dropBlock__likeMe_wide_item');
    });
});



