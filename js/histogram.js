$(function() {
			var data = [
			    {name : '摄影美化',value : 100,color:'#5b9bd5'},
			   	{name : '智能硬件',value : 90,color:'#5b9bd5'},
			   	{name : '机器人',value : 85,color:'#5b9bd5'},
			   	{name : '视频直播',value : 70,color:'#5b9bd5'},
			   	{name : '移动应用',value : 60,color:'#5b9bd5'},
			   	{name : '娱乐/社交',value : 50,color:'#5b9bd5'},
			   	{name : '医疗健康',value : 40,color:'#5b9bd5'},
			   	{name : '游戏',value : 36,color:'#5b9bd5'},
			   	{name : 'SAAS/PAAS',value : 32,color:'#5b9bd5'},
			   	{name : '教育',value : 28,color:'#5b9bd5'},
			   	{name : '网站',value : 26,color:'#5b9bd5'},
			   	{name : '金融',value : 24,color:'#5b9bd5'},
			   	{name : '电子商务/O2O',value : 22,color:'#5b9bd5'},
			   	{name : '广告营销',value : 20,color:'#5b9bd5'},
			   	{name : '其他',value : 18,color:'#5b9bd5'},
			   	{name : '新闻传媒',value : 16,color:'#5b9bd5'},
			   	{name : '旅游',value : 12,color:'#5b9bd5'},
			   	{name : '政务民生',value : 8,color:'#5b9bd5'}
		        	];
			
			var chart = new iChart.Column2D({
				render : 'canvasDiv',
				data : data,
				/*title : {
					text : '全国2010年第六次全国人口普查数据',
					color : '#3e576f'
				},*/
				/*subtitle : {
					text : '图表展示了31个省、自治区、直辖市2010年的常住人口数据，并进行排名',
					color : '#6d869f'
				},*/
				/*footnote : {
					text : 'ichartjs.com',
					color : '#909090',
					fontsize : 11,
					padding : '0 38'
				},*/
				width : 800,
				height : 400,
				label : {
					fontsize:11,
					textAlign:'right',
					textBaseline:'middle',
					rotate:-45,
					color : '#666666'
				},
				tip:{
					enable:true/*,
					listeners:{
						 //tip:提示框对象、name:数据名称、value:数据值、text:当前文本、i:数据点的索引
						parseText:function(tip,name,value,text,i){
							//将数字进行千位格式化
							var f = new String(value);
							f = f.split("").reverse().join("").replace(/(\d{3})/g,"$1,").split("").reverse();
							if(f[0]==','){
								f.shift();
							}	
							f = f.join("");
							
							return name+"人口:<br/>"+f+"人<br/>占全国比重:<br/>"+(value/this.get('total') * 100).toFixed(2)+ '%';
						}
					}*/
				},
				shadow : true,
				shadow_blur : 2,
				shadow_color : '#aaaaaa',
				shadow_offsetx : 1,
				shadow_offsety : 0,
				column_width : 18,
				sub_option : {
					label : false,
					border : {
						width : 2,
						color : '#ffffff'
					}
				},
				coordinate : {
					background_color : null,
					grid_color : '#c0c0c0',
					width : 690,
					height:280,
					axis : {
						color : '#c0d0e0',
						width : [0, 0, 1, 0]
					},
					scale : [{
						position : 'left',
						start_scale : 0,
						end_scale : 100,
						scale_space : 20,
						scale_enable : false,
						label : {
							fontsize:11,
							color : '#666666'
						},
						listeners:{
							parseText:function(t,x,y){
								return {text:t/1}
							}
						 }
					}]
				}
			});
			
			//利用自定义组件构造左侧说明文本
			chart.plugin(new iChart.Custom({
					drawFn:function(){
						//计算位置
						var coo = chart.getCoordinate(),
							x = coo.get('originx'),
							y = coo.get('originy');
						//在左上侧的位置，渲染一个单位的文字
						chart.target.textAlign('start')
						.textBaseline('bottom')
						.textFont('600 11px Verdana')
						// .fillText('人口数(万人)',x-40,y-10,false,'#6d869f');
						
					}
			}));
			
			chart.draw();
		});