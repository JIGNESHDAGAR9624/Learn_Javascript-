const myNum = [1,2,3,4,5]

//const total = myNum.reduce(function (acc , currVal){
//console.log(`acc: ${acc}  and currval is ${currVal}`)
//return acc + currVal
//},0)
//console.log(total)

//const totalval = myNum.reduce( (acc  , currval) => acc + currval  , 0)
//console.log(totalval)


const shoppingCart = [
  {
    itemName : "js Course",
    price: 2000
  },
  {
    itemName : "python Course",
    price: 999
  },
  {
    itemName : "blockchain Course",
    price: 3999
  },
  {
    itemName : "Data Sci Course",
    price: 2999
  }
]


const priceToPay = shoppingCart.reduce((acc , item) => acc + item.price ,0)
console.log(priceToPay);



