// Iteration 1: Names and Input
const hacker1 = `Carlos`;
const hacker2 = `Ana`;
const sayDriver = `The driver's name is ${hacker1}`;
const sayNavigator = `The navigator's name is ${hacker2}`;
console.log(sayDriver);
console.log(sayNavigator);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
    console.log(`The driver has the longest name, it has ${hacker1.length} characters!`);
if (hacker2.length > hacker1.length)
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`);
if (hacker1.length === hacker2.length)
    console.log(`Wow, youz both have equally long names, ${hacker1.length} characters!`);

// Iteration 3: Loops

//3.1
const hacker1toUpperCase = []
for (let index = 0; index < hacker1.length; index++) {
    hacker1toUpperCase.push(hacker1[index].toUpperCase());
}

//3.2
const sayHackerSeparateCapitals = hacker1toUpperCase.toString();
console.log(sayHackerSeparateCapitals);

//3.3
const nameToArray = hacker2.split('');
console.log(nameToArray.reverse().toString());
const arrayNames = [hacker1, hacker2];
arrayNames.sort()

if (arrayNames[0] === arrayNames[1])
    console.log(`What?! You both have the same name?`);
else if (arrayNames[0] === hacker2)
    console.log(`Yo, the navigator goes first definitely`);
else if (arrayNames[0] === hacker1)
    console.log(`The driver's name goes first`);


//Bonus 1
const textParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum placerat varius. Curabitur id
 accumsan lorem, et dapibus justo. Ut congue nulla eget lacus aliquam cursus. Fusce quis est volutpat, interdum odio nec, hendrerit
nisl. Donec at maximus tortor, vel congue augue. Duis convallis consequat purus et ultrices. Sed euismod tellus magna, consequat viverra sapien ornare in.
Pellentesque consequat est at elit fermentum lobortis. Fusce dictum convallis tempus. Curabitur maximus fermentum dui, quis faucibus
dui malesuada in. Aliquam luctus neque et nulla consectetur pellentesque. Vestibulum id enim quis nisi laoreet congue in at quam.
Phasellus fermentum, nibh vitae euismod sodales, nisl lorem consectetur nunc, at sodales leo nisl at mi. Vestibulum ante ipsum 
primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum pellentesque fermentum mi sit amet egestas. Praesent
id porta lorem. Curabitur sagittis turpis vitae congue volutpat. Morbi suscipit, ante vitae porttitor aliquet, mi purus fermentum 
eros, nec iaculis augue lacus id nisi. Fusce et consequat neque. Proin molestie dolor a quam venenatis, vel lobortis orci molestie.
Sed auctor sapien a augue consectetur dignissim vel id libero.
Aenean odio metus, pharetra et dignissim a, sagittis et felis. Maecenas sodales sed velit aliquet molestie. Donec venenatis eros 
eget aliquam commodo. Vivamus interdum, erat nec luctus viverra, turpis lectus vehicula dolor, sed suscipit quam elit a leo. Sed 
aliquet ultrices lacinia. Sed ut mauris libero. In dignissim porta libero, et posuere justo ultrices vel. Proin interdum ipsum sed 
mauris molestie mattis. Ut tincidunt pellentesque tellus et volutpat. Aliquam tincidunt vitae nulla eget finibus. Integer a lectus 
sit amet justo ultricies molestie. Curabitur at erat at diam consectetur fringilla.`


//Function count words
const wordCount = (text) => text.split(" ").length;
console.log(`Text contains ${wordCount(textParagraph)} words!`)


//Function find word et in text
const findWordEt = (text) => text
    .split(" ")
    .filter((word) => word === "et")
    .length

// Bonus -> 2

// Array contains strings to check 
const phraseToCheck = [
    "A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon",
    "Other thing"
];

// Verify if is Palindrome an return true or false
function isPalindrome(text) {
    const textFormated = text.toLowerCase().replace(/[\W_]/g, '')
    const reversedText = textFormated.split('').reverse().join('')
    return reversedText == textFormated
}

// iterate array and verify element is palindrome with isPalindrome function
phraseToCheck.map((element) => {
    isPalindrome(element)
    console.log('Is palindrome', isPalindrome(element))
})