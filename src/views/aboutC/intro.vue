<template>
<div id="intro">
  <div class="intro-header">
    <p>米素mesu创始于2010年</p>
    <p>隶属于江苏左右环保装饰材料有限公司，专为爱家的你而生</p>
    <h3>以年轻、时尚、亲民、个性的品牌价值</h3>
    <p>多元的工艺与原创元素的艺术混搭引领时尚软装风</p>
    <p>壁纸、墙布、窗帘、壁画四大品类，满足你一站式购买需求</p>
    <h3>米素——更多年轻人的选择</h3>
   </div>
<div class="intro-lun">
  <mu-carousel>
  <mu-carousel-item>
    <img :src="carouselImg1">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg2">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg3">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg4">
  </mu-carousel-item>
  </mu-carousel>
</div>
<div class="intro-bod">
  <div>
    <h1>米，生态自然，不可或缺；素，素雅宜人，我行我素</h1>
    <p>2014年开始，进入快速发展时期并开启线下全国战略布局。自2010年第一家线下门店开业至今，米素全国门店已突破350家，覆盖北京、杭州、郑州、成都、合肥、西安等多座城市,同时米素也是天猫商城壁纸类目TOP1品牌，截至目前，已服务超过500000组家庭。</p>
  </div>
  <div><img src="../../assets/about/s11_bac.jpg" alt=""></div>
</div>
<div class="intro-video">
  <div class="intro-vid">
    <mu-carousel style="width:'100%';height:550px">
  <mu-carousel-item>
    <video src="http://www.mymesu.com/App/Home/View/Default/Public/Image/mesu2.mp4" controls></video>
  </mu-carousel-item>
  <mu-carousel-item>
   <video src="http://www.mymesu.com/App/Home/View/Default/Public/Image/mesu2.mp4" controls></video>
  </mu-carousel-item>
  <mu-carousel-item>
   <video src="http://www.mymesu.com/App/Home/View/Default/Public/Image/mesu2.mp4" controls></video>
  </mu-carousel-item>
  <mu-carousel-item>
    <video src="http://www.mymesu.com/App/Home/View/Default/Public/Image/mesu2.mp4" controls></video>
  </mu-carousel-item>
  </mu-carousel>
  </div>
</div>
</div>

</template>

<script>
import carouselImg1 from '../../assets/about/s10_pic1.jpg'
import carouselImg2 from '../../assets/about/s10_pic2.jpg'
import carouselImg3 from '../../assets/about/s10_pic3.jpg'
import carouselImg4 from '../../assets/about/s10_pic4.jpg'
export default {
  data() {
    return {
      carouselImg1,
      carouselImg2,
      carouselImg3,
      carouselImg4,
    };
  }
};
</script>

<style>
</style>
