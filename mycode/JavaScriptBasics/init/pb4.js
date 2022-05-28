//Într-un brad sunt a globuri albe, de două ori mai multe globuri roșii,
//iar globuri verzi cu 3 mai puține ca numărul de globuri roșii. Câte globuri sunt în total?

let albe = prompt("globuri albe");

albe =+albe;//daca punem plus in fata convertim de la string la number

let rosii=2*albe;

let verzi=rosii-3


let text="Rosii sunt "+rosii+"\n";

text+="Verzi sunt "+verzi+"\n";

text+="Albe sunt"+albe+"\n";


text+="Numarul totale de globuri este "+(albe+rosii+verzi);



alert(text);







