// for of 
const arr=[5, 6, 7, 8, 9 ]
for (const num of arr) {
    // console.log(num);  
}

const greetings ="hello world"
for (const greets of greetings){
    // console.log(`each chra of  ${greets}`)
}

//  Maps
const maps= new Map()
maps.set('Pak',"pakistan")
maps.set('CH',"china")
maps.set('Fr',"france")      //maps are not iteratable. can't apply loop 
console.log(maps)

for (const [key, value] of maps) {
    console.log(key, ':-', value)
    
}

const myObje={
    'book1': 'Atomic habits',
    'book2': 'Alchemist'
}
for (const [key, value] of myObje) {
    console.log(key, ':-', value)
    
}