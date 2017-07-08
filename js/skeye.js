$(function(){
	//right高度
	var r_height = $(window).height()-82;
	$('.right').css('minHeight',r_height+'px');
	//导航吸顶
	$(window).scroll(function() {
    	var head = document.querySelector('.head');
        var t = document.body.scrollTop || document.documentElement.scrollTop;
        if(t >= head.offsetTop){
            head.style.width = "100%";
            head.style.position = "fixed";
            head.style.left = 0;
            head.style.top = 0;
            head.style.zIndex = 9;
            $('section').css('marginTop','82px');
        }else{
            head.style.position = "none";
        }
	})
	
    //用户
	$('.log_name').hover(function(){
		$('.log_sel').css('display','block');
	},function(){
		$('.log_sel').css('display','none');
	})
	//导航切换
	$('.nav_list li').click(function(){
		$('.nav_list li').removeClass('on');
		$(this).addClass('on');
	})
	//页码
	$('.page2 li').click(function(){
		$('.page2 li').removeClass('on4');
		$(this).addClass('on4');
	})
	//调用量切换
	$('.new_user li').click(function(){
		$('.new_user li').removeClass('on');
		$(this).addClass('on');
	})
	//日期切换
	$('.date_user li').click(function(){
		$('.date_user li').removeClass('on');
		$(this).addClass('on');
	})
	//页码
	$('.page li').click(function(){
		$(this).addClass('bg');
		$('.page li').removeClass('bg');
	})
	//排序
	/*$('.ul2 li').css({
		"color":"#333",
		"background-color":"#fff",
		"background-image":"url(images/down.png)",
		"background-position":"right 3px",
		"background-repeat":"no-repeat"	
	});
	$('.ul2 li:nth-child(1)').css({
		"color":"#fff",
		"background-color":"#900",
		"background-image":"url(images/down.png)"
	});*/
	$('.ul2 li').click(function(){
		alert(123)
	})
	//调用量
	$('.dyl').blur(function(){
		var ex = /^\d+$/;
		if (!ex.test($('.dyl').val())) {
		   $('.dyl').val('')
		}
	})
	//锁定
	$('.lock').click(function(){
		$('.mask').css('display','block');
		$('.frame').css('display','block');
	})
	$('.close').click(function(){
		$('.mask').css('display','none');
		$('.frame').css('display','none');
	})
	$('.no').click(function(){
		$('.mask').css('display','none');
		$('.frame').css('display','none');
	})
	//应用详情
	$('.xq').click(function(){
		$('.details').css('display','block');
	})
	$('.shut').click(function(){
		$('.details').css('display','none');
	})
	$('.close2').click(function(){
		$('.details').css('display','none');
	})
	//更改配置
	$('.ggpz').click(function(){
		$('.revise').css('display','block');
	})
	$('.qx2').click(function(){
		$('.revise').css('display','none');
	})
	$('.close3').click(function(){
		$('.revise').css('display','none');
	})
	//应用类型
	$('.s_bt').click(function (){
		$('.s_bt').removeClass('on1');
		$(this).addClass('on1');
		
		$('.s_list').removeClass('show1');
		$('.s_list').eq($(this).index()).addClass('show1');
	});
	$('.aa_class').click(function(){
		$('.app_lx').toggle();
	})
	$('.yy_list li').click(function(){
		$('.hidden').val($(this).html());
		$('.aa_class').html($(this).html());
		$('.app_lx').css('display','none');
	})
	//锁定应用
	$('.application_data li button').click(function(){
		$('.mask').css('display','block');
		$('.frame').css('display','block');
	})
	$('.close').click(function(){
		$('.mask').css('display','none');
		$('.frame').css('display','none');
	})
	$('.no').click(function(){
		$('.mask').css('display','none');
		$('.frame').css('display','none');
	})
	$('.yes').click(function(){
		$('.mask').css('display','none');
		$('.frame').css('display','none');
		$('.application_data li button').css('display','none');
		$('.application_data li .button1').css('display','block');
	})
	$('.application_data li .button1').click(function(){
		$('.mask11').css('display','block');
		$('.frame11').css('display','block');
	})
	//统计
	$('.app_tab li').click(function(){
		$('.app_tab li').removeClass('tab');
		$(this).addClass('tab');
	})
	$('.riqi ul li span').click(function(){
		$('.riqi ul li span').removeClass('this');
		$(this).addClass('this');
	})
	//接口分析
	$('.ports_title li').click(function(){
		$('.ports_title li').removeClass('on');
		$(this).addClass('on');
	})
	$('.key_inside li').click(function(){
		$('.key_inside li').removeClass('on2');
		$(this).addClass('on2');
	})
	$('.key_date li').click(function(){
		$('.key_date li').removeClass('on3');
		$(this).addClass('on3');
	})
	
})