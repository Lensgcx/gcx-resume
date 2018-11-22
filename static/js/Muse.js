/**
 * Created by Administrator on 2016/9/20 0020.
 */
window.onload = function()
{

	//输入框
	var aIpt = document.getElementsByTagName( 'input' )[ 0 ];
	aIpt.focus();                    //输入框自动获取焦点

	//顶部选项卡
	var oTab1 = document.querySelector( '#tab1' );                                      //选项卡整体
	var aTop_Big_p = document.querySelectorAll( '.top_big_p_img a' );    				//选项卡的背景图片
	var aTop_Big_Click_li = document.querySelectorAll( '.top_big_p_click li' );          //选项卡按钮   整体
	var aTop_Big_Click_red = document.querySelectorAll( '.top_big_p_click li a' );       //选项卡   红色翻页按钮

	//title  添加按钮   鼠标移入效果
	var aBig_title_Add = document.getElementsByClassName( 'big_title_Add' );		//按钮
	var aAdd_before = document.getElementsByClassName( 'Add_before' );				//灰色底
	var aAdd_after = document.getElementsByClassName( 'Add_after' );				//红色底

	//最新活动 选项卡
	var aNA_tab_img = document.querySelectorAll( '.na_tab_img a' );                  //选项卡的背景图片
	var aNA_tab_FlipDot = document.querySelectorAll( '.na_tab_FlipDot input' );      //选项卡按钮
	var aName_list_Content = document.querySelector( '.Name_list_Content' );         //预约成功名单  ul

	//特色场景选项卡
	var aScene_content = document.querySelectorAll( '.scene_content a' );       //选项卡的主图 背景图片
	var aScene_Small = document.getElementsByClassName( 'scene_small_p' );      //缩略图整体
	var Scene_msk = document.querySelectorAll( '.scene_small_p div' );      	//缩略图的遮罩层

	//服务团队
	var aDesigner_picture = document.getElementsByClassName( 'Designer_picture' );  //服务团队图片
	var aService_bck_w = document.getElementsByClassName( 'service_bck_w' );		//服务团队  白色圆框
	var aService_bck_r = document.getElementsByClassName( 'service_bck_r' );		//服务团队  红色圆框
	var aService_Go = document.getElementsByClassName( 'service_Go' );				//服务团队   预定 GO
	var Scene_name = document.querySelectorAll( '.Designer_information h4' );      	//服务团队   姓名
	var Scene_inf = document.querySelectorAll( '.Designer_information span' );      //服务团队   介绍

	//返回顶部按钮
	var oGo_up = document.querySelector( '.Contact_information_part4' );              //返回顶部按钮
	var oGo_up_img = document.querySelectorAll( '.Contact_information_part4 img' );   //返回顶部按钮 颜色

	//底部 联系方式
	var aContact_before = document.querySelectorAll( '.Contact_before' );              //联系方式 按钮 before
	var aContact_after = document.querySelectorAll( '.Contact_after' );              //联系方式 按钮 after

	//底部 品牌链接
	var aBrand_link = document.querySelectorAll( '.brand_link ul li' );              //底部 品牌链接 单个part
	var aBrand_link_text = document.querySelectorAll( '.brand_link_text' );          //按钮 before
	var aBrand_link_hover = document.querySelectorAll( '.brand_link_hover' );        //按钮 after














	console.log( oGo_up_img );

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

	// 透明度 变化缓动效果（从无到有）
	function _slideshow( ele1, opa1, opa2, speed )
	{
		var timer = setTimeout( function()
		{
			if( opa1 < opa2 )
			{
				opa1 += speed;
				ele1.style.opacity = opa1;
				_slideshow( ele1, opa1, opa2, speed );
			}
			else
			{
				clearTimeout( timer );
			}
		}, 1 );
	}

	// 透明度 变化缓动效果（从有到无）
	function _slidehidden( ele1, opa1, opa2, speed )
	{
		var timer = setTimeout( function()
		{
			if( opa1 > opa2 )
			{
				opa1 -= speed;
				ele1.style.opacity = opa1;
				_slidehidden( ele1, opa1, opa2, speed );
			}
			else
			{
				clearTimeout( timer );
			}
		}, 1 );
	}

	// Top 变化缓动效果（从上到下）
	function _slidemoveDown( ele1, opa, opa2, speed )
	{
		//console.log(speed);
		var timer = setTimeout( function()
		{
			if( opa < opa2 )
			{
				opa += speed;
				ele1.style.top = opa + "px";
				_slidemoveDown( ele1, opa, opa2, speed );
			}
			else
			{
				clearTimeout( timer );
			}
		}, 5 );
	}

	// Top 变化缓动效果（从下到上）
	function _slidemoveTop( ele1, opa, opa2, speed )
	{
		//console.log(speed);
		var timer = setTimeout( function()
		{
			if( opa > opa2 )
			{
				opa -= speed;
				ele1.style.top = opa + "px";
				_slidemoveTop( ele1, opa, opa2, speed );
			}
			else
			{
				clearTimeout( timer );
			}
		}, 5 );
	}

	// MarginLeft 变化缓动效果（左右方向移动）
	function _slidemoveMarginLeft( ele1, opa, opa2, speed )
	{
		var timer = setTimeout( function()
		{
			if( opa < opa2 )
			{
				opa += 20;
				ele1.style.marginLeft = opa + "px";
				_slidemoveMarginLeft( ele1, opa, opa2, speed );
			}
			if( opa > opa2 )
			{
				opa -= 20;
				ele1.style.marginLeft = opa + "px";
				_slidemoveMarginLeft( ele1, opa, opa2, speed );
			}
			if( opa == opa2 )
			{
				clearTimeout( timer );
			}
		}, speed );
	}

	// MarginTop 变化缓动效果（上下方向移动）
	function _slidemoveMarginTop( ele1, opa, opa2, speed )
	{
		var timer = setTimeout( function()
		{
			if( opa < opa2 )
			{
				opa += 20;
				ele1.style.marginTop = opa + "px";
				_slidemoveMarginTop( ele1, opa, opa2, speed );
			}
			if( opa > opa2 )
			{
				opa -= 20;
				ele1.style.marginTop = opa + "px";
				_slidemoveMarginTop( ele1, opa, opa2, speed );
			}
			if( opa == opa2 )
			{
				clearTimeout( timer );
			}
		}, speed );
	}

	// width 宽度变化缓动效果（左右方向移动）
	function _slidemoveWidth( ele1, opa, opa2, speed )
	{
		var timer = setTimeout( function()
		{
			if( opa < opa2 )
			{
				opa += 5;
				ele1.style.width = opa + "px";
				_slidemoveWidth( ele1, opa, opa2, speed );
			}
			if( opa > opa2 )
			{
				opa -= 5;
				ele1.style.width = opa + "px";
				_slidemoveWidth( ele1, opa, opa2, speed );
			}
			if( opa == opa2 )
			{
				clearTimeout( timer );
			}
		}, speed );
	}

	// width 长度变化缓动效果（左右方向移动）
	function _slidemoveHeight( ele1, opa, opa2, speed )
	{
		var timer = setTimeout( function()
		{
			if( opa < opa2 )
			{
				opa += 5;
				ele1.style.height = opa + "px";
				_slidemoveWidth( ele1, opa, opa2, speed );
			}
			if( opa > opa2 )
			{
				opa -= 5;
				ele1.style.height = opa + "px";
				_slidemoveHeight( ele1, opa, opa2, speed );
			}
			if( opa == opa2 )
			{
				clearTimeout( timer );
			}
		}, speed );
	}

	//-------------------------------------------函数部分-----------------------------------------------------------------------------

	//----------------------顶部选项卡----------------------------------------------
	var now1 = 0;
	function tab1()
	{
		for( var i = 0; i < aTop_Big_p.length; i++ )
		{
			aTop_Big_p[ i ].style.display = 'none';
		}
		aTop_Big_p[ now1 ].style.display = 'block';
		_slideshow( aTop_Big_p[ now1 ], 0, 1, 0.004 );
	}
	function tab1Right()
	{
		now1++;
		if( now1 > aTop_Big_p.length - 1 )
		{
			now1 = 0
		}
		tab1()
	}
	aTop_Big_Click_li[ 0 ].onclick = function()
	{
		now1--;
		if( now1 < 0 )
		{
			now1 = aTop_Big_p.length - 1
		}
		tab1()
	};
	aTop_Big_Click_li[ 1 ].onclick = tab1Right;

	var timer1 = setInterval(function(){
		tab1Right()
	}, 10000);	//计时器
	//鼠标移入移出 停止/开始
	oTab1.onmouseover = function () {
		clearInterval(timer1);
		timer=null;
	};
	oTab1.onmouseout = function () {
		timer1 = setInterval(tab1Right, 10000);
	};
	//选项卡左右翻页按钮鼠标移入样式变化
	for( var i = 0; i < aTop_Big_Click_li.length; i++ )
	{
		aTop_Big_Click_li[ i ].index = i;
		aTop_Big_Click_li[ i ].onmouseover = function()
		{
			now = this.index;
			aTop_Big_Click_red[ now ].style.display = "block";
		};
		aTop_Big_Click_li[ i ].onmouseout = function()
		{
			now = this.index;
			aTop_Big_Click_red[ now ].style.display = "none";
		}
	}

	//----------------------页面中间内容----------------------------------------------

	//title  添加按钮   鼠标移入效果
	for( var i = 0; i < aBig_title_Add.length; i++ )
	{
		aBig_title_Add[ i ].index = i;
		aBig_title_Add[ i ].onmouseover = function()
		{
			now = this.index;
			for( var i = 0; i < aBig_title_Add.length; i++ )
			{
				aAdd_before[ i ].style.display = 'block';
				aAdd_after[ i ].style.display = 'none';
			}
			aAdd_before[ now ].style.display = 'none';
			aAdd_after[ now ].style.display = 'block';
		};
		aBig_title_Add[ i ].onmouseout = function()
		{
			aAdd_before[ now ].style.display = 'block';
			aAdd_after[ now ].style.display = 'none';
		}
	}
	//最新活动选项卡
	for( var i = 0; i < aNA_tab_FlipDot.length; i++ )
	{
		aNA_tab_FlipDot[ i ].index = i;
		aNA_tab_FlipDot[ i ].onclick = function()
		{
			now = this.index;
			for( var i = 0; i < aNA_tab_FlipDot.length; i++ )
			{
				aNA_tab_img[ i ].style.display = 'none';
				aNA_tab_FlipDot[ i ].style.opacity= '0.7';
			}
			aNA_tab_img[ now ].style.display = 'block';
			aNA_tab_FlipDot[ now ].style.opacity= '1';
			_slideshow( aNA_tab_img[ now ], 0, 1, 0.005 );
		}
	}
	//预约成功名单
	step=0;
	function Name_list()
	{
		if(step<850){
			step++;
			aName_list_Content.style.transition = '1s all ease';
			aName_list_Content.style.top = -1.5 * step + 'px';
		}
		else{
			step=-120;
			aName_list_Content.style.top = 0;
		}
	}
	var timer2 = setInterval(function(){
		Name_list()
	}, 50);//计时器
	//鼠标移入移出 停止/开始
	aName_list_Content.onmouseover = function () {
		clearInterval(timer2);
		timer=null;
	};
	aName_list_Content.onmouseout = function () {
		timer2 = setInterval(Name_list, 50);
	};
	//特色场景选项卡
	for( var i = 0; i < aScene_Small.length; i++ )
	{
		aScene_Small[ i ].index = i;
		aScene_Small[ i ].onmouseover = function()
		{
			now = this.index;
			for( var i = 0; i < aScene_Small.length; i++ )
			{
				aScene_content[ i ].style.display = 'none';
				Scene_msk[ i ].style.display = 'block';
			}
			aScene_content[ now ].style.display = 'block';
			Scene_msk[ now ].style.display = 'none';
			//_slidehidden(Scene_msk[now],0.3,0,0.0001);
			_slideshow( aScene_content[ now ], 0, 1, 0.005 );
			aScene_Small[ now ].onmouseout = function()
			{
				Scene_msk[ now ].style.display = 'block';
			}
		}
	}
	//服务团队   鼠标一移入移出效果
	for( var i = 0; i < aDesigner_picture.length; i++ )
	{
		aDesigner_picture[ i ].index = i;
		aDesigner_picture[ i ].onmouseover = function()
		{
			now = this.index;
			for( var i = 0; i < aDesigner_picture.length; i++ )
			{
				aService_bck_w[ i ].style.display = 'block';
				Scene_name[ i ].style.display = 'block';
				Scene_inf[ i ].style.display = 'block';
				aService_bck_r[ i ].style.display = 'none';
				aService_Go[ i ].style.display = 'none';
			}
			aService_bck_w[ now ].style.display = 'none';
			aService_bck_r[ now ].style.display = 'block';
			aService_Go[ now ].style.display = 'block';
			Scene_name[ now ].style.display = 'none';
			Scene_inf[ now ].style.display = 'none';
		};
		aDesigner_picture[ i ].onmouseout = function()
		{
			aService_bck_w[ now ].style.display = 'block';
			Scene_name[ now ].style.display = 'block';
			Scene_inf[ now ].style.display = 'block';
			aService_bck_r[ now ].style.display = 'none';
			aService_Go[ now ].style.display = 'none';
		}
	}

	//----------------------页面底部内容----------------------------------------------

	//底部联系方式  QQ 微信 空间
	for( var i = 0; i < aContact_before.length; i++ )
	{
		aContact_before[ i ].index = i;
		aContact_before[ i ].onmouseover = function()
		{
			now = this.index;
			for( var i = 0; i < aContact_before.length; i++ )
			{
				aContact_before[ i ].style.display = 'block';
				aContact_after[ i ].style.display = 'none';
			}
			aContact_before[ now ].style.display = 'none';
			aContact_after[ now ].style.display = 'block';
			aContact_after[ now ].onmouseout = function()
			{
				aContact_before[ now ].style.display = 'block';
				aContact_after[ now ].style.display = 'none';
			}
		}
	}
	//下拉条滚动事件
	window.onscroll = function()
	{
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;    //兼容性写法
		//console.log(scrollTop);
		oGo_up.onclick = function()
		{
			_goTop( 0, 0.01 );
		}
	};
	//返回顶部按钮  变换样式
	oGo_up.onmouseover = function()
	{
		oGo_up_img[ 0 ].style.display = "none";
		oGo_up_img[ 1 ].style.display = "block";
	};
	oGo_up.onmouseout = function()
	{
		oGo_up_img[ 0 ].style.display = "block";
		oGo_up_img[ 1 ].style.display = "none";
	};
	//底部  品牌链接
	for( var i = 0; i < aBrand_link.length; i++ )
	{
		aBrand_link[ i ].index = i;
		aBrand_link[ i ].onmouseover = function()
		{
			now = this.index;
			for( var i = 0; i < aBrand_link.length; i++ )
			{
				aBrand_link_text[ i ].style.display = 'block';
				aBrand_link_hover[ i ].style.display = 'none';
			}
			aBrand_link_text[ now ].style.display = 'none';
			aBrand_link_hover[ now ].style.display = 'block';
			aBrand_link[ now ].onmouseout = function()
			{
				aBrand_link_text[ now ].style.display = 'block';
				aBrand_link_hover[ now ].style.display = 'none';
			}
		}
	}

};