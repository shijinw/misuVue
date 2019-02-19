<template>
  <div id="newsD" ref="newsD" v-html="quer">

  </div>

</template>

<style>
#newsD {
	width: 100%;
	margin-top: 100px;
}
#newsD iframe {
	width: 100%;
	height: 100%;
}
</style>

<script>
import axios from 'axios';
export default {

  name: 'newsD',
  props: [],
  created () {
    let { param1 } = this.$route.query
    axios.get(`/api/news/52_${param1}`)
      .then(e => {
        e.data.replace(/<section class="news_info">[\s\S]+<\/section>/g, ($0, $1, $2) => {
             
          let str=$0.replace(/<img src="(\/)Uploads\/image[\s\S]/g,($0,$1)=>{
                       
                 let temp = "";
                 
                   temp += '<img src="http://www.mymesu.com/Uploads/image/'
                
                 return temp;
                      
                 });
                
          this.quer = str

        });

      });

  },

  data () {
    return {
      quer: '',

    }
  }


}

</script>