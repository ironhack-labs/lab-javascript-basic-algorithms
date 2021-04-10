/*Iteration 1: Names and Input */console.log("- - - - - - - Iteration 1: Names and Input - - - - - - -" )


let hacker1 = "Mark";
console.log(`1.2 The driver's name is ${hacker1}`);

let hacker2 = "Dave";
console.log(`1.4 The navigator's name is ${hacker2}`);




/*   Iteration 2: Conditionals.     */ console.log("- - - - - - - Iteration 2: Conditionals - - - - - - -" )

if (hacker1.length > hacker2.length) {
  console.log(`2.1 The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
  console.log(`2.1  It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`2.1  Wow, you both have equally long names, ${hacker1.length} characters!`)
}

/*   Iteration 3: Loops     */ console.log("- - - - - - - Iteration 3: Loops - - - - - - -" )


//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

hacker1 = hacker1.split('')
console.log("3.1", hacker1)


//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

//FAIL - I couldn't find a possible solution for this. 
console.log("3.2 FAIL :(")

/* 3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */

if (hacker1 < hacker2){
  console.log("3.3 The driver's name goes first.")
} else if (hacker1 > hacker2){
  console.log("3.3 Yo, the navigator goes first definitely.")
} else {
  console.log("3.3 What?! You both have the same name?")
}




/*   BONUS    */ console.log("- - - - - - - BONUS - - - - - - -" )

let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit dui sit amet odio mollis, vitae imperdiet orci ullamcorper. Proin faucibus faucibus consequat. Pellentesque semper est nisi, nec convallis magna lacinia ut. Praesent neque mi, bibendum in bibendum efficitur, imperdiet non libero. Suspendisse vel sapien justo. Quisque quis mauris porta, aliquet ex sit amet, fermentum nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer ullamcorper tincidunt quam, nec interdum magna ornare sit amet. Donec vel felis malesuada, sagittis augue ut, egestas metus. Phasellus ac sapien finibus, scelerisque justo non, luctus risus. Etiam efficitur volutpat enim, in commodo tellus finibus vel. Curabitur at turpis urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras sit amet tincidunt tellus.

Suspendisse ornare congue dolor, at semper lorem consectetur at. Mauris sit amet nisl vitae elit condimentum mattis. Mauris semper diam metus, ac luctus lectus accumsan non. Aliquam facilisis ipsum nec gravida consectetur. Nulla feugiat a erat vitae pharetra. Sed iaculis dictum diam, nec maximus magna dictum eget. In lorem elit, viverra et eleifend a, mollis sed risus. Vestibulum sed blandit nisl. Aliquam lectus mi, rutrum tempor gravida non, elementum eget eros. Nulla et nibh at mi scelerisque volutpat in vel turpis. Fusce tristique ligula quis vehicula placerat. Maecenas tristique lectus finibus sem aliquet finibus. In pharetra elit sit amet velit laoreet, non consequat ipsum blandit. Nam ac suscipit sem. Sed ut arcu id nunc pharetra scelerisque.

Cras semper mauris at ultricies ultricies. Praesent sodales mattis sem in lobortis. Donec vehicula tortor non porttitor tempor. In luctus ex quis elit euismod finibus. Fusce consectetur pulvinar ultricies. Ut imperdiet quam nec nisi congue, vel blandit nisi venenatis. Phasellus a vehicula dui. Cras quis tortor consectetur, egestas diam at, tempor ex. Mauris eget libero nisi. Quisque eleifend, elit a rutrum bibendum, mauris eros consequat magna, non aliquet tortor ante at nunc. Curabitur fringilla eros a pulvinar fermentum. Praesent ornare tincidunt erat, a eleifend quam accumsan non. Pellentesque volutpat ex augue, a vulputate sapien vestibulum pharetra.`

  let wordCounter = paragraphs.split(' ').length;
  console.log(`Bonus 1: Paragraphs has ${wordCounter} words`);

  let wordFinder = paragraphs.search("et")
  console.log(`Bonus 2: Our pharagraphs have ${wordFinder} times the word "et"`)