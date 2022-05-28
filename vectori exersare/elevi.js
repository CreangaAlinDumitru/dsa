elev1 = {
    nume: "Gheorghe",
    prenume: "Andrei",
    medieInfo: 7,
    notaTeza: 9,
    anDeNastere: 1997,
    lunaNasteri: 1,
}

elev2 = {
    nume: "Georgescu",
    prenume: "Radu",
    medieInfo: 9,
    notaTeza: 6,
    anDeNastere: 1998,
    lunaNasteri: 12,
}


elev3 = {
    nume: "Morosanu",
    prenume: "Alexandra",
    medieInfo: 10,
    notaTeza: 10,
    anDeNastere: 1998,
    lunaNasteri: 2,
}


elev4 = {
    nume: "Vivescu",
    prenume: "Cleopatra",
    medieInfo: 4,
    notaTeza: 2,
    anDeNastere: 1996,
    lunaNasteri: 7,
}


elev5 = {
    nume: "Bradu",
    prenume: "Cosmin",
    medieInfo: 5,
    notaTeza: 5,
    anDeNastere: 1999,
    lunaNasteri: 10,
}


elev6 = {
    nume: "Marginean",
    prenume: "Larisa",
    medieInfo: 8,
    notaTeza: 8,
    anDeNastere: 1997,
    lunaNasteri: 6,
}


elev7 = {
    nume: "Popa",
    prenume: "Dorian",
    medieInfo: 7,
    notaTeza: 8,
    anDeNastere: 1999,
    lunaNasteri: 12,
}

elev8 = {
    nume: "PopaOriginal",
    prenume: "Dorian",
    medieInfo: 7,
    notaTeza: 8,
    anDeNastere: 1996,
    lunaNasteri: 4,
}


elev9 = {
    nume: "Stanescu",
    prenume: "Francesca",
    medieInfo: 5,
    notaTeza: 3,
    anDeNastere: 1998,
    lunaNasteri: 3,
}


elev10 = {
    nume: "Radulescu",
    prenume: "George",
    medieInfo: 4,
    notaTeza: 4,
    anDeNastere: 1997,
    lunaNasteri: 6,
}

elev11 = {
    nume: "Clara",
    prenume: "Alexandra",
    medieInfo: 3,
    notaTeza: 1,
    anDeNastere: 1996,
    lunaNasteri: 2,
}


elev12 = {
    nume: "Cimpoi",
    prenume: "Alex",
    medieInfo: 1,
    notaTeza: 4,
    anDeNastere: 1998,
    lunaNasteri: 11,
}


elev13 = {
    nume: "Gruia",
    prenume: "Mario",
    medieInfo: 2,
    notaTeza: 2,
    anDeNastere: 1998,
    lunaNasteri: 9,
}


let cls11A = [elev1, elev2, elev3, elev4, elev5, elev6, elev7, elev8, elev9, elev10];

let cls11B = [elev1, elev2, elev3, elev4, elev5, elev6, elev7, elev8, elev9, elev10, elev11, elev12, elev13];


function medieElev(e) {

    let a = e.medieInfo;
    let b = e.notaTeza;
    let s = (a + b) / 2;

    return s;
}


function descriereElev(elev) {

    let text = " Elevul " + elev.nume + " " + elev.prenume + " are media " + medieElev(elev) + "\n";
    text += " Drept urmare, acesta este promovat "

    return text;

}

function medieVarsta(m) {

    let a = m.anDeNastere
    let b = cls11B.length
    let s = (a / b);

    return s
}

function medieClasa() {

    let sumaMediilor = 0;
    for (let a = 0; a < cls11B.length; a++) {


        sumaMediilor += medieElev(cls11B[a]);
    }

    return sumaMediilor / cls11B.length;
}

function eleviiPromovatiInfo(arr) {


    for (let i = 0; i < arr.length; i++) {

        if (medieElev(arr[i]) > 5) {

            console.log(descriereElev(arr[i]))
        }
    }

}

function eleviAlfabetic(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i].nume > arr[j].nume) {

                let aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }
}



function afisareElevi(arr) {

    for (let i = 0; i < arr.length; i++) {

        console.log(arr[i].nume);
    }
}

function eleviCorigenti(arr) {

    for (let i = 0; i < arr.length; i++)

        if (arr[i].medieInfo < 5) {

            console.log(eleviAlfabetic(arr[i].medieInfo))

        }

}
//tema


function elevpasividecomp(a) {

    let text = " Elevii compatibili de competitie sunt " + elevpasividecomp.nume + " " + elevpasividecomp.prenume;

}




//medievarsta

function mediaVarsta2(arr) {

    let varstaMedie = 0;

    for (a = 0; a < cls11B.length; a++) {

        varstaMedie += medieVarsta(cls11B[a]);
    }

    return varstaMedie / cls11B.length;

}




//elevi pasivi de competitie mai mari de 1998

function elevdoarmaimaride98(arr) {

    for (a = 0; a < cls11B.length; a++) {

        if (arr[a].anDeNastere > 1998)

            console.log(elevpasividecomp(arr[a].anDeNastere))
    }
}




//dupa anul nasterii

function elevinumeric(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i].anDeNastere > arr[j].anDeNastere) {

                let aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }
}