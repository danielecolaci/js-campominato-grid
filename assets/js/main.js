//Prendo il button 'start'
const buttonElement = document.querySelector('#start');

buttonElement.addEventListener('click', function () {

    const gridElement = document.querySelector('#grid');

    //Reset
    gridElement.innerHTML = '';
    console.clear();

    let userLevel = 100;

    for (let i = 0; i < userLevel; i++) {

        const myElement = document.createElement('div');
        myElement.classList.add('box');
        myElement.innerHTML = i + 1;

        gridElement.append(myElement)

    }


})