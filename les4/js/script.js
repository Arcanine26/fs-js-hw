document.getElementById("btn").onclick = function () {
    const userImage = prompt("Вставте посилання на ваше зображення", "http://site.com/image.jpg");
    const userName = prompt("Введіть ваше ім'я", "Ім'я");
    const userSecondName = prompt("Введіть ваше прізвище", "Прізвище");
    const userAge = prompt("Введіть ваш вік","18");
    const userPhone = prompt("Введіть ваш номер телефону", "+380ХХХХХХХХХ");
    const userMail = prompt("Введіть вашу електронну адресу", "example@mail.to");
    const divUser = document.querySelector(".user");
    const newDiv = document.createElement("div");
    newDiv.className = "user-card";
    newDiv.innerHTML = `
            <div class="user-image">
                <img src="${userImage}" alt="">
            </div>
            <div class="user-info">
                <div><span>Ім'я:</span>${userName}</div><hr>
                <div><span>Прізвище:</span>${userSecondName}</div><hr>
                <div><span>Вік:</span>${userAge}</div><hr>
                <div><span>Телефон:</span><a href="tel:">${userPhone}</a></div><hr>
                <div><span>E-mail:</span><a href="mailto:">${userMail}</a></div><hr>
            </div>`;
    divUser.appendChild(newDiv);
}