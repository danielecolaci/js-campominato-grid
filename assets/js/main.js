//Prendo il button 'start'
const buttonElement = document.querySelector('#start');
const select = document.getElementById('level');
let pointElement = document.getElementById('point');
const resetElement = document.querySelector('#reset');
resetElement.addEventListener('click', resetGame);

let numberArray = [];

let score = 0;

buttonElement.addEventListener('click', function () {

    const gridElement = document.querySelector('#grid');

    //Reset
    gridElement.innerHTML = '';
    console.clear();
    score = 0;
    pointElement.innerHTML = '';

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

    const numberArray = createRandomNumbers(userLevel);
    console.log(numberArray);

    for (let i = 0; i < userLevel; i++) {

        const myElement = document.createElement('div');
        myElement.classList.add('box');
        myElement.innerHTML = i + 1;

        gridElement.append(myElement);

        //Creo le icone
        const appleElement = document.createElement('i');
        appleElement.classList.add('fa-solid', 'fa-apple-whole');

        const doctorElement = document.createElement('i');
        doctorElement.classList.add('fa-solid', 'fa-user-doctor');

        //Funzione click
        myElement.addEventListener('click', function () {
            if (numberArray.includes(i + 1)) {
                myElement.classList.add('error');
                myElement.innerHTML = '';
                myElement.append(doctorElement);
                gameOver();
            } else {
                myElement.classList.add('active');
                myElement.innerHTML = '';
                myElement.append(appleElement);
                score++;
                pointElement.innerHTML = ' ' + score;
                if (score === userLevel - 16) {
                    endGame();
                }
            }

        })

    }

})


//Funzione numeri casuali

function createRandomNumbers(userLevel) {
    while (numberArray.length < 16) {
        let numb = Math.floor(Math.random() * userLevel) + 1;
        if (!numberArray.includes(numb)) {
            numberArray.push(numb);
        }
    }
    return numberArray;
}

//Funzione Reset
function resetGame() {
    const gridElement = document.querySelector('#grid');

    gridElement.innerHTML = '';
    score = 0;
    buttonElement.click();
    pointElement.innerHTML = '';

    resetElement.style.display = 'none';
}


//Funzione fine del gioco
function gameOver() {
    alert('Game Over! Score: ' + score);

    const gridElement = document.querySelector('#grid');
    const allBoxElement = document.getElementsByClassName('box');

    for (i = 1; i < allBoxElement.length; i++) {
        if (numberArray.includes(parseInt(allBoxElement[i].innerText))) {
            allBoxElement[i].classList.add("error");
        }
    }

    resetElement.style.display = 'block';
}

function endGame() {
    alert('Congratulation. You win!');
    resetElement.style.display = 'block';
}