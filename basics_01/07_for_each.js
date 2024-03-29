
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
  
// when i use (item , index ,and arr ) add in console (js ,0,all arry value)
// function printme(item , index , arr){
//     console.log(item , index , arr);
// }
// coding.forEach(printme)

// arraow call back function
//  coding.forEach((item , index , arr) => {
//  console.log(item,index,arr);
//  })




//use array object in for each
\
 const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "ruby",
        languageFileName: "rB"
    },
    
    {
        languageName: "cpp",
        languageFileName: "c++"
    },
    {
        languageName: "css",
        languageFileName: "Case cading style sheets"
    },
 ]


 mycoding.forEach( (item) =>{
    console.log(item.languageFileName)
    console.log(item.languageName)
 })

