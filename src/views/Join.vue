<template>
  <div id="join">
    <div class="backs" ref="none"></div>
    <div class="swiper">
      <img src="../assets/join_banner.jpg" alt="">
      <div class="route">
        <router-link to="/about/intro" tag="div">加入我们</router-link>

      </div>
    </div>
    <div class="join-header">
      <moodel :data="adve2"></moodel>
      <div class="join-tit"><img src="../assets/shop/join_title1.png" alt=""></div>
      <div class="join-bod">
        <div>
          <h1>产品优势</h1>
          <p>墙纸 窗帘 壁画 四大品类 一店=四店</p>
          <p> 好货平价，覆盖 </p>
          <p> 主流装修客群</p>
        </div>
        <div><img src="../assets/shop/s6_pic3.jpg" alt=""></div>
      </div>
    </div>
    <div class="join-body">
      <div class="join-tod"><img src="../assets/shop/join_title2.png" alt=""></div>
      <div></div>

      <div class="join-lun" v-for="(val,key) in active1" :key="key" v-show="key===num">
        <div><img :src='val.Limg' alt=""></div>
        <div>
          <h1>{{val.Lh}}</h1>
          <p>{{val.Lp}}</p>
        </div>
      </div>

      <div class="join-bo">
        <ul>
          <div v-for="(val,key) in active2" :key="key" @mouseover="mouse(key)">
            <li><img :src='val.iog' alt=""></li>
            <p>{{val.txt}}</p>
          </div>

        </ul>
      </div>
    </div>
    <div class="join-footer">
      <div class="join-tid"><img src="../assets/shop/join_title3.png" alt=""></div>
      <div>
        <ul>
          <li v-for="(val,key) in arr" :key="key">
            <strong>{{val.Num}}</strong>
            <p>{{val.text}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
//导入插件及图片
import moodel from '../components/moodel'
//icon
import dizhi from '../assets/shop/icon_t1squj3pd9/dizhi.png';
import zhuangxiu from '../assets/shop/icon_t1squj3pd9/zhuangxiu.png';
import renyuanguanli from '../assets/shop/icon_t1squj3pd9/renyuanguanli.png';
import shenfenxuanze from '../assets/shop/icon_t1squj3pd9/shenfenxuanze.png';
import yingyeshouru from '../assets/shop/icon_t1squj3pd9/yingyeshouru.png';
import guang from '../assets/shop/icon_t1squj3pd9/广告牌.png';
import kaiye from '../assets/shop/icon_t1squj3pd9/kaiye.png';
//img
import messg1 from '../assets/shop/s7_li1.jpg';
import messg2 from '../assets/shop/s7_li2.jpg';
import messg3 from '../assets/shop/s7_li3.jpg';
import messg4 from '../assets/shop/s7_li4.jpg';
import messg5 from '../assets/shop/s7_li5.jpg';
import messg6 from '../assets/shop/s7_li6.jpg';
import messg7 from '../assets/shop/s7_li7.jpg';
export default {
  mounted () {
    window.addEventListener("scroll", this.scroll);
  },
  components: {
    moodel,
  },
  data () {
    return {
      adve2: [{
        title: '诚邀加盟',
        ad: '尊享360度保姆式服务',
      }],
      active1: [
        {          Limg: messg1,
          Lh: '门店选址指导',
          Lp: "人流、动线、市场规模、租金情况……从门店选址开始, 每一点都关系着店铺往后的经营。“门店所在位置的重要性不言而喻，米素希望通过从一开始的选址就能帮助加盟商准确掌握市场信息。” "        },
        {          Limg: messg2,
          Lh: '门店装修指导',
          Lp: "在门店选址后,米素室内设计团队将在保持米素品牌统一门店形象的基础上，根据门店实际布局提供一对一装修方案，更有最高1200元/平装修补贴,让加盟商装修无忧。 "        },
        {          Limg: messg3,
          Lh: '人员招聘及培训指导',
          Lp: "如何发现并让员工的职业素养和能力发挥出来，为门店带来效益？米素为加盟伙伴提供从招聘到入职培训、接待礼仪等多方位人力资源指导 "        },
        {          Limg: messg4,
          Lh: '产品培训及搭配销售指导',
          Lp: "米素团队将对加盟伙伴及新员工进行为期15天的产品知识及搭配销售培训指导。色彩搭配微课堂、软装搭配实战训练课“一个月装修期结束后，立刻能上手卖货。”"        },
        {          Limg: messg5,
          Lh: '开业帮扶',
          Lp: "为了帮助门店在当地打响第一炮，米素总部团队走过了每一个米素新店开业的城市。从前期蓄客、活动制定,到宣传推广、拓客邀约，到最后落地开业,米素为门店开业签单提供完整且有效、可行的流程方案。 "        },
        {          Limg: messg6,
          Lh: '广告帮扶',
          Lp: "“爆炸式广告支持” 开启地铁、高铁、高炮广告霸屏时代，年均投放30座地铁站，20座高炮广告、超200块广告大屏，年度覆盖传播人数超10000万人。"        },
        {          Limg: messg7,
          Lh: '营销帮扶',
          Lp: "2015年起，米素开启了甲壳虫漂移活动，行驶过华东、华北、西北等中国百余座城，将米素特有的波点元素宣传至全国数亿万人群，成为中国建材行业营销案例的典范。在让更多人了解认知米素的同时，为沿线城市门店带去了数量可观的关注和收益。 "        }
      ],
      active2: [
        {          iog: dizhi,
          txt: '门店选址指导'
        },
        {          iog: zhuangxiu,
          txt: '门店装修指导'
        },
        {          iog: renyuanguanli,
          txt: '人员招聘及培训指导'
        },
        {          iog: shenfenxuanze,
          txt: '产品培训及搭配销售指导'
        },
        {          iog: yingyeshouru,
          txt: '开业帮扶'
        },
        {          iog: guang,
          txt: '广告帮扶'
        },
        {          iog: kaiye,
          txt: '营业帮扶'
        },

      ],
      num: 0,
      arr: [
        {
          Num: "01",
          text: '来电咨询'
        },
        {
          Num: "02",
          text: '接待回复'
        },
        {
          Num: "03",
          text: '双方洽谈'
        },
        {
          Num: "04",
          text: '条件审核'
        },
        {
          Num: "05",
          text: '加盟签约'
        },
        {
          Num: "06",
          text: '门店选址'

        },
        {
          Num: "07",
          text: '门店设计'
        },
        {
          Num: "08",
          text: '门店装修'
        },
        {
          Num: "09",
          text: '产品上样'
        },
        {
          Num: "10",
          text: '门店验收'
        },
        {
          Num: "11",
          text: '开业培训'
        },
        {
          Num: "12",
          text: '开业典礼'
        }
      ]
    }
  },
  methods: {
    mouse (i) {
      this.num = i
    },

  }
}
</script>
<style>
#join .route {
	width: 1200px;
	height: 66px;
	background: #0000008c;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack: distribute;
	justify-content: space-around;
}
</style>