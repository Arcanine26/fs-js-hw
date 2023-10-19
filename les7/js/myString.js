class MyString {
    constructor (str) {
        this.str = str;
    }
    reverse () {
        return this.str.split("").reverse().join("")
    }
    ucFirst () {
        return this.str.charAt(0).toUpperCase() + this.str.substring(1)
    }
    ucWords () { 
        const words = this.str.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].toLowerCase();
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
    }
}