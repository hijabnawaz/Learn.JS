// Object.create constructor method

// object literals
const mySym= Symbol("key1")

const JsUser={
    name:" hijab",
    "full name": "hijab nawaz",
    [mySym]:"key1",
    age: 19,
    location:"Bwp",
    Email: "hijabgmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["sunday", "monday"]
}

// console.log(JsUser.Email);
// console.log(JsUser["Email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof [mySym]);

JsUser.Email="hiba@gmail.com"
// Object.freeze(JsUser)
JsUser.Email="zaeem@gmail.com"
// console.log(JsUser)
JsUser.greetings= function(){
    console.log("hello Js user")
}
JsUser.greetingsTwo= function(){
    console.log(`hello Js user ${this["full name"]}`)
}
console.log(JsUser.greetings())
console.log(JsUser.greetingsTwo())
