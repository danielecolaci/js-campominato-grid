//Set
const buttonElement = document.querySelector('#start');
const select = document.getElementById('level');
let pointElement = document.getElementById('point');

let numberArray = [];

let score = 0;

buttonElement.addEventListener('click', startGame);

//Funzione Start
function startGame() {
    const gridElement = document.querySelector('#grid');

    //Reset
    gridElement.innerHTML = '';
    console.clear();
    score = 0;
    pointElement.innerHTML = '';

    let userLevel = select.value;

    switch (userLevel) {
        case 'easy':
            userLevel = 100;
            console.log('Box Number: ' + userLevel);
            document.querySelector('.container').className = 'container';
            break;
        case 'medium':
            userLevel = 81;
            console.log('Box Number: ' + userLevel);
            document.querySelector('.container').className = 'container med';
            break;
        case 'expert':
            userLevel = 49;
            console.log('Box Number: ' + userLevel);
            document.querySelector('.container').className = 'container low';
            break;
        default:
            break;
    }

    numberArray = createRandomNumbers(userLevel);
    console.log(numberArray);

    for (let i = 0; i < userLevel; i++) {

        const boxElement = document.createElement('div');
        boxElement.classList.add('box');
        boxElement.innerHTML = i + 1;

        gridElement.append(boxElement);

        //Creo le icone
        const appleElement = document.createElement('i');
        appleElement.classList.add('fa-solid', 'fa-apple-whole');

        const doctorElement = document.createElement('i');
        doctorElement.classList.add('fa-solid', 'fa-user-doctor');

        //Funzione click
        boxElement.addEventListener('click', function () {
            if (numberArray.includes(i + 1)) {
                boxElement.classList.add('error');
                boxElement.innerHTML = '';
                boxElement.append(doctorElement);
                gameOver();
            } else {
                boxElement.classList.add('active');
                boxElement.innerHTML = '';
                boxElement.append(appleElement);
                score++;
                pointElement.innerHTML = ' ' + score;
                if (score === userLevel - 16) {
                    endGame();
                }
            }
        })
    }
}

//Funzione numeri casuali
function createRandomNumbers(userLevel) {
    numberArray = [];

    while (numberArray.length < 16) {
        let numb = Math.floor(Math.random() * userLevel) + 1;
        if (!numberArray.includes(numb)) {
            numberArray.push(numb);
        }
    }
    return numberArray;
}

//Funzioni fine del gioco
function gameOver() {
    alert('Game Over! Score: ' + score);

    const gridElement = document.querySelector('#grid');
    const allBoxElement = document.getElementsByClassName('box');

    for (let i = 0; i < allBoxElement.length; i++) {
        if (numberArray.includes(parseInt(allBoxElement[i].innerText))) {
            allBoxElement[i].classList.add("error");
        }
    }
}

function endGame() {
    alert('Congratulation. You win!');
}