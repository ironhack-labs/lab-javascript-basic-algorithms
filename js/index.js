//PUNTO1//
let hacker1 = "Marta";
console.log("The driver's name is " + hacker1);
let hacker2 = "Jose"
console.log("The navigator's name is "+hacker2);

//PUNTO 2//
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " +  hacker1.length + " characters")
} else if (hacker1.length < hacker2.length) {
  console.log("It seems that the navigator has the longest name, it has " +  hacker2.length + " characters")
} else if (hacker1.length = hacker2.length) {
  console.log ( `Wow, you both have equially long names, thay have ${hacker1.length*2} characters`)
}

//PUNTO 3.1//
let upperCase= hacker1.toUpperCase().split('');
console.log(upperCase)

//PUNTO 3.2//
let reverso=hacker2.split("").reverse().join("");
console.log(reverso)

//PUNTO 3.3//
if(hacker1.localeCompare(hacker2) == -1 ){
  console.log(hacker1 + " goes first")
}else if
  (hacker2.localeCompare(hacker1) == -1){
  console.log(" Yo, "+ hacker2 + " goes first defitely")
}else{
  console.log("What!? you both have the same name?")
  }

  //BONUS 1
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia faucibus odio sed mollis. Duis lobortis dolor non eleifend imperdiet. Cras vitae vehicula nunc, vel volutpat neque. Phasellus viverra blandit convallis. Mauris et odio convallis, mollis est quis, ultrices diam. Vestibulum sit amet lacus dictum felis lacinia pharetra in at ex. Suspendisse tincidunt eget libero malesuada interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent euismod dapibus magna, in efficitur tellus feugiat vehicula. Fusce tempus, mi eget rutrum convallis, augue augue fermentum dolor, in pretium odio arcu quis ligula. Aenean pellentesque cursus massa, ac pretium magna ultrices hendrerit. Quisque non diam mi. Curabitur libero nibh, porta nec sapien a, varius euismod erat. Nunc eros nisl, pellentesque ac bibendum sed, ornare eu tellus. Fusce in tellus turpis. Aliquam hendrerit malesuada purus, et efficitur massa egestas sit amet. Etiam sed mauris vel est facilisis rutrum gravida sed nibh. Donec vel lacinia velit, eget fermentum neque. Morbi in velit dui. Mauris a interdum massa, id varius ex. Pellentesque at felis dapibus, cursus dolor at, condimentum erat. Etiam et venenatis lacus, at ultricies lacus. Donec cursus volutpat egestas. Nam ut sem libero. Vestibulum rutrum interdum metus a malesuada. Sed tincidunt id arcu sed dictum. Suspendisse elit lorem, semper ac pulvinar ac, fringilla ac leo. Praesent a turpis nulla. Nulla in venenatis magna, et euismod lacus. Nulla aliquet, enim eu dapibus accumsan, elit dui mattis enim, lacinia euismod risus magna at velit. Morbi et egestas erat. Integer dapibus nisl ac lorem porttitor suscipit. Nullam vel elementum velit."
let loremCount = lorem.split(' ').length;
console.log (loremCount)
//BONUS 2
function checkRev(phraseToCheck, otro) {
  let reverseString = otro.split('').reverse().join('')
  if (phraseToCheck===reverseString){
    console.log ("Es palíndromo")
  } else {
  console.log ("No es palíndromo")
}
}
checkRev("amor", "roma")