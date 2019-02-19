<template>
	<div id="product">
		<div class="product-header">
			<div class="swiper">
				<img src="../assets/product/pro_banner10_0.jpg" alt="">
				<div class="switt">
					<span>米素墙纸系列</span>
					<p>关于家的一切梦想，都可在这里实现</p>
					<div>精彩呈现</div>
				</div>
				<div class="route">
					<router-link to="/product/convering" tag="div">壁纸</router-link>
					<router-link to="/product/curain" tag="div">墙布</router-link>
					<router-link to="/product/mural" tag="div">窗帘</router-link>
					<router-link to="/product/wallpaper" tag="div">壁画</router-link>
				</div>
			</div>
		</div>

		<router-view></router-view>

	</div>

</template>

<script>
export default {

} 
</script>

<style lang='less'>
#product .route {
	width: 1200px;
	height: 66px;
	background: #0000008c;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack: distribute;
	justify-content: space-around;
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