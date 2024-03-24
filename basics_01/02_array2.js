


const marvel_heros =["Thor" , "Ironman" , "Spiderman"];

const dc_heros =["superman"," flash","batman"];

// marvel_heros.push(dc_heros); when i use push not concat 
 
// const allheros = marvel_heros.concat(dc_heros); // concat also not work for concatination but when i make a variable then work
// console.log(allheros);


// use spread Operator //  spread variable  concat with spread (...)
// const spreadheros = [... marvel_heros, ... dc_heros];
// console.log(spreadheros);

// Combine array inside array
const  another_array = [1,2,[3,4,5,6],7,8,9];
const arrayInArray =  another_array.flat(Infinity);

console.log(arrayInArray);