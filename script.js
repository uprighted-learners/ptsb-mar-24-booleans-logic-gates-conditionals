/*
    Using null with conditionals
*/

let profilePic = null;

if (profilePic === null) {
    console.log("Show Default Picture");
} else {
    console.log("Show Account Picture");
}

// == Compares only the value
console.log("==", "5" == 5);

// === Compares the value & data type
console.log("===", "5" === 5);

// !== Compares the value and data type
console.log("5" !== 5);

// != Compares the value
console.log("5" != 5);

/*
    Using if Statements to set up conditions
*/
let age = 17;
if (age < 18) {
    console.log("Sorry, you can't vote yet.");
}

/*
    Using else statements
    vs
    NOT using else statements
*/
let value = true;
if (value) {
    console.log("This is true");
} else {
    console.log("This is false");
}

// vs

if (value) {
    console.log("This is true");
}
console.log("This is false");


/*
    *** EXTRA ***

    else if - used to add multiple conditions to consider

    if
    else if
    else
*/
let grade = 80;
if (grade >= 90) {
    console.log("You got an A");
} else if (grade >= 80) {
    console.log("You got a B");
} else if (grade >= 70) {
    console.log("You got a C");
} else if (grade >= 60) {
    console.log("You got a D");
} else {
    console.log("You need to retake this")
}

/*
    Conjunction: AND (&&)
*/

// true AND true => true
if (true && true) {
    console.log("I ran");
} else {
    console.log("I didn't run :(");
}

// true AND false => false
if (true && false) {
    console.log("I ran");
} else {
    console.log("I didn't run :(");
}

// false AND true => false
if (false && true) {
    console.log("I ran");
} else {
    console.log("I didn't run :(");
}

// false AND false => false
if (false && true) {
    console.log("I ran");
} else {
    console.log("I didn't run :(");
}

/*
    Conjunction: OR (||)
*/

// true || true => true
if (true || true) {
    console.log("I ran");
} else {
    console.log("I didn't run :(");
}

// true || false => true
if (true || false) {
    console.log("I ran");
} else {
    console.log("I didn't run :(");
}

// false || true => true
if (false || true) {
    console.log("I ran");
} else {
    console.log("I didn't run :(");
}

// false || false => false
if (false || true) {
    console.log("I ran");
} else {
    console.log("I didn't run :(");
}

/*
    Conjunction: NOT (!)
*/

// !true => false
if (!true) {
    console.log("I ran");
} else {
    console.log("I didn't run :(");
}

// !false => true
if (!false) {
    console.log("I ran");
} else {
    console.log("I didn't run :(");
}

// Result: "I ran"
if ( !((8 < 6) && (3 < 5)) || (4 < 9) ) {
    console.log("I ran");
} else {
    console.log("I didn't run :(");
}

/*

    IF statement
    vs
    SWITCH statement

*/

const month = "January";

if (month === "January") {
  console.log("It's January");
} else if (month === "February") {
  console.log("It's February");
} else if (month === "March") {
  console.log("It's March");
} else {
  console.log("It's another month");
}

/*
    SWITCH statement
    Reminder: Don't forget to include 'break' at the end of each case code block
*/
switch (month) {
    case 'January':
        console.log("It's January");
        break;
    case 'February':
        console.log("It's February");
        break;
    case 'March':
        console.log("It's March");
        break;
    default:
        console.log("It's another month");
}

