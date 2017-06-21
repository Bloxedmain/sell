<template>
	<div>
		<div class="rateScore">
			<div class="rate_left">
				<ul>
					<li><b>3.9</b></li>
					<li class="total">综合评分</li>
					<li class="compare">高于周边商家69.2%</li>
				</ul>
			</div>
			<div class="rate_right">
				<ul>
					<li>
						<label>服务态度</label>
						<span>
						    <img src="../../assets/start/star24_on@2x.png">
						    <img src="../../assets/start/star24_on@2x.png">
						    <img src="../../assets/start/star24_on@2x.png">
						    <img src="../../assets/start/star24_on@2x.png">
						    <img src="../../assets/start/star24_half@2x.png" />
						</span>
					</li>
					<li>
						<label>菜肴味道</label>
						<span>
						    <img src="../../assets/start/star24_on@2x.png">
						    <img src="../../assets/start/star24_on@2x.png">
						    <img src="../../assets/start/star24_on@2x.png">
						    <img src="../../assets/start/star24_on@2x.png">
						    <img src="../../assets/start/star24_half@2x.png" />
						</span>
					</li>
					<li>
						<label>送达时间</label>
						<a>44分钟</a>
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
		padding: 0px;
		list-style: none;
	}
	.rateScore{
		border-bottom: 20px solid #CBCFD2;
		display: flex;
	    .rate_left{
	    	flex-grow:2;
	    	ul{
	    		border-right: 1px solid #CBCFD2;
	    		padding: 0px;
	    		li{
	    			text-align: center;
	    			font-size: 13px;
	    			padding: 5px 0px;
	    			b{
	    				font-size: 17px;
	    				color: orange;
	    			}
	    		}
	    		.total{
	    			font-weight: bolder;
	    			font-size: 15px;
	    		}
	    		.compare{
	    			color: #CBCFD2;
	    		}
	    	}
	    }
	    .rate_right{
	    	flex-grow: 5;
	    	ul{
	    		margin-top: 10px;
	    		padding-left: 20px;
	    		li{
	    			font-size: 14px;
	    			padding: 5px 0px;
	    			span{
	    				position: relative;
	    				top: 2px;
	    			}
	    		}
	    	}
	    }
	}
	
</style>