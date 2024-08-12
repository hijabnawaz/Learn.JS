const user = {
    username: "hiba",
    designation: "student",

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function party(){
//     let username = "hijab"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hijab"
//     console.log(this.username);
// }

const party =  () => {
    let username = "hiba"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hiba"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()