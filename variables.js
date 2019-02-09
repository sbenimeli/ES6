/*
Keeping up with the Javascritps - Part1: ES6
Homework Assignment #2: Variables and constants
Author: Salvador Benimeli
Date: 09/02/2019
*/

//------------------------------------------------
// Hoisting behavior
//------------------------------------------------

/* Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before 
it has been declared.*/


console.log("myVariable = " + myVariable); //myVariable is undefined
var myVariable =5;

/*Because of hoisting, y has been declared before it is used, 
but because initializations are not hoisted, the value of y is undefined.*/

//The snipped above is the same as:
//var myVariable;
//console.log("myVariable = " + myVariable);
//myVariable = 5;

//------------------------------------------------
// Main differences between let, const and var
//------------------------------------------------


//-------------------------------
// var keyword examples
//-------------------------------
/* JavaScript is a programming language with the global scope as key, where the default scope is passed by reference 
also by default. This means that a variable declared with the VAR keyword outside a function is a global variable and 
is passed by reference to their descendants:.

In the following snippet the varible i has been declared as a global variable that it's values is overwritten
inside the function foo1(). In this case we can say that the scope of the varible i is global*/

console.log("Example 1 --------------------");
console.log();

var i = "global";
function foo1() {
    i = "local";
    console.log("Function foo1() -> The value of the variable i is: "+i); // local
}
foo1();
console.log("Outise foo1() -> The value of the variable i is: "+i); // local

/* If we declare the i variable with the var keyword inside the foo2() function then it's scope its local to the function where
it has been declared*/

console.log("Example 2 --------------------");
console.log();

var i = "global";
function foo2() {
    var i = "local"; // Otra variable local solo para esta función
    console.log("Function foo2() -> The value of the variable i is: "+i); // local
}
foo2();
console.log("Outise foo2() -> The value of the variable i is: "+i); // global

/* A varible, declared exclusively inside a function, it does not exist outised its scope. For example:*/
console.log("Example 3 --------------------");
console.log();
function foo3(){
    var aVariable = "local";
    console.log("Function foo3() -> The value of the variable aVariable is: "+aVariable);
}
/*console.log("Outise foo3() -> The value of the variable aVariable is: "+aVariable);
ReferenceError: aVariable is not defined
    at Object.<anonymous> (/Users/silmes/IdeaProjects/Pirple/ES6/variables.js:50:73)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)*/

//-------------------------------
// let keyword examples
//-------------------------------
/*let keyword allows us to declare variables with a block scope. For example in the followig snippet, variable k is declared
// in the main function and thus, its scope is global:*/
console.log("Example 4 --------------------");
console.log();
let k = 0; // i =0
function foo4(){
    k = 1;
    let j = 2;
    if(true){
        console.log(k); // i = 1
        console.log(j); // j = 2
    }
}
foo4();

/* In the following snippet the t variable is declared inside a block which is also within a function*/
console.log("Example 5 --------------------");
console.log();

function foo5() {
    let t = 0;
    if(true) {
        let t = 1; // this variable is different from the previous one. Its scope it's the if block only.
        console.log(t); // 1
    }
    console.log(t); // 0
}
foo5();

//---------------------------------
// const keyword
//---------------------------------

/* Consts defines a constant and its scope is the same as let. With const you can't reassign it's value to a new value, but 
in case of objets or arrays, it is allowed to change the value of its elements.

const kk = 1;
kk = 2;  TypeError: Assignment to constant variable

const user ={name: 'Juan'};
user.name = 'Manolo';
console.log(user.name) //Manolo
*/