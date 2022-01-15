
let driversName = 'hacker1';
console.log(`"The driver's name is ${driversName}"`);

let navigatorsName = 'hacker2';
console.log(`"The navigator's name is ${navigatorsName}"`);

if(driversName.length > navigatorsName.length){
  console.log(`"The driver has the longest name, it has ${driversName.length} characters"`);
} else if (driversName.length < navigatorsName.length){
  console.log(`"It seems that the navigator has the longest name, it has ${navigatorsName.length} characters"`);
} else{
 console.log( `"Wow, you both have equally long names, ${driversName.length} characters!"`);
}
