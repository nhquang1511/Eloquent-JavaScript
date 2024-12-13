//========BINDINGS=============
let caught = 5 * 5;//To catch and hold values, JavaScript provides a thing called a binding, or variable.
const l = 10;
//============THE ENVIRONMENT===================
/*the collection of binding and their values that exist at a given time is called the environment*/

//=================FUNCTION====================
prompt("enter passcode")// called funtion have side effect not return value
//=================THE CONOSLE.LOG FUNCTION==========
console.log()

//=====================RETURN VALUES======
console.log(Math.max(2, 4));
// → 4

//============CONTROL FLOW==============

if (1 + 1 == 2) console.log("It's true");
// → It's true

let num = Number(prompt("Pick a number"));
if (num < 10) {
console.log("Small");
} else if (num < 100) {
console.log("Medium");
} else {
console.log("Large");
}

//============WHILE AND DO LOOPS================
let number = 0;
while (number <= 12) {
console.log(number);
number = number + 2;
}
// → 0
// → 2
// … etcetera
let result = 1;
let counter = 0;
while (counter < 10) {
result = result * 2;
counter = counter + 1;
}
console.log(result);
// → 1024

let yourName;
do {
yourName = prompt("Who are you?");
} while (!yourName);
console.log("Hello " + yourName);

// =================INDENTING CODE ===========
if (false != true) {
    console.log("That makes sense.");
    if (1 < 2) {
    console.log("No surprise there.");
    }
}

//================FOR LOOPS===============
for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
    }
    // → 0
    // → 2
    // … etcetera
//===============BREAKING OUT OF A LOOP==========
for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}
// → 21
//===============Updating bindings succinctly=====
counter = counter + 1;
counter += 1;
counter ++;

//==================Dispatching on a value with switch==
switch (prompt("What is the weather like?")) {
    case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
    case "sunny":
    console.log("Dress lightly.");
    case "cloudy":
    console.log("Go outside.");
    break;
    default:
    console.log("Unknown weather type!");
    break;
    }
//============Comments========
/* */


