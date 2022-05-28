let btn = document.querySelector(".sort-pret");
let btnBrand = document.querySelector(".sort-brand");

let sel = document.querySelector(".cars-select");

populateTable(masini);
populateInput(masini);





btn.addEventListener("click", () => {


    sortByPrice(masini);
    populateTable(masini);



})


btnBrand.addEventListener("click", () => {

    sortByBrand(masini);
    populateTable(masini);
})


sel.addEventListener("change", () => {



    let fil = filterByMarca(masini, sel.value);
    populateTable(fil);

})