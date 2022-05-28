//Cerința
//Se dau datele de naștere a n persoane, numerotate de la 1 la n, în forma an luna zi. Să se determine numărul de ordine al celei mai
// tinere și al celei mai în vârstă persoană dintre cele date.

//Date de intrare
//Programul citește de la tastatură numărul n, iar apoi n triplete de numere naturale a l z, reprezentând anul, 
//luna și ziua de naștere a fiecărei persoane.

//Date de ieșire
//Programul va afișa pe ecran două numere p q, reprezentând numărul de ordine al celei mai tinere, 
//respectiv al celei mai în vârstă persoană.

//Restricții și precizări
//1 ≤ n ≤ 1000
//cele n date calendaristice sunt corecte
//dacă există două sau mai multe persoane cele mai tinere (în vârstă) se va afișa numărul de ordine mai mic

let bod = [

    {
        zi: 12,
        an: 2021,
        luna: 10,
    },

    {
        zi: 23,
        an: 2021,
        luna: 8,
    },

    {
        zi: 16,
        an: 2021,
        luna: 10,
    },

    {
        zi: 4,
        an: 2021,
        luna: 10,

    },

    {
        zi: 29,
        an: 2021,
        luna: 10,
    },
    {
        zi: 9,
        an: 2021,
        luna: 10,
    }

]


function descriere(bod) {

    let text = " Persoana cea mai tanara are ziua de nastere in ziua " + bod.zi + " anul " + bod.an + " luna " + bod.luna;

    return text;
}


function tanar(arr) {


    let t = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].an > t.an) {
            t = arr[i];
        } else if (arr[i].an == t.an && arr[i].luna > t.luna) {
            t = arr[i];
        } else if (arr[i].an == t.an && arr[i].luna == t.luna && arr[i].zi > t.zi) {
            t = arr[i];
        }

    }
    return t;
}