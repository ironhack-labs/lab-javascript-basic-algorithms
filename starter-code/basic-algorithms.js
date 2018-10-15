// Names and Input
let driver ='Gabriel';
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
else console.log('wow, you both got equally long names, ' + driver.length + ' characters.');

//UpperCase driver name

let capitalDriver = new Array();

for(i = 0 ; i < driver.length ; i += 1){
  //driver = driver.toUpperCase();
  if (driver[i]!== ' '){

    capitalDriver.push(driver[i]);
    
  } 
}
capitalDriver = capitalDriver.join(' ');
console.log(capitalDriver.toUpperCase());

// Navigator name reverse
reverseNavigator = navigator.split('').reverse().join('');

console.log(reverseNavigator);
//lexicographic order

if(driver === navigator){

  console.log('What?! You both got the same name?');

}
else{
  for(i=0 ; i < driver.length && i < navigator.length ; i+=1)
  {
    if(driver[i].toUpperCase() < navigator[i].toUpperCase()){
      console.log('The driver\'s name goes first');
      break;
    }
    if(driver[i].toUpperCase() > navigator[i].toUpperCase()){
      console.log('Yo, the navigator goes first definitely');
      break;
    }
    
  }
}




// Lorem ipsum generator
