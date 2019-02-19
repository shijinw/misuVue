<template>
  <div id="Honor">
    <moodel :data="adve1"></moodel>
    <div class="Honor-bod">
      <ul>
        <li v-for="(val,key) in adve2" :key="key">
          <img :src="val.img" alt="">
          <p>{{val.title}}</p>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
import moodel from "../../components/moodel";
import honor1 from '../../assets/about/5b35e06365a0a.jpg';
import honor2 from '../../assets/about/5b35e0634c7ac.jpg';
import honor3 from '../../assets/about/5b35e063c0f10.jpg';
import honor4 from '../../assets/about/5b35e063aa3c2.jpg';
import honor5 from '../../assets/about/5b35e0639348d.jpg';
import honor6 from '../../assets/about/5b35e0637cd28.jpg';
import honor7 from '../../assets/about/5b35e06336fe7.jpg';
import honor8 from '../../assets/about/5b35e0631d5b9.jpg'
export default {
  components: {
    moodel
  },
  data () {
    return {
      adve1: [
        {
          title: "品牌荣誉",
          ad: "居于上，艺术由心生。形于美，生活在自然"
        }
      ],
      adve2: [
        {
          img: honor1,
          title: "天猫名品百亿俱乐部成员"
        },
        {
          img: honor2,
          title: "天猫美家年度总冠军"
        },
        {
          img: honor3,
          title: "中国室内装饰协会墙纸墙布专业委员会理事单位"
        },
        {
          img: honor4,
          title: "中国墙纸墙布行业影响品牌"
        },
        {
          img: honor5,
          title: "中国墙纸行业十大品牌"
        },
        {
          img: honor6,
          title: "天猫墙纸类目top品牌"
        },
        {
          img: honor7,
          title: "2015中国家居原创设计奖"
        },
        {
          img: honor8,
          title: "2015中国家居产业十大互联网+企业"
        }
      ]
    };
  }
};
</script>

<style>
#Honor {
	width: 100%;
	height: 1100px;
	position: relative;
	background: white;
}
.Honor-bod {
	width: 1200px;
	height: 900px;
	position: relative;
	margin: 0 auto;
	top: 200px;
}
.Honor-bod ul {
	display: flex;
	flex-wrap: wrap;
}
.Honor-bod li {
	width: 400px;
	height: 220px;
	text-align: center;
	margin: 30px 0;
}
.Honor-bod li img {
	width: 200px;
	height: 190px;
}
.Honor-bod li p {
	font-size: 18px;
	color: #333;
	font-weight: lighter;
}
</style>
