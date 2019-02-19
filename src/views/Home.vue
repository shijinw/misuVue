<template>
  <div id="bod">
    <div class="bod" ref="Bod">
      <mu-carousel>
        <mu-carousel-item>
          <router-link to="/about/intro" tag="img" :src="banner1"> </router-link>
        </mu-carousel-item>
        <mu-carousel-item>
          <router-link to="/product/convering" tag="img" :src="banner2"> </router-link>
        </mu-carousel-item>
        <mu-carousel-item>
          <router-link to="/" tag="img" :src="banner3"> </router-link>
        </mu-carousel-item>
      </mu-carousel>
    </div>
    <div class="middle" @scroll="scroll" :class=s1>
      <moodel :data="adve1"></moodel>
      <div class="mdbody">
        <div v-for="(val,key) in headboy" :key="key" @mouseover="move(key)">
          <img :src="val.img" alt="">
          <h1>{{val.h1}}</h1>
          <p>{{val.p}}</p>
        </div>
      </div>
      <div class="mdfoot">
        <router-link to="/about/intro" tag="span">了解更多</router-link>
        <router-link to="/stores" tag="span">查看门店</router-link>
      </div>
    </div>
    <section class="half">
      <moodel :data="adve2"></moodel>
      <main class="halfbody">
        <div>
          <ul>
            <li v-for="(val,key) in halfbody" :key="key">
              <h1>{{val.num}}</h1>
              <p>{{val.p}}</p>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li v-for="(val,key) in headboy0" :key="key" ref="shift" @mouseover="shift(key)"><img :src="val" alt="">
            </li>
            <img class="banne" ref="banner" :src="banner" alt="">
          </ul>
        </div>
        <div>
          <router-link to="/join" tag="span">了解更多</router-link>
          <span>立即加盟</span>
        </div>
      </main>
    </section>
    <div class="product">
      <moodel :data="adve3"></moodel>
      <div class="promain">
        <div class="probox">
          <img src="../assets/pic1.jpg" alt="米素">
          <router-link to="/product/convering" tag="div">
            <img src="../assets/prologo.png" alt="米素">
            <h1>壁纸</h1>
            <p>了解更多</p>
          </router-link>
        </div>
        <div class="probox">
          <img src="../assets/pic2.jpg" alt="米素">
          <router-link to="/product/curain" tag="div">
            <img src="../assets/prologo.png" alt="米素">
            <h1>墙布</h1>
            <p>了解更多</p>
          </router-link>
        </div>
        <div class="probox">
          <img src="../assets/pic3.jpg" alt="米素">
          <router-link to="/product/mural" tag="div">
            <img src="../assets/prologo.png" alt="米素">
            <h1>窗帘</h1>
            <p>了解更多</p>
          </router-link>
        </div>
        <div class="probox">
          <img src="../assets/pic4.jpg" alt="米素">
          <router-link to="/product/wallpaper" tag="div">
            <img src="../assets/prologo.png" alt="米素">
            <h1>壁画</h1>
            <p>了解更多</p>
          </router-link>
        </div>
      </div>
      <div class="mdfoot">
        <span>测量更多</span>
        <router-link to="/product/convering" tag="span">查看全部</router-link>
      </div>
    </div>
    <div class="video">
      <div class="mdtitle">
        <p>品牌故事</p>
        <h1>居于上，艺术由心生；形于美，生活在自然</h1>
      </div>
      <div class="intro-video">
        <div class="intro-vid">
          <mu-carousel style="width:'100%';height:550px;margin-top:100px">
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
      <div class="video-f">米素--品牌故事</div>

    </div>
    <div class="foo">
      <moodel :data="adve4"></moodel>
      <main>
        <router-link :to="{path:'/newsD',query: {param1:'1139'}}" tag="div">
          <img src="../assets/foob.png" alt="">
          <div>
            <h1>口碑的力量！“双十一销冠”的背后是你不了解的米素！</h1>
            <p class="foo1">2018-11-21</p>
          </div>
        </router-link>
        <ul>
          <router-link tag="li" v-for=" (val,key) in foodata" :key="key" :to="{path:'/newsD',query: {param1:val.id}}">
            <div></div>
            <h1>{{val.h3}}</h1>
            <p>{{val.p}}</p>
          </router-link>
        </ul>
      </main>
      <div class="mdfoot">
        <router-link to="/press" tag="span">查看更多</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import moodel from "@/components/moodel.vue";
import banner1 from "../assets/b1.jpg";
import banner2 from "../assets/shop/5b3739adb627d.jpg";
import banner3 from "../assets/shop/5bc3e137d8b53.jpg";
import ban1 from '../assets/bo1.jpg';
import ban2 from '../assets/bo2.jpg';
import ban3 from '../assets/bo3.jpg';
import ban4 from '../assets/bo4.jpg';
import ban01 from '../assets/s1_1_2.jpg';
import ban02 from '../assets/s1_2_2.jpg';
import ban03 from '../assets/s1_3_2.jpg';
import ban04 from '../assets/s1_4_2.jpg';
export default {
  mounted () {
    window.addEventListener("scroll", this.scroll);
  },
  components: {
    moodel
  },
  data () {
    return {
      banner1,
      banner2,
      banner3,
      halfbody: [
        { num: "01", p: "门店选址指导" },
        { num: "02", p: "门店装修指导" },
        { num: "03", p: "人员培训指导" },
        {
          num: "04",
          p: "试营开业帮扶"
        },
        { num: "05", p: "门店营销支持" }
      ],
      adve1: [{ title: "关于我们", ad: "生活艺术家" }],
      adve2: [{ title: "诚邀加盟", ad: "尊享360度保姆式服务" }],
      adve3: [{ title: "产品展示", ad: "四大类品 一站式购买" }],
      adve4: [{ title: "新闻中心", ad: "媒体资讯强势报道" }],
      headboy: [
        {
          img:
            "http://www.mymesu.com/App/Home/View/Default/Public/Image/ico1.png",
          h1: "软装典范 行业标杆",
          p:
            "为了给您带来更好的家居体验，米素以更优质、更具设计感、更高性价比的产品为每个家庭打造美好生活家"
        },
        {
          img:
            "http://www.mymesu.com/App/Home/View/Default/Public/Image/ico2.png",
          h1: "年轻势力 成就未来",
          p:
            "米素全国门店已突破300家，全面覆盖北京、杭州、郑州、成都、合肥、西安等一线及省会城市"
        },
        {
          img:
            "http://www.mymesu.com/App/Home/View/Default/Public/Image/ico3.png",
          h1: "年轻品牌 永不止步",
          p:
            "在引领全国时尚软装风的道路上，米素从未止步，不仅成为中国室内装饰协会墙纸墙布专业委员会理事单位，还获有中国家居原创设计奖、中国墙纸行业十大品牌、中国家居产业十大互联网+企业、天猫美家年度总冠军等荣誉及认证"
        }
      ],
      foodata: [
        {          id: '1139',
          h3: "口碑的力量！“双十一销冠”的背后是你不了解的米素！",
          p:
            "经过长达24小时的激烈鏖战，各类行业类目的“双十一”成绩单均已新鲜出炉。连续多年在“双十一”活动中摘得销售桂冠的米素，今年再获双"
        },
        {          id: '1137',
          h3: "临沭、西峡米素双店齐开，用心为你而来！",
          p:
            "10月，米素线下专卖店在山东临沭、河南西峡双店齐开，米素总部迅速组建帮扶团队前往门店协助开业筹备工作，从开业活动策划到门店导购培"
        },
        {          id: '807',
          h3: "米素“新软装时代 创享计划峰会”诚邀您的到来！",
          p:
            "2018年10月30日-31日，由米素主办的“新软装时代 创享计划峰会”将于常州白金汉爵大酒店隆重启幕。届时泛家居行业领袖、加盟"
        }
      ],
      s1: "bg0",
      headboy0: [ban1, ban2, ban3],
      banner: ban04
    };
  },
  methods: {
    //鼠标滚轮事件
    scroll () {
      let scrollTop = document.documentElement.scrollTop;
      let { Bod } = this.$refs;
      if (scrollTop > 640) {
        Bod.style.opacity = 0;
      } else if (scrollTop <= 740) {
        Bod.style.opacity = 1;
      }
    },
    //鼠标移入事件
    move (o) {
      switch (o) {
        case 0:
          this.s1 = "bg0";
          break;
        case 1:
          this.s1 = "bg1";
          break;
        case 2:
          this.s1 = "bg2";
          break;
        default:
          this.s1 = "bg0";
      }
    },
    shift (i) {
      console.log(i);

      let { shift, banner } = this.$refs
      switch (i) {
        case 0:
          shift[i].style.left = '1085px'
          banner.style.right ='110px'          
          break;
        case 1:
          shift[i].style.left = '970px'
          banner.style.right ='225px'
          break;
        case 2:
          shift[i].style.left = '855px'
          banner.style.right ='340px'
          break;
      //   case 3:
      //     shift[i].style.left = '740px'
     }
    },
    // down (i) {
    //     let { shift } = this.$refs
    //   switch (i) {
    //     case 0:
    //       shift[i].style.left = '0px'
    //       break;
    //     case 1:
    //       shift[i].style.left = '110px'
    //       break;
    //     case 2:
    //       shift[i].style.left = '225px'
    //       break;
    //     case 3:
    //       shift[i].style.left = '340px'
    //   }
    // }
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll);//监听页面滚动事件
  },
};
</script>
<style>
#bod .mu-carousel {
	height: 40.1rem;
}
#bod .mu-carousel-item {
	cursor: pointer;
}
.bg0 {
	background: url('../assets/s1.jpg') no-repeat 0 -350px;
}
.bg1 {
	background: url('../assets/s2.jpg') no-repeat 0 -350px;
}
.bg2 {
	background: url('../assets/s3.jpg') no-repeat 0 -350px;
}
</style>