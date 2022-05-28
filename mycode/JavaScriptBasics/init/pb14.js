//se introduce un numar de trei cifre sa se afiseze cifra maxima


let nr = +prompt("Introduceti un numar de trei cifre");


let u = nr % 10;

let z = Math.floor(nr / 10) % 10;

let s = Math.floor(nr / 100);



if (u > s && u > z) {

    alert(u);
} else if (s > u && s > z) {
    alert(s);
} else {

    alert(z);
}