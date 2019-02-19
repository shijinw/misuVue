<template>
  <div id="press">

    <div class="press-updemo">
      <div>
        <mu-carousel transition="fade">
          <mu-carousel-item >
            <router-link tag="img" :src="carouselImg1" :to="{path:'/newsD',query: {param1:'807'}}">
             </router-link>
          </mu-carousel-item>
          <mu-carousel-item >
            <router-link tag="img" :src="carouselImg2" :to="{path:'/newsD',query: {param1:'1137'}}">
               </router-link>
          </mu-carousel-item>
          <mu-carousel-item >
            <router-link tag="img" :src="carouselImg3" :to="{path:'/newsD',query: {param1:'1139'}}">
              </router-link>
          </mu-carousel-item>
        </mu-carousel>
      </div>
      <div class="updemo-right">
        <div>
          <span><img src="../assets/news/5b7a19732de96.png" alt=""></span>
          <router-link tag="span" :to="{path:'/newsD',query: {param1:806}}" target="iframename">
            <main>
              <i>DATE/2018-10-17</i>
              <h1>宝剑赠英雄 ▏米素优秀加盟商授车仪式成功举行...</h1>
              <p>嘉峪关、酒泉加盟商何晴凭借卓越的销售成绩，荣获“米素优秀加盟商”并且获得总部授予的甲壳虫一辆，授车仪式于10月12日在常...</p>
            </main>
          </router-link>
        </div>
        <div>
          <span><img src="../assets/news/5bc6fa69e9ec7.jpg" alt=""></span>
          <router-link tag="span" :to="{path:'/newsD',query: {param1:509}}" target="iframename">
            <main>
              <i>DATE/2018-08-20</i>
              <h1>2018上海墙纸布艺展圆满结束,米素传递品牌力量！...</h1>
              <p>&nbsp;为期三天的第26届中国（上海）墙纸布艺窗帘暨家居软装饰展览会（简称：上海墙纸布艺展），于8月13日圆满结束。...</p>
            </main>
          </router-link>
        </div>
      </div>
    </div>
    <div class="press-dndemo">
      <ul>
        <router-link tag="li" v-for=" (val,key) in arr" :key="key" :to="{path:'/newsD',query: {param1:val.id}}" target="iframename">
          <main>
            <h6>{{val.time}}</h6>
            <h1>{{val.title}}</h1>
            <p>{{val.Newp}}</p>
          </main>
        </router-link>

      </ul>
    </div>
  </div>
</template>

<script>
import carouselImg1 from "../assets//news/5bc6fc56034c5.jpg";
import carouselImg2 from "../assets/news/5bdfb758c91d9.png";
import carouselImg3 from "../assets//news/5bf512bdec41c.png";

export default {
  created () {
    fetch('http://wang2019.oss-cn-beijing.aliyuncs.com/news.json')
      .then(res => res.json())
      .then(data => {
        this.arr = data

      })
  },
  data () {
    return {
      carouselImg1,
      carouselImg2,
      carouselImg3,
      arr: []
    };
  }
};
</script>

<style scoped>
#press {
	margin-top: 100px;
}

#press .mu-carousel {
	width: 770px;
	height: 600px;
}
#press .mu-carousel-item > img {
	height: 600px;
}
</style>