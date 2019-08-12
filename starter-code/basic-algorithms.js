// Names and Input
const driver = 'César';
console.log(`The driver\'s name is ${driver}`);
let navigator = prompt('Enter navigator\'s name:');
console.log(typeof(navigator));
console.log(`The navigator\'s name is ${navigator}`);

//Conditionals
if (driver.length > navigator.length){
    console.log(`The Driver has the longest name, it has ${driver.length} characters`)
  } else if (navigator.length > driver.length){
    console.log(`Yo Navigator has the longest name, it has ${navigator.length} characters`)
  } else {
    console.log(`wow, you both got equally long names, ${driver.length} characters!!`)
}

let driverUpC = ''
for(i=0; i<driver.length;i++){
  driverUpC += driver[i].toUpperCase() + ' '
}
console.log(driverUpC)

let navigatorRev = ''
for(i=navigator.length-1; i>=0; i--){
  navigatorRev += navigator[i]
}
console.log(navigatorRev)

let orderFound = false;
let j=0;
if(navigator.toUpperCase() !== driver.toUpperCase()){
  while(orderFound === false){
    if(driver.toUpperCase().charCodeAt(j) < navigator.toUpperCase().charCodeAt(j)){
      console.log('The driver\'s name goes first')
      orderFound = true;
    }
    else if(driver.toUpperCase().charCodeAt(j) > navigator.toUpperCase().charCodeAt(j)){
      console.log('Yo, the navigator goes first definitely')
      orderFound = true;
    }
    j++;
  }
}
else{
  console.log('What?! You both got the same name?')
}

// Bonus Palindrome
let phrase = prompt('Enter a palindrome:');
let palindromo = phrase.split(' ').join('')
let palindromoRev = ''
for(i=palindromo.length-1; i>=0; i--){
  palindromoRev += palindromo[i]
}

if (palindromo === palindromoRev){
  console.log('It\'s a palindrome!')
}else{
  console.log('It\'s not a palindrome :(')
}

// Lorem ipsum generator
let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet mi ac mauris rhoncus varius. Proin quis rutrum risus. Morbi volutpat hendrerit odio id ullamcorper. Ut ultricies, lacus sit amet accumsan tempus, mauris sem malesuada velit, et commodo tellus leo nec erat. Aenean fermentum purus arcu, in dignissim sem bibendum sed. Nulla tincidunt justo a pellentesque vulputate. Etiam quis dolor porttitor velit pharetra scelerisque. Mauris vulputate sed enim id convallis. Fusce nec eros et purus viverra faucibus. In ut tellus lorem. Cras in purus et metus facilisis scelerisque ut rhoncus felis. Mauris in placerat nisl, id dapibus nisi. Ut non convallis orci. Maecenas sed erat rutrum, porttitor nisi id, facilisis urna. Nullam quis suscipit eros, nec imperdiet nunc. 

Vestibulum tortor orci, tincidunt sed enim tempor, pulvinar vulputate ante. Cras maximus hendrerit laoreet. Nullam consequat consequat vestibulum. Sed sed libero eu nisl hendrerit faucibus. Mauris risus ex, hendrerit eget vestibulum sed, mattis sit amet dolor. Vestibulum vitae odio auctor metus sodales molestie ut vel diam. Proin consectetur eu nisl at mattis. Donec sollicitudin tempor molestie. Vestibulum fermentum tempus tortor, sit amet lacinia velit cursus ac.

Nunc ligula tellus, laoreet nec aliquet nec, molestie sit amet lorem. Vestibulum eget maximus dolor. Nulla facilisi. Suspendisse potenti. Aenean lacus erat, mollis at tortor non, blandit volutpat ipsum. Aliquam quis mi mattis, dapibus justo nec, venenatis sem. Vestibulum tristique leo nec ante vulputate blandit. Mauris euismod a enim vitae convallis. Nunc malesuada, nisi ac pellentesque tincidunt, felis turpis laoreet metus, sed imperdiet lacus diam nec libero. In pellentesque faucibus lectus id tempor. Nunc accumsan vestibulum arcu et ultrices.`

console.log(paragraphs)
let words = paragraphs.split(' ')
let totalWords = paragraphs.split(' ').length
console.log(totalWords)

let etWords = 0;
for (i=0; i<words.length;i++){
  if(words[i] === 'et'){
    etWords ++
  }
}
console.log(etWords)