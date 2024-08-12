//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score=100
const value=90.78

const isLoggedin= false
const temp= null
let userEmail;

const Id=Symbol("456")
const anotherId =Symbol("456")

console.log(Id===anotherId);

// const bigNmuber= 23456778909987766n
// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions


const heros=["quaid","allama", "sir syed"]
let myObj={
     name: "hijab",
     age: 19,
}

let myFunction= function(){
    console.log("hello world")
}
console.log(typeof heros )


//*************MEMORY**********/

// stack(primitive), heap(non-primitive)
let myRoutine ="book reading"
anotherroutine= myRoutine
anotherroutine= "paly games" 
console.log(anotherroutine)

let userOne={
    email: "user@gamil.com"
}

 let userTwo= userOne

 userTwo.email = "hadia@gmail.com"

 console.log(userOne.email)
 console.log(userTwo.email)


