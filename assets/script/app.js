let yearSelected = document.getElementById("year")
let monthSelected = document.getElementById("month")
let daySelected = document.getElementById("day")

let btnSubmit = document.getElementById("submit");

let today = new Date()



btnSubmit.addEventListener("click", () => {
    let yearUpdated = Number(yearSelected.value)
    let monthUpdated = Number(monthSelected.value)
    let dayUpdated = Number(daySelected.value)
    
    if(dayUpdated <= 31 && monthUpdated <= 12 && yearUpdated <= 2024) {
        let dateTotal = dayUpdated + "/" + monthUpdated + "/" + yearUpdated
        console.log(dateTotal)
    } else {
        console.log("error")
    }
    calculaIdade(yearUpdated, monthUpdated, dayUpdated)
})