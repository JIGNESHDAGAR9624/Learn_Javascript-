//const user = new Object();
const user = {}
user.id = "1",
user.name ="jignesh"
user.Email = "jignesh@google.com"

// console.log(user);


const regularuser = {
    email: "jignesh@google.com",
    fullname:{ // object Inside object
        userfullname:{
            firstname: "jignesh",
            lastname: "dagar"
        }
    }
}

//console.log(regularuser.fullname.userfullname);  // use object inside object


const obj1 = { 1:"A" , 2:"B" , 3:"C"}
const obj2 = { 4:"D" , 5:"E" , 6:"F"}

//const obj3 = {obj1 , obj2}

//console.log(obj3);

// const targetvalue = Object.assign({} ,obj1,obj2);// combine value  // first object is target add all value in first object and second two object is source object

const obj3 = {... obj1,...obj2}  //spraed operator to merge value
console.log(obj3);
