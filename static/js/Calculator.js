/**
 * Created by 西兰花的春天 on 2016/10/7 0007.
 */

window.onload=function(){

	var btn_Calculation = document.querySelector( '.btn_Calculation' );     	 //计算结果
	var btn_Zero = document.querySelector( '.btn_Zero' );						//清零
	var C_part = document.getElementsByClassName("C_part");    //所有输入框
	var num_val = document.getElementsByClassName("num_val");    //结果显示

	//输入值 检测，转换
	function turn_Num(eve){
		if(eve.value == ""){
			eve.value= 0;
		}
		if(eve.value < 0){
			alert("请输入正确的数值");
			eve.value="";
			eve.placeholder="请重新输入";
		}
		if(eve.value >= 0){
			return eve.value = parseFloat(eve.value);
		}
		else{
			alert("请输入正确的数值");
			eve.value="";
			eve.placeholder="请重新输入";
		}
	}
	//字体变化
	function font_change( eve ){
		eve.style.color = '#666';
		eve.style.textIndent = '0.8em';
		eve.style.whiteSpace="nowrap";
		eve.style.overflow="hidden";
		eve.style.textOverflow="ellipsis";
	}
	for(var i = 0;i<10;i++){
		font_change(num_val[i]);
		if(i == 6 ){
			num_val[ 6 ].style.color = '#ff1c5c';
		}
		if(i == 9 ){
			num_val[ 9 ].style.color = '#ff1c5c';
		}
	}

	btn_Calculation.onclick=function(){

		//输入值 检测，转换
		for(var i = 0;i<11;i++){
			turn_Num(C_part[i]);
		}
		//检测:免息期数是否大于还贷期数
		if(C_part[8].value>C_part[7].value){
			alert("注意：免息期数不能大于还款期数，清重新输入");
			for(var i = 0;i<10;i++){
				num_val[i].innerHTML="";
				C_part[8].value="";
				C_part[8].placeholder="请重新输入";
			}
			return false
		}

		//定义输入内容的值
		var P_v = parseFloat(C_part[0].value);
		var S_v =   parseFloat(C_part[1].value);
		var D_v =   parseFloat(C_part[2].value);
		var I_v =   parseFloat(C_part[3].value);
		var dis_v =  parseFloat(C_part[4].value);
		var pro_v = parseFloat(C_part[5].value);
		var C_v =   parseFloat(C_part[6].value);
		var per_v =   parseFloat(C_part[7].value);
		var Free_v =   parseFloat(C_part[8].value);
		var rate_v =   parseFloat(C_part[9].value);
		var F_v =  parseFloat(C_part[10].value);

		var Counter_Fee = ((P_v+S_v+D_v)*(1-pro_v/100)*C_v/100);                    //贷款手续费
		var whole = parseFloat(P_v+S_v+D_v+(I_v*dis_v/100)+Counter_Fee);        	//购车总金额（含贷款手续费）
		var Loan =  parseFloat((P_v+S_v+D_v)*(1-pro_v/100));         							//贷款金额

		////	等额本息计算公式： ［贷款本金 × 月利率 × （ 1 ＋月利率）＾还款月数］÷ ［（ 1 ＋月利率）＾还款月数－ 1 ］
		Repay1 = Loan*(rate_v/1200)*Math.pow((1+rate_v/1200),(per_v-Free_v));
		Repay2 = (Math.pow((1+rate_v/1200),(per_v-Free_v))-1)+Free_v*(rate_v/1200)*Math.pow((1+rate_v/1200),(per_v-Free_v));
		Repay = parseFloat(Repay1/Repay2);

		//理财比较，理财收益
		var tim = 1;
		var Profit = 0;
		//理财利息收益总和
		function cash(){
			if( tim > per_v ){
				Loan =  parseFloat((P_v+S_v+D_v)*(1-pro_v/100));
				return Profit.toFixed(1);
			}
			else{
				p_f = Loan*(F_v/1200);
				Profit = Profit + p_f;
				//				console.log("当前利息总额",Profit.toFixed(1),"这是第"+tim+"期");
				Loan = Loan*(1+F_v /1200);
				Loan = Loan-Repay;
				tim++;
				cash()
			}
		}
		cash();

		//--------------车价部分,计算结果--------------
		num_val[0].innerHTML = whole.toFixed(1);								//提车总价:
		num_val[1].innerHTML = (I_v*dis_v/100).toFixed(1);						//首年保险费用:
		num_val[2].innerHTML = (P_v/1.17*0.1).toFixed(1);						//购置税:
		num_val[3].innerHTML = (whole+(P_v/1.17*0.1)).toFixed(1);				//落地总价:

		//--------------贷款部分,计算结果--------------
		num_val[4].innerHTML = Loan.toFixed(1);                                		//贷款金额
		num_val[5].innerHTML = (Loan*C_v/100).toFixed(1);					   		//手续费
		if(rate_v==""){num_val[6].innerHTML = "0."+0;num_val[7].innerHTML = "0."+0;}
		num_val[7].innerHTML = parseFloat(Repay*per_v+Loan*C_v/100).toFixed(1);     //本息+手续费
		// 每期还款金额
		if(rate_v==0){
			num_val[6].innerHTML = (Loan/per_v).toFixed(1);
			num_val[7].innerHTML = (Loan+Loan*C_v/100).toFixed(1);
		}
		else{
			num_val[6].innerHTML = Repay.toFixed(1);
		}
		//贷款模式下，利率和还款期数都为0，情况下
		if(rate_v==0&&per_v==0){num_val[6].innerHTML = "0."+0;}
		//贷款模式下，还款期数为0，情况下
		if(pro_v!==100){
			if(per_v==""){
				alert("注:"+'\n'
					  +"1、无需贷款，首付比例(%)填写100，若不填写则默认全额贷款." +'\n'
					  +"2、贷款模式下，必须输入还款期数！" +'\n'
					  +"3、还款利率不填写，则默认免息贷款3、" +'\n'
					  +"4、其他选项不填写，则默认为0"+'\n'+'\n'
					  +"如不符合要求，请重新填写."
				);
				if(rate_v!=="" && rate_v!== 0){
					for(var j = 0;j<10;j++){
						num_val[j].innerHTML=""
					}
				}
			}
		}

		//--------------理财部分,计算结果--------------
		num_val[8].innerHTML = Profit.toFixed(1);
		num_val[9].innerHTML = (parseFloat(Profit + Loan - Repay*per_v - Loan*C_v/100)).toFixed(1);
		//无还款期的情况
		if( F_v==""|| F_v==0){
			//无还款期的情况，亏利息+手续费
			num_val[9].innerHTML = -1*parseFloat(Repay*per_v+Loan*C_v/100-Loan).toFixed(1);
			num_val[8].innerHTML = 0;
			//无还款期，无理财，亏手续费
			if(per_v==""||per_v==0){
				num_val[9].innerHTML = -(Loan*C_v/100).toFixed(1);
			}
			//无利率，无手续费，无理财
			if(rate_v==""&&C_v==""){
				num_val[9].innerHTML = 0;
				num_val[8].innerHTML = 0;
			}
			//无利率，有手续费，无理财
			if(C_v!==""&&rate_v==""){
				num_val[9].innerHTML = -(Loan*C_v/100).toFixed(1);
			}
		}
		//有理财的情况
		if( F_v!==""&&F_v!==0)
		{
			//有理财，无利率，无手续费，赚  理财收益
			if(rate_v==""&&C_v==""){
				num_val[8].innerHTML = parseFloat(Loan*Math.pow((1+F_v/1200),per_v)-Loan ).toFixed(1);
				num_val[9].innerHTML = parseFloat(Loan*Math.pow((1+F_v/1200),per_v)-Loan ).toFixed(1);
			}
			//有理财，无利率，有手续费，赚  理财收益-手续费
			if(rate_v==""&&C_v!==""){
				num_val[8].innerHTML = parseFloat(Loan*Math.pow((1+F_v/1200),per_v)-Loan-(Loan*C_v/100) ).toFixed(1);
				num_val[9].innerHTML = parseFloat(Loan*Math.pow((1+F_v/1200),per_v)-Loan-(Loan*C_v/100) ).toFixed(1);
			}
		}

		console.log("裸车价",P_v);
		console.log("服务费",S_v);
		console.log("强制性装潢或软包",D_v);
		console.log("保险费用*折扣",I_v*dis_v);
		console.log("首付比例",pro_v);
		console.log("手续费(贷款额*百分比)",C_v);
		console.log("还款期数",per_v);
		console.log("免息期数)",Free_v);
		console.log("还款年化利率",rate_v);
		console.log("市面保本理财利率(比较)",F_v);
		console.log("购车总金额（含贷款手续费）",whole);
		console.log("贷款金额",Loan);
		//		console.log("Repay1",Repay1);
		//		console.log("Repay2",Repay2);
		console.log("每期还款",Repay);
	};

	//清零
	btn_Zero.onclick=function(){
		for(var i = 0;i<11;i++){
			C_part[i].value=""
		}
		for(var j = 0;j<10;j++){
			num_val[j].innerHTML=""
		}
	};

};















//			var i = 1;
//			q = 0;
//			function xxx(){
//				if(i>36){
//					return q
//				}
//				else{
//					p = a*(0.05/12);
//					q = q + p;
//					console.log("当前利息总额",q,"这是第"+i+"期");
//					a = a*(1+0.05
//							 /12);
//					a = a-r3;
//					i++;
//					xxx()
//				}
//			}
//			xxx()