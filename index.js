// Iteration 1: Names and Input

const hacker1 = 'Jose';
const hacker2 = 'Manuel';

console.log (`The driver's name is ${hacker1}.`)

console.log (`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals



if (hacker1.length > hacker2.length ){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker1.length < hacker2.length ){
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}




// Iteration 3: Loops

let newHacker = '';

for (let i=0; i < hacker1.length; i++){
    newHacker += (hacker1 [i]) +" ";
}
console.log(newHacker.toUpperCase())



let reverseHacker = '';


for( let j=hacker2.length-1; j >=0; j-- ){
    reverseHacker += (hacker2[j])
}
console.log (reverseHacker)


if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.")
  } else {
      console.log("What?! You both have the same name?")
  }


  //Bonus 1:

 const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nibh nec neque ornare elementum. Etiam vitae posuere nisi, ac mattis dui. Etiam eget fringilla nunc. Integer accumsan purus vel felis suscipit congue sed eget urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin commodo tellus consequat, molestie arcu in, tincidunt lectus. Phasellus maximus tempor interdum. Maecenas a semper diam, a cursus dui. Praesent eu diam vitae est sagittis sodales.Sed semper eu nulla a tristique. Fusce rhoncus massa in nulla sagittis volutpat. Cras quis tellus et erat dignissim placerat at id orci. Etiam eget cursus neque, in viverra urna. Vivamus sed libero eu risus tincidunt dapibus. Nulla quis lectus a enim pulvinar vulputate. Curabitur nec odio interdum, tempus quam eu, ultricies magna. Phasellus varius ligula non lacus porttitor euismod. Phasellus vel diam vitae sem consequat scelerisque. Nunc neque mauris, egestas eget aliquet eget, congue in dui. Fusce a mauris interdum, pharetra sem ac, dictum sapien. Aliquam consequat ligula justo, ut malesuada lacus condimentum quis. Nunc ut maximus est. Aliquam erat volutpat. Aliquam tristique convallis nisl, sed suscipit arcu imperdiet eget. Cras mauris ligula, varius sit amet lacus ac, mattis consequat urna. Aenean nec elit et magna pretium placerat. Proin interdum sapien sit amet purus ultricies pulvinar. Vivamus pretium eros pharetra, aliquet nisi nec, porttitor diam. Fusce vel commodo urna. Ut ullamcorper turpis eu felis venenatis rutrum. In luctus tempus sem in laoreet. Suspendisse tincidunt aliquet dolor eu rhoncus.';

function numberOfWords(longText) {
    let count = 0;
    let check = false;

    for (let k = 0; k < longText.length; k++) {
        if (longText[k] !== ' ' && !check) {
            count++;
            check = true;
        } else if (longText[k] === ' ') {
            check = false;
        }
    }

    return count;
}


console.log("Word count:", numberOfWords(longText));

