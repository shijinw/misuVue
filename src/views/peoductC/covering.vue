<template>
  <div id="convering">
    <div class="product-body">
      <mu-container>
        <mu-breadcrumbs divider="—">
          <mu-breadcrumbs-item v-for="(val) in items" :key="val.text" :disabled="val.disabled" to="/">{{val.text}}</mu-breadcrumbs-item>
          <h1>壁纸系列</h1>
        </mu-breadcrumbs>

      </mu-container>
      <div class="product-html">
        <ul>
          <router-link v-for="(val,key) in muntion" :key="key" :to="{path:'/detais',query: {name: val.id ,pag :val.pid , min:val.text}}" tag="p" target="iframename">
            <li>
              <div>
                <img :src="val.from" alt="">
              </div>
              <p>{{val.text}}</p>
            </li>
          </router-link>

        </ul>
      </div>
    </div>
    <nav>
      <ul class="pagination">
        <li v-for="(val,key) in page" :key="key" @click="Page(key)"><a href="javascript:;"> {{key+1}}</a></li>

      </ul>
    </nav>
  </div>
</template>

<script>


export default {
  //初始化请求数据
  created () {
    fetch('http://wang2019.oss-cn-beijing.aliyuncs.com/convering/conceing.json')
      .then(response => response.json())
      
      .then(data => {
              
        let pageMax = Math.ceil(data.length / 9);
        for (let i = 1; i <= pageMax; i++) {
          this.page.push(i)
        }

        for (var i = 0, j = data.length; i < j; i += 9) {
          this.result.push(data.slice(i, i + 9));
        }
        this.muntion = this.result[this.num]
      })
  },
  //监听num变化改变数据内容
  watch: {

    num (n) {
      this.result.forEach((e, i) => {
        if (n == i) {
          this.muntion = this.result[i]

        }
      })
    }
  },
  beforeMount () {

  },
  data () {
    return {
      items: [{
        text: '首页',
        disabled: false
      },
      {
        text: '产品中心',
        disabled: false
      },
      {
        text: "壁纸系列",
        disabled: true
      },

      ],
      current: 1,
      muntion: [],//渲染到页面的数据
      page: [],//分页数
      result: [],//分页数据
      num: 0
    }
  },
  methods: {
    Page (key) {
      this.num = key
    }
  },
}
</script>

<style lang="less">
#convering .container {
	height: 70px;
	width: 1200px;
}

#convering .mu-breadcrumbs {
	height: 70px;
}

#convering .mu-breadcrumbs > li {
	font-size: 20px;
}

#convering h1 {
	font-size: 20px;
	position: absolute;
	right: 300px;
}

#convering .mu-pagination {
	margin: 20px;
}
.pagination {
	overflow: hidden;
	display: table;
	margin: 0 auto;
	width: 500px;
	height: 50px;
	display: flex;
	justify-content: center;
	li {
		float: left;
		height: 50px;
		border-radius: 5px;
		box-shadow: 1px 1px 10px #888;
		margin-left: 8px;
		background: #fff;
		& :hover {
			background: #000;

			a {
				color: #fff;
			}
		}
		a {
			display: block;
			width: 50px;
			height: 50px;
			text-align: center;
			line-height: 50px;
			font-size: 15px;
			border-radius: 5px;
			text-decoration: none;
			color: #777;
		}
	}
	.active {
		background: #000;

		a {
			color: #fff;
		}
	}
}
</style>
