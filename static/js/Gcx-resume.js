/**
 * Created by gcx
 */

$( document ).ready( readyHandler );

function readyHandler()
{
	// Whole   （each parts++）
	var $resume_content = $('.resume_content');

	//each parts
	var $resume_part = $('.resume_part');
	var aResume_Part = document.getElementsByClassName( 'resume_part' );

	//翻页文字部分 左右 整体
	var $Flip_prev = $('.Flip_prev');
	var $Flip_next = $('.Flip_next');

	//翻页导航文字 整体
	var $Navigation = $(".Navigation");
	//翻页提示文字 左右
	var $prev_text = $('.prev_text');
	var $next_text = $('.next_text');

	//翻页按钮
	var $prev = $('.prev');
	var $next = $('.next');

	//导航栏各部分链接  li    17 parts（包括index）
	var $R_index_btn = $('.R_index_btn');          //index
	var $nav_part = $('.R_Navigation_menu li');    //other

	var n = 0;

	//所有导航名字
	text_arr=["首页","自我介绍","兴趣爱好","业余生活","核心竞争力(概述)","核心竞争力(各项占比)","核心竞争力(解决问题)",
		"核心竞争力(技能水平)","教育履历","在校实践","培训及证书","工作情况","期望和胜任","PS作品","AI作品","网页作品","车贷计算",
		"贪吃蛇"]	;

	//首页点击
	$R_index_btn.on("click",function(){
		$resume_content.css("left",0);
		aResume_Part[ 0 ].style.opacity = "1";
		$next.css("display","block");
		$Flip_next.css("display","block");
		$Flip_prev.css("display","none");
		$prev.css("display","none");
		$next_text.text(text_arr[1]);
		n = 0;

	});
	//其余链接点击
	for(var i = 0;i<17;i++){
		$nav_part[ i ].index = i;
		$nav_part.eq( i ).on("click",function(){
			now = this.index;
			$resume_content.css("left",-1000*(now+1)+"px");
			n = now+1;
			console.log("点击链接，当前n",n);
			aResume_Part[ n%($nav_part.length+1) ].style.opacity = "1";
			$Flip_prev.css("display","block");
			$prev.css("display","block");
			$next.css("display","block");
			font();
			if(n==17){
				$Flip_next.css("display","none");
				$next.css("display","none");
			}
		})
	}
	/**
	 * 页面内容 翻页变化
	 */
	function change(){
		$resume_part.each(function(){
			$(this).css("opacity",0);
		});
		//$resume_part.eq(n).animate({opacity:1},"slow");
		aResume_Part[ n%18 ].style.transition = '2s all ease';
		aResume_Part[ n%18 ].style.opacity = "1";
		$resume_content.animate({left:-1000*n+"px"},"fast");
	}

	/**
	 * 导航字体 大小，内容
	 */
	function font(){
	$prev_text.text(text_arr[n-1]);
	$next_text.text(text_arr[n+1]);
	$Navigation.css("font-size","16px");
	if(n == 3 || n == 4){
		$next_text.css("font-size","10px");
	}
	if(n == 5||n == 6){
		$Navigation.css("font-size","10px");
	}
	if( n == 7){
		$prev_text.css("font-size","10px");
	}
	if( n == 8){
		$prev_text.css("font-size","10px");
	}
}
	/**
	 * 向右   点击跳转
	 */
	function right_step(){
		n++;
		console.log("向右点击跳转，当前n", n );
		$Flip_prev.css("display","block");
		$prev.css("display","block");
		if(n<17){
			change();
			font()
		}
		if(n==17){
			change();
			$Flip_next.css("display","none");
			$next.css("display","none");
			$prev_text.text(text_arr[n-1]);
		}
	}
	/**
	 * 向左   点击跳转
	 */
	function left_step(){
		n--;
		console.log("向右点击跳转，当前n",n );
		$Flip_next.css("display","block");
		$next.css("display","block");
		if(n > 0){
			change();
			font()
		}
		if(n == 0){
			change();
			$prev.css("display","none");
			$Flip_prev.css("display","none");
			$next_text.text(text_arr[n+1]);
			$prev_text.text(text_arr[n]);
		}
	}

	$next.on("click",right_step);
	$prev.on("click",left_step);

	//电子时钟
	function Clock_timer()
	{
		var aClock_Num = document.querySelectorAll( '.Ele_clock_C img' );
		var date = new Date();
		var hours = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();
		var Time = db( hours ) + db( minute ) + db( second );
		var j = 0;
		for( var i = 0; i < aClock_Num.length; i++ )
		{
			if( i == 2 || i == 5 )
			{
				aClock_Num[ i ].src = "./static/img/Whole/clock/10.jpg";
			}
			else
			{
				aClock_Num[ i ].src = "./static/img/Whole/clock/" + Time.charAt( j ) + ".jpg";
				j++;
			}
		}
	}
	//判断是否为个位数
	function db( n )
	{
		return n > 9 ? n + "" : "0" + n;           //添加“”  把数字转换成字符串
	}
	setInterval(Clock_timer,1000);

}


