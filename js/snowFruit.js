var myAnimate = myAnimate || {};
/**
 * [namespace description]
 * ##############################################
 *
 * @Author                                                                             Copyright    xianfei
 * @Title                                         ######
 * @DateTime                                               2016-10-31T15:34:48+0800
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
        console.log(parent);
    }
    return parent;
}
myAnimate.namespace("myAnimate.snowFruitLogin");

/**
 * [sliderEffect description]
 * ##############################################
 *
 * @Author                                                                   Copyright    xianfei
 * @Title                               ######
 * @DateTime                                     2016-10-31T15:37:37+0800
 * @description          雪山生鲜滑动效果实现
 *
 * ##############################################
 * @return      {[type]} [description]
 */
myAnimate.snowFruitLogin.sliderEffect = function() {
    var _0Img = $("#carouselImg");
    var oImg = $("#carouselImg")[0];
    var oLi = document.getElementsByTagName('li');
    var count = 1;
    var total = 5;

    function changePic() {
        count++;
        if (count > 5) {
            count = 1;
        }
        for (var i = 0; i < total; i++) {
            oLi[i].style.background = '#fff';
        }
        oLi[count - 1].style.background = '#54F254';
        _0Img.fadeOut(1800, function() {
            oImg.src = 'img/back' + count + '.png';
            _0Img.fadeIn(1000);
        })
    }
    var interID = setInterval(changePic, 2800);
    //鼠标移入停止播放
    oImg.onmouseover = function() {
            clearInterval(interID);
        }
        //鼠标移出继续播放
    oImg.onmouseout = function() {
            clearInterval(interID);
            interID = setInterval(changePic, 4000);
        }
        //鼠标移入到数字上的时候,显示对应的图片

    oLi[0].style.background = '#54F254';
    for (var num = 0; num < oLi.length; num++) {
        //给每个li标签增加属性，保存当前的索引位置
        oLi[num].index = num;
        //移到到数字上,停止播放
        oLi[num].onmouseover = function() {
                console.log('num')
                oLi[0].style.background = '#fff';
                //停止播放
                clearInterval(interID);
                this.style.background = '#54F254';
                count = this.index;
                //调用循环播放图片方法
                changePic();
            }
            //移出时,继续从停止的地方播放
        oLi[num].onmouseout = function() {
            clearInterval(interID);
            interID = setInterval(changePic, 4000);
            this.style.background = '#fff';
            count = this.index;
            changePic();
        }
    }
}

myAnimate.snowFruitLogin.getScroll = function() {

    console.log(111111)
    var ScrollWin = {
        w3c: document.getElementById,
        iex: document.all,
        scrollLoop: false,
        scrollInterval: null, // setInterval id
        currentBlock: null, // object reference
        getWindowHeight: function() {
            if (this.iex) return (document.documentElement.clientHeight) ?
                document.documentElement.clientHeight : document.body.clientHeight;
            else return window.innerHeight;
        },
        getScrollLeft: function() {
            if (this.iex) return (document.documentElement.scrollLeft) ?
                document.documentElement.scrollLeft : document.body.scrollLeft;
            else return window.pageXOffset;
        },
        getScrollTop: function() {
            if (this.iex) return (document.documentElement.scrollTop) ?
                document.documentElement.scrollTop : document.body.scrollTop;
            else return window.pageYOffset;
        },
        getElementYpos: function(el) {
            var y = 0;
            while (el.offsetParent) {
                y += el.offsetTop
                el = el.offsetParent;
            }
            return y;
        },
        scroll: function(num) {
            if (!this.w3c) {
                location.href = "#" + this.anchorName + num;
                return;
            }
            if (this.scrollLoop) {
                clearInterval(this.scrollInterval);
                this.scrollLoop = false;
                this.scrollInterval = null;
            }
            if (this.currentBlock != null) this.currentBlock.className = this.offClassName;
            this.currentBlock = document.getElementById(this.blockName + num);
            this.currentBlock.className = this.onClassName;
            var doc = document.getElementById(this.containerName);
            var documentHeight = this.getElementYpos(doc) + doc.offsetHeight;
            var windowHeight = this.getWindowHeight();
            var ypos = this.getElementYpos(this.currentBlock);
            if (ypos > documentHeight - windowHeight) ypos = documentHeight - windowHeight;
            this.scrollTo(0, ypos);
        },
        scrollTo: function(x, y) {
                if (this.scrollLoop) {
                    var left = this.getScrollLeft();
                    var top = this.getScrollTop();
                    if (Math.abs(left - x) <= 1 && Math.abs(top - y) <= 1) {
                        window.scrollTo(x, y);
                        clearInterval(this.scrollInterval);
                        this.scrollLoop = false;
                        this.scrollInterval = null;
                    } else {
                        window.scrollTo(left + (x - left) / 10, top + (y - top) / 10);
                    }
                } else {
                    this.scrollInterval = setInterval("ScrollWin.scrollTo(" + x + "," + y + ")", 20);
                    this.scrollLoop = true;
                }
            }
    };
    ScrollWin.containerName = "container";
    ScrollWin.anchorName = "anchor";
    ScrollWin.blockName = "block";
    ScrollWin.onClassName = "active";
    ScrollWin.offClassName = "visited";
    console.log(ScrollWin)
    return ScrollWin;
}
myAnimate.snowFruitLogin.sliderEffect();
var ScrollWin = myAnimate.snowFruitLogin.getScroll();
