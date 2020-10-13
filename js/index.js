// Iteration 1: Names and Input
let hacker1 = 'Rodrigo';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Iva';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`Seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}

// Ition 3: s
let nameSpaced = "";
for (let i = 0; i < hacker1.length; i++) {
    nameSpaced += hacker1[i].toUpperCase() + " ";
};
console.log(nameSpaced);

let reversedName = hacker1.split('').reverse().join('');
console.log(reversedName);

let h1 = hacker1.charAt(0);
let h2 = hacker2.charAt(0);
let comparison = h1.localeCompare(h2);

if(comparison === 1) {
    console.log(`Yo, the navigator goes first definitely`);
} else if (comparison === -1) {
    console.log(`The driver's name goes first`);
} else {
    console.log('What?! you both have the same name?')
}

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit enim sed vestibulum interdum. Nam ut diam accumsan, condimentum metus et, gravida justo. Donec fringilla vulputate massa, eu volutpat elit venenatis non. Suspendisse euismod dui id lectus placerat euismod iaculis a nibh. Aenean eu nisl ultricies, pellentesque urna eu, convallis ipsum. Nullam nisl elit, bibendum lobortis orci nec, luctus interdum nisi. Suspendisse lectus quam, porta id tellus eget, posuere vulputate dui. Ut egestas, risus in blandit scelerisque, felis magna maximus risus, semper vulputate mi lacus et tellus. Praesent eget justo eget eros tincidunt suscipit eget vel leo. Donec mattis risus orci, vel aliquam dolor feugiat id. Vestibulum aliquet scelerisque est, sed luctus purus posuere a. Cras dapibus urna metus, in suscipit orci rhoncus vel. Donec ultricies tortor eget justo efficitur, non vestibulum sapien tincidunt. Mauris placerat eleifend sem, sit amet auctor sapien feugiat sit amet. Vestibulum varius ultrices augue fringilla bibendum. Nulla facilisi. Praesent facilisis laoreet lacinia. Mauris quis ipsum augue. Etiam tempus et nunc at imperdiet. Sed et quam congue, cursus diam molestie, venenatis justo. Ut venenatis interdum dictum. Donec ac purus in erat euismod viverra eget vel urna. Duis pharetra velit nec ipsum auctor pretium. Vivamus sollicitudin, velit in mattis hendrerit, lacus massa ultrices magna, ac bibendum arcu tellus iaculis nisi. Integer gravida elit ante, eu varius tellus tristique ut. Phasellus quis commodo urna. Sed quis orci a dui porta dignissim. In non fringilla quam. Aliquam faucibus mattis ex a vulputate. Proin fringilla augue eu viverra tempus. Maecenas non elementum augue. Donec vitae laoreet enim. Duis eget ullamcorper nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Donec sagittis feugiat mi eget eleifend. Donec nec sem felis.";

let loremCount = lorem.split(" ").length;
console.log(loremCount);

let test = "Lorem ipsum dolor sit amet"
letcou