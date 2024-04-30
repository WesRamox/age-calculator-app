let resultYears = document.getElementById("resultYears")
let resultMonths = document.getElementById("resultMonths")
let resultDays = document.getElementById("resultDays")

let btnSubmit = document.getElementById("submit");

function ageCalculator() {
    let yearSelected = document.getElementById("year").value
    let monthSelected = document.getElementById("month").value
    let daySelected = document.getElementById("day").value

    if(yearSelected != "" && monthSelected != "" && daySelected != "") {
        var date = new Date();
        var currentDay = date.getDate();
        var currentMonth = 1 + date.getMonth();
        var currentYear = date.getFullYear();
        var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (daySelected > currentDay) {
            currentDay = currentDay + month[currentMonth - 1];
            currentMonth = currentMonth - 1;
        }

        if (monthSelected > currentMonth) {
            currentMonth = currentMonth + 12;
            currentYear = currentYear - 1;
        }

        var dResult = currentDay - daySelected;
        var mResult = currentMonth - monthSelected;
        var yResult = currentYear - yearSelected;

        resultYears.innerHTML = yResult;
        resultMonths.innerHTML = mResult;
        resultDays.innerHTML = dResult;
    } else {
        console.error()
    }
}

btnSubmit.addEventListener("click", () => {
    ageCalculator();
})

ageCalculator();