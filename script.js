//get main containers for elements 
const container = document.querySelector('.container');
const body = document.querySelector('body');
let inputFromUser;
//create square 16x16 div and add they in html
createSquare(16);


//creating button for clear current grid and asking creat new grid
const btn = document.createElement('button');
btn.textContent = 'Clear square and Create new square';
btn.addEventListener('click', function () {
    inputFromUser = + prompt('Введите маштаб квадрата (например если нужен квадрат размерами 16х16 введите 16):');
    if (inputFromUser) {
        //remove old elements
        let items = document.querySelectorAll('.item');
        items.forEach(element => {
            container.removeChild(element);
        })
        //add new elements
        createSquare(inputFromUser);
    }
});
body.appendChild(btn);


//function for create Square
function createSquare(scale) {
    for (let i = 0; i < scale; i++) {

        for (let j = 0; j < scale; j++) {
            let div = document.createElement('div');
            div.classList.add('item');
            div.style.cssText = `width: ${100 / scale}%; height: ${100 / scale}%; display: inline-block; box-sizing: border-box;`; //${100 / scale}% computed width and height each item
            container.appendChild(div);
        }
        container.innerHTML += '<br>';

    }

    //add hover effect and color
    const nodesDiv = document.querySelectorAll('.item');
    //random colors
    let r = 255;
    let g = 255;
    let b = 255;
    //hover
    nodesDiv.forEach(function (element) {

        element.addEventListener('mouseenter', () => {
            if (r >= 0 || g >= 0 || b >= 0) {
                r -= 25.5;
                g -= 25.5;
                b -= 25.5;
            }
            element.style.cssText += `background-color: rgb(${r}, ${g}, ${b});`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.cssText += 'background-color: #fff;'
        });
    });

}
