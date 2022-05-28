//////////////////////autoturisme



function setAutoturisme() {

    let container = document.querySelector(".container");

    container.innerHTML = `
<div class="carselect">
                <label for="cars" class="cars">Marca</label>
                <select id="cars"><br>
            
                     </select><br><br>
            </div>


            <label for="year">year start</label><br>
            <input type="number" id="year" class="minvalue" min="min_value" max="max_value"><br>
            <label for="year">year finish</label><br>
            <input type="number" id="year" class="maxvalue" min="min_value" max="max_value"><br><br>

                <div class="carselect">
                    <label for="cars" class="cars">Cars</label>
                    <select id="cars"><br>
                  <option value="sass">323</option>
                  <option value="less">A8</option>
                  <option value="stylus">Malibu</option>
                  <option value="postcss">LeMans</option>
                  <option value="other">Sebring</option>
                  <option value="less">A8</option>
                  <option value="less">A7</option>
                  <option value="less">A3</option>
                  <option value="less">A4</option>
                  <option value="less">1 Series</option>
                  <option value="less">3 Series</option>
                  <option value="less">4 Series</option>
                  <option value="less">6 Series</option>
                 
                </select><br><br>
                </div>
            



`

    let autoturisme = document.querySelector('.masini')

    autoturisme.innerHTML = `<article class="card">
<img src="../photos/3seriesfront.jpg" width=250 height=200 alt="">
<h2>BMW</h2>
<h3>3 Series</h3>
<p>2012</p>
<p></p>
</article>

`


    populateMarci(marciUnice(cars));


    let yearStart = document.querySelector('.minvalue')


    yearStart.value = anMic(cars);

    yearStart.min = anMic(cars);

    yearStart.max = anMare(cars);

    let yearFinish = document.querySelector('.maxvalue')


    yearFinish.value = anMare(cars);

    yearFinish.min = anMic(cars);

    yearFinish.max = anMare(cars);

    populateCards(cars);

    let select = document.querySelector('#cars');

    select.addEventListener("change", () => {



        let filter = filterByMarca(cars, select.value);
        populateCards(filter, cars);

    })

}



function populateMarci(arr) {

    let marci = document.querySelector('#cars');

    let text = "";
    for (let i = 0; i < arr.length; i++) {

        text += `
      <option value="sass">${arr[i]}</option>
   
        `
    }

    text += ` </select><br><br>
    </div>`


    marci.innerHTML = text;

}




//functie ce filtreaza dublurile din marci

function marciUnice(arr) {


    let marci = [];

    for (let i = 0; i < arr.length; i++) {
        if (marci.includes(arr[i].marca) == false) {
            marci.push(arr[i].marca);
        }
    }

    return marci;

}


setAutoturisme();


function anMic(arr) {

    let minValue = 10000000;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].year < minValue) {

            minValue = arr[i].year;
        }
    }

    return minValue;
}

function anMare(arr) {

    let maxValue = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].year > maxValue) {
            maxValue = arr[i].year
        }
    }

    return maxValue;
}

function populateCards(arr) {

    //etap1 selectam tabelul

    let cards = document.querySelector('.card');


    let text = ``;

    for (let i = 0; i < arr.length; i++) {

        text += `    <article class="card">
        <img src="../photos/3seriesfront.jpg" width=250 height=200 alt="">
        <h2>${arr[i].marca}</h2>
        <h3>${arr[i].year}</h3>
        <p>${arr[i].model}</p>
        <p>${arr[i].vin}</p>
    </article>`
    }



    cards.innerHTML = text;


}

function filterByMarca(arr, marca) {

    let masFiltrate = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].marca == marca) {

            masFiltrate.push(arr[i])

        }
    }

    return masFiltrate;
}