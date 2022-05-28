//Fiind date vârstele a doi copii (a și b) afișați care dintre ei este cel mai mare și cu cât.

//Explicație
//S-au citit vârstele celor 2 copii(5 și 8). Deoarece al doilea copil e mai mare cu 3 ani decât primul se afișează Al doilea copil este mai mare cu 3 ani.

let primulCopil = +prompt("Varsta copilului A");

let copilulDoi = +prompt("Varsta copilului B");


if(primulCopil>copilulDoi){

     alert("A este mai mare decat B cu "+(primulCopil-copilulDoi)+" ani");
}else{
    alert("A este mai mic decat B cu "+(copilulDoi-primulCopil)+" ani");
}




