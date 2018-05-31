
$(document).ready(async function(){

    for(let i = 0;i<3;i++)
        await $.get(`/note/${i+1}`, function(data) {
            $('#games').append(`<div><a href='/game/${i+1}'>${data.name}: ${data.description}</a></div>`);
        });
});