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
myAnimate.namespace("myAnimate.search");



myAnimate.search.normalChange = function() {
    //xxxxxx
    // 排序样式
    // //.ct1_h3  li:after
    $(".cont1").find(".sortLine").unbind().bind("click", function() {
        if (!$(this).hasClass("active")) {
            $(".cont1").find(".upimg").removeClass("show");
            $(".cont1").find(".sortLine").removeClass("active")
            $(this).addClass("active")
            $(this).find(".upimg").addClass("show");
        }
    })

    $("#sortAll").find(".classify").find(".ct1_part").unbind().bind("click", function() {
        $("#sortAll").find(".classify").find(".ct1_part").removeClass("active")
        $(this).addClass("active")
    })

    $("#sortAll").find(".brand").find(".ct1_part").unbind().bind("click", function() {
        $("#sortAll").find(".brand").find(".ct1_part").removeClass("active")
        $(this).addClass("active")
    })
    $("#sortAll").find(".price").find(".ct1_part").unbind().bind("click", function() {
        $("#sortAll").find(".price").find(".ct1_part").removeClass("active")
        $(this).addClass("active")
    })

    $("#sortAll").find(".classify").find(".show_more").unbind().bind("click", function() {
        if ($(this).find("img").attr("src") == "img/search/more.png") {
            $(this).find("img").attr("src", "img/search/hid.png")
            $("#sortAll").find(".classify").removeClass("fn_none")
        } else {
            $(this).find("img").attr("src", "img/search/more.png")
            $("#sortAll").find(".classify:gt(0)").addClass("fn_none")
        }
    })

    $("#sortAll").find(".brand").find(".show_more").unbind().bind("click", function() {
        if ($(this).find("img").attr("src") == "img/search/more.png") {
            $(this).find("img").attr("src", "img/search/hid.png")
            $("#sortAll").find(".brand").removeClass("fn_none")
        } else {
            $(this).find("img").attr("src", "img/search/more.png")
            $("#sortAll").find(".brand:gt(0)").addClass("fn_none")
        }
    })

}
myAnimate.search.normalChange();
