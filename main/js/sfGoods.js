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
myAnimate.namespace("myAnimate.goods");

/**
 * [sliderEffect description]
 * ##############################################
 *
 * @Author                                                                   Copyright    xianfei
 * @Title                               ######
 * @DateTime                                     2016-11-09T17:17:17+0800
 * @description          添加计数按钮的模块
 *
 * ##############################################
 * @return      {[type]} [description]
 */
myAnimate.goods.addContBtn = function() {
            $(function(){
                 /**
                  *
                  * @see   max,min  定义数据  后端可以修改对应的参数
                  */
                $("#goodsNum").operateBtn({
                    max:5,
                    min:1
                });

             });

}

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
myAnimate.goods.normalChange = function() {


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
     // tabChange
           //goods_status
           $(".cont1").find(".goods_status").each(function(index,ele){
                    $(this).unbind().bind("click",function(){
                            $(".ct1_line3").find(".goods_status").removeClass("active")
                            $(this).addClass("active")
                            $(".cont1").find(".goodsType").removeClass("fn_show").eq(index).addClass("fn_show");
                    })
           });


           //评论类型的点击事件
            _onload_commentType_change()
            /**
             * [_onload_commentType_change description]
             * ##############################################
             *
             * @Author                                                                   Copyright    xianfei
             * @Title                               ######
             * @DateTime                                     2016-11-09T09:50:18+0800
             * @description          商品详情  评价区块的点击切换  评价类型 效果
             *
             * ##############################################
             * @return      {[type]} [description]
             */
           function _onload_commentType_change(){
                    $("#commentTitle").find("span").each(function(index,ele){
                            $(this).unbind().bind("click",function(){
                                    $("#commentTitle").find("span").removeClass("active");
                                    $(this).addClass("active");
                            })
                    })
           }

           /**
            * [_onload_goods_type_select description]
            * ##############################################
            *
            * @Author                                                                   Copyright    xianfei
            * @Title                               ######
            * @DateTime                                     2016-11-09T17:27:48+0800
            * @description          选择商品种类的js
            *
            * ##############################################
            * @return      {[type]} [description]
            */
           _onload_goods_type_select();
           function  _onload_goods_type_select(){
                    $("#selectColor").find(".square").each(function(){
                        $(this).unbind().bind('click',function(){
                            $("#selectColor").find(".square").removeClass("active")
                            $(this).addClass("active")
                        })
                    })
                    $("#selectSize").find(".square").each(function(){
                         $(this).unbind().bind('click',function(){
                                $("#selectSize").find(".square").removeClass("active")
                                $(this).addClass("active")
                         })
                    })
           }

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
myAnimate.goods.dealWithComment = function() {

           // @xxxxx加载商品评价页面后端需要传入 [好评..]的数据
         /**
            * [dealWithComment description]
            * ##############################################
            *
            * @Author                                                                                Copyright    xianfei
            * @Title                                            ######
            * @DateTime                                                  2016-11-08T17:50:17+0800
            * @description              用户好评数据展示
            *
            * ##############################################
            * @param       {[type]} goodPercent   [description]
            * @param       {[type]} normalPercent [description]
            * @param       {[type]} badPercent    [description]
            * @return      {[type]}               [description]
            */
           var  goodPercent = 0.96
           var normalPercent = 0.04
           var badPercent = 0
           dealWithComment(goodPercent,normalPercent,badPercent)
           function dealWithComment(goodPercent,normalPercent,badPercent){
                    var goodPer = goodPercent*100+'%';
                    var normalPer = normalPercent*100+'%';
                    var badPer = badPercent*100+'%';
                    var goodLen = 150*goodPercent;
                    var goodLen1 = 150-goodLen;
                    var norLen  = 150*normalPercent;
                    var norLen1 = 150-norLen;
                    var badLen  = 150*badPercent;
                    var badLen1 = 150-badLen;
                    $("#goodComment1").css('width',goodLen);
                    $("#goodComment2").css('width',goodLen1);
                    $("#normalComment1").css('width',norLen);
                    $("#normalComment2").css('width',norLen1);
                    $("#badComment1").css('width',badLen);
                    $("#badComment2").css('width',badLen1);
                     $("#good").text(goodPer);
                     $("#normal").text(normalPer);
                     $("#bad").text(badPer);
           }

}
myAnimate.goods.addContBtn();
myAnimate.goods.normalChange();
myAnimate.goods.dealWithComment();
