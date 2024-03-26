const user = {
    username: "jignesh",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to my website`);
        // console.log(this)  // this meanning call curent Context value like below

// {
//   username: 'jignesh',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
    }
}

// user.welcomeMessage()

//  user.username ="anand"// username changed
//  user.welcomeMessage()  // when i was change username succsessfuly changed


// function chai(){
//     let  name = "jignesh dagar"
//     console.log(this) // when i use  only this keyword  value is (predefine code) , when i use (this.name) value is same
//     //but when is use (`${username}`) function excute succsessfully
// }

// chai()


// const chai = function(){  this function is object function
//     let name = "jignesh dagar"    
//     console.log(this)
// }
// chai() // value is same as abow value



// const chai = () =>  { // This is Arrow Function  
//     let name = "jignesh dagar"    
//     console.log(`${name} , "welcome to my website"`)  // this arrow functio work properly for printing abow name
// }
// chai()   

// const chai = () =>  { // This is Arrow Function  
//     let name = "jignesh dagar"    
//     console.log( this.name, "welcome to my website")   // value is undefined
// }
// chai()  




// const addone = (add1 , add2) =>  {
//    return add1 + add2;
    
// }


// const addone = (add1 , add2)  =>  add1 + add2; //arraow function not use return for less  code 
     
// const addone = (add1 , add2)  =>  (add1 + add2);


const addone = (add1 , add2)  =>  ({username: "jignesh"}) // when i want to return  object , 
                                                           //wrap with parenthses() 

console.log(addone(3,4));