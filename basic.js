var hacker1 = "Thomas";
console.log(`the driver's name is ${hacker1}`);

var hacker2 = "Sarah";
console.log(`the navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
    console.log(`The driver's name has the longest name it has ${hacker1.length} caracters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`yo, navigator got the longest name, it has ${hacker2.length} caracter`);
} else {
    console.log(`wow you both have equally long names, ${hacker1.length} caracters `);
}

var name = "";
for (let i = 0; i < hacker1.length; i++) {
    name += hacker1[i].toUpperCase() + " ";

}
console.log(name);

var name2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    name2 += hacker2[i];
}

console.log(name2);

var ecurie = [hacker1, hacker2];
var ecurieSorted = ecurie.sort();


if (ecurieSorted[0] === ecurieSorted[1]) {
    console.log("what?! you both got the same name ?");
} else if (ecurieSorted[0] === hacker1) {
    console.log('the driver s name goes first');
} else {
    console.log('the navigator goes first definitely');
}


var loremIpsum= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et sollicitudin arcu, ut mollis eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed accumsan luctus mollis. Nulla ultrices mauris vitae ex condimentum elementum. Aliquam libero tellus, commodo vitae accumsan in, vestibulum eget leo. Etiam blandit libero sit amet ipsum interdum faucibus. Quisque fermentum rutrum velit in luctus. Sed nec elementum sapien. Nullam a sagittis mi. Donec id ultricies nulla. Sed sem purus, venenatis vitae tincidunt vestibulum, pretium nec massa. Quisque vel commodo eros. Praesent varius ex eu porttitor imperdiet."
var nbOfWords =0;
for (let i =0; i< loremIpsum.length; i++){
    if (loremIpsum[i]===" "){
        nbOfWords +=1;
    }
}

console.log(nbOfWords);

var counter =0
for (let i =0; i< loremIpsum.length; i++){
    if (loremIpsum[i]==="e" && loremIpsum[i+1]==="t"){
        counter +=1;
    }
}
console.log(counter);

