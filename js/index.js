console.clear()
// Iteration 1: Names and Input
let hacker1 = 'Mark';
console.log('The driver\'s name is ' + hacker1);

let hacker2 = 'bMark';
console.log('The navigator\'s name is ' + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops
hacker1 = hacker1.toUpperCase();
let output = "";
for (i = 0; i < hacker1.length; i++) {
    output += hacker1.slice(i, i + 1) + " ";
}
console.log(output.trimEnd());

output = ""
for (i = hacker2.length - 1; i >= 0; i--) {
    output += hacker2.slice(i, i + 1);
}
console.log(output);

hacker2 = hacker2.toUpperCase();
if (hacker1 == hacker2) {
    console.log("What?! You both have the same name?");
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("The driver's name goes first.");
}
let lipsumStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis tortor sed odio dapibus condimentum. Etiam laoreet pretium odio et iaculis. Nullam rhoncus, augue sit amet malesuada feugiat, dolor nisl elementum justo, vitae gravida nisi nibh sit amet ligula. Donec eget elit neque. Sed efficitur quis diam sed mattis. Mauris sed risus quis erat malesuada pharetra molestie vitae lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sit amet volutpat elit, mollis tempus dolor. Aenean nec lectus in enim rhoncus placerat.\b Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris et tortor congue nisl posuere vulputate nec vel ante. Sed eu libero vestibulum orci consequat pellentesque et quis dui. Sed consequat mauris mi, in rhoncus orci ornare id. Nunc in sapien vel urna pellentesque iaculis eu in ex. Nunc hendrerit urna eget libero tempor, non imperdiet tellus semper. Donec eget ornare velit. Quisque tempus urna sit amet ligula posuere, sed condimentum nunc luctus. Fusce non dui quis massa lacinia sollicitudin non eget diam. Aliquam consequat magna vel odio ultricies vulputate. In a bibendum est. Suspendisse in mollis turpis.\b Quisque sed elit diam. Sed varius viverra arcu, eu euismod sapien pharetra at. Nulla ultricies tortor odio, sed venenatis purus auctor semper. Duis sollicitudin varius lacus. Cras non imperdiet quam. Sed in massa ac nibh ornare commodo. Aliquam volutpat mauris quis lectus lobortis, sed luctus libero sollicitudin. Proin ut mattis mauris, vel ornare risus. In bibendum leo neque, at hendrerit tellus euismod vel. Nullam euismod pellentesque congue. Nam non commodo ipsum. Vivamus a tortor sodales, posuere erat ac, tempus metus. Cras aliquet fringilla elit, nec semper nibh sagittis sed. Fusce vitae consectetur sapien. Nunc quam ligula, laoreet eu fringilla vitae, sodales ut sem. Praesent placerat dolor magna, et mollis leo sollicitudin eget."
wordCount = 1
for (i = 0; i < lipsumStr.length; i++) {
    if (lipsumStr.slice(i, i + 1) == " ") {
        wordCount += 1;
    }
}
console.log(`Wordcount is ${wordCount}`)