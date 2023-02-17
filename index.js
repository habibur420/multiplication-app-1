const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById('question');
const inputEl = document.getElementById('input');
const formEl = document.getElementById('form');
const scoreEl = document.getElementById('score');

questionEl.innerText = `What is ${num1} mutiply by ${num2}`;

// correct answers 
const correctAns = num1 * num2;
let score = JSON.parse(localStorage.getItem('score'));

if(!score) {
    score = 0;
}

formEl.addEventListener('submit', () => {
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
})

function updateLocalStorage () {
    localStorage.setItem('score', JSON.stringify(score));
}

scoreEl.innerText = `Score: ${score}`;