<template>
  <div id="Course" v-html='adve1'>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  created () {
    axios.get(`/api/company/brand`)
      .then(e => {
        e.data.replace(/<section class="s5">([\s\S]+)<\/section>/g, ($0) => {
          let str = $0.replace(/<img src="\/App\/Home\/View\/Default\//g, () => {
            let temp = "";

            temp += '<img src="http://www.mymesu.com//App/Home/View/Default/'

            return temp;
          })
          this.adve1 = str
        })

      })
  },
  data () {
    return {
      adve1: '',
    }
  }
};
</script>

<style lang="less">
#Course {
	position: relative;
	padding-top: 100px;
	padding-bottom: 180px;
	overflow: hidden;
}
#Course {
	padding-top: 100px;
	padding-bottom: 180px;
	overflow: hidden;
}
</style>
