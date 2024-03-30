// for each loop desent return value
// const coding = ["js" , "ruby" , "py" , "Android" , "java"]

// const val = coding.forEach((item) =>{
//     // console.log(item);   

// })

// console.log(val); 



const mynums = [1,2,3,4,5,6,7,8,9]


// const newnums = mynums.filter(function(item){
//     console.log(item)
// })

// when i use this arrow function return value show after 4 all 
// const newnums = mynums.filter((num) => num > 4)
// console.log(newnums);

// when i use inside object add condtion write return
// const newnums = mynums.filter((num) => {return num > 4})
// console.log(newnums);

// const newnums =[]

// mynums.forEach((num) => {
//     if(num > 4){
//         newnums.push(num)
//     }
// })
// console.log(newnums);



const books = [
    {
    title:`Book one` , genre: `Fiction` , publish: 1981, edition: 2004
     },
    {
        title:`Book two` , genre: `Non-Fition` , publish: 2001, edition: 2013 
    },
    {
        title:`Book three` , genre: `Fiction` , publish: 1999, edition: 2004 
    },
    {
        title:`Book four` , genre: `Non-Fition` , publish: 1800, edition: 2000 
    },
    {
        title:`Book five` , genre: `Non-Fition` , publish: 2004, edition: 2017 
    },
    {
        title:`Book six` , genre: `Fiction` , publish: 1981, edition: 219 
    },

]


const userBooks = books.filter((bookitem) => bookitem.genre == `Fiction`)

console.log(userBooks);