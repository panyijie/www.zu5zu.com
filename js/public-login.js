/**
 * Created by elvis on 15/6/16.
 */
$(document).ready(function(){
    var confirmEmail = "N";
    var confirmPsd = "N";
    $("#email").blur(function(){
        var emailReg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        var email = $(this).val();
        if(!emailReg.test(email)){
            $(".login-content-form-input-nameInvalid").css({"display":"block"}).text("请输入格式正确的邮箱");
            confirmEmail = "N";
        }else{
            $(".login-content-form-input-nameInvalid").css({"display":"none"});
            confirmEmail = "Y";
        }
    });

    $("#password").blur(function(){
        var psdReg = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,20}$/;
        var psd = $(this).val();
        if(!psdReg.test(psd)){
            $(".login-content-form-input-psdInvalid").css({"display":"block"}).text("密码必须在6-20位间");
            confirmPsd = "N";
        }else{
            $(".login-content-form-input-psdInvalid").css({"display":"none"});
            confirmPsd = "Y";
        }
    });

    $("#login-content-form-button").click(function(){
        if(confirmEmail === "Y"){
            if(confirmPsd === "Y"){
                $.post("login.do",{email:$("#email").val(),password:$("#password").val()},function(data,status){
                    if(data == "success"){
                        location.href="index.html";
                    }else{
                        $(".login-content-form-input-inexistence").css("display","block");
                        $("#password").val("");
                        $("#email").val("").focus();
                    }
            });
            }else{
                $("#password").focus();
                $(".login-content-form-input-psdInvalid").css({"display":"block"}).text("密码必须在6-20位间");
            }
        }else{
            $("#email").focus();
            $(".login-content-form-input-nameInvalid").css({"display":"block"}).text("请输入格式正确的邮箱");
        }
    });
});