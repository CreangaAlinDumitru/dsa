let a = prompt("alegeti primul numar pentru scadere");
let b = prompt("Alegeti al doilea numar pentru scadere");


let text=`${a}-${b}=${a-b}\n`;

text+=`${a}+${b}=${a+b}\n`;

text+=`${a}/${b}=${a/b}\n`;

text+=`${a}*${b}=${a*b}\n`;

text+=`${a}%${b}=${a%b}\n`;

alert (text);
