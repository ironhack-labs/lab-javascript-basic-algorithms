let hacker1= 'Iñigo' 
console.log (hacker1); 

let hacker2= 'Andres'
console.log (hacker2);

console.log (hacker1.length)
let largo2 = hacker2.length

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has XX characters.`)
  
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) 
  
}  else if (hacker1.length = hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }


for (i=0;i<hacker1.length; i++){
  let grande1 =(hacker1.charAt(i))
  console.log(grande1.toUpperCase(i))
}

// for (i=0;i<hacker2.length; i++){
 // let grande2 =(hacker2.charAt(i))
  // console.log(grande2.reverse(i))
// }

function reverseString(strName) {
    let newString = "";
    for (var i = strName.length - 1; i >= 0; i--) {
        newString += strName[i];
    }

    console.log (newString);
    return newString;
}

reverseString(hacker2);


let names= [hacker1, hacker2]
