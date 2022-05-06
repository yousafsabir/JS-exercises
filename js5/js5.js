let year;
let month;
let day;
let isLeap = 28;
let lastDay;

// ---------------Getting Data from DOM

function getData() {
    // getting year
    if (year === undefined) {
        year = parseInt(document.getElementById("input").value);
        if (year % 4 === 0) {
            isLeap = 29;
        }
        document.getElementById("input").value = "";
        document.getElementById("label").innerHTML = `Enter Months from 1-12`;
    }

    // getting month
    if (
        month === undefined &&
        year !== undefined &&
        document.getElementById("input").value !== ""
    ) {
        month = parseInt(document.getElementById("input").value);
        if (month > 12 || month < 1) {
            alert("Please Enter from 1-12");
            document.getElementById("input").value = "";
            month = undefined;
        } else if (month !== undefined) {
            lastDay = lastDayFunc(month);
            document.getElementById(
                "label"
            ).innerHTML = `Enter day from 1-${lastDay}`;
            document.getElementById("input").value = "";
        }
    }

    // getting day
    if (
        month !== undefined &&
        year !== undefined &&
        document.getElementById("input").value !== ""
    ) {
        day = parseInt(document.getElementById("input").value);
        if (day > lastDay || day < 1) {
            alert(`Please Enter from 1-${lastDay}`);
            document.getElementById("input").value = "";
            day = undefined;
        } else {
            document.getElementById("input").value = "";
            document.getElementById("label").innerHTML =
                "Now hit the process button to see results";
            document.getElementById("input").disabled = true;
        }
    }

    console.log(year);
    console.log(month);
    console.log(day);
}

function lastDayFunc(month) {
    switch (month) {
        case 1:
            return 31;

        case 2:
            return isLeap;

        case 3:
            return 31;

        case 4:
            return 30;

        case 5:
            return 31;

        case 6:
            return 30;

        case 7:
            return 31;

        case 8:
            return 31;

        case 9:
            return 30;

        case 10:
            return 31;

        case 11:
            return 30;

        case 12:
            return 31;

        default:
            return "enter month";
    }
}

// ----------------Processing Data
function process() {}
