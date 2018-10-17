$(function(){
    let content = '';

    let news = $.getJSON( "../json/news.json", function() {
        console.log( "success" );
        // for(let i = 0; i < news.length; i++) {
        //     content += `<div class="title">${news[i].title}</div> <div class="title">${news[i].text}</div>`;
        // }
        console.log(1, news);
    });
    
    news = news.responseJSON;

    $(".content-news").click(function() {
        console.log(2, news);
    });
});
