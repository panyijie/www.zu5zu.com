/**
 * Created by elvis on 15/3/25.
 */
$(document).ready(function(){
    $(".middle-classify-top-span-1").hover(function(){
            time = setTimeout(function(){
            $(".middle-classify-top-line").animate({
                left:'9px',
                width:'50px'
            },"fast");
        },400);
    },function(){
        clearTimeout(time);
    });
    $(".middle-classify-top-span-2").hover(function(){
        time = setTimeout(function(){
        $(".middle-classify-top-line").animate({
            left:'80px',
            width:'90px'
        },"fast");
        },400);
    },function(){
        clearTimeout(time);
    });

    $(".middle-classify-top-span-3").hover(function(){
        time = setTimeout(function(){
        $(".middle-classify-top-line").animate({
            left:'198px',
            width:'90px'
        },"fast");
        },400);
    },function(){
        clearTimeout(time);
    });
    $(".middle-classify-top-span-4").hover(function(){
        time = setTimeout(function(){
        $(".middle-classify-top-line").animate({
            left:'317px',
            width:'90px'
        },"fast");
        },400);
    },function(){
        clearTimeout(time);
    });
    $(".middle-classify-top-span-5").hover(function(){
        time = setTimeout(function(){
        $(".middle-classify-top-line").animate({
            left:'435px',
            width:'90px'
        },"fast");
        },400);
    },function(){
        clearTimeout(time);
    });
    $(".middle-classify-top-span-6").hover(function(){
        time = setTimeout(function(){
        $(".middle-classify-top-line").animate({
            left:'553px',
            width:'90px'
        },"fast");
        },400);
    },function(){
        clearTimeout(time);
    });
    $(".middle-classify-top-span-7").hover(function(){
        time = setTimeout(function(){
        $(".middle-classify-top-line").animate({
            left:'672px',
            width:'90px'
        },"fast");
        },400);
    },function(){
        clearTimeout(time);
    });
    $(".middle-classify-top-span-8").hover(function(){
        time = setTimeout(function(){
        $(".middle-classify-top-line").animate({
            left:'785px',
            width:'50px'
        },"fast");
        },400);
    },function(){
        clearTimeout(time);
    });
    $(".middle-classify-top").mouseleave(function(){
        $(".middle-classify-top-line").animate({
            left:'9px',
            width:'50px'
        },"fast");
    });
});