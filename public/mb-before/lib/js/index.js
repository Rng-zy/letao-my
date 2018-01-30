window.addEventListener("load",function () {
    var letaopage=new letaoPage();
    // 轮播图；
    letaopage.letaoslide();
    letaopage.letaospringback();
  })

var letaoPage=function () {  };

letaoPage.prototype={
    // 轮播图mui -js
    letaoslide:function () {
        //获得slider插件对象
        var gallery = mui('.mui-slider');
        gallery.slider({
        interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
        });
      },
    letaospringback:function () {
        mui('.mui-scroll-wrapper').scroll({
          deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
      }
}