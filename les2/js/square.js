for (let i = 0; i < 10; i++) {
    document.write("<br>");
    for (let j = 0; j < 10; j++) {
        if (i > 0 && i < 9 && j > 0 && j < 9) {
            document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
        } else {
        document.write("&nbsp;&nbsp;&nbsp;*");
        }
    }
}
document.write("<br>");