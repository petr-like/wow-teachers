$(function(){
    let news = $.getJSON( "../json/news.json", function() {
        console.log( "success" );
    });
    news = news.responseJSON;

    let content = '';
    console.log(news);

    // for(let i = 0; i < news.length; i++) {
    //     content += `<div class="title">${news[i].title}</div> <div class="title">${news[i].text}</div>`;
    // }

    $(".content-news").text(content);
});
