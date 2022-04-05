console.log(document.querySelector("#projects .cItem"))

//Projekty

//stała allCIItem, przechowująca tablicę ("el1, el2") wszystkich klas .cItems w #projects

const allCIItem = document.querySelectorAll( "#projects.cItem");
// wyciagamy każdy .Items z osobna

allCIItem.forEach(  cItem => {
    // kazdemu po kliknięciu dajemy funkcje strzałkowa

    cItems.onclik = () => {
    // cItem.addEventListner ("mouseover",() => {
        //usuń klasę .active ze wszystkich elelmentów 
    allCIItem.forEach( cItem2 => {
        cItem2.classList.remove("active")
})

// do kliknietego elementu dopisz klasę "".active"
cItem.classList.add ("active")
    }

// )// (jeśli używasz event listner)
})