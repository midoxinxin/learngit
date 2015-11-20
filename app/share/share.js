window.onload = function(){
	
	function selectText(){
		
		if(document.selection){ //ie
			return document.selection.createRange().text;
		}
		else{  //标准
			return window.getSelection().toString();
		}
		
	}
	
	var oP = document.getElementById('p1');
	var oDiv = document.getElementById('div1');
	
	oP.onmouseup = function(ev){
	
		var ev = ev || window.event;
		var left = ev.clientX;
		var top = ev.clientY;
	
		if(selectText().length>10){
		
			setTimeout(function(){
				oDiv.style.display = 'block';
				oDiv.style.left = left + 'px';
				oDiv.style.top = top + 'px';
			},100);
			
		}
		else{
			oDiv.style.display = 'none';
		}
	
	};
	
	oP.onclick = function(ev){
		var ev = ev || window.event;
		ev.cancelBubble = true;
	};
	
	document.onclick = function(){
		oDiv.style.display = 'none';
	};
	
	
	oDiv.onclick = function(){
	
		window.location.href = 'http://v.t.sina.com.cn/share/share.php?searchPic=false&title=' + selectText() + '&url=http://misslays.sinaapp.com/app/share/share.html';
	
	};
	
	
};