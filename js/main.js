/**
 *
 * Active Charts using Highcharts demonstration
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Script Tutorials
 * http://www.script-tutorials.com/
 */

// Change Chart type function
function ChangeChartType(chart, series, newType) {
    newType = newType.toLowerCase();
    for (var i = 0; i < series.length; i++) {
        var srs = series[0];
        try {
            srs.chart.addSeries({
                type: newType,
                stack: srs.stack,
                yaxis: srs.yaxis,
                name: srs.name,
                color: srs.color,
                data: srs.options.data
            },
            false);
            series[0].remove();
        } catch (e) {
        }
    }
}

// Two charts definition
var chart1, chart2;

// Once DOM (document) is finished loading
$(document).ready(function() {

    // First chart initialization
    chart1 = new Highcharts.Chart({
     chart: {
        renderTo: 'chart_1',
        type: 'spline',
        height: 350,
     },
     title: {
        text: ''
     },
     xAxis: {
        categories: ['2017/3/15', '2017/3/16', '2017/3/17', '2017/3/18', '2017/3/19', '2017/3/20', '2017/3/21']
     },
     yAxis: {
        title: {
           text: ''
        }
     },
     series: [{
        name: 'aa 请求量',
        data: [5, 10, 20, 22, 25, 28, 30]
     }, {
        name: 'bb 请求量',
        data: [15, 15, 18, 40, 30, 25, 60]
     }/*, {
        name: 'Dev #3',
        data: [1, 3, 6, 0, 50, 25, 50, 60, 30, 100]
     }*/]
    });

    

    // Switchers (of the Chart1 type) - onclick handler
    $('.switcher').click(function () {  
        var newType = $(this).attr('id');
        ChangeChartType(chart1, chart1.series, newType);
    });
});