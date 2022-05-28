
//La un concurs pot participa copii cu vârste între a și b ani, inclusiv. Gigel are n ani. Stabiliți dacă poate participa la concurs.


let varstaElev = +prompt("Varsta elev");

let a = +prompt("Introduceti limita inferioara ");

let b = +prompt("Introduceti limita superioara ");


let text= " Varsta elevului este " +varstaElev +" prin urmare ";



if(a<=varstaElev&&b>=varstaElev){

    text+= " este ";

}else{
    text+= " nu  este";
}

text+=" eligibil pentru participare";


alert(text);