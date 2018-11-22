/**
 * Created by 西兰花的春天 on 2016/9/23 0023.
 */
window.onload = function()
{
	//part1  中间图片 选项卡
	var oTab1 = document.querySelector( '.tab1' );      								//图片选项卡整体
	var aTab1_FlipDot = document.querySelectorAll( '.tab1_FlipDot input' );             //input 按钮
	var oTab1_Picture_play = document.querySelector( '.tab1_Picture_play' );      		//图片整体
	var oTab1_Picture_play_a = document.querySelectorAll( '.tab1_Picture_play a' );      //图片 各个内容

	//part1  右侧 活动公告新闻 选项卡
	var aNews_tab = document.querySelectorAll( '#news_tab li' );            //按钮
	var oNew_list_Whole = document.querySelector( '.new_list_Whole' );      //内容整体
	var aNew_list_C = document.getElementsByClassName( 'new_list_C' );      //各个内容区域
	var oTab_line = document.querySelector( '.tab_line' );                  //下滑块

	//返回顶部
	var oGo_top = document.querySelector( '.go_top' );


//-------------------    封装函数    -----------------------------------------------------------------------------------------------------------------------

	//页面回到顶部函数    （目标页面top值和速度）
	function _goTop( opa2, speed )
	{
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var timer = setTimeout( function()
		{
			if( scrollTop > opa2 )
			{
				scrollTop -= 25;
				document.body.scrollTop = scrollTop;
				_goTop( opa2, speed );
			}
			else
			{
				clearTimeout( timer );
				document.body.scrollTop = 0;
			}
		}, speed );

	}

//--------------------------------------函数部分----------------------------------------------------------------------------------------

	//part1  中间 图片 选项卡
	var now = 0;
	function tab1() {
		console.log(now);
		for (var i = 0; i < aTab1_FlipDot.length; i++) {
			aTab1_FlipDot[i].style.background="#61468f";
			oTab1_Picture_play_a[i].style.opacity = "0.85";
		}
		aTab1_FlipDot[now].style.transition = '3s all ease';
		oTab1_Picture_play.style.transition = '1.4s all ease';
		oTab1_Picture_play_a[now].style.transition = '3s all ease';

		aTab1_FlipDot[now].style.background="transparent";
		oTab1_Picture_play_a[now].style.opacity = "1";
		oTab1_Picture_play.style.left = -474 * now + "px";
	}
	for(var i=0;i<aTab1_FlipDot.length;i++){
		aTab1_FlipDot[i].index=i;
		aTab1_FlipDot[i].onclick=function() {
			now=this.index;
			tab1()
		}
	}
	//向右播放
	function tab1Right() {
		now++;
		if(now > aTab1_FlipDot.length-1){ now = 0}
		tab1()
	}
	//part1  右侧 活动公告新闻 选项卡
	for( var i = 0; i < aNews_tab.length; i++ )
	{
		aNews_tab[ i ].index = i;
		aNews_tab[ i ].onclick = function()
		{
			now = this.index;
			for( var i = 0; i < aNews_tab.length; i++ )
			{
				aNew_list_C[ i ].style.opacity = "0";
			}
				aNew_list_C[ now ].style.transition = '2.5s all ease';
				oNew_list_Whole.style.transition = '1s all ease';
				oTab_line.style.transition = '0.8s all ease';

				aNew_list_C[ now ].style.opacity = "1";
				oNew_list_Whole.style.left = -312 * now + "px";
				oTab_line.style.left =10+ 71 * now + "px";
		}
	}
	//下拉条滚动事件
	window.onscroll = function()
	{
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		//console.log(scrollTop);
		oGo_top.onclick = function()
		{
			_goTop( 0, 0.005 );
		}
	};
	//选项卡计时器
	var timerPlay1 = setInterval(function(){
		tab1Right();
		//console.log("正在计时中")
	}, 4000);

	oTab1.onmouseover=function(){
		clearInterval(timerPlay1);
		timerPlay1=null;
	};
	oTab1.onmouseout=function(){
		timerPlay1 = setInterval(tab1Right, 4000);
	}




































}