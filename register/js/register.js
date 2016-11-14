
(function($) {
    $.fn.placeholder = function(options) {
        var opts = $.extend({}, $.fn.placeholder.defaults, options);
        var isIE = document.all ? true : false;
        return this.each(function() {
            var _this = this,
                placeholderValue = _this.getAttribute("placeholder"); //缓存默认的placeholder值
            if (isIE) {
                _this.setAttribute("value", placeholderValue);
                _this.onfocus = function() {
                    $.trim(_this.value) == placeholderValue ? _this.value = "" : '';
                };
                _this.onblur = function() {
                    $.trim(_this.value) == "" ? _this.value = placeholderValue : '';
                };
            }
        });
    };

    var bol4 = false;
    $(".borde").placeholder();
//	$(".borde").css({"autocomplete":"off"});
    $(".borde").on("focus",function () {
        var index = $('.borde').index($(this));
        $(".borde").eq(index).css({"borderColor":"#33cc66"})
    })
    $(".borde").on("blur",function () {
        var index = $('.borde').index($(this));

        $(".borde").eq(index).css({"borderColor":"#b2b2b2"})

        switch (index){
            //手机号码验证
            case 0:

                var str0 = $(".borde0").val();
                var reg0 = /^1\d{10}$/;
                var bol0 = reg0.test(str0);
                if(bol0){			//手机号码验证成功
                    $(".error").eq(index).css({"display":"none"});
                }else{
                    $(".error").eq(index).css({"display":"block","color":"#ff0000"});
                }

                break;
            //验证码验证
//			case 1:

//				break;
            //短信验证码验证
//			case 2:

//				break;
            //密码验证
            case 3:
                bol4 = false;
                var str3 = $(".borde3").val();
                var reg3 = /^[A-Za-z0-9_]{6,20}$/;
                var bol3 = reg3.test(str3);
                if(bol3){			//密码验证成功
                    $(".error").eq(index).css({"display":"none"});
                    bol4 = true;
                }else{
                    $(".error").eq(index).css({"display":"block","color":"#ff0000"});
                }
                break;
            //新密码验证
            case 4:
                if(bol4 == true && $(".borde").eq(index).val() !== "" && $(".borde").eq(index-1).val() !== "" && $(".borde").eq(index).val() == $(".borde").eq(index-1).val()){
                    $(".error").eq(index).css({"display":"none"});
                }else{
                    $(".error").eq(index).css({"display":"block","color":"#ff0000"});
                }
                break;
        }

    })




    //验证码切换
    $(".yzm_ma").on("click",function(){
        $(".yzm_ma").attr({"src":"img/qq.png"});
    })






    //点击获取短信验证码
    var t = 120;
    var time = 0;
    var onOff = true;
    $(".huoqu").on("click",function(){
        if(onOff){
            onOff = false;
//				clearInterval(time);
            $(".huoqu").addClass("huoqu1");
            $(".huoqu").html("120秒后重新获取");
            time = setInterval(function(){
                t--;
                if(t<=0){
                    t = 120;
                    clearInterval(time);
                    onOff = true;
                    $(".huoqu").removeClass("huoqu1");
                    $(".huoqu").html("免费获取验证码");
                }else{
                    $(".huoqu").html(t+"秒后重新获取");
                }
            },1000)
        }
    })




    // 所有的表单验证信息判断符合后，提交注册
    $(".submit_code").on("click",function(){

        $(".register_news,.register_wrap").css({"display":"none"});
        $(".register_overh,.register_over").css({"display":"block"});
    })


})(jQuery);