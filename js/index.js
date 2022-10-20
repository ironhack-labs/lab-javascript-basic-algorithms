
let hacker1 = "eduardo";
    console.log("The drivers name is "+ hacker1);
let hacker2 = "antonio";
    console.log("The navigators name is "+ hacker2);

//iteration II
if(hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has" + hacker1.length + "characters.")
} else if(hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has" + hacker2.length + "characters.")
}else if(hacker1.length === hacker2.length) {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!.")
}
//iteration III
hacker1 = hacker1.toUpperCase();
for (let i = 0; i <= hacker1.length; i++){
    console.log(hacker1.split(''));
}
for(let i = hacker2.length-1; i >= 0; i--){
    let name1 = hacker2.split('');
    let name2 = name1.reverse();
    let name3 = name2.join('');
    console.log(name3)
  }
// construir arrays apartir de strings
const hackerArray1 = hacker1.split(" ")
const hackerArray2 = hackerArray1.concat(hacker2)
const hackersArray = hackerArray2.sort() // array es el type que utiliza sort() A - Z
console.log(hackersArray) // contiene array de variables hacker 1 y hacker2
hackersArray.sort(function (a, b) { // aplicar sort() al array3
     if (a < b) {
         return console.log(`driver:${b} name goes first`);
     }
     if (b < a) {
        return console.log(`navigator:${a} name goes first`);
     }
        return 0;
    });
