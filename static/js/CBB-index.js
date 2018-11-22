/**
 * Created by Administrator on 2016/9/10 0010.
 */



window.onload = function()
{
//--------------------------获取对象--------------------------------------------------

	//侧边栏
	var oSidebar = document.querySelector( '.sidebar' );
	//选项卡
	var oTab = document.querySelector( '.middle-part1-content' );
	var aFlipDotIpt = document.querySelectorAll( '.FlipDot input' );
	var aDirectionSpan = document.querySelectorAll( '.direction span' );
	var aBackpictureA = document.querySelectorAll( '.top-header-img a' );
	var oImgWidth = document.querySelectorAll( '.top-header-img a' );

	//滚动图
	var oTab2=document.querySelector('.middle-part1');
	var aFlipDotIpt2=document.querySelectorAll('.FlipDot2 input');
	var oPartTotle=document.querySelector('.middle-part1-content-totle');

	var oLeftClick2=document.querySelector('.middle-part1-leftclick');
	var oRightClick2=document.querySelector('.middle-part1-rightclick');

	var oLeftClicka1=document.querySelector('.leftclick1');
	var oLeftClicka2 =document.querySelector('.leftclick2');
	var oRightClicka1=document.querySelector('.rightclick1');
	var oRightClicka2 =document.querySelector('.rightclick2');


	var oMiddleP3Title1 =document.querySelector('.middle-part3-title1');
	var oMiddleP3Title2 =document.querySelector('.middle-part3-title2');
	var oMiddleP3Title3 =document.querySelector('.middle-part3-title3');
	var oMiddleP3Title4 =document.querySelector('.middle-part3-title4');
	var TitleAll =document.querySelectorAll('.middle-part3-title-ul li');

	var oMiddleP4ContRep41 =document.querySelector('#middle-part4-content-replace4-1');
	var oMiddleP4ContRep42 =document.querySelector('#middle-part4-content-replace4-2');
	var oMiddleP4ContRep43 =document.querySelector('#middle-part4-content-replace4-3');
	var oMiddleP4ContRep44 =document.querySelector('#middle-part4-content-replace4-4');
	//var aMiddleP4Cont =document.querySelectorAll('.middle-part4-content div');

	//console.log(TitleAll[0]);
	//console.log(aMiddleP4Cont);

	var width = document.body.scrollWidth;
	var goleft = 0;
	if(width<=1300||width>=800){
		goleft=-500
	}
	console.log(width);
	console.log(oImgWidth );


//-----------------------------函数部分--------------------------------------------------
	//1、侧边栏
	oSidebar.onmouseover=function(){
		oSidebar.style.transition='0.5s all ease';
		oSidebar.style.marginLeft="-120px";
	};
	oSidebar.onmouseout=function(){
		oSidebar.style.transition='0.5s all ease';
		oSidebar.style.marginLeft="-40px";
	};

	//2、选项卡
	var now=0;
	function tab() {
		for (var i = 0; i < aFlipDotIpt.length; i++) {
			aFlipDotIpt[i].style.background = '#ccc';
			aBackpictureA[i].style.display = 'none';
		}
		aFlipDotIpt[now].style.background = '#1693f1';
		aBackpictureA[now].style.display = 'block';
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

	//3、滚动图
	var now2=0;
	function tab2(){
		for (var i = 0; i < aFlipDotIpt2.length; i++){
			aFlipDotIpt2[i].style.background='';
		}
		aFlipDotIpt2[now].style.background='skyblue';
		oPartTotle.style.transition='0.5s all ease';
		oPartTotle.style.left=-968*now2+'px';
	}
	for(var j = 0;j<aFlipDotIpt.length;j++){
		aFlipDotIpt2[j].index=j;
		aFlipDotIpt2[j].onclick=function() {
			now2=this.index;
			tab2()
		}
	}
	function tabRight2() {
		now2++;
		if(now2>7){ now2=0}
		tab2()
	}
	var pageIndex = 0;
	oLeftClick2.onclick=function(){

		if(pageIndex!=0){
			now2--;
			if(now2<0){ now2=7}
			tab2();
			pageIndex=0;
			oRightClicka1.style.display="block";    //lan
			oRightClicka2.style.display="none";   //hui
			oLeftClicka1.style.display="block";     //hui
			oLeftClicka2.style.display="none";       //lan
			console.log(pageIndex);
		}
	};
	oRightClick2.onclick = function(){
		if(pageIndex==0)
		{
			tabRight2();
			pageIndex++;
			console.log(pageIndex);
			oLeftClicka1.style.display="none";   //hui
			oLeftClicka2.style.display="block";    //lan
			oRightClicka1.style.display="none";     //lan
			oRightClicka2.style.display="block";      //hui
		}
	};

//-----------4、中间part3  4  换页，按钮转换-------------------

	//清除所有title下边框
	function deleteborder(){
		for(var i = 0;i<4;i++)
		{
			TitleAll[i].style.border = "none";
		}
	}

	oMiddleP3Title1.onmouseover=function(){
		deleteborder();
		oMiddleP4ContRep41.style.display="block";
		oMiddleP3Title1.style.borderBottom="4px solid #0066B3";
		oMiddleP4ContRep42.style.display="none";
		oMiddleP4ContRep43.style.display="none";
		oMiddleP4ContRep44.style.display="none";
	};
	oMiddleP3Title2.onmouseover=function(){
		deleteborder();
		oMiddleP4ContRep42.style.display="block";
		oMiddleP3Title2.style.borderBottom="4px solid #0066B3";
		oMiddleP4ContRep41.style.display="none";
		oMiddleP4ContRep43.style.display="none";
		oMiddleP4ContRep44.style.display="none";
	};
	oMiddleP3Title3.onmouseover=function(){
		deleteborder();
		oMiddleP4ContRep43.style.display="block";
		oMiddleP3Title3.style.borderBottom="4px solid #0066B3";
		oMiddleP4ContRep41.style.display="none";
		oMiddleP4ContRep42.style.display="none";
		oMiddleP4ContRep44.style.display="none";
	};
	oMiddleP3Title4.onmouseover=function(){
		deleteborder();
		oMiddleP4ContRep44.style.display="block";
		oMiddleP3Title4.style.borderBottom="4px solid #0066B3";
		oMiddleP4ContRep41.style.display="none";
		oMiddleP4ContRep42.style.display="none";
		oMiddleP4ContRep43.style.display="none";
	};


	//---------计时器  时间轴函数调用以上函数------

	var timer = setInterval(function(){
		tabRight();
	}, 2000);
	oTab.onmouseover = function () {
		clearInterval(timer);
		timer=null;
	};
	oTab.onmouseout = function () {
		timer = setInterval(tabRight, 2000);
	};
	//oTab2.onmouseover = function () {
	//	clearInterval(timer);
	//	timer=null;
	//};
	//oTab2.onmouseout = function () {
	//	timer = setInterval(tabRight2, 2000);
	//};













};