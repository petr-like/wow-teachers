$(function(){
    $(".content").load("../menu.html");

    $('.changePage').click(function() {
        $(".content").load("../menu2.html");
    });

    let news = $.getJSON( "../json/news.json", function() {
        console.log( "success" );
    });

    $('.news').click(function() {
        console.log(news);
        // $(".content").load("../news.html");
    });
});