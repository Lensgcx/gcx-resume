/**
 * Created by Administrator on 2016/9/13 0013.
 */
window.onload=function(){

//----------------------------抓取对象-----------------------------
	//主页上部  选项卡       （主要）
	var aFlipDotIpt = document.querySelectorAll( '.tab_FlipDot input' );           //选项卡按钮
	var aBackpictureA = document.querySelectorAll( '.tab_Picture_play_img a' );    //选项卡的背景图片
	var oBack_picture = document.querySelector( '.Back_picture' );                 //背景遮罩层，底图

	//选项卡 文字区域
	var oTop_Picture_text = document.querySelector( '.top_Picture_play_text' );    //文字区域 父级，最外面的
	var aback_postion = document.getElementsByClassName( 'back_postion' );         //文字区域，转换部分
	var olayout = document.querySelector( '.layout' );    						   //文字区域，转换部分  layout

	//顶部top-bar，以及导航栏
	var oTop_bar = document.querySelector( '.top_bar' );                          //顶部top-bar 条
	var oTop_bar_content = document.querySelector( '.top_bar_content' );          //顶部top-bar 条  居中整体
	var oTop_bar_menu_l = document.querySelector( '.top_bar_menu_l' );            ////顶部top-bar 条  导航栏整体
	var aTopBarMenu = document.querySelectorAll( '.top_bar_menu_l li' );           //导航栏所有的li，每一个按钮
	var aTopBarMenu_a = document.querySelectorAll( '.top_bar_menu_l li a' );           //导航栏所有的li，每一个按钮
	var oUnderBar = document.querySelector( '.Under_bar' );                        //导航栏  下部移动蓝条

	//导航栏移入下拉菜单
	var oTop_bar_hover_menu = document.querySelector( '.top_bar_hover_menu' );           //导航栏移入下拉菜单  整体
	var oTop_bar_hover_menu_C = document.querySelector( '.top_bar_hover_menu_C' );       //导航栏移入下拉菜单  居中部分
	var aTop_H_menu = document.getElementsByClassName( 'top_bar_hover_menu_content');   //导航栏移入下拉菜单的内容
	var aBottomClick = document.querySelectorAll( '.top_bar_hover_menu_content_bottom' );   // //导航栏移入下拉菜单的关闭按钮

	//导航栏移入下拉菜单 内容 选项卡
	var aHMC_p2l_a = document.querySelectorAll( '.hover_menu_content_part2_l a' );             //导航栏  2  “产品”    左侧按钮
	var aHMC_p2_right = document.getElementsByClassName( 'hover_menu_content_part2_r_part');   //导航栏  2  “产品”    右侧内容
	var aHMC_p4l_a = document.querySelectorAll( '.hover_menu_content_part4_l a' );             //导航栏  8  “更多”    左侧按钮
	var aHMC_p4_right = document.getElementsByClassName( 'hover_menu_content_part4_r_part');   //导航栏  8  “更多”    右侧内容

	//中间部分  part2  大数据产品
	var aM_product_C_M_li = document.querySelectorAll( '.middle_product_content_menu li' );      //li
	var aM_product_li_back = document.querySelectorAll( '.middle_product_li_back' );             //背景虚化背景
	var aM_product_C_M_p = document.querySelectorAll( '.middle_product_content_menu li p' );     //p标签

	//底部part3   二维码
	var bottom_part3_code = document.getElementsByClassName( 'bottom_part3_code' );             //按钮
	var bottom_part3_img = document.getElementsByClassName( 'bottom_part3_img' );               //图片

	//底部part4
	var bottom_select1 = document.querySelector( '#bottom_select1' );     						//select1
	var bottom_select2 = document.querySelector( '#bottom_select2' );     						//select2
	var bottom_select1_span = document.querySelectorAll( '#bottom_select1 div' );     			//select1  的上下箭头  图案

	//侧边栏
	var side_bar = document.querySelector( '.side_bar' );                             //回到顶部



	//-------------------全局赋值-----------------------------------------------------------------------------------------------------------------------
	var now=0;
	var Dot_length = aFlipDotIpt.length;


//-------------------    封装函数    -----------------------------------------------------------------------------------------------------------------------
	//页面回到顶部函数    （目标页面top值和速度）
	function _goTop(opa2,speed){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var timer = setTimeout( function()
		{
			if( scrollTop > opa2 )
			{
				scrollTop -=25;
				document.body.scrollTop = scrollTop;
				_goTop(opa2,speed);
			}
			else
			{
				clearTimeout( timer );
				document.body.scrollTop = 0;
			}
		}, speed);




	}
	// 透明度 变化缓动效果（从无到有）
	function _slideshow(ele1,opa1,opa2,speed){
		var timer = setTimeout( function()
		{
			if( opa1 < opa2 )
			{
				opa1 +=speed;
				ele1.style.opacity = opa1;
				_slideshow(ele1,opa1,opa2,speed);
			}
			else
			{
				clearTimeout( timer );
			}
		}, 1);
	}
	// 透明度 变化缓动效果（从有到无）
	function _slidehidden(ele1,opa1,opa2,speed){
		var timer = setTimeout( function()
		{
			if( opa1 > opa2 )
			{
				opa1 -=speed;
				ele1.style.opacity = opa1;
				_slidehidden(ele1,opa1,opa2,speed);
			}
			else
			{
				clearTimeout( timer );
			}
		}, 1);
	}
	// Top 变化缓动效果（从上到下）
	function _slidemoveTop(ele1,opa,opa2,speed){
		//console.log(speed);
		var timer = setTimeout( function()
		{
			if( opa < opa2)
			{
				opa +=speed;
				ele1.style.top = opa+"px";
				_slidemoveTop(ele1,opa,opa2,speed);
			}
			else
			{
				clearTimeout( timer );
			}
		}, 5);
	}
	// Top 变化缓动效果（从下到上）
	function _slidemoveDown(ele1,opa,opa2,speed){
		//console.log(speed);
		var timer = setTimeout( function()
		{
			if( opa > opa2)
			{
				opa -=speed;
				ele1.style.top = opa+"px";
				_slidemoveDown(ele1,opa,opa2,speed);
			}
			else
			{
				clearTimeout( timer );
			}
		}, 5);
	}
	// MarginLeft 变化缓动效果（左右方向移动）
	function _slidemoveMarginLeft(ele1,opa,opa2,speed){
		var timer = setTimeout( function()
		{
			if( opa < opa2)
			{
				opa +=20;
				ele1.style.marginLeft = opa+"px";
				_slidemoveMarginLeft(ele1,opa,opa2,speed);
			}
			if(opa > opa2){
				opa -=20;
				ele1.style.marginLeft = opa+"px";
				_slidemoveMarginLeft(ele1,opa,opa2,speed);
			}
			if(opa == opa2)
			{
				clearTimeout( timer );
			}
		}, speed);
	}
	// MarginTop 变化缓动效果（上下方向移动）
	function _slidemoveMarginTop(ele1,opa,opa2,speed){
		var timer = setTimeout( function()
		{
			if( opa < opa2)
			{
				opa +=20;
				ele1.style.marginTop = opa+"px";
				_slidemoveMarginTop(ele1,opa,opa2,speed);
			}
			if(opa > opa2){
				opa -=20;
				ele1.style.marginTop = opa+"px";
				_slidemoveMarginTop(ele1,opa,opa2,speed);
			}
			if(opa == opa2)
			{
				clearTimeout( timer );
			}
		}, speed);
	}
	// width 宽度变化缓动效果（左右方向移动）
	function _slidemoveWidth(ele1,opa,opa2,speed){
		var timer = setTimeout( function()
		{
			if( opa < opa2)
			{
				opa +=5;
				ele1.style.width = opa+"px";
				_slidemoveWidth(ele1,opa,opa2,speed);
			}
			if(opa > opa2){
				opa -=5;
				ele1.style.width = opa+"px";
				_slidemoveWidth(ele1,opa,opa2,speed);
			}
			if(opa == opa2)
			{
				clearTimeout( timer );
			}
		}, speed);
	}



//-------------------函数部分-----------------------------------------------------------------------------------------------------------------------


	//下拉条滚动事件
	window.onscroll = function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;    //兼容性写法
		console.log(scrollTop);
		if (scrollTop > 1000) {
			side_bar.style.display = 'block';

		}
		else if(scrollTop <300){
			side_bar.style.display = 'none';

		}
		if(scrollTop ==0){
			side_bar.style.opacity = '0.8';
		}
		side_bar.onclick=function(){
			_goTop(0,0.01);
			_slidehidden(side_bar,0.8,0,0.005);
		}



	};


//-------------------------------------- -主页上部  选项卡部分  --------------------------------------------------------------
	//选项卡 转换图片，以及相关效果（按钮，背景图，文字区域）
	function tab1() {
		for (var i = 0; i < Dot_length; i++) {
			aFlipDotIpt[i].style.opacity='0.5';
			aBackpictureA[i].style.display = 'none';
			aback_postion[i].style.display = 'none';
			aback_postion[i].style.opacity='0';
		}
		aFlipDotIpt[now].style.opacity='1';             //按钮
		aBackpictureA[now].style.display = 'block';     //背景图
		aback_postion[now].style.display = 'block';     //文字区域
		oTop_Picture_text.style.display = 'block';      //文字区域  父级
		//层级设定
		oTop_Picture_text.style.zIndex = '1';
		olayout.style.zIndex = '2';
		aBackpictureA[now].style.zIndex = '-2';
		oBack_picture.style.zIndex = '-3';

		//选项卡中间文字  出现特效
		_slidemoveTop(aback_postion[now],-60,0,1.1);
		_slideshow(aback_postion[now],0.5,1,0.04);

		//第五张选项卡，无背景图，其余有，分别完成相应特效
		if(now==4){
			aBackpictureA[now].style.opacity='0';
			oBack_picture.style.display='none';
		}
		else{
			aBackpictureA[4].style.opacity='1';
			oBack_picture.style.display='block';
			_slideshow( aBackpictureA[now],0.4,1,0.005);
			_slideshow( oBack_picture,0.4,1,0.005);
		}
	}
    //选项卡 按钮点击
	for(var i=0;i<Dot_length;i++){
		aFlipDotIpt[i].index=i;
		aFlipDotIpt[i].onclick=function() {
			now=this.index;
			tab1()
		}
	}
	//向右播放
	function tabRight() {
		now++;
		if(now>Dot_length-1){ now=0}
		tab1()
	}


//----------------------------------------------顶部导航栏--------------------------------------------------------------
	//顶部导航栏，在一个循环区间内，鼠标事件，（在顶部导航栏里面的鼠标事件）
	for(var i=0;i<aTopBarMenu.length;i++){
		aTopBarMenu[i].index=i;
		oUnderBar.style.marginLeft = "-60px";    //赋值
		//上面导航栏点击事件
		aTopBarMenu[i].onclick=function() {
			now=this.index;
			for (var i = 0; i < aTopBarMenu.length; i++) {
				aTopBarMenu[i].style.borderBottom="none";
			}
			aTopBarMenu[now].style.borderBottom="5px solid #28d0e9";
		};

		//上面导航栏鼠标移入事件
		aTopBarMenu[i].onmouseover=function(){

			now=this.index;
			//每次鼠标移入  下面的蓝条和下面的菜单  先出现
			oUnderBar.style.display="block";
			oTop_bar_hover_menu.style.display="block";
			oTop_bar_hover_menu.style.marginTop="-439px";      //下方菜单位置复原



			//在鼠标移动到导航栏块上，导航栏的菜单  全部清除
			for (var i = 0; i < aTopBarMenu.length; i++) {
				aTop_H_menu[i].style.display = 'none';
				aTopBarMenu_a[i].style.color="#ffffff";
				oTop_bar_hover_menu.style.opacity="0.98";
			}
			console.log(now);
			if(now == 0|| now == 4){
				oTop_bar_hover_menu.style.display="none";
				oTop_bar_hover_menu.style.opacity="0";
				oTop_Picture_text.style.display = 'block';
			}
			else{
				//每次鼠标移入  下面的选项卡文字内容消失
				oTop_Picture_text.style.display = 'none';
				//当前的 出现
				aTop_H_menu[now].style.display = 'block';
				_slidemoveTop(aTop_H_menu[now],-100,0,2);
				_slideshow(aTop_H_menu[now],0.3,1,0.1);
			}
			//导航栏字体变蓝色
			aTopBarMenu_a[now].style.color="#28d0e9";

			//导航栏下方菜单，向上关闭按钮点击
			aBottomClick[now].onclick=function(){
				_slidemoveMarginTop(oTop_bar_hover_menu,-439,-939,0.5);
			};

			//判断 在鼠标移动到第几个导航栏块上，下面蓝条移动，宽度变化
			//分情况，讨论，鼠标移动到第几个上
			if(this.index == 0){
				var bar_l=oUnderBar.style.marginLeft;
				bar_l = parseInt(bar_l.substring(0,3));
				speed = bar_l/5400;
				oUnderBar.style.width="100px";
				_slidemoveMarginLeft(oUnderBar,bar_l,0,speed);
			}
			if(this.index == 1){
				oUnderBar.style.width="60px";
				var bar_l=oUnderBar.style.marginLeft;
				bar_l = parseInt(bar_l.substring(0,3));
				speed = bar_l/5400;
				_slidemoveMarginLeft(oUnderBar,bar_l,100,speed);
			}
			if(this.index == 2){
				oUnderBar.style.width="100px";
				var bar_l=oUnderBar.style.marginLeft;
				bar_l = parseInt(bar_l.substring(0,3));
				speed = bar_l/5400;
				_slidemoveMarginLeft(oUnderBar,bar_l,160,speed);
			}
			if(this.index == 3){
				oUnderBar.style.width="80px";
				var bar_l=oUnderBar.style.marginLeft;
				bar_l = parseInt(bar_l.substring(0,3));
				speed = bar_l/5400;
				_slidemoveMarginLeft(oUnderBar,bar_l,260,speed);
			}
			if(this.index == 4){
				var bar_l=oUnderBar.style.marginLeft;
				bar_l = parseInt(bar_l.substring(0,3));
				speed = bar_l/5400;
				_slidemoveMarginLeft(oUnderBar,bar_l,340,speed);
				oUnderBar.style.width="80px";
			}
			if(this.index == 5){
				var bar_l=oUnderBar.style.marginLeft;
				bar_l = parseInt(bar_l.substring(0,3));
				speed = bar_l/5400;
				_slidemoveMarginLeft(oUnderBar,bar_l,420,speed);
				oUnderBar.style.width="60px";
			}
			if(this.index == 6){
				var bar_l=oUnderBar.style.marginLeft;
				bar_l = parseInt(bar_l.substring(0,3));
				speed = bar_l/5400;
				_slidemoveMarginLeft(oUnderBar,bar_l,480,speed);
				oUnderBar.style.width="60px";
			}
			if(this.index == 7){
				var bar_l=oUnderBar.style.marginLeft;
				bar_l = parseInt(bar_l.substring(0,3));
				speed = bar_l/5400;
				_slidemoveMarginLeft(oUnderBar,bar_l,540,speed);
				oUnderBar.style.width="60px";
			}
		};

		//顶部导航栏  父级 ul  移入移出  （下拉菜单出现消失）
		oTop_bar_menu_l.onmouseover=function(){
			oTop_bar_hover_menu.style.display="block";
			if(now==0||now==4){
				oTop_Picture_text.style.display = 'block';
			}     //鼠标移入第1,4个导航栏，下面的轮播图文字不消失
		};
		oTop_bar_menu_l.onmouseout=function(){
			oTop_bar_hover_menu.style.display="none";

			if(now==0||now==4)
			{
				aback_postion[now].style.display = 'block';
				oTop_Picture_text.style.display = 'block';
			}
			_slidehidden(oUnderBar,1,0.8,0.01);
			oUnderBar.style.display="none"
		};
	}

	//顶部导航栏下拉菜单  内容   移入移出（下拉菜单出现消失）
	oTop_bar_hover_menu_C.onmouseover=function(){
		oTop_bar_hover_menu.style.display="block";
		if(now!==0&&now!==4){
			oTop_Picture_text.style.display = 'none';
		}
		oTop_bar.style.backgroundColor="rgba(55, 61, 65, 0.99)";
		oUnderBar.style.display="block";
	};
	oTop_bar_hover_menu_C.onmouseout=function(){
		oTop_bar_hover_menu.style.display="none";
		oTop_Picture_text.style.display = 'block';
		oTop_bar.style.backgroundColor="";
	};

	//顶部Top bar    移入移出，（变换颜色）
	oTop_bar_content.onmouseover=function(){
		oTop_bar.style.backgroundColor="rgba(55, 61, 65, 0.9)";
	};
	oTop_bar_content.onmouseout=function(){
		oTop_bar.style.backgroundColor="";
	};

	//导航栏移入下拉菜单  内容    part2,8(产品，更多)    选项卡
	for(var i=0;i<aHMC_p2l_a.length;i++){
		aHMC_p2l_a[i].index=i;
		aHMC_p2l_a[i].onmouseover=function() {
			now=this.index;
			for (var i = 0; i < aHMC_p2l_a.length; i++) {
				aHMC_p2_right[i].style.display = 'none';
			}
			aHMC_p2_right[now].style.display = 'block';
		}
	}
	for(var i=0;i<aHMC_p4l_a.length;i++){
		aHMC_p4l_a[i].index=i;
		aHMC_p4l_a[i].onmouseover=function() {
			now=this.index;
			for (var i = 0; i < aHMC_p4l_a.length; i++) {
				aHMC_p4_right[i].style.display = 'none';
			}
			aHMC_p4_right[now].style.display = 'block';
		}
	}

//----------------------------------------------中间部分---------------------------------------------------------------

	//中间部分  part2  大数据产品  鼠标移入特效
	for(var i=0;i<aM_product_C_M_li.length;i++){
		aM_product_C_M_li[i].index=i;
		aM_product_C_M_li[i].onmouseover=function() {
			now=this.index;
			for (var i = 0; i < aM_product_C_M_li.length; i++) {
				aM_product_li_back[i].style.background="#ffffff";
				aM_product_li_back[i].style.opacity="0.1";
				aM_product_li_back[i].style.zIndex="0";
				aM_product_C_M_p[i].style.fontSize="14px";
			}
			aM_product_li_back[now].style.background="#28d0e9";
			aM_product_li_back[now].style.opacity="0.6";
			aM_product_li_back[now].style.zIndex="-1";
			aM_product_C_M_p[now].style.fontSize="15px";
		}
	}


//----------------------------------------------底部-------------------------------------------------------------------
	//底部part3   二维码，鼠标移入移出
	for(var i=0;i<bottom_part3_code.length;i++){
		bottom_part3_code[i].index=i;
		bottom_part3_code[i].onmouseover=function() {
			now=this.index;
			for (var i = 0; i < bottom_part3_code.length; i++) {
				bottom_part3_img[i].style.display="none";
			}
			bottom_part3_img[now].style.display="block";
		}
	}
	//底部  part4  选择按钮，鼠标移入移出效果
	bottom_select1.onmouseover=function(){
		bottom_select2.style.display="block";
		bottom_select1_span[0].style.display="none";
		bottom_select1_span[1].style.display="block";
	};
	bottom_select1.onmouseout=function(){
		bottom_select2.style.display="none";
		bottom_select1_span[0].style.display="block";
		bottom_select1_span[1].style.display="none";
	};


	//选项卡计时器
	var timerPlay = setInterval(function(){
		tabRight();
		console.log("正在计时中")
	}, 40000);






//-----------------------------------------------------------------------------------------------------------------------------------------------------




};