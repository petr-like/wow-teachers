$(function(){
    let content = '';

    let news = $.getJSON( "/json/news.json", function() {
        console.log( "success" );

        let data = news.responseJSON.news;

        for(let i = 0; i < data.length; i++) {
            content += `<div class="title">${data[i].title}</div> <div class="title">${data[i].text}</div>`;
        }

        $(".content-news").text(content);
    });


});
