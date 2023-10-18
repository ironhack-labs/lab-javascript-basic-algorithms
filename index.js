// Iteration 1: Names and Input

const hacker1 ='antonio';
console.log(`The driver's name is ${hacker1}`)
const hacker2='siri'
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else if(hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length+hacker2.length} characters!`)
}


// Iteration 3: Loops

let newName = "";
for (let i = 0; i < hacker1.length; i++) {
  newName += hacker1[i].toUpperCase() + " ";
}
console.log(newName);
let newName2 =""
for(let i = hacker1.length-1; i>=0; i--){
    newName2+=hacker1[i]
}
console.log(newName2)
let nameArr =[hacker1,hacker2];
for(let i =0; i<hacker1.length;i++){
    for(let j=0;j<hacker2.length;j++){
        let nameArr =[hacker1,hacker2];
        if(nameArr.sort()[0]===hacker1){
            console.log('The drivers name goes first')
        }else if(nameArr.sort()[0]!==hacker1){
            console.log('The drivers name goes first')
        }else if(hacker1.slice(0,hacker1.length) === hacker2.slice(0,hacker2.length)){
            console.log('have same name!')
        }
    }
}



