class Animal {
    constructor (food, location) {
        this.food = food;
        this.location = location;
    }

    makeNoise () {
        return console.log("Тварина дуже шумлива")
    }
    eat () {
        return console.log("Тварина добре їсть")
    }
    sleep () {
        return console.log("Тварина спить")
    }
}

class Dog extends Animal {
    constructor (name, food, location) {
        super(food, location);
        this.name = name;
    }

    makeNoise () {
        return console.log("Гучно лає");
    }
    eat () {
        return console.log(`Добре їсть ${this.food}`);
    }
}

class Cat extends Animal {
    constructor (species, food, location) {
        super(food, location);
        this.species = species;
    }

    makeNoise () {
        return console.log("Тихенько мявчить");
    }
    eat () {
        return console.log(`Коти їдять ${this.food}`);
    }
}

class Horse extends Animal {
    constructor (color, food, location) {
        super(food, location);
        this.color = color;
    }

    makeNoise () {
        return console.log("Тихенька, поки їсть");
    }
    eat () {
        return console.log(`Їсть - ${this.food}`);
    }
}

class Veterinar {
    treatAnimal(Animal) {
        return console.log(`Ця тварина зранку їла - ${Animal.food}, її локація на данний момент часу - ${Animal.location}.`);
    }
}

const main = [
    new Dog ("Райлі", "Корм для собак", "Вдома"),
    new Cat ("Сфінкс", "Корм для котів", "У друзів"),
    new Horse ("Білий", "Солома", "Ферма")
];

const checkVet = new Veterinar();

for (const Animal of main){
    checkVet.treatAnimal(Animal);
    Animal.makeNoise();
    Animal.eat();
    console.log("----------------");
}

console.log(`Дані оновлено : ${new Date()}`);