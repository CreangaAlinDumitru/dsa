function populateTable(arr) {
    let table = document.querySelector('.bodytable');

    let text = ``;

    for (let i = 0; i < arr.length; i++) {

        text += ` <tr>
        <th scope="row" id="a"><span class="title">${arr[i].title}</span></th>
        <td id="a">${arr[i].author}</td>
        <td id="a">${arr[i].genre}</td>
        <td id="a">${arr[i].year}</td>
    </tr>`
    }


    table.innerHTML = text;

}

//functie ce primeste ca parametru numele cartii si un arr si returneaza cartea cu titlul respectiv

function returnBook(arr, titlu) {

    for (let i = 0; i < arr.length; i++) {

        console.log(arr[i].title);
        if (arr[i].title == titlu) {

            return arr[i];
        }
    }

    return "";


}


function createHome() {


    let conatiner = document.querySelector(".container");

    conatiner.innerHTML = `

    
    <h1> Books </h1>

    <button type="button" class="btn1"> Create New Book</button><br>
    <button type="button" class="btn4"> Sort by year </button>
    <button type="button" class="btn5"> Sort by genre </button>
    <button type="button" class="btn6"> Sort by author </button>

    <hr>

    <table>
        <thead>
            <tr class="options">
                <th scope="col" id="o"> Title </th>
                <th scope="col" id="o"> Author </th>
                <th scope="col" id="o"> Genre </th>
                <th scope="col" id="o"> Year </th>
            </tr>
        </thead>
        <tbody class="bodytable">
            <tr>
                <th scope="row" id="ab" class=""><span> Opera </span></th>
                <td id="a"> Alex </td>
                <td id="a"> Roman </td>
                <td id="a"> 1532 </td>
            </tr>
            <tr>
                <th scope="row" id="ab"><span> Opera </span></th>
                <td id="b"> Alex </td>
                <td id="b"> Roman </td>
                <td id="b"> 1532 </td>
            </tr>
        </tbody>
    </table>
<hr>
</div>
    
    
    
    `



    populateTable(data);

    let btn1 = document.querySelector('.btn1')

    btn1.addEventListener("click", () => {
        createNewBook();
    })



    let btnYear = document.querySelector('.btn4');
    let btnGenre = document.querySelector('.btn5');
    let btnAuthor = document.querySelector('.btn6');


    let body = document.querySelector('.bodytable');


    console.log(body);

    body.addEventListener("click", (e) => {

        let obj = e.target;

        if (obj.classList.contains("title")) {


            let titluApsat = obj.textContent;



            console.log(titluApsat);


            let cartea = returnBook(data, titluApsat);

            console.log(cartea);

            updateBook(cartea);

        }



    })



    btnYear.addEventListener("click", () => {


        sortByYear(data);

        populateTable(data);



    })

    btnGenre.addEventListener("click", () => {


        sortByGenre(data);
        populateTable(data);


    })

    btnAuthor.addEventListener("click", () => {


        sortByAuthor(data);
        populateTable(data);


    })




}

function createNewBook() {

    let container = document.querySelector(".container");

    container.innerHTML = ` 
    
    <h2> New Book</h2>
    <form class="forms">
        <label for="title" id="l"> TITLE </label>
        <input type="text" id="i1" class="title"><br><br>

        <label for="title" id="l"> Author </label>
        <input type="text" id="i2" class="author"><br><br>

        <label for="title" id="l"> Genre </label>
        <input type="text" id="i3" class="genre"><br><br>

        <label for="title" id="l"> Year </label>
        <input type="text" id="i4" class="year"><br><br>

        <button type="button" class="btn2"> Create New Book </button><br>
        <button type="button" class="btn3"> Cancel </button><br>
    </form>
</div>`


    let book = {

        title: "",
        author: "",
        genre: "",
        year: "",

    }

    let btncancel = document.querySelector('.btn3');

    btncancel.addEventListener("click", () => {

        createHome();


    })

    let forms = document.querySelector(".forms");

    forms.addEventListener("input", (e) => {


        let trigger = e.target;


        if (trigger.classList.contains("title")) {



            book.title = trigger.value;


        }
        if (trigger.classList.contains("author")) {


            book.author = trigger.value;


        }
        if (trigger.classList.contains("genre")) {

            book.genre = trigger.value;


        }
        if (trigger.classList.contains("year")) {

            book.year = trigger.value;
        }


        console.log(book);





    })



    let addBook = document.querySelector('.btn2');
    addBook.addEventListener("click", () => {



        data.push(book);
        createHome(data)


    })
}

function sortByYear(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i].year > arr[j].year) {

                let aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }

        }

    }

}


function sortByGenre(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i].genre > arr[j].genre) {

                let aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }

        }

    }

}

function sortByAuthor(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i].author > arr[j].author) {

                let aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }

        }

    }

}

function updateBook(book) {

    let container = document.querySelector(".container");

    container.innerHTML = `  <h2> Update a book</h2>

    <section class="forms">
        <label for="title" id="l"> TITLE </label>
        <input type="text" id="i1" placeholder=${book.title}><br><br>

        <label for="title" id="l"> Author </label>
        <input type="text" id="i2"placeholder=${book.author}><br><br>

        <label for="title" id="l"> Genre </label>
        <input type="text" id="i3" placeholder=${book.genre}><br><br>
        <label for="title" id="l"> Year </label>
        <input type="text" id="i4" placeholder=${book.year}><br><br>

        <button type="button" class="btn7"> Update Book </button><br>

        <button type="button" class="btn8"> Cancel </button><br>

        <button type="button" class="btn9"> Delete Book </button><br>
    </section>


</div>`




}