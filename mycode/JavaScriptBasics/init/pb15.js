
//Într-o clasă sunt F fete și B băieți. Fiecare fată citește 3 pagini pe zi și fiecare băiat citește 2 pagini pe zi.
 //Câte pagini vor citi copiii în n zile?


 let fete = prompt(" Pagini citite de fete pe zi ");
 fete= +fete*3;
 let baieti = prompt(" Cate pagini citeste un baiat pe zi ");
 baieti= +baieti*2;

 let text=" Pagini citite doar de fete in total "+fete+"\n";
 text+=" Pagini citite doar de baieti in total "+baieti+"\n";

 text+="Numarul total de pagini citite de baieti si fete "+(fete+baieti);

 alert(text);
