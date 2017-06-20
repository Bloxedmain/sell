<template>
	<header>
		<div class="header">
			<div class="header-left">
				<img src="../../assets/headerimg/seller_avatar_256px.jpg"/>
			</div>
			<div class="header-right">
				<ul>
					<li>
						<img src="../../assets/headerimg/brand@2x.png" class="imgpp"/>
						<h3>粥品香坊（大运春）</h3>
					</li>
					<li>
						<span>蜂鸟专送</span>/<span>38分钟送达</span>
					</li>
					<li class="threeLi">
						<img src="../../assets/headerimg/decrease_1@3x.png"class="imgj"/>
						<p>
							<span>在线支付满28减5，满50减10</span>
							</span>
						</p>
					</li>
				</ul>
		    </div>
			<div class="gonggao">
				<img src="../../assets/headerimg/bulletin@2x.png"/>
				<span>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
			</div>
		</div>
	</header>
</template>
<script>
	export default{
		
	}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
body{
	padding: 0px;
	margin: 0px;
	.header{
		color: rgb(255,255,255);
		background: rgba(7, 17, 27, 0.5);
		overflow: hidden;
		.header-left{
			padding: 0px;
			float: left;
			display: inline-block;
			margin-top: 20px;
			img{
				margin-left: 20px;
				width:70px;
				height: 70px;
				border-radius: 4px;
			}
		}
		div ul{
			height: 80px;
			padding: 0px;
			display: inline-block;
			li{
				margin: 0px;
				font-size: 13px;
			  list-style: none;
			  h3{
			  	font-size: 20px;
			  	color: rgb(255,255,255);
			  	font-weight: bold;
			  	line-height: 36px;
			  	font-family:"arial, helvetica, sans-serif";
			  	display: inline-block;
			  	margin: 0px;
			  	padding: 0px;
			  }
			  .imgj{
			  	width: 20px;
			  	height: 20px;
			  }
			  .imgpp{
			  	width: 30px;
			  	height: 20px;
			  }
			  p{
                 display: inline-block;
                 color: rgb(255,255,255);			  	
			  }
			}
			.threeLi{
				font-size: 13px;
			}
		}
		.header-right{
			float: left;
			margin-top: 0px;
			margin-left: 20px;
			display: inline-block;
		}
		.gonggao{
			background-color: rgba(7, 17, 27, .8);
			font-size: 15px;
			line-height: 30px;
			width: 100%;
			padding: 0px 10px;
			overflow: hidden;
			height: 30px;
			img{
				margin-top: 5px;
				width: 30px;
				height: auto;
			}
			span{
				position: relative;
				top: -2px;
			}
		}
	}
		
}
</style>