// Iteration 1: Names and Input
let hacker1 = "jhon"
console.log("The driver's name is " + hacker1)
let hacker2 = "pepe"
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if (hacker1.length == hacker2.length) {

    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
} else if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}
else {

    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}


// Iteration 3: Loops

let formartedName = "";

for (let i = 0; i < hacker1.length; i++) {

    formartedName += hacker1[i].toUpperCase() + " ";
}

console.log(formartedName)

let reverseName = "";
let inicioIndex = hacker2.length - 1

for (let index = inicioIndex; index >= 0; index--) {
    reverseName += hacker2[index] ;
}


console.log(reverseName)


let firstText = "The driver's name goes first."
let secondText = "Yo, the navigator goes first, definitely."
let thirdText = "What?! You both have the same name?"

function compareName(name1, name2) {
    const result = name1.localeCompare(name2, 'es', { sensitivity: 'base' });

  if (result < 0) {
    console.log(firstText);
  } else if (result > 0) {
    console.log(secondText);
  } else {
    console.log(thirdText);
  }

}

compareName(hacker1,hacker2)




let longtext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis sapien eget congue rhoncus. Donec cursus feugiat aliquam. Cras convallis elit et placerat viverra. Donec vitae massa in metus ultrices commodo a in lacus. Cras commodo pretium velit sit amet dignissim. Quisque non condimentum nisi, et fringilla sem. Phasellus vestibulum ligula a finibus egestas. Vestibulum aliquet sem non congue tincidunt. Sed ut bibendum nunc. Morbi consectetur erat eget dui maximus, nec faucibus eros pulvinar. Etiam posuere semper nisi, ut luctus diam ultrices et. Nunc in cursus massa. Nam est purus, laoreet sed varius et, posuere vitae turpis. Ut cursus, odio ut dignissim luctus, risus ligula sodales urna, vel laoreet purus neque ac tellus. Integer pulvinar urna dolor, eu tincidunt tortor sollicitudin id.Quisque lacinia posuere auctor. Nam tempor ultricies venenatis. Proin ut lectus at mi gravida placerat ac et massa. Suspendisse potenti. Proin vitae nulla velit. Morbi et massa ipsum. In quam erat, maximus sit amet volutpat non, porttitor vel leo. Vivamus fringilla sollicitudin laoreet. Mauris non purus ornare, mattis lacus ac, elementum tellus. Maecenas vulputate sed leo eget sodales. Donec quis risus eget nulla pretium consequat in dignissim risus. Donec ornare at eros quis lobortis. Quisque mollis dui et elementum iaculis. Mauris interdum fringilla quam, sit amet vehicula enim vehicula in. Sed commodo molestie enim, ut rhoncus elit congue mollis. Aenean faucibus sapien ut interdum pharetra.Quisque at finibus sem. Integer tempus facilisis turpis ac viverra. Proin vehicula sed metus eget pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla malesuada a sapien id egestas. Cras et eros ultricies, dignissim leo a, maximus velit. Nunc tincidunt tortor vitae libero convallis condimentum. Donec et iaculis leo, id fermentum ipsum. Suspendisse vehicula massa et eros mollis placerat. Ut elit lorem, ultricies malesuada turpis nec, sagittis cursus enim. Suspendisse bibendum urna mauris, sit amet facilisis orci aliquet ac. Aliquam erat volutpat. In volutpat, massa vitae auctor blandit, nisi justo malesuada erat, in luctus arcu massa eget tellus. In consequat accumsan dictum. In libero libero, euismod at lorem nec, luctus dapibus risus."

let countLetter = 0 ;

for (let j = 0; j < longtext.length ; j++){

if(longtext[j] + longtext[j+1] + longtext[j+2] + longtext[j+3] === " et "){
    countLetter++
}

}
console.log(countLetter)