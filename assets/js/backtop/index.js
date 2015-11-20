/* 
* @Author: wenxin.dong
* @Date:   2015-09-14 11:54:34
* @Last Modified by:   anchen
* @Last Modified time: 2015-09-14 15:51:16
*/
   //返回顶部按钮设置
window.onload=(function(){
     var topbtn=document.getElementById("top_btn");  
     var timer=null;
     var pagelockheight=document.documentElement.clientHeight;
window.onscroll=function(){
    var backtop=document.body.scrollTop;
    if(backtop >= pagelockheight){

        topbtn.style.display="block";
    }else{

        topbtn.style.display = "none";
    }

}
        topbtn.onclick=function(){
         timer=setInterval(function(){
          var backtop=document.body.scrollTop;
             var speedtop=backtop/5;
             document.body.scrollTop=backtop-speedtop;
             if(backtop ==0){
                clearInterval(timer);
              }
         },30);
      }
    });
//  返回顶部控件end