
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
    $(".borde").on("focus",function () {
        var index = $('.borde').index($(this));
        $(".borde").eq(index).css({"borderColor":"#33cc66"});
    })
    $(".borde").on("blur",function () {
        var index = $('.borde').index($(this));
        var inner = $(".borde").eq(index).val()
        if( inner == ""){
            $(".error").eq(index).css({"color":"#ff0000"});
        }
        $(".borde").eq(index).css({"borderColor":"#b2b2b2"});
    })
//验证码切换
        $(".barter").on("click",function(){
            $(".yzm_ma").attr({"src":"img/qq.jpg"});
        })
})(jQuery);