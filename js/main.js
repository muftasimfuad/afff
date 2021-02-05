$(function(){
    /* venubox active */
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });

    /* exit popup active */  
    $.stickToMe({
        layer: '#stickLayer',
        fadespeed: 400,
        trigger: ['top'],
        maxamount : 1,
        cookie : false,  
    }); 
    
});