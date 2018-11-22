/**
 * Created by Gary-gcx on 2016/7/28.
 */
window.onload=function(){
        //第一个轮播图
        var oTab=document.querySelector('#tab');
        var aFlipDotIpt=document.querySelectorAll('.FlipDot input');
        var aDirectionSpan=document.querySelectorAll('.direction span');
        var oBackpicture=document.querySelector('.Backpicture');
        //第二个轮播图
        var aFlipDotIpt3=document.querySelectorAll('.FlipDot3 input');
        var aDirection3Span=document.querySelectorAll('.direction3 span');
        var oBackpicture3=document.querySelector('.Backpicture3');
        var oTab3=document.querySelector('#tab3');
        //第三个轮播图
        var aFlipDotIpt4=document.querySelectorAll('.FlipDot4 input');
        var aDirection4Span=document.querySelectorAll('.direction4 span');
        var oBackpicture4=document.querySelector('.Backpicture4');
        var oTab4=document.querySelector('#tab4');
        //第四icon-个轮播图
        var aFlipDotIpt5=document.querySelectorAll('.FlipDot5 input');
        var aDirection5Span=document.querySelectorAll('.direction5 span');
        var oBackpicture5=document.querySelector('.Backpicture5');
        var oTab5=document.querySelector('#tab5');
        //计时器，倒计时
        var oTimeH=document.querySelector('#timeh');
        var oTimeM=document.querySelector('#timem');
        var oTimeS=document.querySelector('#times');
        //瀑布流，点击事件，添加瀑布流
        var oAddWaterfallFlow=document.querySelector('#bottom-part1 div a');
        var oXs=document.querySelector('#bottom-part1-xs');
        var now=0;
        var now3=0;
        var now4=0;
        var now5=0;
        //第一个轮播图部分
        function tab(){
            for (var i = 0; i < aFlipDotIpt.length; i++)
            {
                 aFlipDotIpt[i].style.background='';
            }
            aFlipDotIpt[now].style.background='skyblue';
            oBackpicture.style.transition='1s all ease';
            oBackpicture.style.left=-320*now+'px';
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
            if(now>7){ now=0}
            tab()
        }
        aDirectionSpan[0].onclick=function(){
            now--;
            if(now<0){ now=7}
            tab()
        };
        aDirectionSpan[1].onclick = tabRight;
        //第二个轮播图部分
        function tab3(){
            for (var j = 0; j < 2; j++) {aFlipDotIpt3[j].style.background='';}
            aFlipDotIpt3[now3].style.background='skyblue';
            oBackpicture3.style.transition='1s all ease';
            oBackpicture3.style.left=-320*now3+'px';
        }
        for(var j=0;j<2;j++){
            aFlipDotIpt3[j].index=j;
            aFlipDotIpt3[j].onclick=function() {now3=this.index; tab3()}
          }
        function tabRight3() {
            now3++;
            if(now3>1){now3=0}
            tab3()
        }
        aDirection3Span[0].onclick=function(){
            now3--;
            if(now3<0){now3=1}
            tab3()
        };
        aDirection3Span[1].onclick = tabRight3;
        //第三个轮播图部分
        function tab4(){
            for (var j = 0; j < 2; j++) {aFlipDotIpt4[j].style.background='';}
            aFlipDotIpt4[now4].style.background='skyblue';
            oBackpicture4.style.transition='1s all ease';
            oBackpicture4.style.left=-320*now4+'px';
        }
        for(var j = 0;j<2;j++){
            aFlipDotIpt4[j].index=j;
            aFlipDotIpt4[j].onclick=function() {now4=this.index;tab4()}}
        function tabRight4() {now4++;if(now4>1){now4=0}tab4()}
        aDirection4Span[0].onclick=function(){now4--;if(now4<0){now4=1}tab4()};
        aDirection4Span[1].onclick = tabRight4;
        //第三个轮播图部分
        function tab5(){
            for (var j = 0; j < 2; j++) {aFlipDotIpt5[j].style.background='';}
            aFlipDotIpt5[now5].style.background='skyblue';
            oBackpicture5.style.transition='1s all ease';
            oBackpicture5.style.left=-320*now5+'px';
        }
        for(var j = 0;j<2;j++){
            aFlipDotIpt5[j].index=j;
            aFlipDotIpt5[j].onclick=function() {now5=this.index;tab5()}
        }
        function tabRight5() {now5++;if(now5>1){now5=0}tab5()}
        aDirection5Span[0].onclick=function(){
            now5--;
            if(now5<0){now5=1}tab5()
        };
        aDirection5Span[1].onclick = tabRight5;
        //计时器，倒计时部分
        var tim = 0;var s = 59;var m = 59;var h = 4;
        function  clock(){
        tim++;
        h= 4-parseInt(tim / 3600 );
        m = 59-parseInt(tim/ 60 % 60);
        s = parseInt((60-tim) % 60);
        if(s<0){s=60+s;}
        if (s < 10&s>=0) {s = '0' + s;}
        if (m < 10&m>=0) {m = '0' + m;}
        if (h < 10&h>=0) {h = '0' + h;}
        if(h<0){h = '0' + 0;}
        oTimeH.value = h ;oTimeM.value = m ;oTimeS.value = s ;
        if(m==0&s==0&h==0){ oTimeH.value = '00';oTimeM.value = '00';oTimeS.value = '00';clearInterval(timer);}
        }
        //时间轴函数调用以上各个函数部分（轮播图和计时器）
         var timer = setInterval(function(){
             clock();tabRight5();tabRight4();tabRight3();tabRight();
         }, 4000);
            oTab.onmouseover = function () {
                clearInterval(timer);
                timer=null;
            };
            oTab.onmouseout = function () {
                timer = setInterval(tabRight, 1000);
            };
            oTab3.onmouseover = function () {
                clearInterval(timer);
            };
            oTab3.onmouseout = function () {
                timer = setInterval(tabRight3, 1000);
            };
            oTab4.onmouseover = function () {
                clearInterval(timer);
            };
            oTab4.onmouseout = function () {
                timer = setInterval(tabRight4, 1000);
            };
            oTab5.onmouseover = function () {
                clearInterval(timer);
            };
            oTab5.onmouseout = function () {
                timer = setInterval(tabRight5, 1000);
            };

    var oWaterfallflow=document.getElementById('Waterfallflow');
    var aUl=oWaterfallflow.children;
    function  createLi(li) {var oLi = document.createElement('li');return oLi; }
    function  createImg(img) {var oImg = document.createElement('img');return oImg; }

    function  insetToUl(a) {
        for(var i=0;i<a;i++) {
            var oLi = document.createElement('li');
            oLi.style.height ='225px';
            oLi.style.background ='white';
            oLi.style.border ='1px solid #f6f6f6';
            var oDiv=createLi('div');
            var oDiv2=createImg('img');
            var oA=createLi('a');
            var oB=createLi('a');
            var oSp=createLi('span');
            var oH=createLi('span');
            var oD=createLi('span');
            var cc=Math.floor(Math.random()*22);
            //产品图片的地址
            var arr3=['../static/img/京东手机端/middle-part7/1.png' ,'../static/img/京东手机端/middle-part7/2.jpg','../static/img/京东手机端/middle-part7/3.jpg','../static/img/京东手机端/middle-part7/4.jpg','../static/img/京东手机端/middle-part7/5.jpg','../static/img/京东手机端/middle-part7/6.jpg',
                '../static/img/京东手机端/middle-part7/7.png','../static/img/京东手机端/middle-part7/8.png','../static/img/京东手机端/middle-part7/9.jpg','../static/img/京东手机端/middle-part7/10.jpg','../static/img/京东手机端/middle-part7/11.png' ,'../static/img/京东手机端/middle-part7/12.png'
                ,'../static/img/京东手机端/middle-part7/13.png' ,'../static/img/京东手机端/middle-part7/14.png' ,'../static/img/京东手机端/middle-part7/15.png' ,'../static/img/京东手机端/middle-part7/16.png' ,'../static/img/京东手机端/middle-part7/17.png' ,'../static/img/京东手机端/middle-part7/18.png'
                ,'../static/img/京东手机端/middle-part7/19.png' ,'../static/img/京东手机端/middle-part7/20.png' ,'../static/img/京东手机端/middle-part7/21.jpg','../static/img/京东手机端/middle-part7/22.png'];
            //产品图片的style
            oDiv2.style.height='149px';
            oDiv2.style.width='149px';
            oDiv2.style.position='absolute';
            oDiv2.style.margin='5px 5px 5px 5px';
            oDiv2.index=99;
            oLi.style.border='1px solid #f6f6f6';
            oDiv2.src=arr3[cc];
            oDiv2.style.href='http://m.jd.com/';
            //产品标题的style
            oA.style.position='absolute';
            oA.style.overflow='hidden';
            oA.style.width='149px';
            oA.style.height='27px';
            oA.style.fontSize='12px';
            oA.style.margin='160px 5px 0 5px';
            oA.style.color='#ababab';
            oA.style.borderBottom='1px solid #f8f8f8';
            oA.href='http://m.jd.com/';
            //产品介绍，标题
            if(cc==0){oA.innerText='万音JY AUDIO回音壁5.1家庭影院音箱组合 蓝牙重低音功放一体卡拉OK电视音响 KTV音响600K+低音炮WS9套装 K歌版本';}
            if(cc==1){oA.innerText='时诺刻(SYNOKE)儿童手表多功能防水运动男女孩中学生指针数字双显夜光电子表 黑蓝 生活防水';}
            if(cc==2){oA.innerText='华硕（ASUS） G11飞行堡垒SSD升级版 游戏电脑（i7-6700 8G 128G SSD+1T GTX960 2G独显 800万色呼吸灯）';}
            if(cc==3){oA.innerText='联想（Lenovo）H3050 台式电脑（i5-4460 4G 500G GT720 1G独显 DVD 千兆网卡 Win10）23英寸';}
            if(cc==4){oA.innerText='戴尔(DELL)成就Vostro 14VR-1528B 轻巧纤薄商务笔记本电脑(i5-6200U 4G 500G DVD 2G独显 Win10 14英寸)黑';}
            if(cc==5){oA.innerText='戴尔(DELL)成就Vostro 14VR-1528B 轻巧纤薄商务笔记本电脑(i5-6200U 4G 500G DVD 2G独显 Win10 14英寸)黑';}
            if(cc==6){oA.innerText='三星（SAMSUNG）UA55JU5910JXXZ 55英寸 超高清4K智能电视 黑色';}
            if(cc==7){oA.innerText='Apple iPhone 6s Plus (A1699) 64G 玫瑰金色 移动联通电信4G手机色';}
            if(cc==8){oA.innerText='雷柏（Rapoo）V500 机械游戏键盘 机械黑轴 黑色版';}
            if(cc==9){oA.innerText='小米 红米2A 高配 移动 手机 白色 高配版(16G ROM)';}
            if(cc==10){oA.innerText='Apple MacBook Pro 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/128GB SSD闪存/Retina屏 MF839CH)';}
            if(cc==11){oA.innerText='【京东配送】索致 背夹电池苹果6充电宝无线移动电源壳 适用于iphone6/6s/plus 8200毫安 5.5英寸大屏6plus 土豪金';}
            if(cc==12){oA.innerText='海狐狸 VR虚拟现实眼镜3D智能眼镜头盔头戴式立体wifi无线移动影院安卓4.4一体机 VR一体机+资源 白色';}
            if(cc==13){oA.innerText='戴尔（DELL）Vostro 14VR-1528 成就14英寸笔记本电脑学生商务办公本 i5/6200U/4G/2G独显/黑色 4G内存 500G硬盘官方标配';}
            if(cc==14){oA.innerText='橙派（CPAD）i7 6700K/GTX1070/256G/游戏电脑主机/DIY组装机';}
            if(cc==15){oA.innerText='华硕(ASUS) 顽石四代尊享版  15.6英寸笔记本电脑(i7-6500U 8G 1TB NV940M 2G独显 深蓝 LED背光)';}
            if(cc==16){oA.innerText='Apple iPad mini 4 平板电脑 7.9英寸（64G WLAN版/A8芯片/Retina显示屏/Touch ID技术 MK9J2CH）金色';}
            if(cc==17){oA.innerText='联想1080P高清智能摄像机 远程安防监控夜视网络摄像头 360度磁吸结构  无线wifi 看家宝snowman';}
            if(cc==18){oA.innerText='KKTV K55J1 55英寸全高清八核安卓智能WIFI平板液晶电视 康佳品质（黑色）';}
            if(cc==19){oA.innerText='华为（HUAWEI）M2 平板电脑 8英寸（八核 海思麒麟930 3G/16G WiFi）月光银';}
            if(cc==20){oA.innerText='佳能（Canon）MG2980 彩色喷墨一体机 （打印 复印 扫描 无线网络）';}
            if(cc==21){oA.innerText='凌度智能声控双镜头行车记录仪高清广角夜视倒车影像停车监控/可选声控导航电子狗WIFI一体机 双镜头倒车影像+32G+送大礼包(套餐一)';}
            if(cc==22){oA.innerText='vivo Xplay5 全网通 4GB+128GB 移动联通电信4G手机 双卡双待 香槟金';}
            else{name='';}
            //产品价格
            if(cc==0){oH.innerText='¥'+'1999'+'.00';}
            if(cc==1){oH.innerText='¥'+'1499'+'.00';}
            if(cc==2){oH.innerText='¥'+'6489'+'.00';}
            if(cc==3){oH.innerText='¥'+'1899'+'.00';}
            if(cc==4){oH.innerText='¥'+'5700'+'.00';}
            if(cc==5){oH.innerText='¥'+'3749'+'.00';}
            if(cc==6){oH.innerText='¥'+'2899'+'.00';}
            if(cc==7){oH.innerText='¥'+'6288'+'.00';}
            if(cc==8){oH.innerText='¥'+'368'+'.00';}
            if(cc==9){oH.innerText='¥'+'788'+'.00';}
            if(cc==10){oH.innerText='¥'+'8999'+'.00';}
            if(cc==11){oH.innerText='¥'+'135'+'.00';}
            if(cc==12){oH.innerText='¥'+'668'+'.00';}
            if(cc==13){oH.innerText='¥'+'3568'+'.00';}
            if(cc==14){oH.innerText='¥'+'3488'+'.00';}
            if(cc==15){oH.innerText='¥'+'4250'+'.00';}
            if(cc==16){oH.innerText='¥'+'2499'+'.00';}
            if(cc==17){oH.innerText='¥'+'650'+'.00';}
            if(cc==18){oH.innerText='¥'+'2388'+'.00';}
            if(cc==19){oH.innerText='¥'+'1360'+'.00';}
            if(cc==20){oH.innerText='¥'+'480'+'.00';}
            if(cc==21){oH.innerText='¥'+'249'+'.00';}
            if(cc==22){oH.innerText='¥'+'2088'+'.00';}
            //产品价格标签的style
            oH.style.width='60px';
            oH.style.fontSize='10px';
            oH.style.height='12px';
            oH.style.margin='192px 5px 0 5px';
            oH.style.position='absolute';
            oH.style.color='salmon';
            oH.href='http://m.jd.com/';
            //马上抢购标签的style
            oD.innerText='马上抢购';
            oD.style.width='60px';
            oD.style.fontSize='10px';
            oD.style.height='12px';
            oD.style.margin='208px 5px 0 5px';
            oD.style.position='absolute';
            oD.style.color='salmon';
            oH.href='http://m.jd.com/';
            //看相似的style
            oB.innerText='看相似';
            oB.style.color='#909090';
            oB.style.width='40px';
            oB.style.height='12px';
            oB.style.fontSize='12px';
            oB.style.margin='192px 0 0 110px';
            oB.style.position='absolute';
            oB.style.borderRadius='6px';
            oB.style.border='1px solid #909090';
            oB.href='http://m.jd.com/';

            oDiv.appendChild(oSp);
            oDiv.appendChild(oH);
            oDiv.appendChild(oA);
            oDiv.appendChild(oB);
            oDiv.appendChild(oD);
            oDiv.appendChild(oDiv2);
            oLi.appendChild(oDiv);
            aUl[i%2].appendChild(oLi);
        }
        return oLi;
    }
        insetToUl(20);
        oAddWaterfallFlow.onclick=function(){
            insetToUl(20);
            oXs.style.display='none';
            window.onscroll=function(){
                var  scrollTop= document.documentElement.scrollTop||document.body.scrollTop;  //定义下拉高度
                var  clientH= document.documentElement.clientHeight;  //定义可是窗口高度
                var  bodyH= document.body.scrollHeight;  //定义body的高度。
                if(scrollTop+clientH>=bodyH){
                    insetToUl(10);
                }
            }
        };


};



