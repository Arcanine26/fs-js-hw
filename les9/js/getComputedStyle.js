window.onload = () => {
    let divs = document.createElement("div");
    divs.append("div");
    let div = document.querySelector("div");
    let style = getComputedStyle(div);
    console.log(`Зовнішній відступ елементу div = ${style.margin}`);
}