const marvel_heros=[ "ironman", "spiderman"]
const dc_heros=["superman","batman"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//  const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros);

 const all_heros=[...marvel_heros, ...dc_heros]
 console.log(all_heros)

 const myarr=[1, 2, [3, 4], 5, 6, [7, 8, [9, 10]]]
 const real_arr= myarr.flat(Infinity)
 console.log(real_arr)

 console.log(Array.isArray("hijab"))
//  console.log(Array.form("hijab"))
//  console.log(Array.form({name:"hijab"})) //intersting

let score1=100
let score2=100
let score3=100

console.log(Array.of(score1, score2, score3))
