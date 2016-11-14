
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
        }

    })



})(jQuery);/**
 * Created by Administrator on 2016/11/10.
 */
