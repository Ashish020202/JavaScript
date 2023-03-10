// array.map(function(currentValue, index, arr), thisValue)
// filter map return array reduce value

let arr = [2,5,6,7];
let a = arr.map((value , index ,array)=>{
    // console.log(value,index,array);

    return value+index;
})
// console.log(a);

// filter method 

let name = ["ash","sonu","hack"];
let b =name.filter((b)=>{
    return b.length>3;
})
//  console.log(b);

//  reduce 

let aray =[2,3,4,5,6,7];
let reduce = arr.reduce((a1,a2,a3)=>{
    return a1+a2+a3;
})
// console.log(reduce);


// More play

let newarr = [4,6,8,9];

function binary(x){
    return x.toString(2);
}

const output = newarr.map(binary);
// console.log(output);

const multiple = ((x)=>{
    return 4*x;
})
let output2 = newarr.map(multiple);
// console.log(output2);

// filter

const even = ((z)=>{
   return z%2==0;
})
let output3 = newarr.filter(even);
// console.log(output3);

const output4 =newarr.filter((p)=> p<8);
// console.log(output4);


// reduce

const sum = arr.reduce((accum,curr)=>{
    accum = accum+curr;
    return accum;
},0);
// console.log(sum);

const max = newarr.reduce((maxi,curr)=>{
    if (curr>maxi){
        maxi = curr;
    }
    return maxi;
},0)
// console.log(max);

const player = [
    {name : "rohit", status : "hitman",age: 35},
    {name : "virat", status: "goat", age: 35},
    {name : "dhoni", status: "legand",age: 40},
];

const desc = player.map((x)=>{
    return x.name+" "+x.status;
})
console.log(desc);

const output5 = player.reduce((acc,cur)=>{
      if(acc[cur.age]){
        acc[cur.age]= ++acc[cur.age];
      }
      else{
        acc[cur.age] = 1;
      }
      return acc;
},{});
console.log(output5);


// channing of mfr

// output of the playr whose age is less thn 40

const output6 = player.filter((plyr)=>plyr.age<40).map((plyr)=>plyr.name)

console.log(output6);
