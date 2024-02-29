//Prendo il button 'start'
const buttonElement = document.querySelector('#start');
const select = document.getElementById('level');
const resetElement = document.querySelector('#reset');
resetElement.addEventListener('click', resetGame)

let score = 0

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
                if (score === userLevel - 16) {
                    endGame();
                }
            }

        })

    }

})


//Funzione numeri casuali

function createRandomNumbers(userLevel) {
    const numberArray = [];
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

    resetElement.style.display = 'none';
}


//Funzione fine del gioco
function gameOver() {
    alert('Hai perso! Punti fatti: ' + score);
    resetElement.style.display = 'block';
}

function endGame() {
    alert('Hai vinto!!!!!!!!!!!');
    resetElement.style.display = 'block';
}