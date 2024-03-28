
// for in loop :-  used to iterate over the properties of an object.

const myObject ={
    js: `Javascript`,
    cpp: `c++`,
    rb: `ruby`,
    swift: "swift by Apple"
}

// for (const key in myObject) {
//            console.log(`key is ${myObject[key]}`);
//     }


for( const key in myObject){
   // console.log(`${key} for shortcut`)
}


const programming = ["js" , "rb" , "py" , "java" , "cpp"]

for (const key in programming){
    //console.log(programming[key]);
}


const mapping = new Map()
map.set(`IN` , "India" )
map.set(`Fr` , "France")
map.set(`USA` , "United States Of America")
map.set(`IN` , "India" )

for (const key in mapping) {
    console.log(key)
}

