let bmw = {
    carBrand: "BMw",
    price: 39.999,
    color: "white",
    prodYear: 2017,


    description: function() {

        let text = "We present you a luxury sedan, it's a " + this.carBrand + "\n";
        text += " Our sedan have 256 HorsePower and a 3.0 liters engine" + "\n";
        text += " The starting price is from " + this.price + "\n";
        text += " With a beautiful color, a " + this.color + " one " + "\n";
        text += " Production year was in " + this.prodYear + "\n";

        return text;
    }

}

let audi = {
    carBrand: "Audi",
    price: 37.999,
    description: "231 HP, 2.8 Liters",
    color: "green",
    prodYear: 2015,

    description: function() {

        let text = "We present you a luxury sedan, it's a " + this.carBrand + "\n";
        text += " Our sedan have 256 HorsePower and a 3.0 liters engine" + "\n";
        text += " The starting price is from " + this.price + "\n";
        text += " With a beautiful color, a " + this.color + " one " + "\n";
        text += " Production year was in " + this.prodYear + "\n";

        return text;
    }

}

let mercedes = {
    carBrand: "Mercedes",
    price: 46.999,
    description: "245 HP, 3.Liters",
    color: "black",
    prodYear: 2019,

    description: function() {

        let text = "We present you a luxury sedan, it's a " + this.carBrand + "\n";
        text += " Our sedan have 256 HorsePower and a 3.0 liters engine" + "\n";
        text += " The starting price is from " + this.price + "\n";
        text += " With a beautiful color, a " + this.color + " one " + "\n";
        text += " Production year was in " + this.prodYear + "\n";

        return text;
    }
}
let jaguar = {
    carBrand: "Jaguar",
    price: 42.999,
    description: " 240 HP, 3.0 Liters",
    color: "Blue",
    prodYear: 2020,

    description: function() {

        let text = "We present you a luxury sedan, it's a " + this.carBrand + "\n";
        text += " Our sedan have 256 HorsePower and a 3.0 liters engine" + "\n";
        text += " The starting price is from " + this.price + "\n";
        text += " With a beautiful color, a " + this.color + " one " + "\n";
        text += " Production year was in " + this.prodYear + "\n";

        return text;
    }
}
let lexus = {
    carBrand: "Lexus",
    price: 40.999,
    description: "280 HP, 2.5 Liters",
    color: "red",
    prodYear: 2015,

    description: function() {

        let text = "We present you a luxury sedan, it's a " + this.carBrand + "\n";
        text += " Our sedan have 256 HorsePower and a 3.0 liters engine" + "\n";
        text += " The starting price is from " + this.price + "\n";
        text += " With a beautiful color, a " + this.color + " one " + "\n";
        text += " Production year was in " + this.prodYear + "\n";

        return text;
    }
}

let cars = [bmw, audi, mercedes, jaguar, lexus];


for (let a = 0; a < cars.length; a++) {

    console.log(cars[a].carBrand);
}

for (let b = 0; b < cars.length; b++) {

    console.log(cars[b].color);
}

for (let c = 50; c <= 100; c = c + 5) {

    console.log(c);
}



