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


    /**
     * [description]
     * ##############################################
     *
     * @Author                                                                             Copyright    xianfei
     * @Title                                         ######
     * @DateTime                                               2016-11-04T15:23:16+0800
     * @description          前端展示效果JavaScript
     *
     * ##############################################
     * @param       {[type]} ){                                                                                                   $("#btn_groupmax").operateBtn({                    max:15,                    min:3                });             } [description]
     * @return      {[type]}            [description]
     */

    /**
     *
     * @see   max,min  定义数据  这里需要后端配置下
     */
    //@see  购物车 初始化状态
    //@see   注意这里传入的组件数量应该和购物车里面的商品数量一致!!!!
    // 这里数量选择按钮  组件  需要后端传入一个数组  [{"min":1;"max":8},{"min":2;"max":5},{"min":3;"max":13}]

    //示例  json
    var btnArr = [{
        "single_price": 100, //单价
        "min": 1, //最小数量
        "max": 8 //最大数量
    }, {
        "single_price": 200,
        "min": 2,
        "max": 5
    }, {
        "single_price": 300,
        "min": 3,
        "max": 13
    }];
    var btnLen = btnArr.length;
    if (btnLen) {
        for (var i = 0; i < btnLen; i++) {
            //遍历按钮的时候对每个商品的初始值定义
            $(".main1").find(".m1_u2").eq(i).find(".single_price").text(Number(btnArr[i].single_price).toFixed(2))
            $(".main1").find(".m1_u2").eq(i).find(".count_price").text(Number(btnArr[i].single_price * btnArr[i].min).toFixed(2))
            var btn = $(".btn_groupmax" + i + "").operateBtn({
                index: i,
                max: btnArr[i].max,
                min: btnArr[i].min,
                callback: function(element) {
                    //改变数量组件值的时候触发  商品价格计算
                    _deal_goods_amount(Number(element.opts.index), Number(element.getValue()))
                }
            });
        }
    }

    //全选按钮的逻辑 效果
    $('.main1').find('.btn_check').each(function() {
        $(this).unbind().bind('click', function() {
            if ($(this).attr("checked")) {
                $(this).attr("checked", false)
                $(this).find('img').attr('src', "img/shoppingCar/uncheck.png")
                _calculate_total_money()
            } else {
                $(this).attr("checked", true)
                $(this).find('img').attr('src', "img/shoppingCar/checked.png")
                _calculate_total_money()
            }
        })
    })

    $('body').find('.btn_checkAll').each(function() {

        $(this).unbind().bind('click', function() {
            if ($(this).attr("checked")) {
                $('body').find('.btn_checkAll').attr("checked", false);
                $('body').find('.btn_checkAll').find('img').attr('src', "img/shoppingCar/uncheck.png")
                    //选中
                $('.main1').find('.btn_check').each(function() {
                    $(this).attr("checked", false)
                    $(this).find('img').attr('src', "img/shoppingCar/uncheck.png")
                })
                _calculate_total_money()
            } else {
                //没选中
                $('body').find('.btn_checkAll').attr("checked", true);
                $('body').find('.btn_checkAll').find('img').attr('src', "img/shoppingCar/checked.png")
                $('.main1').find('.btn_check').each(function(index) {
                    $(this).attr("checked", true)
                    $(this).find('img').attr('src', "img/shoppingCar/checked.png")
                })
                _calculate_total_money()
            }
        })
    })


    $(".main1").find(".m1_u2").each(function() {
        //点击收藏的时候样式效果
        $(this).find(".collect").unbind().bind("click", function() {

                if ($(this).attr("checked")) {
                    $(this).find("img").attr("src", "img/shoppingCar/uncollect.png")
                    $(this).attr("checked", false)
                } else {
                    $(this).find("img").attr("src", "img/shoppingCar/collect.png")
                    $(this).attr("checked", true)
                }

            })
            //点击删除的效果
        $(this).find(".delete").unbind().bind("click", function() {
            $(this).parent().parent().hide()
            $(this).parent().parent().find(".btn_check").attr("checked", false)
            _calculate_total_money()
        })

        $("#delete_some").unbind().bind("click", function() {
            $(".main1").find(".btn_check").each(function() {
                if ($(this).attr("checked")) {
                    $(this).parent().hide()
                    $(this).attr("checked", false)
                }
            })
            _calculate_total_money()
        })
    })



    //改变数量组件值的时候触发
    var _deal_goods_amount = function(index, multiple) {
        var single_price = Number($(".main1").find(".m1_u2").eq(index).find(".single_price").text().trim())
        var count_price = (single_price * multiple).toFixed(2)
        $(".main1").find(".m1_u2").eq(index).find(".count_price").text(count_price)
        _calculate_total_money()
    }
    var _calculate_total_money = function() {
        var goodsFee = 0;
        var total = 0;

        $(".main1").find(".m1_u2").each(function() {
            if ($(this).find('.btn_check').attr("checked")) {
                goodsFee += Number($(this).find('.count_price').text().trim())
            }
        })
        total = Number($(".main2").find(".express").text().trim()) + goodsFee;
        $(".main2").find(".goods_all").text(goodsFee.toFixed(2))
        if (goodsFee != 0) {
            $(".totalMoney").text(total.toFixed(2))
            $(".totalMoney2").text(total.toFixed(2))
        } else {
            $(".main2").find(".goods_all").text(0)
            $(".totalMoney").text(0)
            $(".totalMoney2").text(0)
        }

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
myAnimate.car.dealWithComment = function() {


}
myAnimate.car.normalChange();
myAnimate.car.dealWithComment();
