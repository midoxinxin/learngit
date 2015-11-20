

     $(function(){

     $(".link .button").hover(function(){
        var title = $(this).attr("data-title");
        $(".tip em").text(title);
        var pos=$(this).offset().left;
        $(".tip").css({"left":pos+"px","opacity":1"});
     })



 })