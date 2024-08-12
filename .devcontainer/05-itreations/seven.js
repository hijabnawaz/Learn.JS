const myNumers=[1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newnums= myNumers.map( (num)=> num + 10)
// console.log(newnums);

const newnums= myNumers
.map( (num)=> num*10)
.map( (num)=> num + 1)
.filter( (num)=> num>=40 )

console.log(newnums);