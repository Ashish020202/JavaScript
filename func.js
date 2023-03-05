
// loops
const prompt = require("prompt-sync")();
let trophywon ={
    ash:4,
    lov:6,
    lovely:9,
    jay:7
}

for (let i =0; i<Object.keys(trophywon).length;i++){
    console.log(Object.keys(trophywon)[i]+ " : " + trophywon[Object.keys(trophywon)[i]]);
}

// for in loop

for(let key in trophywon){
    console.log(key + ":" + trophywon[key]);
}

// while loop

// program for writing correct name
 let cname= "ashish";

//  let j;
//  while(j!=cname){
    // console.log("try");
    //  j=prompt("enter a name");
     
//  }
//  console.log("correct");




function sum(a,b){
      let c=a+b;
      return c;
} 

let y = sum (3,4);
console.log(y);

// arrow func

const sum2 = (a,b)=>{
    let c= a+b;
    return c;
}
let x=sum2(5,6);
console.log(x);

const mean = (a,b,c,d,e)=>{
     let y = (a+b+c+d+e)/5;
     return y;
}
 
let z= mean(2,3,4,5,6);
console.log(z);