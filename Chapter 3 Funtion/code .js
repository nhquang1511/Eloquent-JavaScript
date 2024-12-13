//====================Defining a function========
// method 1
const square = function (x) {
    return x * x;
};
console.log(square(12));
// → 144

// method 2
const makeNoise = function () {
    console.log("Pling!");
};
makeNoise();
// → Pling!

// method 3
const roundTo = function (n, step) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};
console.log(roundTo(23, 10));
// → 20

//===========Nested scope============
const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};// this is called lexical scoping

//============Arrow functions============
const roundTo1 = (n, step) => {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};
const square1 = (x) => { return x * x; };
const square2 = x => x * x;

const horn = () => {
    console.log("Toot");
};

//================Optional Arguments============
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// → 16
function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}
console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5

//================Closure==============
function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// → 10