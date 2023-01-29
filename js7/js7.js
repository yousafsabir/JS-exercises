let num;
let mul;
document.querySelector("#process").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#preview").innerHTML = "";
    num = document.querySelector("#num").value;
    mul = document.querySelector("#mul").value;
    process(num, mul);
});

document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector("#num").value = "";
    document.querySelector("#mul").value = "";
    document.querySelector("#preview").innerHTML = "";
});

function process(num, mul) {
    for (let i = 1; i <= mul; i++) {
        let row = document.createElement("tr");
        let number = document.createElement("td");
        let X = document.createElement("td");
        let multiple = document.createElement("td");
        let equal = document.createElement("td");
        let result = document.createElement("td");
        number.innerHTML = num;
        X.innerHTML = "X";
        multiple.innerHTML = i;
        equal.innerHTML = "=";
        result.innerHTML = num * i;
        row.appendChild(number);
        row.appendChild(X);
        row.appendChild(multiple);
        row.appendChild(equal);
        row.appendChild(result);
        document.querySelector("#preview").appendChild(row);
    }
}
