var userName = prompt("Введіть ваше ім'я", "Ім'я");
var userLastName = prompt("Введіть ваше прізвище", "Прізвище");
var userAge = prompt("Введіть ваш вік", 18);
var firstNumber = parseInt(prompt("Введіть перше число", 0));
var secondNumber = parseInt(prompt("Введіть друге число", 1));
var thirdNumber = parseInt(prompt("Введіть третє число", 2));
var avarage = (firstNumber + secondNumber + thirdNumber)/3;

document.write(`<div class="main" style="border: 5px solid black; display: inline-block;">
    <header style="width: 800px; height: 200px; border: 5px solid red;"></header>
    <div class="main-content"">
        <nav style="width: 100px; height: 400px; border: 5px solid orange"></nav>
        <section style="width: 700px; height: 400px; border: 5px solid orange; display: flex; align-items: center; justify-content: center;">
            Ваше ім'я: ${userName} <br>
            Ваше прізвище: ${userLastName} <br>
            Ваш вік: ${userAge} <br>
            Середнє арифметичне ваших введених чисел: ${avarage.toFixed(1)};
        </section>
    </div>
    <footer style="width: 800px; height: 200px; border: 5px solid grey;"></footer>
    </div>`)