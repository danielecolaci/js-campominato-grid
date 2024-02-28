//Prendo il button 'start'
let buttonElement = document.querySelector('#start');
console.log(buttonElement);

buttonElement.addEventListener('click', function () {

    const gridElement = document.querySelector('#grid');
    console.log(gridElement);

    let userLevel = 100;

    for (let i = 0; i < userLevel; i++) {

        const myElement = document.createElement('div');
        myElement.classList.add('box');
        myElement.innerHTML = i + 1;
        console.log(myElement);

    }


})