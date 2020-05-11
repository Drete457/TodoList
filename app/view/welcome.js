
const canvas = {
    elements:{},
    handlers:{}
}

canvas.randomBtn = function () {
    $('#app')
    .append($('<button type="submit">').text(`Refresh`))
        .click(canvas.handlers['refreshPage']);
}


canvas.renderCard = function (data) {
    $('#app')
        .empty()
        .append($('<h2>').text(`${data.value}`));
}


export function bind(event, handler) {
    canvas.handlers[event] = handler;
}

export function renderCanvas(data) {
    
    if(data){
        canvas.renderCard(data);
        canvas.randomBtn();
        return;
    }

    
}

export default 'something';
