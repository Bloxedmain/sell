<template>
	
 <div id="app">
 	<HeaderCom class="header"></HeaderCom>
 	<ul class="router">
 		<li><router-link to="/goods">商品</router-link></li>
 		<li><router-link to="/ratings">评价</router-link></li>
 		<li><router-link to="/seller">商家</router-link></li>
 	</ul>
     <router-view></router-view>
 </div>

</template>
<script>
	import HeaderCom from './components/common/header'
	export default{
		components:{
			HeaderCom
		}
	}
	
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .header{
    }
	.router{
		background-color: rgb(255,255,255);
		border-bottom: 1px solid #CBCFD2;
		padding-bottom: 5px;
		margin-bottom:0px;
		li{
			list-style: none;
			display: inline-block;
			width: 30%;
			a{
				text-decoration: none;
				color: rgb(77,85,93);
				font-size: 20px;
				line-height: 30px;
			}
		}
	}
</style>