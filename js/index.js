
$( ".nav-link" ).hover(
    function() {
      $( this ).css("color","#066482").css("text-decoration","underline");
    }, function() {
      $( this ).last().css("color","#404040").css("text-decoration","none");
    }
  );

$(".nextproject").hover(
    function() {
        $(this).css("background-color","#066482");
    }, function() {
        $(this).last().css("background-color","#1A93BA");
    }
);

$(".backproject").hover(
    function() {
        $(this).css("background-color","#066482");
    }, function() {
        $(this).last().css("background-color","#1A93BA");
    }
);

$(".hover1").hover(
    function() {
        $(this).css("border-style","dotted");
    }, function() {
        $(this).last().css("border","none");
    }
);

$(".socmed img").hover(
    function() {
        $(this).css("border-style","dotted").css("border-color","white");
    }, function() {
        $(this).last().css("border","none");
    }
);

$(".button").click(function () {
    $("html,body").animate({scrollTop:0},300);
});