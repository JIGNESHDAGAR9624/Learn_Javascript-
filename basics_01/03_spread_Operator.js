// const firstArray = [5, 10, 15, 20, 25, 30]
// const newArray=[...firstArray, 35, 40]



// function  getbothArray(getarray){
//     return getarray[2];
// }

// console.log(getbothArray(firstArray))


const  firstval = ["jignesh" , "anand" , "harsh"]
const  secondval = ["adity" , "daksh" , "karan"]
const  thirdval = ["utsav" , "ayan" , "arjun"]


const mixvalue = [...firstval,...secondval,...thirdval]

console.table(mixvalue)
console.log(mixvalue)