<template>
  <div id="datais" v-html="proms">

  </div>
</template>

<script>
import axios from 'axios';
export default {
  created () {
    let { name, pag, min } = this.$route.query

    axios.get(`/api/product/in?id=${name}`)
      .then(e => {
        e.data.replace(/<section class="s_location">[\s\S]+<\/section>/g, ($0, $1, $2) => {
          //修改图片的地址
          let a = $0.replace(/<img src="(\/)Uploads[\s\S]/g, ($0, $1) => {

            let temp = "";

            temp += '<img src="http://www.mymesu.com/Uploads/'

            return temp;

          });
          //修改背景地址i

          let b = a.replace(/background: url\(\/Uploads[\s\S]/g, ($0, $1) => {

            let temp = "";

            temp += `background: url(http://www.mymesu.com/Uploads/`

            return temp;


          });

          //找到类型
          let c = b.replace(/<div class="left">[\s\S]+(系列)/, ($0, $1) => {

            let temp = `<div class="left"> ${pag}${$1}`;
            return temp;
          });
          //找到类相关a

          let str = c.replace(/;<\/span>[\s\S]+(<span><\/span>)/, ($0, $1) => {
            let s = $0.replace(/<a href="[\s\S]+<span><\/span>/, ($0, $1) => {
              let temp = `<a href="/product/10">产品中心</a> <span        class="layui-icon">&#xe65b;</span>
               <a href="/product/">${pag}</a> <span class="layui-icon">&#xe65b;</span>
               <span>${min}</span>`
              return temp
            })
            return s;
          });

          this.proms = str
        });
      })

  },

  data () {
    return {
      proms: ''
    }
  }
}
</script>

<style>
#datais {
	background: #e1e2e2;
}
</style>
