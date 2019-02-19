<template>
<div id="about">
<div class="swiper">
        <img src="../assets/about/com_banner.jpg" alt="">
        <div class="route">
        <router-link to="/about/intro" tag="div" >公司简介</router-link>
        <router-link to="/about/course" tag="div">品牌历程</router-link>
        <router-link to="/about/honor" tag="div">品牌荣誉</router-link>
        </div>

</div>
 <router-view></router-view>
</div>
</template>

<script>
export default {

};
</script>

<style scoped>
</style>