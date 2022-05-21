// Iteration 1: Names and Input
const hacker1 = "kira";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "abhijeet";

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );

// Iteration 3: Loops
//Iteration 3.1
let driversName = "";
for (let index = 0; index < hacker1.length; index++) {
  driversName += hacker1[index].toUpperCase();
  if (index < hacker1.length - 1) {
    driversName += " ";
  }
}
a;
console.log(driversName);

//Iteration 3.2
let navigatorsName = "";
for (index = hacker2.length - 1; index > -1; index--) {
  navigatorsName += hacker2[index];
}
console.log(navigatorsName);

//Iteration 3.3
const lexicographic = "abcdefghijklmnopqrstuvwxyz";

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  for (let index = 0; index < lexicographic.length; index++) {
    if (hacker1[0] === lexicographic[index]) {
      console.log(hacker1 + ", " + hacker2);
      index = lexicographic.length;
    } else if (hacker2[0] === lexicographic[index]) {
      console.log(hacker2 + ", " + hacker1);
      index = lexicographic.length;
    }
  }
}

//Bonus 1
const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui tellus, blandit quis metus non, dapibus tincidunt tortor. Aliquam at purus risus. Cras interdum luctus orci, eget eleifend urna efficitur vitae. In non lectus quam. Etiam sed consectetur risus. Mauris a odio ut lorem pharetra placerat. Praesent ullamcorper ex a purus viverra molestie eu quis metus. Aliquam euismod porta felis non suscipit. Duis pulvinar aliquet malesuada. Nullam dictum enim fermentum dui vulputate, eu auctor libero elementum. Morbi suscipit id risus vitae cursus. Cras viverra ornare tincidunt. Donec commodo quam a nulla vehicula, a iaculis purus vulputate. In et metus vitae massa viverra dignissim. Sed non viverra massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin nec tellus quis velit aliquam scelerisque et vitae odio. Maecenas ut augue sit amet ipsum efficitur ornare elementum eget diam. Curabitur posuere lorem ex, et rhoncus elit porta ac. Proin quam enim, posuere quis condimentum id, cursus faucibus est. Nam auctor metus id commodo feugiat. Nunc vitae suscipit velit. Quisque tempor nisi in libero vestibulum pharetra. Morbi faucibus, felis ut facilisis sollicitudin, leo mi hendrerit lectus, ut imperdiet ligula arcu at nunc. Mauris aliquet, dui ut tincidunt fermentum, ante lectus commodo est, non ornare libero nisi in velit. Quisque ut fringilla nisl. Duis porta urna eros, sed ullamcorper eros fringilla varius. Cras ut sollicitudin est. Vestibulum interdum justo sit amet felis eleifend iaculis. Vivamus tempus consequat enim, ac euismod lacus aliquet vel. Morbi varius luctus enim, a blandit nisi auctor vel. Curabitur vitae risus gravida, consectetur mauris et, lacinia tellus. Vivamus quis lacus mi. Pellentesque rhoncus laoreet dapibus. Duis ultrices lacus turpis, nec consectetur ex lobortis et. Vestibulum sem sapien, sodales et sodales non, efficitur nec sapien. Sed ipsum metus, dapibus a scelerisque quis, vulputate in magna. Quisque viverra augue quis sem aliquam, a venenatis enim eleifend. Donec et urna et odio aliquet pulvinar. Donec dignissim ullamcorper neque at vestibulum. Vestibulum maximus molestie tempor. Nam in rhoncus lacus.";

let count = 0;

for (let i = 0; i < paragraph.length; i++) {
  if (paragraph[i] === " ") {
    count++;
  }
  if (i === paragraph.length - 1) {
    count++;
  }
}

console.log(count);

let countEt = 0;

for (let i = 0; i < paragraph.length; i++) {
  if (paragraph[i] === "e") {
    if (paragraph[i + 1] === "t") {
      if (paragraph[i - 1] === " ") {
        if (
          paragraph[i + 2] === " " ||
          paragraph[i + 2] === "," ||
          paragraph[i + 2] === "."
        ) {
          countEt++;
        }
      }
    }
  }
}
console.log(countEt);
