//scrie un nr de 3 cifre, sa se afiseze inversul lui. 

let nr = +prompt("Introduceti un numar pentru a se afisa inversul lui");

let u = nr % 10;

let z = Math.floor(nr / 10) % 10;

let s = Math.floor(nr / 100);

let reverse = u * 100 + z * 10 + s;

// if (u % 10 != 0) {
//     reverse = reverse * 10 + u;
// }

// if (x % 10 == 0) {
//     reverse = reverse * 10 + x;
// }

// if (z % 10 == 0) {
//     reverse = reverse * 10 + z;
// }

alert(reverse);