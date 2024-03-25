

function sayMyName(){
    console.log("J");
    console.log("i");
    console.log("g");
    console.log("n");
    console.log("e");
    console.log("h");
}
 //sayMyName();

// function addTwoNumbers(number1 , number2){
//     console.log(number1+number2);
// }

function addTwoNumberss(number1 , number2){
    //   let result = number1 + number2;
    //   return result;
    return number1 + number2
    }

//    const sumNumber = addTwoNumberss(8,9) // when i return result then  varibale print value 

//    console.log("Result",sumNumber);

function loginUserMessage(username){

    if(username === undefined){
        console.log("please enter a name")
        return
    }
    return `${username} just logged In`
}

//console.log(loginUserMessage("jignesh")); // print jignesh
//console.log(loginUserMessage("")); //print empty String
//console.log(loginUserMessage()); // undefined
