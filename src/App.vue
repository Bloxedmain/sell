<template>
	
 <div id="app">
 	<HeaderCom class="header"></HeaderCom>
 	<ul class="router tab">
 		<li class="tab-item"  v-for="(item,index) in tab" @click="tabItem(index)">
 			<router-link v-bind:to="item.path" v-html="item.text" :class="item.active?'isActive' : 'noActive'"></router-link>
 		</li>
 	</ul>
     <router-view></router-view>
 </div>

</template>
<script type="text/ecmascript-6">
	import HeaderCom from './components/common/header'
	export default{
		data(){
			return{
			tab:[
			    {text:"商品",path:"/goods",active:true},
			    {text:"评论",path:"/ratings",active:false},
			    {text:"商品",path:"/seller",active:false},
			]
				
		}	
		},
		methods:{
			tabItem(index){
				for(let i in this.tab){
					if(i==index){
						this.tab[i].active=true;
					}else{
						this.tab[i].active=false;
					}
				}
			}
		},
		components:{
			HeaderCom
		}
	}
	
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .header{
    }
    
	.router{
		display: flex;
		background-color: rgb(255,255,255);
		border-bottom: 1px solid #CBCFD2;
		padding-bottom: 5px;
		margin-bottom:0px;
		li{
			flex-grow: 1;
			list-style: none;
			display: inline-block;
			width: 30%;
			& > a{
				text-decoration: none;
				color: rgb(77,85,93);
				font-size: 20px;
				line-height: 30px;
			   &:hover{
			   	color: rgb(240, 20, 20)
			   }
			   &:active{
			   	color: rgb(240, 20, 20)
			   }
			}
			.isActive{
		    	color: red;
		    }
			
		}
	}
</style>