//sa se afiseze suma numerelor impare

let nr = +prompt("Introdu un numar de 3 cifre pentru a afisa suma numerelor impare");

let u = nr % 10;

let x = Math.floor(nr / 10) % 10;

let z = Math.floor(nr / 100);

let suma = 0;

if (u % 2 != 0) {

    suma = suma + u;
}

if (x % 2 != 0) {

    suma = suma + x;
}

if (z % 2 != 0) {

    suma = suma + z;
}

alert(suma);