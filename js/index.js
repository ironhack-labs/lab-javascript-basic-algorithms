// Iteration 1: Names and Input
let hacker1 = "Luiz";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Felipe";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let message = "";
const lengthName1 = hacker1.length;
const lengthName2 = hacker2.length;

if (lengthName1 > lengthName2) {
    message = `The driver has the longest name, it has ${lengthName1} characters.`;
} else if (lengthName1 < lengthName2) {
    message = `It seems that the navigator has the longest name, it has ${lengthName2} characters.`;
} else {
    message = `Wow, you both have equally long names, ${lengthName1} characters!`;
}
console.log(message);

// Iteration 3: Loops
const hacker1UpperCase = hacker1.toUpperCase();
const hacker2UpperCase = hacker2.toUpperCase();

let newHacker1Name = "";
for (let i = 0; i < hacker1.length; i++){
    newHacker1Name += hacker1UpperCase[i];
    if (i < hacker1.length - 1) {
        newHacker1Name += " ";
    }
}
console.log(`Driver's name, separated by a space and in capitals: ${newHacker1Name}`);

let newHacker2Name = "";
for (i = hacker2.length - 1; i >= 0; i--) {
    newHacker2Name += hacker2[i];
}
console.log(`Navigator's name, in reverse order: ${newHacker2Name}`);

const minLength = Math.min(lengthName1, lengthName2);
message = "";

if (hacker1UpperCase === hacker2UpperCase) {
    message = "What?! You both have the same name?";
} else {
    for (i = 0; i < minLength; i++){
        if (hacker1UpperCase[i] < hacker2UpperCase[i]){
            message = "The driver's name goes first.";
            break;
        } else if (hacker2UpperCase[i] < hacker1UpperCase[i]) {
            message = "Yo, the navigator goes first definitely.";
            break;
        }
    }
    if (message === "") {
        if (lengthName1 < lengthName2) {
            message = "The driver's name goes first.";
        } else {
            message = "Yo, the navigator goes first definitely.";
        }
    }
}
console.log(message);


//Bonus 1
const paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar nec neque ut fringilla. Phasellus sit amet justo ac orci suscipit mollis. Praesent sodales nisl sem, a sollicitudin orci pellentesque quis. Proin eu lacus a quam pretium tempus. Morbi eu sem ac neque condimentum bibendum sit amet scelerisque ligula. Ut eleifend lacus a odio pulvinar interdum. Duis iaculis enim ut tristique porta. Vivamus semper, mauris rutrum efficitur placerat, felis erat elementum lorem, non volutpat risus risus non quam. Curabitur risus nisi, volutpat laoreet magna id, bibendum blandit elit. Aenean malesuada suscipit dolor, tempor suscipit tellus tristique sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
Aenean in iaculis velit, at ornare ex. Fusce volutpat nibh id cursus condimentum. Morbi faucibus sed justo at ultrices. Nullam turpis elit, varius sit amet sapien id, varius ullamcorper augue. Vestibulum eget ullamcorper eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc consequat sagittis tincidunt. Curabitur enim velit, mattis rhoncus erat a, tempor convallis odio. Proin fermentum felis id nisi congue vehicula. Sed vel arcu metus. Ut tempor diam accumsan massa tristique, sit amet maximus eros facilisis. Proin ipsum quam, dignissim quis massa eu, mollis faucibus neque. Nulla commodo ligula sit amet sagittis pharetra. Duis lobortis diam tincidunt lectus luctus semper. Vivamus nibh nisl, porttitor quis aliquet a, aliquet id eros.
Duis luctus ipsum eros, a pulvinar lacus accumsan ut. Duis ultrices ligula vel faucibus tempus. Nam pellentesque quam ut ipsum fermentum, sit amet auctor elit consequat. Quisque volutpat dolor quis ex volutpat volutpat. Maecenas vehicula mi nec eros semper sagittis feugiat eu mauris. Proin eleifend sem eu lacus tempus eleifend. Integer tincidunt magna non neque fringilla lobortis. Sed lobortis ultricies eleifend. Aenean condimentum, tortor id feugiat blandit, est velit sollicitudin nunc, posuere gravida augue tellus at massa. Etiam eu erat ut diam porttitor rutrum. Donec interdum sapien eu risus dignissim, at aliquam justo pellentesque.`;
let countWords = 0;
let countEts = 0;

for (i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i] === " ") {
        countWords++;
    }

    if ((paragraphs[i-1] === " ") && 
        (paragraphs[i] === "e") && 
        (paragraphs[i+1] === "t") && 
        ((paragraphs[i+2] === " ") || (paragraphs[i+2] === ",") || (paragraphs[i+2] === "."))) {
        countEts++;
    }
}
countWords++;
console.log(`Number of Words: ${countWords}`);
console.log(`Number of 'et': ${countEts}`);
