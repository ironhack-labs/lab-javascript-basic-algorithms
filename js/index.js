let driverName = 'Dijana';
console.log(`The driver name is ${driverName}`);
let navigatorName = 'Ana';
console.log(`The navigator name is ${navigatorName}`);
driverNameLength = driverName.length;
console.log(driverNameLength);
navigatorNameLength = navigatorName.length;
console.log(navigatorNameLength);

if (driverNameLength >navigatorNameLength){
  console.log(`The driver has the longest name, it has ${driverNameLength} characters`)
}else if (driverNameLength < navigatorNameLength){
  console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters`)
} else{
  console.log(`Wow, you both have equally long names, {navigatorNameLength} characters!`)
}
let driversName = '';
for (let i =0; i< driverNameLength; i++){
  driversName += driverName[i].toUpperCase() + ' ';
}
console.log(driversName);

let reverseName = '';
for (let i = navigatorNameLength - 1; i >= 0; i--) {
  reverseName += navigatorName[i];
  
}
console.log(reverseName);


if (driverName.localeCompare(navigatorName)) {
  console.log(`${navigatorName}`)
  
} else {
  console.log(`${driverName}`)
}