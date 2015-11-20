/* 
* @Author: wenxin.dong
* @Date:   2015-10-05 13:11:49
* @Last Modified by:   anchen
* @Last Modified time: 2015-10-05 14:35:48
*/

    var className="tooltip-box";
    
    function showTooltip(obj,id,html,width,height){

        if(document.getElementById(id)==null){
            var tooltipbox;
            tooltipbox=document.createElement("div");
            tooltipbox.className=className;
            tooltipbox.id=id;
            tooltipbox.innerHTML=html;
            obj.appendChild(tooltipbox);
            obj.onmouseout=function(){
                document.getElementById(id).style.display="none";
            }
        }else{
            document.getElementById(id).style.display="block";

        }

    }
     var wb=document.getElementById("weibo");
     wb.onmousemove=function(){
        showTooltip(this,"wb","weibo:dongwenxin@3g.sina.cn" ,200);
    }
        var wb=document.getElementById("wechat");
     wb.onmousemove=function(){
        showTooltip(this,"wc","goodluck" ,200);



     }
