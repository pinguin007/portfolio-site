$(document).ready(function(){
    $(".read").click(function(){

       $(this).prev().toggle();

       $(this).siblings('.dots').toggle();

       if($(this).text()=='read less'){
            $(this).text('read more');
       }

       else{
            $(this).text('read less');
       }
    });
 })(JQuery);