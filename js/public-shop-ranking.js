/**
 * Created by elvis on 15/3/25.
 */
$(document).ready(function(){
    $(".ranking-list-content-1").hover(function(){
        $(".ranking-list-content-title-1").animate({top:'0px'});
    },function(){
        $(".ranking-list-content-title-1").animate({top:"-17px"},"ease");
    });
});