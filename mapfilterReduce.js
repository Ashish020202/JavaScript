// array.map(function(currentValue, index, arr), thisValue)
// filter map return array reduce value

let arr = [2,5,6,7];
let a = arr.map((value , index ,array)=>{
    console.log(value,index,array);

    return value+index;
})
console.log(a);

// filter method 

let name = ["ash","sonu","hack"];
let b =name.filter((b)=>{
    return b.length>3;
})
 console.log(b);

//  reduce 

let aray =[2,3,4,5,6,7];
let reduce = arr.reduce((a1,a2,a3)=>{
    return a1+a2+a3;
})
console.log(reduce);