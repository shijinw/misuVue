<template>
  <div id="app">
    <div class="head">
      <div class="headd">      
        
        <img src="./assets/logo.png" alt="">
        <div class="hea" ref="act">
          <router-link to="/" tag="div" class="{this.rout}">首页 </router-link>
          <router-link to="/join" tag="div">招商加盟</router-link>
          <router-link to="/product" tag="div">产品中心
            <h5 class="yin">
              <p>
                <router-link :to="{path:'/product/convering'}" tag="p">壁纸</router-link>
                <router-link :to="{path:'/product/curain'}" tag="p">墙布</router-link>
                <router-link :to="{path:'/product/mural'}" tag="p">窗帘</router-link>
                <router-link :to="{path:'/product/wallpaper'}" tag="p">壁画</router-link>
              </p>
            </h5>
          </router-link>
          <router-link to="/press" tag="div">新闻中心</router-link>
          <router-link to="/stores" tag="div">门店分布
            <h5 class="yin">
              <p>
                <router-link :to="{path:'/stores'}" tag="p">新开门店</router-link>
                <router-link :to="{path:'/Map'}" tag="p">附近门店</router-link>

              </p>
            </h5>
          </router-link>
          <router-link to="/about" tag="div">关于米素
            <h5 class="yin">
              <p>
                <router-link :to="{path:'/about/intro'}" tag="p">公司简介</router-link>
                <router-link :to="{path:'/about/course'}" tag="p">品牌历程</router-link>
                <router-link :to="{path:'/about/honor'}" tag="p">品牌荣誉</router-link>
              </p>
            </h5>

          </router-link>
        </div>
       
        <div class="head-tel">
          <p>400-828-2087</p>
          <span>客服热线/招商热线</span>
        </div>
      </div>
      <div class="navgition" ref="navgition">
        <ul>
          <router-link to="/" tag="li"><img :src="home" alt="">首页</router-link>
          <router-link to="/product/convering" tag="li"><img :src="press" alt="">产品中心</router-link>
          <router-link to="/press" tag="li"><img :src="news" alt="">新闻页</router-link>
          <li to="/press" tag="li" @click="scrtop"><img :src="back" alt="">返回顶部</li>
        </ul>
      </div>
    </div>
    <router-view />

    <div class="footer">
      <div class="footbox">
        <div><img src="./assets/footlo.png" alt="">
          <p>400-828-2087</p>
        </div>
        <div class="fooright">
          <ul>
            <li>
              <h2>P . 产品中心</h2>
              <router-link to="/product/convering" tag="p">壁纸系列</router-link>
              <router-link to="/product/curain" tag="p">墙布系列</router-link>
              <router-link to="/product/mural" tag="p">窗帘系列</router-link>
              <router-link to="/product/wallpaper" tag="p">壁画系列</router-link>
            </li>
            <li>
              <h2>N . 新闻中心</h2>
              <router-link to="/press" tag="p">品牌动态</router-link>
              <router-link to="/press" tag="p">家装资讯</router-link>
            </li>
            <li>
              <h2>S . 门店分布</h2>
              <router-link to="/Map" tag="p">附近门店</router-link>
              <router-link to="/stores" tag="p">新开门店</router-link>
            </li>
            <li>
              <h2>C . 关于米素</h2>
              <router-link to="/about/intro" tag="p">公司简介</router-link>
              <router-link to="/about/course" tag="p">公司简介</router-link>
              <router-link to="/about/honor" tag="p">品牌荣誉</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="
                footstop">
        <p>CopyRight © 2018 米素官网 All Rights Reserved. 苏ICP备18024169号-1 </p><span>【管理登陆】</span>
        <span>【免责声明】</span>
      </div>
    </div>

  </div>

</template>

<style lang="less">
.yin {
	width: 100%;
	height: 60px;
	position: absolute;
	background: #5c6675a8;
	display: none;
	left: 0;
	top: 100px;
	transition: all 1.7s;
	p {
		width: 400px;
		height: 100%;
		margin: 0 auto;
		p {
			float: left;
			width: 80px;
			line-height: 60px;
			color: #fff;
		}
	}
}
.navgition {
	width: 120px;
	height: 435px;
	position: fixed;
	right: -120px;
	top: 220px;
	z-index: 9999;
	transition: all 1s;
	li {
		width: 96px;
		height: 96px;
		margin: 10px;
		background: #222;
		text-align: center;
		color: #fff;
		font-weight: 600;
		font-size: 16px;
		cursor: pointer;
		&:hover {
			background: #777;
			opacity: 0.8;
		}
		img {
			width: 50px;
			height: 50px;
			margin: 13px 23px 0 23px;
		}
	}
}
.hea .rou:hover > .yin {
	display: block;
}
.rou-t {
	border-bottom: 3px solid #56d1ec;
}
</style>
<script>
import home from './assets/首页-选中.png';
import press from './assets/产品.png';
import news from './assets/新闻.png';
import back from './assets/返回顶部.png';
export default {
  created () {
    window.addEventListener("scroll", this.scroll);


  },
  data () {
    return {
      scrollto: 0,
      back,
      home,
      news,
      press,
      rout: ''
    }
  },

  //监听滚轮事件改变
  watch: {
    scrollto () {
      let { navgition } = this.$refs;
      if (!this.scrollto == 0) {
        navgition.style.right = '-120px'
        setTimeout(function () {
          navgition.style.right = '0px'
        }, 2000)
      }
    },
    $route (n) {
      let { navgition } = this.$refs;
      navgition.style.right = '-120px'
      this.rout = n.path
    },

  },
  methods: {
    //鼠标滚轮事件
    scroll () {
      let scrollTop = document.documentElement.scrollTop;
      this.scrollto = scrollTop
    },
    scrtop () {
      let time = window.pageYOffset;
      (function animate () {
        let timer = requestAnimationFrame(animate);
        time -= 100;
        if (time <= 0) {
          time = 0;
        }
        window.scrollTo(0, time);
        if (time == 0) {
          cancelAnimationFrame(timer);
        }
      })();
    },

  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll);//监听页面滚动事件
  },
};
</script>