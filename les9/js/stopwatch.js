window.onload = () => {
    let start = document.querySelector("button:nth-child(1)");
    let stop = document.querySelector("button:nth-child(2)");
    let reset = document.querySelector("button:nth-child(3)");
    let bg = document.querySelector("body > div");
    let hour = 0;
    let minutes = 0;
    let seconds = 0;
    let stopwatch = null;
    const time = () => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hour++;
            minutes = 0;
        }
        document.querySelector("span:nth-child(3)").innerText = seconds;
        document.querySelector("span:nth-child(2)").innerText = minutes;
        document.querySelector("span:nth-child(1)").innerText = hour;
    }
    let flag = false;
    start.onclick = () => {
        if (flag === false) {
            bg.classList.remove("black");
            bg.classList.add("green");
        } else {
            bg.classList.remove("red");
            bg.classList.remove("silver");
            bg.classList.add("green");
        }
        flag = true;
        stopwatch = setInterval(time, 1000);
    }
    stop.onclick = () => {
        if (flag === false) {
            bg.classList.remove("black");
            bg.classList.add("red");
        } else {
            bg.classList.remove("green");
            bg.classList.remove("silver");
            bg.classList.add("red");
        }
        clearInterval(stopwatch)
        flag = true;
    }
    reset.onclick = () => {
        if (flag === false) {
            bg.classList.remove("black");
            bg.classList.add("silver");
        } else {
            bg.classList.remove("green");
            bg.classList.remove("red");
            bg.classList.add("silver");
        }
        clearInterval(stopwatch);
        seconds = 0;
        minutes = 0;
        hour = 0;
        document.querySelector("span:nth-child(3)").innerText = seconds;
        document.querySelector("span:nth-child(2)").innerText = minutes;
        document.querySelector("span:nth-child(1)").innerText = hour;
        flag = true;
    }
}