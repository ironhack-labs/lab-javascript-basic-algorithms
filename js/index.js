//Iteración 1: Nombres y entrada

let hacker1 = "luciano";
console.log(`the driver´s  name is ${hacker1}`);

let hacker2= "jaime";
console.log(`The navigator's name is ${hacker2}`)


//Iteración 2: condicionales


  if(hacker1.length > hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`)
  }
  else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  else if (hacker1.length = hacker2.length){
    console.log(`Wow, you both have equally long names, it has ${hacker1.length} characters.`)
  }

//Iteración 3: Bucles


console.log(hacker1.split("").join(" ").toUpperCase());

console.log(hacker2.split("").reverse().join(""));

if(hacker1.localeCompare(hacker2)==0){
  console.log(`What?! You both have the same name?`)
}
else if(hacker1.localeCompare(hacker2)<0){
  console.log(`The driver's name goes first.`)
}
else if(hacker1.localeCompare(hacker2)>0){
  console.log(`Yo, the navigator goes first definitely.`)
}
