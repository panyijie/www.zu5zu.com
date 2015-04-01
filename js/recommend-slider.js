/**
 * Created by elvis on 15/4/1.
 */
var addEvent = function(obj,event,fun){
    if(obj.addEventListener){
        obj.addEventListener(event,fun,false);
    }else if(obj.attachEvent){
        obj.attachEvent("on"+event,fun)
    }
};
var lnSlider = document.getElementById("middle-recommend");
addEvent(window,"scroll",function(){
    var scrollHeight = document.body.scrollTop;
    if(scrollHeight > 755){
        lnSlider.style.position = "absolute";
        lnSlider.style.left = "0px";
        lnSlider.style.top = scrollHeight - 125 +"px";
    }else if(scrollHeight <= 755){
        lnSlider.style.position = "absolute";
        lnSlider.style.left = "0px";
        lnSlider.style.top = "630px";
    }
});