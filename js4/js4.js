let arr = [];
let output = "";
function number() {
    let number = document.getElementById("number").value;
    if (number >= 0 && number <= 9 && arr.length <= 9) {
        arr.push(number);
        document.getElementById("number").value = "";
    } else if (number < 0 || number > 9 || number === "") {
        alert("Please enter a number between 0-9");
        document.getElementById("number").value = "";
    } else if (arr.length > 9) {
        alert(
            "You've already enterd 10 digits, Hit the process button to see results"
        );
    }
    console.log(typeof arr[0]);
}
function process() {
    if (arr.length < 10) {
        alert(`Please enter 10 digits. digits entered: ${arr.length}`);
    } else {
        output = `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;
        document.getElementById("output").innerHTML = output;
    }
}

// Adding eventlistener on enter in input feild
document.getElementById("number").addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
        document.getElementById("number_enter").click();
    }
});
