/**
 * Created by elvis on 15/3/22.
 */


var flag = 1;
var autoSlide = function(){
    switch (flag){
        case 1:
            flag++;
            $("#middle-content-sliderBox-sliderIcon-play").animate({top:'134px'},700);
            $("#middle-content-sliderBox-right-1-cover").animate({opacity: '0.3'}, "fast",function(){
                $("#middle-content-sliderBox-right-2-cover").animate({opacity: '0'}, "fast");
            });
            var img = $("#middle-content-sliderBox-left-img");
            img.animate({opacity: '0'}, 700, function () {
                img.attr("src", "img/middle-content-sliderBox-left-2.png");
            }).animate({opacity: '1'}, 700);
            break;
        case 2:
            flag++;
            $("#middle-content-sliderBox-sliderIcon-play").animate({top:'225px'},700);
            $("#middle-content-sliderBox-right-2-cover").animate({opacity: '0.3'}, "fast",function(){
                $("#middle-content-sliderBox-right-3-cover").animate({opacity: '0'}, "fast");
            });
            var img = $("#middle-content-sliderBox-left-img");
            img.animate({opacity: '0'}, 700, function () {
                img.attr("src", "img/middle-content-sliderBox-left-3.png");
            }).animate({opacity: '1'}, 700);
            break;
        case 3:
            flag++;
            $("#middle-content-sliderBox-sliderIcon-play").animate({top:'317px'},700);
            $("#middle-content-sliderBox-right-3-cover").animate({opacity: '0.3'}, 350,function(){
                $("#middle-content-sliderBox-right-4-cover").animate({opacity: '0'}, 350);
            });
            var img = $("#middle-content-sliderBox-left-img");
            img.animate({opacity: '0'}, 700, function () {
                img.attr("src", "img/middle-content-sliderBox-left-4.png");
            }).animate({opacity: '1'}, 700);
            break;
        case 4:
            flag = 1;
            $("#middle-content-sliderBox-sliderIcon-play").animate({top:'38px'},700);
            $("#middle-content-sliderBox-right-4-cover").animate({opacity: '0.3'}, "fast",function(){
                $("#middle-content-sliderBox-right-1-cover").animate({opacity: '0'}, "fast");
            });
            var img = $("#middle-content-sliderBox-left-img");
            img.animate({opacity: '0'}, 700, function () {
                img.attr("src", "img/middle-content-sliderBox-left-1.png");
            }).animate({opacity: '1'}, 700);
            break;
    }
};

var SliderBoxAnimate = function(setAuto){
    $("#middle-content-sliderBox-right-1").hover(
        function(){
            t = setTimeout(function() {
                flag = 1;
                clearInterval(setAuto);
                var img = $("#middle-content-sliderBox-left-img");
                var a = img.attr("src");
                if (a != "img/middle-content-sliderBox-left-1.png") {
                    var ch = a.charAt(a.length - 5);
                    var tempStr = "#middle-content-sliderBox-right-" + ch + "-cover";
                    $(tempStr).animate({opacity: '0.3'}, "fast");
                }
                $("#middle-content-sliderBox-sliderIcon-play").animate({top:'38px'},700);
                $("#middle-content-sliderBox-right-1-cover").animate({opacity: '0'}, "fast");
                if (a != "img/middle-content-sliderBox-left-1.png") {
                    img.animate({opacity: '0'}, 700, function () {
                        img.attr("src", "img/middle-content-sliderBox-left-1.png");
                    }).animate({opacity: '1'}, 700);
                }
            },200);
        },function(){
            clearTimeout(t);
            setAuto = setInterval(autoSlide,4000);
        });
    $("#middle-content-sliderBox-right-2").hover(
        function(){
            t = setTimeout(function() {
                flag = 2;
                clearInterval(setAuto);
                var img = $("#middle-content-sliderBox-left-img");
                var a = img.attr("src");
                if (a != "img/middle-content-sliderBox-left-2.png") {
                    var ch = a.charAt(a.length - 5);
                    var tempStr = "#middle-content-sliderBox-right-" + ch + "-cover";
                    $(tempStr).animate({opacity: '0.3'}, "fast");
                }
                $("#middle-content-sliderBox-sliderIcon-play").animate({top:'134px'},700);
                $("#middle-content-sliderBox-right-2-cover").animate({opacity: '0'}, "fast");
                if (a != "img/middle-content-sliderBox-left-2.png") {
                    img.animate({opacity: '0'}, 700, function () {
                        img.attr("src", "img/middle-content-sliderBox-left-2.png");
                    }).animate({opacity: '1'}, 700);
                }
            },200);
        },function(){
            clearTimeout(t);
            setAuto = setInterval(autoSlide,4000);
        });
    $("#middle-content-sliderBox-right-3").hover(
        function(){
            t = setTimeout(function() {
                flag = 3;
                clearInterval(setAuto);
                var img = $("#middle-content-sliderBox-left-img");
                var a = img.attr("src");
                if (a != "img/middle-content-sliderBox-left-3.png") {
                    var ch = a.charAt(a.length - 5);
                    var tempStr = "#middle-content-sliderBox-right-" + ch + "-cover";
                    $(tempStr).animate({opacity: '0.3'}, "fast");
                }
                $("#middle-content-sliderBox-sliderIcon-play").animate({top:'225px'},700);
                $("#middle-content-sliderBox-right-3-cover").animate({opacity: '0'}, "fast");
                if (a != "img/middle-content-sliderBox-left-3.png") {
                    img.animate({opacity: '0'}, 700, function () {
                        img.attr("src", "img/middle-content-sliderBox-left-3.png");
                    }).animate({opacity: '1'}, 700);
                }
            },200);
        },function(){
            clearTimeout(t);
            setAuto = setInterval(autoSlide,4000);
        });
    $("#middle-content-sliderBox-right-4").hover(
        function(){
            t = setTimeout(function() {
                flag = 4;
                clearInterval(setAuto);
                var img = $("#middle-content-sliderBox-left-img");
                var a = img.attr("src");
                if (a != "img/middle-content-sliderBox-left-4.png") {
                    var ch = a.charAt(a.length - 5);
                    var tempStr = "#middle-content-sliderBox-right-" + ch + "-cover";
                    $(tempStr).animate({opacity: '0.3'}, "fast");
                }
                $("#middle-content-sliderBox-sliderIcon-play").animate({top:'317px'},700);
                $("#middle-content-sliderBox-right-4-cover").animate({opacity: '0'}, "fast");
                if (a != "img/middle-content-sliderBox-left-4.png") {
                    img.animate({opacity: '0'}, 700, function () {
                        img.attr("src", "img/middle-content-sliderBox-left-4.png");
                    }).animate({opacity: '1'}, 700);
                }
            },200);
        },function(){
            clearTimeout(t);
            setAuto = setInterval(autoSlide,4000);
        });
};

$(document).ready(function(){
    setAuto = setInterval(autoSlide,4000);
    SliderBoxAnimate(setAuto);
});