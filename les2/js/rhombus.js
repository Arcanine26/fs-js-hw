let height = 8;

for (let i = 0; i < height; i++) {
    let line = "";
    document.write("<br>");
    for (let j = 0; j < height - i; j++) {
        line += "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        line += "&nbsp;&nbsp;*";
    }
    document.write(line);
}
for (let i = height; i > 0 ; i--) {
    let line = "";
    document.write("<br>");
    for (let j = -1; j < height - i; j++) {
        line += "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        line += "&nbsp;&nbsp;*";
    }
    document.write(line);
}

document.write("<br>")