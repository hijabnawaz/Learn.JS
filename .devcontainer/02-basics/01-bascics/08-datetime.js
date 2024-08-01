let myDate= new Date()
console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toDateString())
// console.log( typeof myDate)

// let uniDay1date= new Date(2023,7,21)
// let uniDay1date= new Date("2023-08-21")
let uniDay1date= new Date(2023,7,21 ,8,30)
// console.log(uniDay1date.toLocaleString());
let myTimestamp=Date.now()
console.log(myTimestamp)
// console.log(uniDay1date.getTime())
console.log(Math.round(Date.now()/1000))
 let newDate= new Date()
 console.log(newDate.getDay())

 newDate.toLocaleString('default',{
    weekday: "long"
 })