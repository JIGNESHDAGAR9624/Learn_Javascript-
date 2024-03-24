let score = true 
let isLoggesdIn =1;
let isLoggesdn =0;

//console.log(typeof(score));
//console.log(typeof score);

let valueInNumber = Number(score) // Convert to number
//console.log(valueInNumber);

let booleanInLoggedIntrue = Boolean(isLoggesdIn);
//console.log(booleanInLoggedIntrue); 

let booleanInLoggedInfalse= Boolean(isLoggesdn);
//console.log(booleanInLoggedInfalse);

let someNumber = 33;;

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



// Stack(primitive)   Heap(non_primitive)
// primitive datatype = number , string , boolean , bigInt
// non Primitive datatype = object , array

// Stack(primitive) 
let myname = "jignesh";

let mynewName = myname;

mynewName = "Jigs";

console.log(myname);
console.log(mynewName);


// Heap(non-Primitive) ,object
let user ={
    username: "jignesh",
    userEmail: "jignesh@google.com",
}

let newuser = user;

newuser.userEmail = "jignesh@amazone.com";
console.log(user);
console.log(newuser);


