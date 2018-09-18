
$(function(){
    //ani动画函数
    var i=1;
    function ani(){
    	i++;
            if(i>43){
        	    i=1;
            }
        $(".ani").attr("src","./img/ani/ani_"+i+".png");
    }
        setInterval(ani,100);          //在jquery内的写法
 //     setInterval("ani()",500);      //在非jquery下的写法可带参数
     $('video').trigger('pause');      //使用jquery触发视频事件
    //TweenMax.to(".arrow",1,{bottom:-1,repeat:-1,yoyo:true});

    //arrow箭头的动画
    TweenMax.to(".arrow",1,{bottom:-1,repeat:-1,yoyo:true});    
   // var tweenmax =new TweenMax();

    var t =new TimelineMax();
    
    t.staggerFromTo([".wa3",".wa2",".wa1"],2,{opacity:0,top:"-3rem",ease:Linear.easeIn},{opacity:1,top:0,ease:Linear.easeIn},1);
    t.staggerFromTo(".txt",2,{opacity:0,top:"-3rem",ease:Linear.easeIn},{opacity:1,top:0,ease:Linear.easeIn},1,3.5);

    //按钮和logo的动画
    t.to(".icon:nth-child(1) ,.btn:nth-child(1)",1,{left:0,ease:Linear.easeIn},2.5);
    t.to(".icon:nth-child(2) ,.btn:nth-child(2)",1,{left:0,ease:Linear.easeIn},3);
    t.to(".icon:nth-child(3) ,.btn:nth-child(3)",1,{left:0,ease:Linear.easeIn},3.5);
    t.to(".icon:nth-child(4) ,.btn:nth-child(4)",1,{left:0,ease:Linear.easeIn},4);
    t.to(".icon:nth-child(5) ,.btn:nth-child(5)",1,{left:0,ease:Linear.easeIn},4.5);
    //t.staggerTo(".btn",1,{left:0,ease:Linear.easeIn},1);
    
    t.to(".icon:nth-child(5) ,.btn:nth-child(5)",1,{left:0,ease:Linear.easeIn},4.5);    
    });