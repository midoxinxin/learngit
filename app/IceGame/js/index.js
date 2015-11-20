/* 
* @Author: wenxin.dong
* @Date:   2015-09-14 11:54:34
* @Last Modified by:   anchen
* @Last Modified time: 2015-09-14 14:55:57
*/

$(document).ready(function(){
     var topbtn=document.getElementById("backimg");  //返回顶部按钮设置
    topbtn.onclick=function(){
         var backtop=document.body.scrollTop;
         document.body.scrollTop-=100;
      //  alert("hello");
    });
    
});