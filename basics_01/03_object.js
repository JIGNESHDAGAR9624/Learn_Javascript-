
const mysym = Symbol("key1");

const myObj = {
    name: "jignesh",
    [mysym]: "mykey1",
    age: 21,
    address: "Ahmedabad",
    Email: "jignesh@git.Com",
    country:"India"
};

// console.log(myObj); // object log print  
// console.log(myObj[mysym]); // sybole print in console
// console.log(myObj.age);
// console.log(myObj.country);

myObj.Email = "jignesh@google.com";
//Object.freeze(myObj); //when i freeze myObject when not change any value after that 
// console.log(myObj.Email);

myObj.Email ="jignesh@chatgpt.com";

// console.log(myObj.Email);

myObj.greeting = function(){
    console.log("Hello Jignesh");
}

myObj.greetingTwo = function(){
    console.log(`Hello Jignesh, ${this.name}`); // use back tick  for print current object
}

 console.log(myObj.greeting());
 console.log(myObj.greetingTwo());
