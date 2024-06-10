// Button color change
document.getElementById("colorButton").addEventListener("click", function() {
    var color = getRandomColor();
    this.style.backgroundColor = color;
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Greeting message based on time
function displayGreeting() {
    var today = new Date();
    var hour = today.getHours();
    var greeting;

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    alert(greeting);
}
// Calculator
function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("result").innerHTML = "Result: " + sum;
}