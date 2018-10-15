// Names and Input
let driver ='Gabriel Sicuto';
console.log('The driver\'s name is: ' + driver);
//console.log('Digite o nome do navegador:');
let navigator =  process.argv[2];
//let navigator = prompt('digite:'); 
console.log('The navigator\'s name is: ' + navigator);

//Conditionals

if(driver.length > navigator.length){
  console.log('The driver has the longest name, it has ' + driver.length+ ' characters.');
}
else if (driver.length < navigator.length){
  console.log('The navigator has the longest name, it has ' + navigator.length+ ' characters.');
}
else console.log('wow, you both got equally long names, ' + driver.length + 'characters.');

let capitalDriver = driver.toUpperCase();
console.log(capitalDriver);

for(i = 0 ; i < capitalDriver.length ; i += 1){
  let capitalDriverSpace = [];

  if(capitalDriver[i] !== ' '){
    capitalDriverSpace[i]=capitalDriver[i]+' ';  
  }
}
console.log(capitalDriverSpace);
// Lorem ipsum generator
