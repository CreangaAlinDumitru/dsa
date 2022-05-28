// Sa aflu daca cifra 3 se afla in numarul 193

let nr = +prompt("Introdu un  numarul ");

let cifra = +prompt("Introdu o cifra");


let u = nr % 10;


let z = Math.floor(nr / 10) % 10;


let s = Math.floor(nr / 100);


let semn = 0;

if (u === cifra) {

    semn = 1;
}

if (z === cifra) {

    semn = 1;
}

if (s === cifra) {


    semn = 1;
}


if (semn == 0) {

    alert(`${nr} nu contine cifra ${cifra}`);
} else {
    alert(`${nr} contine cifra ${cifra}`);
}