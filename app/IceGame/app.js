


//定时


var canvas, stage, exportRoot,BgRoot,IceRoot;
var ElmentArrX=[65,230,396];
var ElmentArrY=[75,220,360];
var Ex,Ey, x, y,i= 0;
var clock=new clock();  
        /*指向计时器的指针*/  
        var timer;  



//window.onload= function(){
    function start(){
        timer=setInterval("clock.move()",50); 
    canvas = document.getElementById("canvas");
    images = images||{};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
}

function start(){

    
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
    exportRoot = new lib.flishlib();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();
    BgRoot = new lib.Bg();
    exportRoot.addChild(BgRoot);
    setInterval(addElment,1000);
    exportRoot.addChild(IceRoot);
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
}

function addElment(){
    Ex = parseInt(Math.random()*3);
    Ey = parseInt(Math.random()*3);
    if(x!=Ex&&y!=Ey){
        IceRoot = new lib.up();
        IceRoot.x = ElmentArrX[Ex];
        IceRoot.y = ElmentArrY[Ey];
        exportRoot.addChild(IceRoot);
        x = Ex;
        y = Ey;
    }else{
        addElment();
    }

    IceRoot.addEventListener("click",IceClickHandler);
}
function IceClickHandler(e){
    e.currentTarget.gotoAndPlay("godown");
    i++;
    document.getElementById("score").innerHTML="<div style=\"  margin: -19px 0px 0px 79px;\">"score:+i+"</div>";
    console.log(i);
    return i;
}

        function clock(){  
            /*s是clock()中的变量，非var那种全局变量，代表剩余秒数*/  
            this.s=100;  
            this.move=function(){  
                /*输出前先调用exchange函数进行秒到分秒的转换，因为exchange并非在主函数window.onload使用，因此不需要进行声明*/  
                document.getElementById("timer").innerHTML=exchange(this.s);  
                /*每被调用一次，剩余秒数就自减*/  
                this.s=this.s-1;  
                /*如果时间耗尽，那么，弹窗，使按钮不可用，停止不停调用clock函数中的move()*/  
                if(this.s<0){  
                    alert("时间到,游戏结束,恭喜你获得了"+i+"分");  
                    document.getElementById("go").disabled=true;  
                    clearTimeout(timer);  
                    }  
                }  
            }  
        function exchange(time){  
            /*javascript的除法是浮点除法，必须使用Math.floor取其整数部分*/  
                this.m=Math.floor(time/60);  
                /*存在取余运算*/  
                this.s=(time%60);  
                this.text=this.m+"分"+this.s+"秒";  
                /*传过来的形式参数time不要使用this，而其余在本函数使用的变量则必须使用this*/  
                return this.text;  
        }  
