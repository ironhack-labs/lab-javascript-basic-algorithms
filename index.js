// Iteration 1: Names and Input
const hacker1= "Leonardo";
const hacker2= "Pedro";
console.log(`The driver name is ${hacker1}, The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
driverCharacters = hacker1.length;
navigatorCharacters = hacker2.length;

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${driverCharacters} characters.`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${navigatorCharacters} characters.`)
} else {console.log(`Wow, you both have equally long names, ${driverCharacters} characters.`)}

// Iteration 3: Loops
let str = '';
let hackerCapital = hacker1.slice(0, 8).toUpperCase();
for(let i = 0;i < hackerCapital.length;i++)
{
    str += hackerCapital[i] +' ';
}console.log(str);
let reverse = '';
for(let i = hacker2.length -1;i >=0;i--){
    reverse += hacker2[i];
}console.log(reverse);

let order= hacker1.localeCompare(hacker2);
if (order <0){
    console.log("The driver's name goes first.")
} else  if(order > 0){
    console.log("Yo, the navigator goes first, definitely.")
} else  {
console.log("What?! You both have the same name?")
}

// Bonus time, Bonus 1
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ligula eget risus tincidunt suscipit. Curabitur nec dui nisi. Vivamus et mi ut quam faucibus iaculis eu eu nibh. In placerat, mauris lacinia vulputate convallis, est nunc dignissim sem, vel vulputate felis enim at leo. Aliquam erat lorem, congue non metus in, posuere sagittis mi. Mauris elementum, metus sed finibus aliquet, tellus leo lobortis diam, sit amet interdum metus metus ac augue. Quisque tincidunt condimentum felis ut dapibus. Duis vitae massa nec metus molestie faucibus et nec tellus. Fusce id risus ligula. Integer quis ornare ipsum. Nulla nec ipsum ac nunc ultricies viverra in vitae purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In augue nunc, rhoncus quis sagittis in, interdum fermentum quam. Sed vel nisl at velit cursus cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam diam metus, condimentum a justo eget, sollicitudin tempor nisi. Praesent ornare velit justo. Pellentesque maximus arcu faucibus magna molestie feugiat. Mauris sit amet ex rutrum, placerat dui id, iaculis ante. Pellentesque nec molestie mi. Aenean eros turpis, scelerisque vitae libero nec, mattis ultricies neque. Vestibulum sed diam nibh. Integer sed neque vel ligula convallis efficitur ut vitae velit. Phasellus non massa enim. Donec consequat tempus lorem, quis blandit lectus tincidunt quis. Etiam arcu magna, suscipit vel elementum ornare, dictum et metus. In condimentum ullamcorper fringilla. Vivamus malesuada justo id mi pellentesque pretium. Donec ut turpis sed sem malesuada consequat vitae eget felis. Praesent sollicitudin finibus ex, sollicitudin euismod lacus elementum congue. Phasellus efficitur metus non elit dignissim, in placerat dui semper. Nullam urna dui, fringilla ut tortor et, vulputate dignissim odio. Maecenas et finibus ante, vitae molestie leo. Aenean blandit dui sit amet luctus pulvinar. Vivamus eu congue lacus. Mauris eu diam vel ex cursus gravida et et ipsum. Ut non sagittis tellus. Duis semper hendrerit lacus, a ullamcorper massa ultricies quis. Nulla pellentesque quam ornare ullamcorper iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus."
console.log(longText.length);

const targetWord = "et";
let count = [];
for (let i = 0; i < longText.length; i++) {
    for (let j = 0; j < targetWord.length; j++) {
        if (longText[i] === targetWord[j]) {
            count++;
            break;
        }
    }
}
console.log(`The character(s) in "${targetWord}" appear(s) ${count} times in the text.`);


