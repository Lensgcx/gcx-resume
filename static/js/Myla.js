
window.onload=function(){


	//顶部小图标
	var aCur_whole_a = document.querySelectorAll( '.cur_whole a' );

	//导航栏
	var oLa_top_menu = document.querySelector( '.La_top_menu' );     				           //导航栏
	var aLa_top_menu_item = document.getElementsByClassName( 'La_top_menu_item' );      	   //导航栏按钮
	var aLa_top_menu_item_span = document.querySelectorAll( '.La_top_menu_item a span' );      //导航栏 按钮文字

	//导航栏下拉菜单
	var aSub_menu_wrapper = document.getElementsByClassName( 'sub_menu_wrapper' );

	//页面正文 上部标题
	var aLa_wrap_content_tlt = document.getElementsByClassName( 'La_wrap_content_tlt' );

	//底部悬空显示条
	var oCookie_popup = document.querySelector( '.cookie_popup' );


//------------------------------------------函数部分-----------------------------------------------

	//顶部图标
	for( var i = 0; i < aCur_whole_a.length; i++ )
	{
		aCur_whole_a[ i ].index = i;
		aCur_whole_a[i].onclick=function(){
			now = this.index;
			for( var i = 0; i < aCur_whole_a.length; i++ )
			{
				aCur_whole_a[i].style.border = '1px solid #808285';
				aCur_whole_a[i].style.color = "#808285";
			}
			aCur_whole_a[now].style.color="#DDDCDC !important";
			aCur_whole_a[now].style.border = '1px solid #DDDCDC';

		}
	}
	//导航栏及下拉菜单，效果
	for( var i = 0; i < aLa_top_menu_item.length; i++ )
	{
		aLa_top_menu_item[ i ].index = i;
		//鼠标进入导航栏，显示下拉菜单
		aLa_top_menu_item[ i ].onmouseover = function()
		{
			now = this.index;
			for( var i = 0; i < aLa_top_menu_item.length; i++ )
			{
				aSub_menu_wrapper[i].style.transition = '0.05s all ease';
				aSub_menu_wrapper[i].style.height = 0 ;
				aSub_menu_wrapper[i].style.backgroundColor = "rgba(239,239,239,0)" ;
				aLa_top_menu_item_span[i].style.transition = '0.3s all ease';
				aLa_top_menu_item_span[i].style.border = "none" ;
				aLa_top_menu_item_span[i].style.color = "#313134" ;
			}
			aLa_top_menu_item_span[now].style.transition = '0.6s all ease';
			aLa_top_menu_item_span[now].style.borderBottom = "1px solid #ecb3cc" ;
			aLa_top_menu_item_span[now].style.color = "#ecb3cc" ;

			if(now==1||now==2||now==4||now==5)
			{
				for( var i = 0; i < aLa_wrap_content_tlt.length; i++ ){
					aLa_wrap_content_tlt[i].style.transition = '0.8s all ease';
					aLa_wrap_content_tlt[i].style.opacity = "0.05" ;
				}
				aSub_menu_wrapper[now].style.transition = '0.8s all ease';
				aSub_menu_wrapper[now].style.height = "230px";
				aSub_menu_wrapper[now].style.backgroundColor = "rgba(239,239,239,0.86)" ;
			}
			else
			{
				for( var i = 0; i < aLa_wrap_content_tlt.length; i++ ){
					aLa_wrap_content_tlt[i].style.opacity = "1" ;
				}

				aSub_menu_wrapper[now].style.transition = '0.8s all ease';
				aSub_menu_wrapper[now].style.height = "5px";
				aSub_menu_wrapper[now].style.opacity = "0.92" ;
			}
			//进入当前下拉菜单
			if(now==1||now==2||now==4||now==5)
			{
				aSub_menu_wrapper[ now ].onmouseover = function()
				{
					this.style.height = "230px";
				};
			}
		};
		//离开下拉菜单
		aSub_menu_wrapper[i].onmouseout = function(){
			for( var i = 0; i < aLa_top_menu_item.length; i++ )
			{
				aSub_menu_wrapper[i].style.transition = '0.4s all ease';
				aSub_menu_wrapper[i].style.height = "1px";
			}
			for( var i = 0; i < aLa_wrap_content_tlt.length; i++ ){
				aLa_wrap_content_tlt[i].style.transition = '1.6s all ease';
				aLa_wrap_content_tlt[i].style.opacity = "1" ;
			}
		}
	}
	//离开导航栏
	oLa_top_menu.onmouseout=function(){
		for( var i = 0; i < aLa_wrap_content_tlt.length; i++ ){
			aLa_wrap_content_tlt[i].style.opacity = "1" ;
		}
		for( var i = 0; i < aSub_menu_wrapper.length; i++ )
		{
			aSub_menu_wrapper[i].style.transition = '0.4s all ease';
			aSub_menu_wrapper[i].style.height = "1px";
		}
	};

	//下拉条滚动事件
	window.onscroll = function()
	{
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(scrollTop);
		if(scrollTop>980){
			oCookie_popup.style.display="block";
		}

	};



};