// sa se afiseze cifra numerelor pare din 3 cifre.

let nr = +prompt("Introduceti un numar din 3 cifre")

let u = nr % 10; //123%10=>3

let z = Math.floor(nr / 10) % 2; //123/10=>12%10=>2

let x = Math.floor(nr / 100); //123/100->1

let contor = 0;


if (u % 2 == 0) {

    contor++;
}

if (z % 2 == 0) {

    contor++;
}


if (x % 2 == 0) {
    contor++;
}
alert(contor);