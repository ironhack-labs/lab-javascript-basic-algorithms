// Iteration 1: Names and Input

// 1.1
const hacker1 = 'GOT'

// 1.2
console.log("The driver's name is", hacker1)

// 1.3
const hacker2 = 'Jon Snow'

// 1.4
console.log("The navigator's name is", hacker2)




// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters. or`)
}else if( hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}



// Iteration 3: Loops

// 3.1
let str = '';

for (var i = 0; i < hacker1.length; i++) {
    str += hacker1[i].toUpperCase() + " "
}

console.log(str)


// 3.2

let str2 = ''
for (var i = hacker2.length - 1; i != -1; i--) {
    str2 += hacker2[i]
}

console.log(str2)

// 3.3

let var1 = '';

for(let i = 0; i < hacker1.length;i+= 1 ){
    if(i === hacker1.length -1 ){
        var1 += `${hacker1[i].toLocaleUpperCase()}`
    }else{
        var1 += `${hacker2[i].toLocaleUpperCase()}`
    }
}

console.log(var1)
