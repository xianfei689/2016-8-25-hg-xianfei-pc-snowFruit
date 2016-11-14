
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
            //密码验证
            case 0:
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
            case 1:
                if(bol4 == true && $(".borde").eq(index).val() !== "" && $(".borde").eq(index-1).val() !== "" && $(".borde").eq(index).val() == $(".borde").eq(index-1).val()){
                    $(".error").eq(index).css({"display":"none"});
                }else{
                    $(".error").eq(index).css({"display":"block","color":"#ff0000"});
                }
                break;
        }

    })

})(jQuery);/**
 * Created by Administrator on 2016/11/11.
 */
