<template>
  <div>

    <div class="mdtitle" v-for="(val,key) in data" :key='key'>
      <p>{{val.title}}</p>
      <h3><span></span>{{val.ad}}<i></i></h3>
    </div>
  </div>
</template>

<script>

export default {
  name: 'moodel',
  props: ['data'],


}




</script>


<style scoped>
</style>
