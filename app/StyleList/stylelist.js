/* 
* @Author: wenxin.dong
* @Date:   2015-10-06 10:43:38
* @Last Modified by:   anchen
* @Last Modified time: 2015-10-06 11:19:36
*/

$(document).ready(function(){
  $(".list-1").bind("click",function(){
    $(".list-1").css("backgroundPosition","0 -26px");
    $(".list-2").css("backgroundPosition","-30px -26px");
    $(".changelist").children().removeClass("list-2-v").addClass("list-1-o");/*获取changelist所有子标签li*/
    })
  $(".list-2").bind("click",function(){
    $(".list-1").css("backgroundPosition","0px 0px");
    $(".list-2").css("backgroundPosition","-30px 0px");
    $(".changelist").children().removeClass("list-1-o").addClass("list-2-v");
  })

 });
    
