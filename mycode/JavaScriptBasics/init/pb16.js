//Într-un parc sunt n alei.Pe fiecare alee sunt n arbori. Fiecare arbore are n crengi. 
//Pe fiecare creanga sunt n cuiburi. În fiecare cuib sunt n păsări. Câte păsări sunt în parc?

let alee= prompt("Introdu numarul de alee");
alee= +alee;
let arbori= prompt("Introdu numarul de arbori");
arbori= +arbori*alee;
let crengi= prompt("Introdu numarul de crengi");
crengi= +crengi*arbori;
let cuiburi= prompt("Introdu numarul de cuiburi");
cuiburi= +cuiburi*crengi;
let text="Numarul total de pasari din parc este "+cuiburi+"\n";

alert(text);