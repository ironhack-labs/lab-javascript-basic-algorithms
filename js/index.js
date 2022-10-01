const hacker1 = 'Carolina'
const hacker2 = 'Raphael'
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

function longestName(){
    if(hacker1.length > hacker2.length)
   console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
   else if (hacker1.length < hacker2.length)
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    else if(hacker1.length === hacker2.length)
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

longestName ()

let driver = ``;

for (let i=0; i < hacker1.length; i++){
    driver += hacker1[i].toUpperCase() + ` `;
}
console.log(driver)

let navigatorReverse = '';
for (let i=hacker2.length-1; i >= 0; i--){
    navigatorReverse += hacker2[i];
}
console.log(navigatorReverse)

//iteration3

function lexicOrder() {
    if(hacker1.localeCompare(hacker2)<0)
    console.log(`The driver's name goes first.`)
    else if (hacker1.localeCompare(hacker2)>0)
    console.log(`Yo, the navigator goes first definitely.`)
    else if (hacker1 === hacker2)
    console.log(`What?! You both have the same name?`)

}

lexicOrder()