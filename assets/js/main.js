//Prendo il button 'start'
const buttonElement = document.querySelector('#start');
const select = document.getElementById('level');

buttonElement.addEventListener('click', function () {

    const gridElement = document.querySelector('#grid');

    //Reset
    gridElement.innerHTML = '';
    console.clear();

    let userLevel = select.value;

    switch (userLevel) {
        case 'low':
            userLevel = 100;
            console.log(userLevel);
            document.querySelector('.container').className = 'container';
            break;
        case 'med':
            userLevel = 81;
            console.log(userLevel);
            document.querySelector('.container').className = 'container med';
            break;
        case 'high':
            userLevel = 49;
            console.log(userLevel);
            document.querySelector('.container').className = 'container low';
            break;
        default:
            break;
    }

    for (let i = 0; i < userLevel; i++) {

        const myElement = document.createElement('div');
        myElement.classList.add('box');
        myElement.innerHTML = i + 1;

        gridElement.append(myElement)

        myElement.addEventListener('click', function () {
            myElement.classList.add('active');

            console.log(myElement.innerHTML);

        })

    }

})