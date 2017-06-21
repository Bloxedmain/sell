<template>
	<div class="seller">
		<div>
			<div class="sellerUp">
				<div class="upLeft">
					<ul>
						<li><h4>粥品香坊（大运村）</h4></li>
					    <li >
					    	<span>
							    <img src="../../assets/start/star24_on@2x.png">
							    <img src="../../assets/start/star24_on@2x.png">
							    <img src="../../assets/start/star24_on@2x.png">
							    <img src="../../assets/start/star24_on@2x.png">
							    <img src="../../assets/start/star24_half@2x.png" />
						    </span>
						    <span>（661）</span>
						    <span>月售690单</span>
					    </li>
					</ul>
				</div>
				<div>
					<img src=""/>
					<span>已收藏</span>
				</div>
			</div>
			<div class="sellerDown">
				<ul class="dispatching">
					<li>
						起步价<br>
						<b>20</b>元
					</li>
					<li>
						商家配送<br>
						<b>4</b>元
					</li>
					<li>
						平均配送时间<br>
						<b>39</b>分钟
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    ul{
    	padding: 0px;
    }
    li{
    	list-style: none;
    }
    $border_bottom:1px solid  #F4F5F7;
    .seller{
    	.sellerUp{
    		border-bottom:$border_bottom;
    		display: flex;
    		.upLeft{
    			padding-left: 15px;
    			li{
    				margin: 10px;
    				h4{
    					margin: 0px;
    				}
    			}
    		}
    	}
    	.sellerDown{
    		.dispacthing{
    			display: flex;
    		}
    	}
    	
    }
</style>