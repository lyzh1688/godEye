'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('godEyeApp')
	.directive('chart',function($compile,$document){
		return {
        templateUrl:'/static/app/directive/chart.html',
        restrict: 'AE',
        //replace: true,
        scope: {
            time: '='
         },
		link: function(scope, $element, $attrs){

           scope.time = "chartjs data time init";

    	   if(document.querySelector("#echart_demo"))
    	   {
                scope.myChart = echarts.init(document.getElementById('echart_demo'));
                var fpsData=[['2010-01-10',116],['2011-01-10',426],['2012-01-10',216],['2010-01-10',116],['2011-01-10',426],['2012-01-10',216],
                ['2013-01-10',334],['2013-02-10',344],['2013-03-10',576],
                ['2014-01-10',543],['2014-02-10',643],['2014-03-10',222],
                ['2015-01-10',228],['2015-02-10',768],['2015-03-10',111],
                ['2016-01-10',666],['2016-02-10',345],['2016-03-10',33],
                ['2017-01-10',999],['2017-02-10',754],['2017-03-10',356],
                ['2018-01-10',456],['2018-02-10',243],['2018-03-10',890]]

                var cpuData = [['2010-01-10',16],['2011-01-10',26],['2012-01-10',16],['2010-01-10',16],['2011-01-10',26],['2012-01-10',16],
                ['2013-01-10',34],['2013-02-10',44],['2013-03-10',76],
                ['2014-01-10',43],['2014-02-10',43],['2014-03-10',22],
                ['2015-01-10',28],['2015-02-10',68],['2015-03-10',11],
                ['2016-01-10',66],['2016-02-10',45],['2016-03-10',33],
                ['2017-01-10',99],['2017-02-10',54],['2017-03-10',56],
                ['2018-01-10',56],['2018-02-10',43],['2018-03-10',90]]

               var networkData = [['2010-01-10',164],['2011-01-10',26],['2012-01-10',146],['2010-01-10',16],['2011-01-10',26],['2012-01-10',16],
                ['2013-01-10',342],['2013-02-10',434],['2013-03-10',76],
                ['2014-01-10',423],['2014-02-10',43],['2014-03-10',22],
                ['2015-01-10',286],['2015-02-10',68],['2015-03-10',113],
                ['2016-01-10',676],['2016-02-10',445],['2016-03-10',33],
                ['2017-01-10',99],['2017-02-10',54],['2017-03-10',56],
                ['2018-01-10',56],['2018-02-10',43],['2018-03-10',90]]


               var memoryData = [['2010-01-10',16],['2011-01-10',26],['2012-01-10',16],['2010-01-10',136],['2011-01-10',206],['2012-01-10',16],
                ['2013-01-10',34],['2013-02-10',4344],['2013-03-10',76],
                ['2014-01-10',433],['2014-02-10',43],['2014-03-10',22],
                ['2015-01-10',28],['2015-02-10',68],['2015-03-10',114],
                ['2016-01-10',866],['2016-02-10',435],['2016-03-10',33],
                ['2017-01-10',99],['2017-02-10',54],['2017-03-10',56],
                ['2018-01-10',56],['2018-02-10',143],['2018-03-10',90]]


                scope.option =  {
                    //title: {
                    //    text: 'Performance Monitor'
                    //},
                    grid: {
                        left: '3%',
                        right: '1%',
                        bottom: '3%',
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis',
                        formatter: function(params,ticket){
                            scope.$emit('time-event', params);
                            console.log(params)

                            var tipStr = params[0].axisValue+"<br/>";
                            tipStr = tipStr + "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:"+params[0].color+"'></span>"+params[0].seriesName + ":"+ params[0].value +"<br/>"
                            tipStr = tipStr + "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:"+params[1].color+"'></span>"+params[1].seriesName + ":"+ params[1].value +"<br/>"
                            tipStr = tipStr + "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:"+params[2].color+"'></span>"+params[2].seriesName + ":"+ params[2].value +"<br/>"
                            tipStr = tipStr + "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:"+params[3].color+"'></span>"+params[3].seriesName + ":"+ params[3].value +"<br/>"
                            return tipStr
                        }
                    },
                    legend: {
                        data:['CPU','FPS','Network','Memory']
                    },
                    xAxis: {
                        data: cpuData.map(function (item) {
                            return item[0];
                        })
                    },
                    yAxis: [
                        {
                            type: 'value',
                            name:'CPU',
                            position:'left',
                            axisLabel: {
                                 formatter: '{value} %'
                                }
                        },
                        {
                            type: 'value',
                            name: 'FPS',
                            position:'left',
                            offset:50,
                            axisLabel: {
                                 formatter: '{value} MB'
                                }
                        },
                        {
                            type: 'value',
                            name:'Network',
                            position:'right',
                            axisLabel: {
                                 formatter: '{value} KB'
                                }
                        },
                        {
                            type: 'value',
                            name: 'Memory',
                            position:'right',
                            offset:50,
                            axisLabel: {
                                 formatter: '{value} MB'
                                }
                        }
                    ],
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    dataZoom: [{
                        startValue: '2014-06-01'
                    }, {
                        type: 'inside'
                    }],
                    //visualMap: [{
                    //    top: 10,
                    //    right: 30,
                    //    pieces: [{
                    //        gt: 0,
                    //        lte: 50,
                    //        color: '#096'
                    //    }, {
                    //        gt: 50,
                    //        lte: 100,
                    //        color: '#ffde33'
                    //    }, {
                    //        gt: 100,
                    //        lte: 150,
                    //        color: '#ff9933'
                    //    }, {
                    //        gt: 150,
                    //        lte: 200,
                    //        color: '#cc0033'
                    //    }, {
                    //        gt: 200,
                    //        lte: 300,
                    //        color: '#660099'
                    //    }, {
                    //        gt: 300,
                    //        color: '#7e0023'
                    //    }],
                    //    outOfRange: {
                    //        color: '#999'
                    //    }
                    //}],
                    series:[{
                        name: 'CPU',
                        type: 'line',
                        data: cpuData.map(function (item) {
                            return item[1];
                        }),
                    },
                    {
                        name: 'FPS',
                        type: 'line',
                        data: fpsData.map(function (item) {
                            return item[1];
                        }),
                        yAxisIndex: 1
                    },{
                        name: 'Network',
                        type: 'line',
                        data: networkData.map(function (item) {
                            return item[1];
                        }),
                        yAxisIndex: 2
                    },{
                        name: 'Memory',
                        type: 'line',
                        data: memoryData.map(function (item) {
                            return item[1];
                        }),
                        yAxisIndex: 3
                    },
                    ]
                }

                scope.myChart.setOption(scope.option);
                scope.myChart.on('mouseover', function (params) {
                    console.log(params.componentType+params.name+params.data+params.seriesName)
                });
    	   }
       }
    	}
	});











