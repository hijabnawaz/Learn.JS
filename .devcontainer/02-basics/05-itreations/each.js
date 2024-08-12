//for each 
// arrayname.foreach( funct(para){scope})   //syntax

const coding=["js", "cpp", "python", "rubbby"]
// coding.forEach(  function(item){
//     console.log(item);
    
// })

// coding.forEach(  (val)=> {          //by arrow fun
//   console.log(val)
// })

// function printMe(item){
//     console.log(item);  
// }
// coding.forEach(printMe)

// coding.forEach(  (index,item)=>{
//    console.log(index,item);
   
// })

// [{},{},{}]

const myCoding=[
    {
   langname: "javascript",
   langfile: "js"
},
    {
   langname: "C++",
   langfile: "cpp"
},
    {
   langname: "python",
   langfile: "py"
},
]
myCoding.forEach(  (item)=>{
    console.log(item.langname);
    
} )