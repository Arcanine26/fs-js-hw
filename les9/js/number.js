window.onload = () => {
    let input = document.createElement("input");
    let button = document.createElement("button");

    input.placeholder = "Введіть номер телефону у форматі ХХХ-ХХХ-ХХ-ХХ";
    button.innerText = "Зберегти";

    document.body.append(input);
    document.body.append(button);

    const checkNumber = /\d{3}-\d{3}-\d{2}-\d{2}/;

    button.onclick = () => {
        if(checkNumber.test(input.value) && input.value.length === 13) {
            document.body.classList.add("green");
            document.location = "https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg";
        } else {
            let div = document.createElement("div");
            document.body.prepend(div);
            div.innerText = "Невірно введено номер.";
        }
    }
}