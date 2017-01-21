
//创建配置文件
$(document).ready(function() {			
	
	//为图表配置标题
   var title = {
       text: '月平均气温'   
   };
   //为图表配置副标题
   var subtitle = {
        text: 'Source: baidu.com',
        margin:'20px',
        align:'right'
   };
   //配置要在X轴显示的项
   var xAxis = {
       categories: ['一月', '二月', '三月', '四月', '五月', '六月']
   };
   //配置要在Y轴显示的项
   var yAxis = {
      title: {
         text: 'Temperature (\xB0C)'
      }
   };  
   var plotOptions = {
      line:{
         dataLabels:{
            enabled:true
         },
         enableMouseTracking:false
      }
   } 
   //配置提示信息
   var tip = {
      Suffix: '\xB0C'
   }
   //配置图表向右对齐
   var legend = {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
   };
   //配置图表要展示的数据
   var datas =  [
      {
         name: 'Berlin',
         data: [-0.9, 0.6, 3.5, 8.4, 3.9, 1.0]
      }, 
      {
         name: 'London',
         data: [3.9, 4.2, 11.9, 15.2, 17.0, 
            16.6]
      }
   ];

   //创建json数据
   var json = {};

   json.title = title;
   json.subtitle = subtitle;
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.plotOptions = plotOptions;
   json.tip = tip;   
   json.legend = legend;
   json.series = datas;

   //绘制图表
   $('#container').highcharts(json);
});