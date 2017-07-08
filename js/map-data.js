$(function () {
            //数据可以动态生成，格式自己定义，cha对应china-zh.js中省份的简称
            var dataStatus = [{ cha: 'HKG', name: '香港', des: '<br/>用户数',tel:'100' },
                             { cha: 'HAI', name: '海南', des: '<br/>用户数',tel:'85'  },
                             { cha: 'YUN', name: '云南', des: '<br/>用户数' ,tel:'100' },
                             { cha: 'BEJ', name: '北京', des: '<br/>用户数' ,tel:'64' },
                             { cha: 'TAJ', name: '天津', des: '<br/>用户数',tel:'100'  },
                             { cha: 'XIN', name: '新疆', des: '<br/>用户数' ,tel:'42' },
                             { cha: 'TIB', name: '西藏', des: '<br/>用户数' ,tel:'100' },
                             { cha: 'QIH', name: '青海', des: '<br/>用户数',tel:'24'  },
                             { cha: 'GAN', name: '甘肃', des: '<br/>用户数' ,tel:'100' },
                             { cha: 'NMG', name: '内蒙古', des: '<br/>用户数' ,tel:'100' },
                             { cha: 'NXA', name: '宁夏', des: '<br/>用户数' ,tel:'7' },
                             { cha: 'SHX', name: '山西', des: '<br/>用户数' ,tel:'100' },
                             { cha: 'LIA', name: '辽宁', des: '<br/>用户数',tel:'100'  },
                             { cha: 'JIL', name: '吉林', des: '<br/>用户数' ,tel:'85' },
                             { cha: 'HLJ', name: '黑龙江', des: '<br/>用户数',tel:'100'  },
                             { cha: 'HEB', name: '河北', des: '<br/>用户数',tel:'100'  },
                             { cha: 'SHD', name: '山东', des: '<br/>用户数',tel:'100'  },
                             { cha: 'HEN', name: '河南', des: '<br/>用户数' ,tel:'100' },
                             { cha: 'SHA', name: '陕西', des: '<br/>用户数',tel:'100'  },
                             { cha: 'SCH', name: '四川', des: '<br/>用户数',tel:'100'  },
                             { cha: 'CHQ', name: '重庆', des: '<br/>用户数',tel:'100'  },
                             { cha: 'HUB', name: '湖北', des: '<br/>用户数' ,tel:'100' },
                             { cha: 'ANH', name: '安徽', des: '<br/>用户数',tel:'100'  },
                             { cha: 'JSU', name: '江苏', des: '<br/>用户数',tel:'100'  },
                             { cha: 'SHH', name: '上海', des: '<br/>用户数' ,tel:'100' },
                             { cha: 'ZHJ', name: '浙江', des: '<br/>用户数',tel:'100'  },
                             { cha: 'FUJ', name: '福建', des: '<br/>用户数' ,tel:'100' },
                             { cha: 'TAI', name: '台湾', des: '<br/>用户数' ,tel:'100' },
                             { cha: 'JXI', name: '江西', des: '<br/>用户数' ,tel:'100' },
                             { cha: 'HUN', name: '湖南', des: '<br/>用户数' ,tel:'100' },
                             { cha: 'GUI', name: '贵州', des: '<br/>用户数' ,tel:'100' },
                             { cha: 'GXI', name: '广西', des: '<br/>用户数' ,tel:'100' }, 
                             { cha: 'GUD', name: '广东', des: '<br/>用户数',tel:'100' }];
            $('#container').vectorMap({ map: 'china_zh',
                color: "#B4B4B4", //地图颜色
                onLabelShow: function (event, label, code) {//动态显示内容
                    $.each(dataStatus, function (i, items) {
                        if (code == items.cha) {
                            label.html(items.name + items.des +"<br/>"+ items.tel);
                        }
                    });
                }
				
            })

            $.each(dataStatus, function (i, items) {
                if (items.des.indexOf('个') != -1) {//动态设定颜色，此处用了自定义简单的判断
                    var josnStr = "{" + items.cha + ":'#00FF00'}";
                    $('#container').vectorMap('set', 'colors', eval('(' + josnStr + ')'));
                }
            });
            $('#container').css('background', '#fff');
        });