const myNums=[1, 2, 3, 4, 5, 6, 7 ]

// const myTotal = myNums.reduce(function (acc, currval)
// {  console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval}
//     ,4)
    

const myTotal = myNums.reduce( (acc, currval) => (acc + currval)
// {  console.log(`acc: ${acc} and currval: ${currval}`)

,4)
console.log(myTotal);

const shoppingCard =[
    {
        item: "watch",
        price: 4000
    },
    {
        item: "bag",
        price: 5000
    },
    {
        item: "belt",
        price: 2000
    }
]

const pricetopay= shoppingCard.reduce( (acc, item) => (acc+ item.price) ,0)

console.log(pricetopay)