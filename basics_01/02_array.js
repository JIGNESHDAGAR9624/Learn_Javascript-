let myarray = [1,2,3,4,5,6,7,8];

// console.log(myarray[3]);
// console.log(myarray[4]);
// console.log(myarray[5]);

const arr = [1 ,2 ,3,4,5];
// arr.push(9);
// arr.pop();
// arr.unshift(0); //  add value in first position
// arr.shift(); // remove value in first position
// arr.includes(4) // already vale have or note
// console.log(arr); // for add last value
// console.log(arr.indexOf(7));//if value already have then print or if not have a value in array then print -1 




const newarr = arr.join(); // convert  value to string

//console.log(typeof newarr); // which type of array 

// slice and splice
console.log("A" , myarray);
const myn1 = myarray.slice(1,3);
console.log(myn1);

//splice
console.log("B" , myarray);
const myn2 = myarray.splice(1,3);
console.log(myn2);
