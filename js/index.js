//console.log("I´m ready!")

let hacker1 = "Ana"
  console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Tobias";
    console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length === hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

}
else if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length}characters.`)
}

 
    
let driverName = hacker1.split("").join(" ");
let upperCased = driverName.toUpperCase();
console.log(upperCased);


function reverseNav(hacker2) {
  let reverseHacker = " ";
  for (var i = hacker2.length - 1; i >= 0; i--) {
      reverseHacker += hacker2[i];
  }
  return reverseHacker
  
}
let finalReverse = reverseNav(hacker2)
console.log(finalReverse)


let driverFirstLetter = hacker1.charAt(0)
let navigatorFirstLetter = hacker2.charAt(0)
if (driverFirstLetter === navigatorFirstLetter ){
  console.log("What?! You both have the same name?")
}
else if(driverFirstLetter < navigatorFirstLetter ){
  console.log("The driver's name goes first")
}
else if(driverFirstLetter > navigatorFirstLetter ){
  console.log("Yo, the navigator goes first definitely.")
}

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia pretium tellus, eget efficitur felis lacinia ac. Nullam in dapibus velit, ac suscipit urna. Proin ultricies, augue nec varius consectetur, ante arcu scelerisque risus, et commodo lorem nunc at est. Vivamus venenatis lobortis lectus sit amet gravida. Nullam fringilla auctor suscipit. Aliquam dapibus urna eu ligula faucibus commodo. Vivamus nibh tortor, auctor nec sapien eget, aliquam pharetra dui. Nunc metus ex, commodo et pretium et, cursus vel velit. Vestibulum dui massa, mattis vel orci ut, gravida cursus lorem. In hac habitasse platea dictumst. Pellentesque convallis ut turpis et commodo. Quisque varius leo id libero efficitur, et interdum nisl porttitor. Aenean malesuada imperdiet massa.

Duis quis dolor lacus. Aliquam erat volutpat. Duis dapibus lacus diam, elementum facilisis libero aliquet eget. Morbi in felis vel sem varius pretium. Sed aliquam vitae mauris ut sodales. Curabitur maximus ex urna. Sed a hendrerit mi. Nunc feugiat justo placerat maximus molestie.

Aenean magna nibh, vehicula non sodales quis, vestibulum lacinia velit. Donec id turpis nibh. Sed eget justo maximus ligula mollis auctor. Integer ligula diam, faucibus ac sapien sed, commodo euismod nulla. Duis quis commodo eros. Cras tempus, lacus in faucibus convallis, nunc erat eleifend risus, eu laoreet est diam sed turpis. Ut sagittis viverra ligula, a tempus nunc congue sed. Duis a ipsum sit amet ante accumsan rhoncus id at augue. Aenean eu ultrices felis, in fermentum nibh. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`

function WordCount(lorem) { 
  return lorem.split(" ").length;
}
console.log(WordCount(lorem));