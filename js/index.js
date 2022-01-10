// Iteration 1: Names and Input

let hacker1 = "Tobias"
  console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Ana";
    console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

}
else if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length}characters.`)
}

/* 
I've tried it like this as well: 

let driverNameLength = hacker1.length;
let navigatorNameLength = hacker2.length;

if (driverNameLength < navigatorNameLength) {
  console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`);
}
else if (driverNameLength > navigatorNameLength) {
  console.log(`The driver has the longest name, it has ${driverNameLength} characters.`)
}
else if (driverNameLength == navigatorNameLength) {
  console.log(`Wow, you both have equally long names, ${driverNameLength} characters!`)
} */ 


// Iteration 3: Loops

let driverName = hacker1.split("").join(" ");
let upperCased = driverName.toUpperCase();
console.log(upperCased);

function reverseNav(hacker2) {
  let reverseHacker = " ";
  for (let i = hacker2.length - 1; i >= 0; i--) {
      reverseHacker += hacker2[i];
  }
  return reverseHacker;
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


// Bonus 1 (partial)

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id dui ac nibh dictum commodo at a tortor. Vivamus semper vehicula ipsum, vitae pretium risus suscipit eu. Integer dignissim metus enim, posuere cursus risus fringilla ac. Morbi laoreet purus in augue cursus vulputate sit amet vel justo. Aenean feugiat molestie leo, et euismod lorem malesuada quis. Pellentesque tincidunt elit sit amet lectus sollicitudin imperdiet. Nunc commodo id lacus ut pulvinar. Donec mattis fringilla odio vel placerat. Nulla non euismod orci, ac mattis turpis. Maecenas eget metus a velit blandit efficitur vitae ornare neque. Duis facilisis, metus sit amet rhoncus faucibus, turpis magna vestibulum dui, ac pellentesque orci ex vitae sapien. Ut vel turpis tellus. 
Integer euismod, est at euismod mattis, tortor nisi auctor turpis, at bibendum nisl tortor vel massa. Sed tempus euismod leo, ut ornare lacus vehicula at. Donec facilisis sem quis euismod vestibulum. Ut posuere mi justo, vel ultricies dolor finibus ac. Donec consequat a est non facilisis. Ut sed neque quis massa bibendum iaculis non eget diam. Donec vehicula tortor vitae diam sagittis, sit amet ultricies est aliquet. Ut sem ante, mattis in ante eget, efficitur pulvinar ligula. 
Phasellus ut vestibulum diam. Donec nisi tellus, tempus ut ante a, porta ultricies massa. Duis pretium diam id auctor iaculis. In vulputate nulla sed nisi volutpat mattis. Phasellus luctus maximus metus eget luctus. Pellentesque sollicitudin vel sapien eu elementum. Sed lorem metus, gravida sed lorem interdum, lacinia scelerisque elit. Pellentesque bibendum malesuada elit, et volutpat leo posuere nec. Nulla ut augue sed ante laoreet faucibus rutrum vitae justo. In eget sollicitudin libero, sed consectetur eros. Quisque sed posuere est. Etiam ullamcorper, ipsum vel faucibus rutrum, quam leo consectetur ligula, id viverra nisl tortor id ante. Etiam diam nisl, tempus vel tristique ac, aliquet eget diam. Maecenas facilisis luctus urna, nec maximus nibh facilisis a.`;

function WordCount(lorem) { 
  return lorem.split(" ").length;
}
console.log(WordCount(lorem));