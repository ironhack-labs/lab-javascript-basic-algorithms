// Iteration 1: Names and Input
const hacker1 = 'John';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'William';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length)
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if {
    hacker1.length < hacker2.length)
console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
}
else if {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};



// Iteration 3: Loops
let capsSpaceDriver "";
for (let i = 0; i < hacker1.length; i++) {
    capSpaceDriver += hacker1[i].toUpperCase() + " ";
}
console.log(capsSpaceDriver);


let revNavigator = "";
for (let i = hacker2.length; i >= 0; i--) {
    revNavigator += hacker2.charAt(i);
}
console.log(revNavigator);



if (hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first definitely.");
} else if (hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first.");
} else if (hacker1[0] === hacker2[0]) {
    console.log("What?! You both have the same name?");
}



// Bonus 1
let para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique purus a turpis placerat sagittis. Curabitur eu malesuada purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam eget nulla purus. Morbi et ex quis neque dignissim posuere. Nullam vulputate dapibus tellus ut lobortis. Cras dapibus tempus libero vel condimentum. Mauris consectetur ex mi, sed fringilla ipsum euismod vitae. Suspendisse euismod, risus ut tempor accumsan, lorem eros tristique neque, vitae sagittis elit lacus eu diam. Nullam vel lacus augue. Sed sollicitudin posuere nibh, id dignissim magna. Nam facilisis lorem in hendrerit viverra. Pellentesque vitae eros in mi efficitur interdum sit amet eu leo. Donec id felis a justo consequat commodo. Integer accumsan libero felis, ut ultrices ex aliquet ut. Fusce consequat sapien vitae lectus gravida, sit amet sodales tellus laoreet. Sed porttitor, mauris quis laoreet laoreet, velit dolor luctus risus, quis sodales sem dui in nibh. Donec lobortis aliquet molestie. Etiam lectus risus, finibus vitae mollis non, mattis eu nulla. Integer fermentum convallis urna vel efficitur. In lorem odio, pulvinar vel tristique ac, faucibus eu nisl. Vivamus et lectus venenatis, finibus tellus vitae, efficitur elit. Quisque tortor turpis, posuere eget elit sodales, tristique ultrices ex. Phasellus at facilisis massa. Praesent interdum lobortis quam nec luctus. Aliquam sit amet est ultrices urna ultrices tincidunt. Vestibulum vel massa eros. Phasellus felis risus, consequat at elementum ut, pretium non ex. Sed vestibulum tellus metus, at dictum diam dictum eu. Integer tortor libero, pharetra vitae mauris quis, fermentum tempus elit. Sed id turpis sit amet metus semper suscipit.";

function countWords(paragraph) {
    let count = paragraph.split(" ").length;
    console.log(count);
}

countWords(para);


function countEt(paragraph) {
    return paragraph.match(/et/g).length;
}

countEt(para)
console.log(countEt(para));