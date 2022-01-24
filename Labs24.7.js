
//iteration 1
let hacker1 = "Tommy";
console.log (`The driver's name is ${hacker1}.`);
let hacker2 = "Amy";
console.log (`The navigator's name is ${hacker2}.`);


//Iteration 2
numCar1 = hacker1.length 
numCar2 = hacker2.length
NumCarAll = hacker1.length + hacker2.length
if (hacker1 > hacker2){
  console.log(`The driver has the longest name, it has ${numCar1} characters.`)
}else if (hacker1>hacker2){
  console.log (`It seems that the navigator has the longest name, it has ${numCar2} characters.`)
}else console.log(`Wow, you both have equally long names, ${numCarAll} characters!.`)


//Iteration 3

let driverSpace = ""
for (let i = 0; i < hacker1.length; i++){
   driverSpace += hacker1[i].toUpperCase() + " ";

    }
  console.log (driverSpace)
//iteration 3.2

let driverRevers = " "

for(let i = hacker1.length -1; i>=0; i--){
  driverRevers +=hacker1[i];
}

console.log (driverRevers)

//iternation 3.3

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();
let hackerCont = (hacker1 ,hacker2);

for (let i = 0; i <= hackerCont.length; i++) {
	if (hackerCont[i] === "a") {
	  hackerCont++
	}
}

console.log(hackerCont)

//En la 3.3 no se exactamente que debo cambiar para que no me de como resultado NaN.
