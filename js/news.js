$(function(){
    let news = $.getJSON( "../json/", function() {
        console.log( "success" );
        console.log(1, news);
    });
    news = news.responseJSON;

    let content = '';
    

    // for(let i = 0; i < news.length; i++) {
    //     content += `<div class="title">${news[i].title}</div> <div class="title">${news[i].text}</div>`;
    // }

    $(".content-news").click(function() {
        console.log(2, news);
    });
});
