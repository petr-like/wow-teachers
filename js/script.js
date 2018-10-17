$(function(){
    $(".content").load("../menu.html");

    $('.changePage').click(function() {
        $(".content").load("../menu2.html");
    });
});