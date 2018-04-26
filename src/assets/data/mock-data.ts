export const people = {
        title: {
            text: '客流量数据'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data : ['客流量']
        },
        xAxis: {
            data : [
                '2018-02-01',
                '2018-02-02',
                '2018-02-03',
                '2018-02-04',
                '2018-02-05',
                '2018-02-06',
                '2018-02-07',
                '2018-02-08',
                '2018-02-09',
                '2018-02-10',
                '2018-02-11',
                '2018-02-12',
            ]
        },
        yAxis: {
            splitLine: {
                show: false
            }
        },
        dataZoom: [{
            startValue: '2018-02-03'
        }, {
            type: 'inside'
        }],
        visualMap: {
            top: 10,
            right: 10,
            pieces: [{
                gt: 0,
                lte: 10000,
                color: '#096'
            }, {
                gt: 10000,
                lte: 20000,
                color: '#ffde33'
            }, {
                gt: 20000,
                lte: 30000,
                color: '#ff9933'
            }, {
                gt: 30000,
                lte: 40000,
                color: '#cc0033'
            }, {
                gt: 40000,
                lte: 50000,
                color: '#660099'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        series: {
            name: '客流量',
            type : 'line',
            data : [11231, 23123, 43414, 12312, 12313, 43241, 43422, 45243, 31231, 43413, 23123, 43413],
            markLine : {
                silent:   true,
                data : [{
                    yAxis: 10000
                }, {
                    yAxis: 20000
                }, {
                    yAxis: 30000
                }, {
                    yAxis: 40000
                }, {
                    yAxis: 50000
                }]
            }
        }
    };

export const shop =  {
    title : {
        text: '消费额分布',
        subtext: '纯属虚构',
        x: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['餐饮', '网购', '游戏', '交通', '随礼']
    },
    series : [
        {
            name: '消费额',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '餐饮'},
                {value: 310, name: '网购'},
                {value: 234, name: '游戏'},
                {value: 135, name: '交通'},
                {value: 1548, name: '随礼'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};


export const story = {
    xAxis: {
        type: 'category',
        data: ['辣条', '爆米花', '饼干', '可乐', '红牛', '苹果', '西瓜', '辣条1', '爆米花1', '饼干1', '可乐1', '红牛1', '苹果1', '西瓜1']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
};
