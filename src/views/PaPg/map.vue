<template>
  <div id="Map">
    <iframe name="iframename" :src="quer" noresize scrolling="no" marginheight='100'></iframe>

  </div>

</template>

<style>
#Map {
	width: 100%;
	height: 900px;
}
#Map iframe {
	width: 100%;
	height: 800px;
	margin-top: 100px;
}
</style>

<script>

export default {
  name: 'Map',
  props: [],
  created () {
    let { param1 } = this.$route.query


    this.quer = `https://www.amap.com/search?query=${param1}`


  },
  data () {
    return {
      quer: '',

    }
  }


}

</script>