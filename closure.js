// Q)What is closure?
// A)The function bundled with its lexical environment closed to that function
// simply function + Lexical environment

// and closures have very special place in runtime environment

// The fun in JavaScript is you can assign a variable for a function and also you can pass function as a parameter even you can return the function in JavaScript!!

function x(){
    var a = 3;
    function y(){
        // console.log(a);
    }
    y();
}
x();

function z(){
    var b =7;
    function y(){
        console.log(b);
    }
    return y;
}
// assigning a var for function z
var x = z();
console.log(x);
// calling x
x();





