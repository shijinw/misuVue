<template>
  <div id='Stores'>
    <screen></screen>
    <div class="rank">
      <main>
        <!-- 导航 -->
        <div>
          <ul>
            <li v-for="(val,key) in resultarr" :key="key" @click="Dclick(val)">
              <div>
                <p>{{val}}</p>
              </div>
            </li>
          </ul>
          <nav class="povincis" ref="povincis">
            <ul>
              <li v-for="(val,key) in provnce" :key="key" @click="Sclick(val)">
                <div>
                  <p>{{val}}</p>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <!-- 地址 -->
        <div>
          <ul>
            <router-link tag="li" v-for="(val,key) in moundata" :key="key" :to="{path:'/Map',query: {param1:val.name}}" target="iframename">
              <div></div>
              <h1>{{val.name}}</h1>
              <h5></h5>
              <p>{{val.location}}</p>
              <p>{{val.phone}}</p>
            </router-link>
          </ul>
        </div>
        <!-- 分页 -->

      </main>

    </div>

  </div>
</template>

<script>
import screen from '../components/screen'

export default {
  created () {
    fetch('http://wang2019.oss-cn-beijing.aliyuncs.com/address.json')
      .then(res => res.json())
      .then(data => {
        this.moundata = data
        //区域数据
        this.SeekArr = data
        let result = []
        data.forEach(e => {
          result.push(e.gid)
        })
        this.resultarr = [...new Set(result)];
      })

  },

  data () {
    return {
      SeekArr: [],
      onoff: false,
      current: 1,
      moundata: [],//渲染到页面的数据
      page: [],//分页数
      provnce: [],//省份信息数据
      resultarr: [],//区域信息渲染
      //找到对应的pid的数据
      seekPid: function (Pdata, string) {
        let proArr = []
        let pdata = Pdata.filter(e => e.gid == string)
        pdata.forEach(e => {
          proArr.push(e.pid)
        })
        this.provnce = [...new Set(proArr)];
      },
      //找到pid对应的店名数据
      seekData: function (Pdata, string) {

        let Seekdata = Pdata.filter(e => e.pid == string)
        this.moundata = Seekdata

      }
    }
  },



  methods: {
    Dclick (val) {
      this.seekPid(this.SeekArr, val)

    },
    Sclick (val) {
      this.seekData(this.SeekArr, val)
    }
  },
  components: {
    screen,
  }
}
</script>

<style scoped>
#Stores {
	width: 100%;
	height: 100%;
}
#Stores .rank {
	width: 100%;
}
.povincis {
	width: 100%;
	margin: 40px 0;
}
main {
	max-width: 1200px;
	height: 100%;
	margin: 20px auto 50px;
	position: relative;
}

main div:nth-child(1) {
	width: 100%;
}

main div:nth-child(1) ul {
	display: flex;
	flex-wrap: wrap;
	justify-content: end;
}

main div:nth-child(1) ul li {
	width: 190px;
	height: 80px;
	margin-right: 20px;
	margin-top: 20px;
	background: #dadada;
	font-size: 16px;
}

main div:nth-child(1) ul li div {
	width: 190px;
	height: 80px;
	transition: all 1s;
}

main div:nth-child(1) ul li div:hover {
	background: #0a1a3c;
	border: 15px solid #fdd746;
	font-size: 16px;
	color: white;
}

main div:nth-child(1) ul li div p {
	text-align: center;
	line-height: 60px;
}

main div:nth-child(2) {
	width: 100%;
	height: 100%;
}

main div:nth-child(2) div {
	width: 100%;
	height: 80px;
	position: absolute;
	text-align: center;
	bottom: 0;
	display: flex;
	flex-direction: row;
	justify-content: center;
	color: #1b80b2;
	font-size: 15px;
	font-family: 方正兰亭超细黑简体;
	line-height: 50px;
}

main div:nth-child(2) ul {
	display: flex;
	flex-wrap: wrap;
	justify-content: end;
}

main div:nth-child(2) ul li {
	width: 380px;
	height: 160px;
	padding: 25px;
	border: 1px solid #5c667552;
	margin-right: 15px;
	margin-top: 15px;
	overflow: hidden;
	position: relative;
}

main div:nth-child(2) ul li:hover div {
	opacity: 0.7;
}

main div:nth-child(2) ul li div {
	width: 380px;
	height: 160px;
	padding: 25px;
	background: #000000;
	opacity: 0;
	left: 0;
	transition: opacity 2s;
	top: -15px;
	margin-right: 15px;
	margin-top: 15px;
	position: absolute;
}

main div:nth-child(2) ul li h5 {
	width: 30px;
	height: 8px;
	margin-bottom: 5px;
	border-bottom: 2px solid #beb817;
}

main div:nth-child(2) ul li p {
	color: #6e7881;
	font-size: 15px;
	font-family: 微软雅黑;
}
</style>