
// for each loop
const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// callback function 
// coding.forEach( function (item) {
//     console.log(item)
// })

//Arrow callback function

// coding.forEach( (val) => {
//    console.log(val);
// })

function printme(item){
    console.log(item);
}
coding.forEach(printme)
