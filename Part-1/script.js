// Find the culprit and invoke the alert
alert("I'm invoked!"); //the external script file should be properly named.

alert("I'm JavaScript!");
alert("Hello");
alert("Hi"); // this line is not having semicolon
// We use semicolen to mention the completion of line(or)To mention the end of statement.
alert(`Wor 
 ld`); // Should use `` for multi-line strings
alert(3 + 1 + 2); // For integer number type we do no need to use `` for multi line

// Fix the below to alert Guvi geek
let admin = 9,
  fname = 10.5;
// Here we re-assign the fname "guvi"  from 10.5.
fname = "Guvi";
lname = "geek";
admin = fname + lname; //"Guvi"+"geek" = "Guvi geek"
alert(admin); // "Guvi geek"

// Fix the below to alert hello Guvi geek

let f_name = 10.5;
// Here we re assign the f_name from 10.5 to "Guvi"
f_name = "Guvi";
l_name = "geek";
let names = f_name + l_name;
alert(`hello ${names}`); // Here we using the templete literals to mention the value of name.

// Fix the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
alert(+a + +b); // Here we are pareInting the numbers to get the sum of two numbers.

//If you run the below scritpt you will get “Code is Blasted”
//Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
var a = +"2" > +"12"; // We have to convert this string into integer
// hence by that var a which holding the condition that that becoume a false to get the code diffused.
//Don't touch below this
if (a) {
  console.log("Code is Blasted");
} else {
  console.log("Diffused");
}

// How to get the success in console
let b = null;
let a = prompt("Enter a number?") === b;
// variable A = null to get the output as a sucess in this code.
// To make the condition false.
// If condition got false then else statement will get executed.
//Don't modify any code below this
if (a) {
  console.log("OMG it works for any number inc 0");
} else {
  console.log("Success");
}

// How to get the correct score in console.
let value = prompt("How many runs you scored in this ball");
// The nature of prompt is to get the input in a string value.
// But here according to our condition here we have to convert it into integer value to get the correct output.
if (+value === 4) {
  console.log("You hit a Four");
} else if (+value === 6) {
  console.log("You hit a Six");
} else {
  console.log("I couldn't figure out");
}

//Fix the code to welcome the Employee

let login = "Employee";
let message = login == "Employee";
if (message) {
  console.log(`Greetings ${login}`);
}

// Fix the code to welcome the boss
let message;
if (null || 2 || undefined) {
  let message = "welcome boss";
  console.log(message); // Here i made a change
} else {
  let message = "Go away";
  console.log(message); // Here i made a change
}

// Fix the code to welcome the boss : 2.
let message;
let lock = 0; // Here we made a change
//Dont change any code below this
if (null || lock || undefined) {
  message = "Go away";
} else {
  message = "welcome";
}
console.log(message);

// Fix the code to welcome the boss:3
let message;
let lock = 0; // Here i made a change
//Dont change any code below this
if ((lock && " ") || undefined) {
  message = "Go away";
} else {
  message = "welcome";
}
console.log(message);

//let i = 3;
while (i) {
  console.log(i--); // Here i made a change.
}

// Change the code to print 1 to 10 in 4 lines.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Change the code to print even numbers
for (let num = 2; num <= 20; num += 2) {
  console.log(num);
}

//let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`); //Here i made a change.
}

// Fix the code to disarm the bomb
let countdown = 100;
while (countdown > 0) {
  countdown--;
}
if (countdown == 100) {
  // Here i made a change
  console.log("bomb triggered");
} else {
  console.log("disarm");
}

// Whats the msg printed and why?
var lemein = "0"; // The value of lemein is string
var lemeout = 0; // The value of lemeout is Integer
var msg = "";
if (lemein) {
  // Were the string ("0") inside the condition become true
  msg += "hi"; //  Hence this block gets activated
}
if (lemeout) {
  // Were the Integer (0) inside the condition become False.
  msg += "Hello";
}
console.log(msg); // Output is Hi.

// Whats the msg printed and why? Guess you answer before running it.
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
  msg += "hi";
}
if (lemeout) {
  msg += "Hello";
}
console.log(msg); // Output is hi.Because the string inside the condition will be resulted as True
// Hence the condition won't accept the string ("0") as a false.
