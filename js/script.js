$(function(){
    $(".content").load("../menu.html");

    $('.changePage').click(function() {
        $(".content").load("../menu2.html");
    });

    $('.news').click(function() {
        $(".content").load("../news.html");
    });
});