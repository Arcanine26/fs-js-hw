let userName = prompt("Як тебе звати?")
if (userName === null || userName == 0) {
    alert("Будь ласка, наступного разу введіть ваше ім'я");
    console.error("Помилка");
    throw "stop";
} else {
    alert(`Привіт, ${userName}`);
}
let startGame = confirm("Почати гру?");
if (startGame === true){
    alert("Тоді розпочинаємо!");
}else{
    alert("Шкода, побачимось наступного разу :)");
    throw "stop";
}

let words = [
    "пісня",
    "код",
    "фільм",
    "спортзал",
    "праця",
    "університет"
];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for(let i = 0; i < word.length; i++){
    answerArray[i] = "_";
}

let remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    let guess = prompt("Вгадай літеру або натисни на відміну для виходу з гри.")
    if (guess === null) {
        alert("Дякую за гру, побачимось наступного разу :)");
        throw "stop";
    } else if (guess.length !== 1) {
        alert("Будь ласка, введи лише одну літеру");
    } else {
        for (let j = 0; j < word.length + 1; j++){
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}


alert(`Відмінно! Було вгадане слово ${word}`);