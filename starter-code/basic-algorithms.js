let driverName='Ismael'
console.log(`The drivers is ${driverName}`)
const navigatorName = prompt("Dime tu nombre")
console.log(`The navigators name is: ${navigatorName}`)

if(driverName.length > navigatorName.length){
  console.log(`The Driver has the longest name, it has ${driverName.length} characters`)
} else if(driverName.length < navigatorName.length){
  console.log(`Yo, navigator got the longest name, it has ${navigatorName.length} characters`)
} else{
  console.log(`wow, you both got equally long names, ${driverName.length} characters!!`)
}

let nuevoName = '';
for (i =0; i < driverName.length; i++){
  nuevoName += driverName[i] + ' '
}

console.log(nuevoName.toUpperCase())

let nuevoN=''
for(j=1;j <= navigatorName.length ; j++){
  nuevoN += navigatorName[navigatorName.length - j]
}
console.log(nuevoN)

if(driverName < navigatorName){
  console.log(`The driver's name goes first`)
} else if(driverName > navigatorName){
  console.log(`Yo, the navigator goes first definitely`)
} else{
  console.log(`What?! You both got the same name?`)
}
