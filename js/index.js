// Iteration 1: Names and Input
let driver = "Alex";
let navigator = "Laura";

console.log(`The driver's name is ${driver}`);
console.log(`The navigotr's name is ${navigator}`);

// Iteration 2: Conditionals
if (driver.length > navigator.length) {
    console.log(`Driver has a longer name, it has ${driver.length} characters`);
} else if (navigator.length > driver.length) {
    console.log(`Navigator has a longer name, it has ${navigator.length} characters`);
} else {
    console.log("Both have same number if characters");
}

// Iteration 3: Loops
for (let i = 0; i < driver.length; i++) {

    console.log(i.toUpperCase);
}
let driverUppercased = driver.toUpperCase();

console.log(driverUppercased.split('').join(' '));

console.log(navigator.split("").reverse().join(""))

//BONUS 
//     Bonus 1: 

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed quam elementum, condimentum nulla eu, tempor erat. Nunc odio ipsum, faucibus vitae odio et, tempor fermentum massa. Suspendisse potenti. Phasellus neque diam, auctor nec odio a, fermentum dapibus augue. Maecenas pretium egestas consequat. Duis efficitur et ipsum in viverra. Aenean libero turpis, fermentum eu sem ut, vulputate pretium dolor. Duis rhoncus dictum massa, ac lacinia augue luctus ut. Vestibulum sapien ipsum, convallis id vulputate sit amet, viverra non nisi. Integer posuere sodales nibh. Cras nec nisi eget lorem efficitur luctus. Donec eget ex venenatis, ullamcorper elit vitae, sodales urna. Vestibulum nulla diam, egestas eu lorem tincidunt, maximus tristique dolor. Integer mollis nulla a dui sollicitudin convallis. Nullam vel posuere lacus. Phasellus in neque sit amet tellus malesuada auctor vel at sapien. Morbi sed justo eros. Vestibulum commodo finibus venenatis. Sed fermentum viverra sodales. In interdum augue erat, auctor ullamcorper ipsum malesuada non. Duis vel mauris eget sapien egestas posuere. Fusce blandit ipsum quis vestibulum commodo. Fusce vestibulum blandit dolor, in euismod nunc aliquam nec."

let loremWords = lorem.split(" ");
console.log(loremWords);

function count() {
    return loremWords.length;
}

count(loremWords);
