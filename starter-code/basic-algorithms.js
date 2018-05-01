// Names and Input
var hacker1 = "Paula"; 
console.log('The driver\'s name is ' + hacker1 );

var hacker2 = prompt('What\'s the navigator name?');
console.log('The navigator\'s name is ' + hacker2);


//Conditionals

var driversLenght = hacker1.length;
var navigatorsLenght = hacker2.length;

if (driversLenght > navigatorsLenght) {
    console.log('The Driver has the longest name, it has ' + driversLenght + ' characters');
  }
else if (driversLenght < navigatorsLenght) {
    console.log('Yo, navigator got he longest name, it has ' + navigatorsLenght + ' characters');
  }
else {
    console.log('Wow, you got equally long names ' + navigatorsLenght + ' characters');
  }


//Loops
  var driverCapitals = '';
  for(i = 0; i < driversLenght ; i++) {
    driverCapitals += hacker1[i] + ' ';
  }
  console.log(driverCapitals.toUpperCase());
  //Best choice (without loop):
  //console.log(hacker1.split('').join(' ').toUpperCase());
  
  var navigatorReverse = '';
  for(i = navigatorsLenght - 1; i >=0 ; i--) {
    navigatorReverse += hacker2[i];
  }
  console.log(navigatorReverse);
  //Best choice (without loop):
  //console.log(hacker2.split('').reverse().join(''));


/*Lexicographic order:*/

if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
  console.log('The driver\'s name goes first');
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
  console.log('Yo, the navigator goes first defintely');
} else {
  console.log('What?! You both got the same name?');
}




//BONUS TIME: 
//Palindrome checker
var palindrome = prompt('Palindrome checker!');

var pal = palindrome.toLowerCase().split(' ').join('');

for(i=0; i<pal.length; i++){
  
  if (pal[i] === '?'){
  
    pal = pal.split('?').join('');
  }
  else if (pal[i] === ',') {
     
     pal = pal.split(',').join('');
  }
  else if (pal[i] === '\'') {
    
    pal = pal.split('\'').join('');
  }
  else if (pal[i] === '!') {
    pal = pal.split('!').join('');
  }
  else{
    pal = pal;
  }
}

var palCompare = '';
for(j = pal.length - 1; j >= 0; j--){
  palCompare += pal[j];
}

if (pal === palCompare){
  console.log('Great! It\'s a palindrome!');
}
else {
  console.log('Sorry, try another string');
}

// Try another way!
// Uncomment the if statement below,
// comment lines from 84 to 94 and try!
/*if (pal === pal.split('').reverse().join('')){
  console.log('Great! It\'s a palindrome!');
}
else {
  console.log('Sorry, try another string');
}*/



// Lorem ipsum generator

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque id metus in consequat. Pellentesque sit amet justo ac mauris viverra iaculis. Aliquam erat volutpat. Vestibulum ut augue sit amet justo fermentum egestas. Mauris tellus diam, sodales eget lacus eget, gravida vulputate purus. Aenean vel ex tristique, vehicula tortor vel, auctor eros. Integer enim lectus, dapibus in augue sed, fringilla gravida neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ipsum ac erat pharetra lobortis sed non est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, urna non viverra suscipit, justo sem semper felis, vitae laoreet enim nisi vitae sem. Suspendisse sed sagittis est. Sed lectus purus, condimentum consectetur purus vitae, porttitor porttitor sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Integer et erat sagittis, mollis mi vitae, iaculis erat. Nullam at lobortis tellus. Nam urna ligula, aliquet eu varius non, bibendum a odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In eget bibendum ante. Nullam vitae sapien non neque lacinia iaculis. Nulla vel justo elit. Vestibulum vel suscipit orci. Etiam finibus tortor quam. Cras nec ultricies felis. In hac habitasse platea dictumst.Praesent consequat felis a ornare eleifend. Nunc consectetur at quam non posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras gravida vel leo vitae tincidunt. Fusce sagittis ipsum id commodo sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan imperdiet orci et pellentesque. Nam sit amet diam porttitor, lacinia nibh ac, placerat urna."

var numberWords = lorem.split(' ').length;
console.log(numberWords);

