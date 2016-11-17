var myAnimate = myAnimate || {};
/**
 * [namespace description]
 * ##############################################
 *
 * @Author                                                                             Copyright    xianfei
 * @Title                                         ######
 * @DateTime                                               2016-11-09T17:15:13+0800
 * @description          模块化处理  对象 myAnimate
 *
 * ##############################################
 * @param       {[type]} ns_string  [description]
 * @return      {[type]}            [description]
 */
myAnimate.namespace = function(ns_string) {
    var parts = ns_string.split('.'),
        parent = myAnimate;
    if (parts[0] === "myAnimate") {
        parts = parts.slice(1);
    }
    for (var i = 0; i < parts.length; i++) {
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
}
myAnimate.namespace("myAnimate.car");
var btn;

/**
 * [sortChange description]
 * ##############################################
 *
 * @Author                                                                   Copyright    xianfei
 * @Title                               ######
 * @DateTime                                     2016-11-02T15:59:01+0800
 * @description          一般的效果
 *
 * ##############################################
 * @return      {[type]} [description]
 */
myAnimate.car.normalChange = function() {



            $("#allSort").unbind().bind("mouseover",function(){
                    $("#content1").show()
                    $(".content1").unbind().bind("mouseleave",function(){
                        $(this).hide()
                    })
            })

            $(".content1").find(".shopct").each(function(index, elem) {

                     $(this).unbind().bind("click mouseover",function(){
                                $(this).find(".shoptct1_right").fadeIn(300);
                     }).bind("click mouseleave",function(){
                                 $(this).find(".shoptct1_right").fadeOut(300);
                       })
         })

    /**
     *
     *@see   设置默认地址 样式变化    for    order   step 2
     *
     *      地址选择
     *
     */
    $(".AddrDiv").find(".defaultAddr").each(function() {

        $(this).unbind().bind("click", function() {
            $(".AddrDiv").find(".bLi1").removeClass("active")
            $(".AddrDiv").find(".bLi3").addClass("fn_unvis")
            $(".AddrDiv").find(".defaultAddr").removeClass("fn_unvis")
            var _parent = $(this).parent().parent();
            $(this).addClass("fn_unvis")
            _parent.find(".bLi3").removeClass("fn_unvis")
            _parent.find(".bLi1").addClass("active")
        })

    })

    /**
     *
     *@see   设置默认地址 样式变化    for    order   step 2
     *
     *
     * 地址删除
     *
     */
    $(".AddrDiv").find(".addr_del").each(function() {

        $(this).unbind().bind("click", function() {
               var _parent = $(this).parent().parent()
                _parent.remove()

        })

    })

  /**
     *
     *@see   order   step2  check  box  选择 样式逻辑
     *
     *
     * 地址删除
     *
     */
     $(".billCont").find(".btn_checkbox").each(function() {

        $(this).unbind().bind("click", function() {

           if ($(this).attr("checked")) {
                $(this).attr("checked", false)
                $(this).find('img').attr('src', "img/shoppingCar/uncheck.png")
            } else {
                $(this).attr("checked", true)
                $(this).find('img').attr('src', "img/shoppingCar/checked.png")
            }

        })

    })


     /**
      *
      * @see   索要发票  动画滑动效果  显示和隐藏
      */
          $(".billCont").find(".btn_checkbox1").unbind().bind("click", function() {
                   if ($(this).attr("checked")) {
                        $(this).attr("checked", false)
                        $(this).find('img').attr('src', "img/shoppingCar/uncheck.png")
                        $(".billCont").find(".billDiv").slideUp()
                    } else {
                        $(this).attr("checked", true)
                        $(this).find('img').attr('src', "img/shoppingCar/checked.png")
                        $(".billCont").find(".billDiv").slideDown()

                    }
        })



}


/**
 * [dealWithComment description]
 * ##############################################
 *
 * @Author                                                                   Copyright    xianfei
 * @Title                               ######
 * @DateTime                                     2016-11-09T17:20:18+0800
 * @description          ##########
 *
 * 好评的效果动画
 * @return      {[type]} [description]
 */
myAnimate.car.dealWithComment = function() {


}
myAnimate.car.normalChange();
myAnimate.car.dealWithComment();
