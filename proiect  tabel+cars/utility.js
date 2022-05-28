function populateTable(arr) {

    //etap1 selectam tabelul

    let table = document.querySelector('.bodyTable');


    let text = ``;

    for (let i = 0; i < arr.length; i++) {

        text += `    <tr id="bmwrow">
                     <th scope="row"> ${arr[i].marca} </th>
                     <td> ${arr[i].pret} </td>
                    <td> ${arr[i].model} </td>
                    <td> ${arr[i].culoare} </td>
            </tr>`
    }



    table.innerHTML = text;

}


function sortByPrice(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i].pret > arr[j].pret) {

                let aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }

        }

    }

}

function sortByBrand(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i].marca > arr[j].marca) {

                let aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }

        }

    }
}

function chooseBrand(arr) {
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i].marca > arr[j].marca) {

                let aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }

        }

    }
}

function populateInput(arr) {

    let setM = setMarci(arr);

    console.log(setM);

    let input = document.querySelector('.cars-select')

    let text = ` <option value="">--Please choose an option--</option>`;

    for (let i = 0; i < setM.length; i++) {

        text += ` <option >${setM[i].marca}</option>`
    }
    input.innerHTML = text;


}

//functie de unicitate 

//functie ce  primeste ca parametru un vector de masini si o marca
//si returneaza  adevarat daca contine vectorul marca

function isMarca(arr, marca) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].marca == marca) {

            return true;
        }

    }

    return false;

}

//functie ce returneaza un set de marci


function setMarci(arr) {

    let setMarci = [];

    for (let i = 0; i < arr.length; i++) {

        if (isMarca(setMarci, arr[i].marca) == false) {

            console.log("ded");
            setMarci.push(arr[i]);
        }
    }


    return setMarci;


}

//functie ce primeste  ca parametru  un vector si marca  masinii 
//si returneaza toate masinile cu marca respectiva

function filterByMarca(arr, marca) {

    let masFiltrate = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].marca == marca) {

            masFiltrate.push(arr[i])

        }
    }

    return masFiltrate;
}