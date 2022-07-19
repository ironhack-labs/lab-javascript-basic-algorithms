// teste
console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "phelipe"
let hacker2 = "ana"
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters`)
} else {
    if (hacker1.length < hacker2.length) {
    console.log(`It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}
}

// Iteration 3: Loops
// 3.1:
console.log(hacker1.split('').join(' ').toUpperCase())

// 3.2:
console.log(hacker2.split('').reverse().join(''))

// 3.3:
if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`${hacker1} name goes first.`)
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`Yo, ${hacker2} goes first definitely`)
} else {
    console.log(`What?! You both have the same name?`)
}

// Bonus 1:
let par1 = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas euismod ipsum metus, ut dignissim risus congue eget. Curabitur venenatis viverra justo quis sollicitudin. Mauris tincidunt enim elementum nisl faucibus pretium. Nam at lacinia mauris. Aliquam vel efficitur ligula. Cras interdum fringilla leo. Suspendisse porttitor fringilla aliquam. Aliquam ut nunc venenatis, rhoncus ipsum sed, aliquet nisl. Duis at magna sed ipsum cursus lacinia sit amet eu augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sed malesuada neque. Nulla cursus purus egestas nisl volutpat facilisis. Nunc magna ex, semper dictum vehicula ut, viverra eu purus. Mauris pretium turpis vitae erat facilisis scelerisque. Ut convallis erat augue, vitae ullamcorper est sollicitudin sed."
let par2 = "Aenean vel ipsum leo. Quisque at leo purus. Fusce semper consequat justo et porta. Maecenas metus diam, pharetra vitae lacus eget, elementum vehicula dolor. Mauris ac gravida nulla. Nam magna sem, lobortis eget nunc quis, maximus facilisis quam. Vestibulum dapibus, velit luctus hendrerit venenatis, dolor libero venenatis velit, vel aliquet enim lectus tempus mi. Sed maximus, felis id congue rhoncus, augue enim gravida mauris, at bibendum mauris quam eget dui. Integer vel risus scelerisque, varius odio ut, porttitor neque. Cras nec nisl in ex interdum cursus. Ut luctus laoreet mauris, a porttitor risus vestibulum elementum. Praesent commodo lacus non diam malesuada blandit ac in metus. Sed a semper est. Morbi volutpat erat quis elit porttitor, eu mollis felis cursus. Pellentesque magna enim, dictum a venenatis sit amet, efficitur vitae eros. Aliquam auctor, nisl non ullamcorper finibus, dolor tortor suscipit eros, non vulputate nunc mi nec risus."
let par3 = "Nulla bibendum ante eget feugiat efficitur. Nullam efficitur ultricies libero et feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum interdum pharetra ligula, ac efficitur diam. Ut placerat, lacus quis elementum eleifend, eros mi efficitur ex, eget cursus libero lectus sed odio. Phasellus feugiat nisl et mauris faucibus luctus. Sed sed bibendum justo, at porta tortor. Praesent id facilisis ex. In dui lacus, aliquam dictum dui id, blandit ornare diam. Vivamus lacinia ipsum nec nulla elementum dictum. Quisque ullamcorper, erat ut dictum iaculis, elit arcu finibus dolor, vel mattis nunc dui sed nibh. Vivamus est sapien, euismod et consequat sit amet, condimentum ut augue. Pellentesque volutpat eu mi ut dictum. Nam tempus, sem eget rutrum viverra, mauris lectus lacinia neque, cursus venenatis ex lorem eu risus."

let words = par1.split(" ");
console.log(words.length);

let count = 0;
let query = "et";
for (let i = 0; i < words.length; i++) {
  if ( words[i] === query) {
    count++;
  }
}
console.log(count);

let words2 = par2.split(" ");
console.log(words2.length);

let query2 = "et";
for (let i = 0; i < words2.length; i++) {
  if ( words2[i] === query2) {
    count++;
  }
}
console.log(count);

let words3 = par3.split(" ");
console.log(words3.length);

let query3 = "et";
for (let i = 0; i < words3.length; i++) {
  if ( words3[i] === query3) {
    count++;
  }
}
console.log(count);

// Bonus 2:
let phraseToCheck = "Amor, Roma"

switch (phraseToCheck) {
    case "A man, a plan, a canal, Panama":
        console.log(`It is a palindrome`)
        break
    case "Amor, Roma":
        console.log(`It is a palindrome`)
        break
    case "race car":
        console.log(`It is a palindrome`)
        break
    case "stack cats":
        console.log(`It is a palindrome`)
        break
    case "step on no pets":
        console.log(`It is a palindrome`)
        break
    case "taco cat":
        console.log(`It is a palindrome`)
        break
    case "put it up":
        console.log(`It is a palindrome`)
        break
    case "Was it a car or a cat I saw":
        console.log(`It is a palindrome`)
        break
    case "No 'x' in Nixon":
        console.log(`It is a palindrome`)
        break
        default:
        console.log(`It is not a palindrome`)
        break
}