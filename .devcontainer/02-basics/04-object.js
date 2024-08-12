// object constructors

// const tinder= new Object() singleton
const tinder= {}  

tinder.id="45678yui"
tinder.name="bunny "
tinder.fact="jahaz"

// console.log(tinder);

const regularUser={
    email: "some@gmail.com",
    fullname:{ 
        userfullname: {
        firstname:"hijab",
        lastname:"hijab",
    }}
}
// console.log(regularUser.fullname.userfullname.firstname)

 const obj1 = {1:"a", 2:"b"}
 const obj2 = {3:"a", 4:"b"}
 const obj4= {5:"a", 6:"b"}

//  const obj3={ obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4) 
const obj3={...obj1, ...obj2}
//  console.log(obj3)

 const users=[
    {
        id:"6789u",
        email:"z@gamil.com"
    },
    {
        id2:"6789u",
        email2:"z@gamil.com"
    }
 ]

 users[1].email
//  console.log(tinder)
//  console.log(Object.keys(tinder))
//  console.log(Object.values(tinder))
//  console.log(Object.entries(tinder))

//  console.log(tinder.hasOwnProperty('isLogged'))

const course={
    name: "ICT",
    price:"999",
    instructor:"Kanwal Yousaf"
}
// console.log(course.instructor);

const { instructor: guide}= course
console.log(guide);

