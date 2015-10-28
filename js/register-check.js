/**
 * Created by elvis on 15/3/25.
 */
 $(document).ready(function(){
     var emailConfirm = "N";
     var psdConfirm = "N";
     var confirmPsdConfirm = "N";
     var nicknameConfirm = "N";
     $("#register-email").blur(function(){
        var emailReg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        var email = $(this).val();
        if(email == ""){
            $(".register-email-tips").css({
                "display":"block",
                "color":"#ff4843"
            }).text("邮箱不能为空");
            emailConfirm = "N";
        }else if(!emailReg.test(email)){
            $(".register-email-tips").css({
                "display":"block",
                "color":"#ff4843"
            }).text("请输入正确格式的邮箱");
            emailConfirm = "N";
        }else{
//                $.post("处理的Servlet",{email:email},function(data){
//                    if(data == "Y"){
                        $(".register-email-tips").css({
                            "display":"block",
                            "color":"green"
                        }).text(" √");
//                    }else if(data == "N"){
//                        $(".register-email-tips").css({
//                            "display":"block",
//                            "color":"#ff4843"
//                        }).text("该邮箱已注册");
//                    }
//            });
            emailConfirm = "Y";
        }
     });

     $("#register-psd").blur(function(){
         var psdReg = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,20}$/;
         if(!psdReg.test($(this).val())){
             $(".register-psd-tips").css({
                 "display":"block",
                 "color":"#ff4843"
             }).text("请正确输入6-20位密码");
             psdConfirm = "N";
         }else{
             $(".register-psd-tips").css({
                "display":"block",
                "color":"green"
             }).text(" √");
             psdConfirm = "Y";
         }
     });

     $("#register-confirm").blur(function(){
         if($(this).val() != ""){
             if(psdConfirm === "Y"){
                 if($(this).val() != $("#register-psd").val()){
                     $(".register-confirmpsd-tips").css({
                         "display":"block",
                         "color":"#ff4843"
                     }).text("两次密码输入不相同,请重新输入");
                     confirmPsdConfirm = "N";
                 }else{
                     $(".register-confirmpsd-tips").css({
                         "display":"block",
                         "color":"green"
                     }).text(" √");
                     confirmPsdConfirm = "Y"
                 }
             }else{
                 $("#register-psd").focus().val("");
                 $(".register-psd-tips").css({
                     "display":"block",
                     "color":"#ff4843"
                 }).text("请正确输入6-20位密码");
             }
         }else{
             $(".register-confirmpsd-tips").css({
                 "display":"block",
                 "color":"#ff4843"
             }).text("请输入确认密码");
             confirmPsdConfirm = "N";
         }
     });

     $("#register-nickname").blur(function(){
         var nickReg = /^[\@\_\u4E00-\u9FA5A-Za-z0-9\!\#\$\%\^\&\*\.\~]{1,10}$/
         if(!nickReg.test($(this).val())){
             $(".register-nickname-tips").css({
                 "display":"block",
                 "color":"#ff4843"
             }).text("昵称格式不正确");
             nicknameConfirm = "N";
         }else{
             $(".register-nickname-tips").css({
                 "display":"block",
                 "color":"green"
             }).text(" √");
             nicknameConfirm = "Y";
         }
     });

     $("#login-content-form-button").click(function(){
         if(emailConfirm === "Y"){
            if(psdConfirm === "Y"){
                console.log("2");
                if(confirmPsdConfirm === "Y"){
                    if(nicknameConfirm === "Y"){
                        $("#register-form").submit();
                    }else{
                        $("#register-nickname").focus.val("");
                        $(".register-nickname-tips").css({
                            "display":"block",
                            "color":"#ff4843"
                        }).text("昵称格式不正确");
                    }
                }else{
                    $("#register-confirm").focus().val("");
                    $(".register-confirmpsd-tips").css({
                        "display":"block",
                        "color":"#ff4843"
                    }).text("两次密码输入不正确,请重新输入");
                }
            }else{
                $("#register-psd").focus().val("");
                $(".register-psd-tips").css({
                    "display":"block",
                    "color":"#ff4843"
                }).text("请正确输入6-20位密码");
            }
         }else{
             $("#register-email").focus().val("");
             $(".register-email-tips").css({
                 "display":"block",
                 "color":"#ff4843"
             }).text("请输入正确格式的邮箱");
         }
     });
 });