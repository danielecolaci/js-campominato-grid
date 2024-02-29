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
            console.log('Numero Caselle: ' + userLevel);
            document.querySelector('.container').className = 'container';
            break;
        case 'med':
            userLevel = 81;
            console.log('Numero Caselle: ' + userLevel);
            document.querySelector('.container').className = 'container med';
            break;
        case 'high':
            userLevel = 49;
            console.log('Numero Caselle: ' + userLevel);
            document.querySelector('.container').className = 'container low';
            break;
        default:
            break;
    }

    const numberArray = createRandomNumbers();
    console.log(numberArray);


    for (let i = 0; i < userLevel; i++) {

        const myElement = document.createElement('div');
        myElement.classList.add('box');
        myElement.innerHTML = i + 1;

        gridElement.append(myElement);

        const iconElement = document.createElement('i');
        iconElement.classList.add('fa-solid', 'fa-apple-whole');

        myElement.addEventListener('click', function () {
            myElement.classList.add('active');

            myElement.innerHTML = '';
            myElement.append(iconElement);

        })

    }

})

//Funzione numeri casuali

function createRandomNumbers() {
    const numberArray = [];
    while (numberArray.length < 16) {
        let numb = Math.floor(Math.random() * 16) + 1;
        if (!numberArray.includes(numb)) {
            numberArray.push(numb);
        }
    }
    return numberArray;
}