/**
 * Created by elvis on 15/3/22.
 */

var SliderBoxAnimate = function(){
    $("#middle-content-sliderBox-right-1").hover(
        function(){
            t = setTimeout(function() {
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
        });
    $("#middle-content-sliderBox-right-2").hover(
        function(){
            t = setTimeout(function() {
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
        });
    $("#middle-content-sliderBox-right-3").hover(
        function(){
            t = setTimeout(function() {
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
        });
    $("#middle-content-sliderBox-right-4").hover(
        function(){
            t = setTimeout(function() {
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
        });
};

$(document).ready(function(){
    SliderBoxAnimate();
});