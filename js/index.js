//Iteration 1
let hacker1 = 'fabio'
let hacker2 = 'felipe'

console.log(`The driver's name is ${hacker1} `);
console.log(`The navigator's name is ${hacker2} `);

//Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


//Iteration 3: Loops

let arrayName = [];
for (let i = 0; i < hacker1.length; i++) {
    let letter = hacker1[i];
    letter = letter.toUpperCase();
    //console.log(`${letter}`);
    arrayName.push(letter);
}
console.log(arrayName.join(' '));

//3.2

let arrayName2 = [];
for (let a = hacker2.length; a >= 0; a--) {
    let letter2 = hacker2[a];
    //console.log(`${letter}`);
    arrayName2.push(letter2);
}
console.log(arrayName2.join(''))

// 3.3

let truth = hacker2 > hacker1;
//console.log(truth)
if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`);
} else {
    switch (truth) {
        case true:
            console.log(`The driver's name goes first.`);
            break;
        default:
            console.log(`Yo, the navigator goes first definitely.`);
            break;
    }
}


//Bonus 1:

let paragraph1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt felis magna, et vestibulum risus tincidunt eu. Aenean faucibus varius tortor, sit amet consectetur mi ultricies non. Sed vehicula sollicitudin scelerisque. Nulla iaculis mi nisl, eget condimentum sapien tincidunt id. Cras mattis ante non accumsan scelerisque. Nam hendrerit fringilla purus. Aenean convallis accumsan diam, sit amet lobortis risus convallis eu. Fusce purus erat, sollicitudin eget ante vel, eleifend porttitor orci. Curabitur a ex vestibulum, hendrerit augue blandit, viverra enim. Fusce at convallis magna. Suspendisse erat tellus, feugiat sit amet sodales sit amet, porta nec massa. Nulla rhoncus convallis dapibus. Nam aliquam tortor nec lorem eleifend fringilla. In eget nisl iaculis tortor efficitur pulvinar. Quisque blandit vestibulum odio non commodo. Nulla posuere euismod bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce convallis lacus sed tellus vehicula ultricies. Vestibulum ac interdum nulla, eu laoreet ligula. Ut eget enim lacinia, congue nulla ut, eleifend neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur fermentum vitae erat at condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ac tellus ac magna facilisis tincidunt a et neque. Aenean ex tortor, lobortis eu ligula at, semper vulputate tortor. In rhoncus rutrum finibus. Integer eu augue ante. Etiam eget tortor risus. Nulla at ante ut enim imperdiet venenatis. Maecenas porttitor urna vel nibh consectetur viverra. Quisque at mollis arcu, at bibendum ligula. Proin nibh felis, egestas ut porttitor sed, eleifend nec nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus lectus orci, laoreet a elit eget, molestie lacinia lacus. Nam orci purus, venenatis sit amet massa vitae, fermentum maximus nisi. Mauris porta mi risus, sit amet imperdiet nulla fermentum id.';

paragraph1 = paragraph1.toUpperCase();

let countWords = 1;
let countEt = 0;
for (let u = 0; u < paragraph1.length; u++) {
    if (paragraph1[u] === ' ') {
        countWords++;
    } else if (paragraph1[u] === 'E' && paragraph1[u + 1] === 'T') {
        if (paragraph1[u - 1] === ' ' && paragraph1[u + 2] === ' ') {
            countEt++;
        }
    }
}
console.log(`The paragraph has ${countWords} words`);
console.log(`Found "et" word ${countEt} times on this three paragraphs`)

//BONUS 2