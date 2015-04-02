/**
 * Created by elvis on 15/3/25.
 */
$(document).ready(function(){
    $(".ranking-list-content-1").hover(function(){
        coverT = setTimeout(function(){
            $(".ranking-list-content-title-1").animate({top:'0px'});
        },200);
    },function(){
        clearTimeout(coverT);
        $(".ranking-list-content-title-1").animate({top:"-17px"},"ease");
    });
    $(".ranking-list-content-2").hover(function(){
        coverT = setTimeout(function(){
            $(".ranking-list-content-title-2").animate({top:'0px'});
        },200);
    },function(){
        clearTimeout(coverT);
        $(".ranking-list-content-title-2").animate({top:"-17px"},"ease");
    });
    $(".ranking-list-content-3").hover(function(){
        coverT = setTimeout(function(){
            $(".ranking-list-content-title-3").animate({top:'0px'});
        },200);
    },function(){
        clearTimeout(coverT);
        $(".ranking-list-content-title-3").animate({top:"-17px"},"ease");
    });
    $(".ranking-list-content-4").hover(function(){
        coverT = setTimeout(function(){
            $(".ranking-list-content-title-4").animate({top:'0px'});
        },200);
    },function(){
        clearTimeout(coverT);
        $(".ranking-list-content-title-4").animate({top:"-17px"},"ease");
    });
    $(".ranking-list-content-5").hover(function(){
        coverT = setTimeout(function(){
            $(".ranking-list-content-title-5").animate({top:'0px'});
        },200);
    },function(){
        clearTimeout(coverT);
        $(".ranking-list-content-title-5").animate({top:"-17px"},"ease");
    });
});