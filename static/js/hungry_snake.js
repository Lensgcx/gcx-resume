/**
 * Created by Gcx on 2016/9/15 0011.
 */


var row=32;
var col=47;
var food_color = "#6749C0";
var dirction = "right";
var is_stop=false;
var flag = false;
var a = new Array(col);   //1 snack；-1 food
var timer = null;

var snake =[];
var size = 5;
for(var i = 0 ;i < size ;i++){
	var sl={r:0,c:i};
	snake.push(sl);
}
var score1 = 0;

$( document ).ready( readHandler );
function readHandler()
{
	//建立表格
	create_table();
	//开始游戏
	$('.snake_start1').on("click",function()
	{
		//开始检测是否 单选框已经选择了
		var $color = $( ".color" );
		var $speed = $( ".speed" );
		for( var i = 0; i < $color.length; i++ ){
			if( $color[ i ].checked){
				for( var i = 0; i < $speed.length; i++ )
				{
					if($speed[ i ].checked )
					{
						flag = true;
					}
				}
				break;
			}
		}
		if( !flag ){
			alert( "一定要先选择游戏模式和皮肤才可以进行游戏哦-。-" );
			return false;
		}
		//主音乐关闭
		$("#audio1")[0].pause();
		//游戏音乐开始
		$("#audio2")[0].play();
		//封面 退场
		go_right1();
		//皮肤选择
		color();
		//速度选择
		snake_speed();
		//游戏前准备
		ready();
		//计时器
		timer = setInterval(running ,speed);
		//蛇 移动
		function running(){
			score1++;
			switch(dirction){
				case "right":right();
					break;
				case "left":left();
					break;
				case "up":up();
					break;
				case "down":down();
					break;
				default:console.log("error:direction")
			}
		}
		//得分
		function your_Score(){
			score2 = (snake.length-5)*500;
			//score = score1+score2;
			return score2;
		}
		//键盘控制方向
		$(window).on("keydown",key_direction);
		function key_direction(ev){
			ev = ev||window.event;
			//		console.log(ev.which);
			switch(ev.which){
				case 37:if(dirction!="right")dirction = "left";
					break;
				case 38:if(dirction!="down")dirction = "up";
					break;
				case 39:if(dirction!="left")dirction = "right";
					break;
				case 40:if(dirction!="up")dirction = "down";
					break;
				case 13:
					is_stop=!is_stop;
					if(is_stop){
						clearInterval(timer);
						$("#audio2")[0].pause();
						$("#audio3")[0].pause();
						$("#audio1")[0].play();
						button_stop_start_a()
					}
					else{
						timer = setInterval(running ,speed);
						$("#audio1")[0].pause();
						$("#audio3")[0].pause();
						$("#audio2")[0].play();
						$(".snake_stop" ).css("display","block");
						$(".snake_start2" ).css("display","none");
					}
			}
		}
		//游戏前准备
		function ready(){
			for(var i=0;i<row;i++)
			{
				a[i]=new Array(row);
				for(var j=0;j<col;++j){
					a[i][j]=0;               //其余部分为0
				}
			}
			for(var k=0;k< (size+1) ;++k){             //第一行，1到6列 为1，蛇身
				a[0][k]=1;
			}
			getrandfood();
			showall();
		}
		//随机投放食物
		function getrandfood(){
			var r=getRandom(row-1);
			var c=getRandom(col-1);
			if(a[r][c]!=0)          //不等于0的情况：放到蛇体本身位置，重新放置
				getrandfood();
			else{
				a[r][c]=-1;         //正确放置食物的位置，取值为-1，然后再显示食物
				showfood(r,c);
			}
		}
		//显示食物
		function showfood(r,c){
			a[r][c]=-1;
			var id="#r"+r+"c"+c;
			$(id ).css("background-color",food_color );
		}
		//隐藏食物
		function hidefood(r,c){
			if(a[r][c]==-1){
				var id="#r"+r+"c"+c;
				$(id ).css("background-color","" );
				a[r][c]=0;
			}
			else{
				console.log("hidefood error",r+c+"位置报错");
			}
		}

		//显示蛇体，食物的颜色
		function showall(){
			for(var i=0;i<row;++i)
			{
				for(var j=0;j<col;++j)
				{
					var id="#r"+i+"c"+j;
					if(a[i][j]==1){
						$(id ).css("background-color",snake_color );//蛇体
					}
					else if(a[i][j]==0){
						$(id ).css("background-color","" );//空白部分
					}
					else if(a[i][j]==-1){
							$(id ).css("background-color",food_color );//食物
						}
						else console.log("error"+i+j );
				}
			}
		}
		//向前运动，头部显示
		function show(row,col){
			var r =row;
			var c = col;
			if(arguments[0]=="object")
			{
				r=arguments[0 ].r;
				c=arguments[0 ].c;
				snake.push(arguments[0]);
			}
			else snake.push({r:r,c:c});
			//console.log(snake);
			$("#Score").text(your_Score());
			a[r][c]=1;
			var id="#r"+r+"c"+c;
			$(id ).css("background-color",snake_color );
		}
		//运动过程中，把尾部最后一个去掉
		function hide ( row,col){
			var r=row;
			var c=col;
			if(typeof arguments[0]=="object")
			{
				r=arguments[0 ].r;
				c=arguments[0 ].c;
				snake.shift();   //shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
			}
			else snake.shift();
			a[r][c]=0;
			var id="#r"+r+"c"+c;
			$(id ).css("background-color","" );
		}
		//向右运动
		function right(){
			var head=snake[snake.length-1];
			var foot=snake[0];
			if(head.c<col-1){
				if(a[head.r][head.c+1]!=-1){
					hide(foot);
				}
				else getrandfood();
				show(head.r,head.c+1);
			}
			else{
				gameover()
			}
		}
		//向左运动
		function left(){
			var head=snake[snake.length-1];
			var foot=snake[0];
			if(head.c>0){
				if(a[head.r][head.c-1]!=-1){
					hide(foot);
				}
				else getrandfood();
				show(head.r,head.c-1);
			}
			else{
				gameover()
			}
		}
		//向上运动
		function up(){
			var head=snake[snake.length-1];
			var foot=snake[0];
			if(head.r>0){
				if(a[head.r-1][head.c]!=-1){
					hide(foot);
				}
				else getrandfood();
				show(head.r-1,head.c);
			}
			else{
				gameover()
			}
		}
		//向下运动
		function down(){
			var head=snake[snake.length-1];
			var foot=snake[0];
			if(head.r<row-1){
				if(a[head.r+1][head.c]!=-1){
					hide(foot);
				}
				else getrandfood();
				show(head.r+1,head.c);
			}
			else{
				gameover()
			}
		}
		//游戏结束
		function gameover()
		{
			//alert("您已经碰壁，游戏结束-。-");
			clearInterval(timer);
			$(".over_text" ).animate({ opacity: 1 },800);
			$(".back1" ).animate({ top: 0,opacity: "1" },600,"linear");
			$(".action_part_btn" ).animate({ opacity: 0 },400);
			$(".back2" ).animate({ left: "-52px" },800);
			$(".Score_tlt" ).text("你的最终得分：");
			$("#audio2")[0].pause();
			$("#audio3")[0].play();
			return false;
		}
		//左边界面暂停按钮
		$(".snake_stop" ).on("click",function()
		{
			clearInterval(timer);
			$(".snake_stop" ).css("display","none");
			$(".snake_start2" ).css("display","block");
			//主音乐关开始
			$("#audio1")[0].play();
			//游戏音乐关闭
			$("#audio2")[0].pause();
			$("#audio3")[0].pause();
		});
		//左边界面继续按钮
		$(".snake_start2" ).on("click",function()
		{
			timer = setInterval(running ,speed);
			$(".snake_stop" ).css("display","block");
			$(".snake_start2" ).css("display","none");
			//游戏音乐开始
			$("#audio2")[0].play();
			//主音乐关闭
			$("#audio1")[0].pause();
			$("#audio3")[0].pause();


		});
	});

	//规则和方法
	$('.snake_Question').on("click",go_left2);
	//规则界面  返回开始界面
	$(".snake_back2").on("click",go_right2);


	var k = 0;
	//左边换页按钮 点击停止游戏
	$(".prev" ).on("click",function(){
	clearInterval(timer);
	$("#audio1")[0].play();
	$("#audio2")[0].pause();
	k--;
		button_stop_start_a();
	if(k == 0){
		button_stop_start_a();
	}
	});
	//右边换页按钮 点击停止游戏
	$(".next" ).on("click",function(){
		clearInterval(timer);
		$("#audio1")[0].play();
		$("#audio2")[0].pause();
		k++;
		button_stop_start_a();
		if(k == 0){
			button_stop_start_a();
		}
	});
	//继续游戏和暂停  按钮的转换
	function button_stop_start_a(){
		$(".snake_stop" ).css("display","none");
		$(".snake_start2" ).css("display","block");
	}

}
//蛇移动的速度 选择（难度选择）
function snake_speed(){
	var $speed = $( ".speed" );
	for( var i = 0; i < $speed.length; i++ )
	{
		if( $speed[ i ].checked )
		{
			return speed = $speed[ i ].value;
		}
	}
}
//蛇的皮肤 （颜色选择）
function color(){
	var $color = $( ".color" );
	for( var i = 0; i < $color.length; i++ )
	{
		if( $color[ i ].checked )
		{
			return snake_color = $color[ i ].value;
		}
	}

}
//创建table
function create_table(){
	var table = $("<table cellspacing='0' style='border: 5px solid mediumslateblue'></table>")
	create_tr(row, table);
	table.appendTo(".board");
}
//创建tr 放入table
function create_tr(row,table){
	for(var i = 0 ;i<row;i++){
		var tr=$("<tr></tr>");
		var td = create_td(col, tr, i);
		tr.appendTo(table);
	}
}
//创建td 放入tr
function create_td(col, tr, row){
	for(var i = 0 ;i<col;i++){
		var td=$("<td style='border: 1px solid #bbc3f1'></td>");
		var id = "r"+row+"c"+i;
		//			console.log(id);
		td.attr("id",id);
		td.appendTo(tr);
	}
}
//随机数产生
function getRandom(max,min){
	if(min==void(0))min=0;
	return Math.random()*(max+1-min)+min>>0;
}

//上下左右的移动
function go_right1(){
	$('.cover').animate({ left: "850px" },500,"linear");
}
function go_left1(){
	$('.cover').animate( { left: "0" },500);
}
function go_left2(){
	$('.Question').animate( { left: 0 },500);
}
function go_right2(){
	$('.Question').animate( { left: "+850px" }, 600);
}


