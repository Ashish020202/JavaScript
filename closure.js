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
        // console.log(b);
    }
    return y;
}
// assigning a var for function z
var x = z();
// console.log(x);
// calling x
x();



// setTimeout + closure

// this closure 1st print ashish it doesnt wait for 3sec .
function S(){
    // func as a parameter
    // this func forms a closure and takes reference of ash
   setTimeout(function () {
    // console.log("ash");
   },3000);
//    console.log("ashish");
}
S();

function T(){
    // var doesnt create new copy so it give output as 7 always
    // let creates its own new copy every time so it gives 0 to 6;
    for (let i=0;i<7;i++){
        setTimeout(function(){
            // console.log(i);
        },i*1000);
    }
}
T();

// fixing problem using var 

function V(){
//    created new copy of x everytime it is called
        for (let i=0;i<7;i++){
            function close(x){
                setTimeout(function(){
                    console.log(x);
                },i*1000);
            }
            close(i)
        }
    
}
V()






