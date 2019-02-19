<template>
  <div id="mural">
    <div class="product-body">
      <mu-container>
        <mu-breadcrumbs divider="—">
          <mu-breadcrumbs-item
            v-for="(val) in items"
            :key="val.text"
            :disabled="val.disabled"
            to="/"
          >{{val.text}}</mu-breadcrumbs-item>
          <h1>窗帘系列</h1>
        </mu-breadcrumbs>

      </mu-container>
      <div class="product-html">
        <ul>
          <router-link
            v-for="(val,key) in muntion"
            :key="key"
            :to="{path:'/detais',query: {name: val.id, pag :val.pid}}"
           
            
          >
            <li>
              <div>
                <img
                  :src="val.from"
                  alt=""
                >
              </div>
              <p>{{val.txt}}</p>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
    <nav>
      <ul class="pagination">
        <li
          v-for="(val,key) in page"
          :key="key"
          @click="Page(key)"
        ><a href="javascript:;"> {{key+1}}</a></li>

      </ul>
    </nav>
  </div>

</template>

<script>


export default {
  created () {
    fetch('http://wang2019.oss-cn-beijing.aliyuncs.com/mural/muain.json')
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
  watch: {

    num (n) {
      this.result.forEach((e, i) => {
        if (n == i) {
          this.muntion = this.result[i]

        }
      })
    }
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
        text: "窗帘系列",
        disabled: true
      },

      ],
      current: 1,
      muntion: [],//渲染到页面的数据
      page: [],//分页数
      result: [],//分页数据
      num: 0
    }
  }
}
</script>

<style>
#mural .container {
  height: 70px;
  width: 1200px;
  margin-bottom: 40px;
}

#mural .mu-breadcrumbs {
  height: 70px;
}

#mural .mu-breadcrumbs > li {
  font-size: 20px;
}

#mural h1 {
  font-size: 20px;
  position: absolute;
  right: 300px;
}

#mural .mu-pagination {
  margin: 20px;
}
</style>