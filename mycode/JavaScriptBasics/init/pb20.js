    let nr = +prompt("Introdu un numar de 3 cifre pentru a afisa penultimul numar din acesta");

    let u = nr % 10;

    let x = Math.floor(nr / 10) % 10;

    let z = Math.floor(nr / 100);

    if (u > z && u < z) {
        alert(u);
    } else if (z > u && z < u) {
        alert(z);
    } else {
        alert(x);
    }