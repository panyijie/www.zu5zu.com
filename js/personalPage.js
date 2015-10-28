/**
 * Created by elvis on 15/6/17.
 */
$(document).ready(function(){
    $(".personal-content-information").hover(function(){
        $(".personal-content-edit").css("display","block");
    },function(){
        $(".personal-content-edit").css("display","none");
    });

    $(".personal-content-edit").click(function(){
        $("#pop-bg").css("display","block");
        $("#pop-box").css("display","block");
    });

    $("#pop-close").click(function(){
        $("#pop-bg").css("display","none");
        $("#pop-box").css("display","none");
    });

//    $(".personal-content-image").hover(function(){
//        $(".personal-content-image-hover").css("display","block");
//    },function(){
//        $(".personal-content-image-hover").css("display","none");
//    });

});

