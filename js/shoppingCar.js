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
myAnimate.car.addContBtn = function() {


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
        $(".btn_groupmax1").operateBtn({
            max: 5,
            min: 1
        });
        $(".btn_groupmax2").operateBtn({
            max: 5,
            min: 1
        });
        $(".btn_groupmax3").operateBtn({
            max: 5,
            min: 1
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
myAnimate.car.normalChange = function() {


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
myAnimate.car.addContBtn();
myAnimate.car.normalChange();
myAnimate.car.dealWithComment();
