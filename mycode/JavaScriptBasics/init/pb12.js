//Se dau trei numere naturale a b x. Să se verifice dacă numărul x aparține intervalului [a,b].
//Date de intrare
//Programul citește de la tastatură numerele a b x.

//Date de ieşire
//Programul afișează pe ecran mesajul DA, dacă numărul x aparține intervalului [a,b], respectiv NU în caz contrar.

//Restricţii şi precizări
//0 ≤ a,b,x ≤ 1000
//a ≤ b

//Exemplu
//Intrare

//4 9 8
//Ieșire

//DA

let x = +prompt("Introdu numarul X pentru verificare");

let a = +prompt("Introdu numarul a");

let b = +prompt("Introdu numarul b");

let text="";

if (x>=a&&x<=b){
    text+= "Numarul apartine intervalului de numere"
}else if (x<=a&&x>=b){
    text+= "Numarul nu apartine intervalului de numere"
}

alert(text);