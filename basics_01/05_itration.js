
 
// for(let index=0 ; indx<= 10; idex++ ){
//    const elemet = index;
      //     if(elemet == 5){
//         console.log("is Best Number");
//     }

//     console.log("The value of ",elemet);
    
// }


for(let i=0; i<=10; i++){

    //console.log(`Outer loop is: ${i}`);
    for(let j=0;j<=10; j++){
   // console.log(`Inner loop is ${j} and Outer loop is ${i}`);
   //console.table(i + `*` + j + ` = ` + i*j);    
}
}




// const myarray = ["web3" , "Blockchain" , "javascript" ,"ether.js"];

// for(let i=0; i<= myarray.length; i++){
//     const value = myarray[i];
//     console.log(`print the value of i ${value}`);
// }


// break keyword
// for(let index = 0; index <=10; index++){
    
//     if(index == 5){
//         console.log("5 is Detected")
//         break
//     }
   
//     console.log(`value of i is :${index}` );
// }


// continue keyword
for(let index = 0; index <=10; index++){
    
    if(index == 5){
        console.log("5 is Detected")
        continue
    }
   
    console.log(`value of i is :${index}` );
}