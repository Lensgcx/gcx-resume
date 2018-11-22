



window.onload = function()
{
	//--------------------------获取对象--------------------------------------------------

	//第一个轮播图
	var oTab=document.querySelector('#tab');
	var aFlipDotIpt=document.querySelectorAll('.FlipDot input');
	var aDirectionSpan=document.querySelectorAll('.direction span');
	var oBackpicture=document.querySelector('.top-header-img-240');

	//侧边栏
	var oSpart1 = document.querySelector( ".sidebar-part1" );
	var oSpart2 = document.querySelector( ".sidebar-part2" );

	//顶部导航栏下拉菜单
	var oSubNav = document.querySelector( ".sub-nav" );

	var oTitem1 = document.querySelector( ".Top-items1" );
	var oTitem2 = document.querySelector( ".Top-items2" );
	var oTitem3 = document.querySelector( ".Top-items3" );
	var oTitem4 = document.querySelector( ".Top-items4" );
	var oTitem5 = document.querySelector( ".Top-items5" );
	var oTitem6 = document.querySelector( ".Top-items6" );

	var oSubPart1 = document.querySelector( ".sub-nav-part1" );
	var oSubPart2 = document.querySelector( ".sub-nav-part2" );
	var oSubPart3 = document.querySelector( ".sub-nav-part3" );
	var oSubPart4 = document.querySelector( ".sub-nav-part4" );
	var oSubPart5 = document.querySelector( ".sub-nav-part5" );
	var oSubPart6 = document.querySelector( ".sub-nav-part6" );



	var oMiddlePart1 = document.querySelector( ".middle-part1" );
	var oMiddlePart2 = document.querySelector( ".middle-part2" );
	var oBottomPart = document.querySelector( ".bottom-part" );


	var  clientH= document.documentElement.clientHeight;  //定义可视窗口高度
	var  clientW= document.documentElement.clientWidth;  //定义可视窗口宽度

	//-----------------------------函数部分--------------------------------------------------

	//第一个轮播图部分
	var now=0;
	function tab(){
		for (var i = 0; i < aFlipDotIpt.length; i++){
			aFlipDotIpt[i].style.background='';
		}
		aFlipDotIpt[now].style.background='skyblue';
		oBackpicture.style.transition='1s all ease';
		oBackpicture.style.left=-1120*now+'px';
	}
	for(var i=0;i<aFlipDotIpt.length;i++){
		aFlipDotIpt[i].index=i;
		aFlipDotIpt[i].onclick=function() {
			now=this.index;
			tab()
		}
	}
	function tabRight() {
		now++;
		if(now>5){ now=0}
		tab()
	}
	aDirectionSpan[0].onclick=function(){
		now--;
		if(now<0){ now=5}
		tab()
	};
	aDirectionSpan[1].onclick = tabRight;

//---------计时器  时间轴函数调用以上轮播图------

	var timer = setInterval(function(){
		tabRight();
	}, 4000);
	oTab.onmouseover = function () {
		clearInterval(timer);
		timer=null;
	};
	oTab.onmouseout = function () {
		timer = setInterval(tabRight, 4000);
	};


	//-----------------侧边栏鼠标移入移除函数--------------------------------
	oSpart1.onmouseover = function()
	{
		oSpart1.style.transition = '0.5s all ease';
		oSpart1.style.position = 'absolute';
		oSpart1.style.width = 194 + 'px';
		oSpart1.style.right = 143 + 'px';
		//oSpart1.style.backgroundImage="url(../img/onlineservice-open.png)";
	};
	oSpart1.onmouseout = function()
	{
		oSpart1.style.transition = '0.5s all ease';
		oSpart1.style.position = 'absolute';
		oSpart1.style.width = 51 + 'px';
		oSpart1.style.right = 143 + 'px';
		oSpart1.style.backgroundSize = 'auto';
	};
	oSpart2.onmouseover = function()
	{
		oSpart2.style.transition = '0.5s all ease';
		oSpart2.style.position = 'absolute';
		oSpart2.style.width = 194 + 'px';
		oSpart2.style.right = 143 + 'px';
	};
	oSpart2.onmouseout = function()
	{
		oSpart2.style.transition = '0.5s all ease';
		oSpart2.style.position = 'absolute';
		oSpart2.style.width = 51 + 'px';
		oSpart2.style.right = 143 + 'px';
	};

	//-----------------顶部导航栏下拉菜单 鼠标移入移除函数--------------------------------
	//-----------------菜单栏1--------------------
	oTitem1.onmouseover = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart1.style.transition = '1s all ease';
		oSubNav.style.height = "190px";
		oSubPart1.style.display = "block";
	};
	oTitem1.onmouseout = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart1.style.transition = '1s all ease';
		oSubNav.style.height = "0";
		oSubPart1.style.display = "none";
	};
	oSubPart1.onmouseover = function()
	{
		oSubNav.style.height = "190px";
		oSubPart1.style.display = "block";
	};
	oSubPart1.onmouseout = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart1.style.transition = '1s all ease';
		oSubNav.style.height = "0";
		oSubPart1.style.display = "none";
	};
	//-----------------菜单栏2--------------------
	oTitem2.onmouseover = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart2.style.transition = '1s all ease';
		oSubNav.style.height = "90px";
		oSubPart2.style.display = "block";
	};
	oTitem2.onmouseout = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart2.style.transition = '1s all ease';
		oSubNav.style.height = "0";
		oSubPart2.style.display = "none";
	};
	oSubPart2.onmouseover = function()
	{
		oSubNav.style.height = "90px";
		oSubPart2.style.display = "block";
	};
	oSubPart2.onmouseout = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart2.style.transition = '1s all ease';
		oSubNav.style.height = "0";
		oSubPart2.style.display = "none";
	};
	//--------------菜单栏3--------------------
	oTitem3.onmouseover = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart3.style.transition = '1s all ease';
		oSubNav.style.height = "150px";
		oSubPart3.style.display = "block";
	};
	oTitem3.onmouseout = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart3.style.transition = '1s all ease';
		oSubNav.style.height = "0";
		oSubPart3.style.display = "none";
	};
	oSubPart3.onmouseover = function()
	{
		oSubNav.style.height = "150px";
		oSubPart3.style.display = "block";
	};
	oSubPart3.onmouseout = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart3.style.transition = '1s all ease';
		oSubNav.style.height = "0";
		oSubPart3.style.display = "none";
	};
	//--------------菜单栏4--------------------
	oTitem4.onmouseover = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart4.style.transition = '1s all ease';
		oSubNav.style.height = "120px";
		oSubPart4.style.display = "block";
	};
	oTitem4.onmouseout = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart4.style.transition = '1s all ease';
		oSubNav.style.height = "0";
		oSubPart4.style.display = "none";
	};
	oSubPart4.onmouseover = function()
	{
		oSubNav.style.height = "120px";
		oSubPart4.style.display = "block";
	};
	oSubPart4.onmouseout = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart4.style.transition = '1s all ease';
		oSubNav.style.height = "0";
		oSubPart4.style.display = "none";
	};
	//--------------菜单栏5--------------------
	oTitem5.onmouseover = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart5.style.transition = '1s all ease';
		oSubNav.style.height = "140px";
		oSubPart5.style.display = "block";
	};
	oTitem5.onmouseout = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart5.style.transition = '1s all ease';
		oSubNav.style.height = "0";
		oSubPart5.style.display = "none";
	};
	oSubPart5.onmouseover = function()
	{
		oSubNav.style.height = "140px";
		oSubPart5.style.display = "block";
	};
	oSubPart5.onmouseout = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart5.style.transition = '1s all ease';
		oSubNav.style.height = "0";
		oSubPart5.style.display = "none";
	};
	//--------------菜单栏6--------------------
	oTitem6.onmouseover = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart6.style.transition = '1s all ease';
		oSubNav.style.height = "190px";
		oSubPart6.style.display = "block";
	};
	oTitem6.onmouseout = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart6.style.transition = '1s all ease';
		oSubNav.style.height = "0";
		oSubPart6.style.display = "none";
	};
	oSubPart6.onmouseover = function()
	{
		oSubNav.style.height = "190px";
		oSubPart6.style.display = "block";
	};
	oSubPart6.onmouseout = function()
	{
		oSubNav.style.transition = '0.2s all ease';
		oSubPart6.style.transition = '1s all ease';
		oSubNav.style.height = "0";
		oSubPart6.style.display = "none";
	};

};