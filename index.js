// Iteration 1: Names and Input
let hacker1 = "John"; 
console.log (`The driver's name is ${hacker1}`);

let hacker2 = "Adam";
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let driver = "Matt";
let navigator = "Adam";

if (driver.length > navigator.length){
  console.log(`The driver has the longest name, it has ${driver.length} characters.`);
} else if (driver.length < navigator.length){
  console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`);
} else {
  console.log (`Wow, you both have equally long names, ${driver.length} characters!`)
}

// Iteration 3: Loops

// 3.1 Uppercase:
let driver = "Matt";
let driverUpperCase = ""

for (let i=0; i < driver.length; i++) {
  driverUpperCase += driver[i] + " ";
}

console.log(driverUpperCase.toUpperCase());

// 3.2 Reversed:
let driver = "Matt";
let driverBackward = ""

for (let j=driver.length - 1; j >= 0; j--) {
  driverBackward += driver[j];
}

console.log(driverBackward) 

// 3.3 Lexicographical Order:

let driver = "Matt";
let navigator = "Mary";

if (driver < navigator) {
  console.log(`The driver's name goes first.`)
} else if (driver > navigator) {
  console.log("Yo, the navigator goes first, definitely.")
} else if (driver == navigator) {
  console.log("What?! You both have the same name?")
}

// Bonus 1: 

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus ex. In iaculis cursus sem malesuada sollicitudin. Duis magna diam, scelerisque vitae nisi vel, ultrices euismod metus. Vivamus odio mauris, convallis vel lacinia nec, tincidunt sit amet magna. Sed vestibulum augue vel odio fermentum elementum quis sagittis ex. Ut urna tellus, maximus ut venenatis et, pretium id quam. Proin at turpis maximus, laoreet risus non, cursus quam. Proin malesuada arcu sagittis lectus hendrerit, non pretium dui semper. Etiam massa sem, venenatis at turpis non, blandit aliquam nulla. Suspendisse non fringilla quam. Phasellus efficitur lobortis neque. Aliquam erat volutpat. Aliquam a sagittis neque, vel ullamcorper arcu. Donec ullamcorper orci ut turpis iaculis, et gravida ligula porta. Vestibulum mauris ex, sollicitudin quis bibendum quis, vestibulum eget tortor. Duis convallis tortor libero, a finibus nulla cursus vel. Maecenas tempus ornare fringilla. Aenean posuere congue fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur eget dignissim mauris. Etiam nec mattis dolor, vitae varius purus. Aenean turpis nunc, iaculis et urna vel, sagittis rhoncus dui. Morbi imperdiet mi libero, quis tempor purus fringilla nec. Aliquam erat volutpat. Donec molestie sit amet orci non sodales. Donec purus est, interdum eget faucibus sit amet, molestie et enim. Nunc magna orci, rutrum eget placerat varius, iaculis eget quam. Nam aliquam metus mi, at luctus nisi blandit in. Mauris consequat, orci ut auctor tempor, augue nunc tristique arcu, eget tempus sem mauris porttitor orci. Praesent maximus in nisi at ultrices. Nam tristique orci lacus, eu egestas nunc ultricies faucibus. Integer consequat, nisl sed bibendum ornare, dolor sem mattis mauris, in pellentesque lorem nisi vel ipsum. Nam pulvinar tortor at luctus eleifend. Mauris vel hendrerit mauris. Mauris varius nisl commodo est ullamcorper, at posuere felis auctor. Integer ut dictum lacus. Duis eget fringilla nibh, vel lacinia nunc. In hac habitasse platea dictumst. Quisque fringilla sem non aliquet faucibus. Mauris convallis egestas risus, et pharetra risus ultrices eget." 

console.log(longText.length); 

let words = 1;
let textArray = Array.from(longText);

for (let i = 0; i < textArray.length; i++){
  if (textArray[i] == " "){
    words ++;
  }
}


console.log(words);


let count = 0;
  for (let i = 0; i < longText.length; i++) {
    const char1 = longText[i];
    const char2 = longText[i + 1];
    
    if (char1 === "e" && char2 === "t") {
      count++;
    };
  };

  console.log(count);