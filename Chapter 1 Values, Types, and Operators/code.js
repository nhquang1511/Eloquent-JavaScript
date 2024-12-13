// NUMBERS (for expoent(so mu))
console.log(10e3)// 10 * 10^3

// SPECIAL NUMBERS
console.log(Infinity)
console.log(-Infinity)
console.log(Infinity-Infinity)
console.log(0/0)

// STRINGS - quotes(dau trich dan)
console.log('quotes')
console.log("double quotes")
console.log(`backticks`)

console.log(`a backslash (\)`)

console.log(`newlines\nnewlines`)//This is called escaping the character.

console.log(`A newline character is written like \"\\n\".`)

console.log("con"+"cat"+"e"+"nate")//concatenate

console.log(`${2+2}`)// temlate literal

//========UNARY OPERATORS=================
console.log(typeof 4.5)
//-> number
console.log(typeof "x")
//-> string
console.log(-(10))
//->10

//==========BOOLEAN VALUES===========
console.log(true)
console.log(false)
//==========COMPARISON===========
console.log(3>2)
//=> true
console.log(3<2)
//->false
console.log("Aardvark" < "Zoroaster")
//=> true
console.log("Garnet" != "Ruby")
// → true
console.log("Pearl" == "Amethyst")
// → false
//exception NaN
console.log(NaN == NaN)//NaN is a nonsensical computation
// → false

//=================LOGICAL OPERATORS===========
console.log(true && false)
// → false
console.log(true && true)
// → true
console.log(false || true)
// → true
console.log(false || false)
// → false
console.log(true ? 1 : 2);// called ternary operetor
// → 1
console.log(false ? 1 : 2);//called ternary operetor
// → 2

//======================EMPTY VALUES===============
null
undefined
// both null and undefined are the same
//==============AUTOMATIC TYPE CONVERSION==========
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true
//============SHORT-CIRCUITING OF LOGICAL OPERATORS=====
// they will return either the original left-hand value or the right-hand value.
//the || return right only left is false
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
console.log(0||-1)
// -> -1
console.log(""||"!?")
// -> "!?"
// the ?? return right only left is null or undefined
console.log(0 ?? 100);
// → 0
console.log("" ?? 100);
// → ""
console.log(null ?? 100);
// → 100
console.log(undefined ?? 100);
// → 100

// The && operator works similarly but the other way around
console.log(false && 6)// short-circuit evaluation

