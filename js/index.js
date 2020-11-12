// Iteration 1: Names and Input
let hacker1= `Alicia`;
let hacker2=`Inés`;
console.log(`The driver’s name is ${hacker1}`);
console.log(`The navigator’s name is ${hacker2}`);
// Iteration 2: Conditionals
    if(hacker1.length>hacker2.length){
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    }else if(hacker1.length<hacker2.length){
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}  characters.`);
    }else{
        console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
    }
// Iteration 3: Loops
let upperHacker1= hacker1.toUpperCase();
//3.1
console.log(upperHacker1.split(‘’).join(' ‘));
//3.2
console.log(hacker1.split(‘’).reverse().join(‘’));
//3.3
    if (hacker1.localeCompare(hacker2) === -1) {
        console.log(`The driver’s name goes first.`);
    } else if (hacker1.localeCompare(hacker2)===1) {
        console.log(`Yo, the navigator goes first definitely.`);
    } else {
        console.log(`What?! You both have the same name?`)
    };
//  Bonus 1
let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor diam sit amet neque sollicitudin vulputate. Pellentesque nec faucibus elit. Proin at augue urna. Proin eu molestie nisl, id convallis tellus. Curabitur lobortis faucibus mauris vitae elementum. Proin vitae ornare dolor. Sed commodo fringilla nibh, quis dictum dolor. Praesent in dolor vel nulla tincidunt congue ut id tellus. Etiam sed odio quis elit tempus vestibulum volutpat non ligula.
Vestibulum dignissim interdum consectetur. Aenean laoreet in mi sed bibendum. Fusce porttitor a ligula maximus faucibus. Suspendisse eu facilisis tellus, et sollicitudin massa. Vestibulum malesuada consectetur lectus quis tincidunt. Fusce ac metus tincidunt, finibus mi et, ornare enim. Ut ut nisi diam. Suspendisse sollicitudin purus vel dignissim feugiat. Nulla congue neque libero, eu suscipit leo posuere sit amet. Phasellus ornare aliquet fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed iaculis metus at risus aliquet, id vestibulum lacus scelerisque. Proin quis orci non nisi lobortis mollis. Nullam iaculis mi quis tortor feugiat dictum. Sed ultrices libero eget augue varius mattis.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ut condimentum metus, sed vulputate est. Aenean et dolor id dui molestie lacinia eget in magna. Vivamus interdum lacus sed mi rhoncus accumsan. Duis a libero sed sapien interdum cursus nec sodales orci. Morbi ullamcorper ac nisi id suscipit. In nec tincidunt enim, quis lobortis ex. Fusce lobortis purus quis tempor luctus. Vivamus finibus nibh sit amet turpis laoreet, ut facilisis magna bibendum.`;
/* First occurance of the team:
    let counter = 3; // One space for the last word. Two spaces for the breaks.
    console.log(counter);
        for (let i = 0; i <= text.length ; i++) {
            if (text.charAt(i) === ' ‘) {
                counter += 1;
            }
        };
console.log(counter); */
// Second occurance: shorter version
    console.log(text.split(’ ‘).length + 2); // one for count index0. Other for the last word
    console.log(text.split(’ et ‘).length);
// Bonus 2
    /* QUICK VERSION
    let phraseToCheck=`A man, da plan, a canal, Panama!`;
    rawPhraseToCheck= phraseToCheck.replace(/[^0-9a-z]/gi, ‘’).toLowerCase();
    console.log(rawPhraseToCheck);
    reversePhrase=rawPhraseToCheck.split(‘’).reverse().join(‘’);
    console.log(reversePhrase);
    if(rawPhraseToCheck===reversePhrase){
        console.log(`The phrase ' ${phraseToCheck} ' it’s palindrome`);
        return true;
    }else{
        console.log(`The phrase ' ${phraseToCheck} ' isn’t palindrome`);
        return false;
    };*/
    //LOPP VERSION
    let phraseToCheck=`taco cat`;
    rawPhraseToCheck= phraseToCheck.replace(/[^0-9a-z]/gi, ‘’).toLowerCase();
    console.log(rawPhraseToCheck);
    let reversePhrase;
    console.log(rawPhraseToCheck.length);
    for(let i=rawPhraseToCheck.length;i>=0;i--){
    reversePhrase= rawPhraseToCheck + rawPhraseToCheck[i];
    console.log(rawPhraseToCheck[i]);
    }
        if(rawPhraseToCheck===reversePhrase){
            console.log(`The phrase ' ${phraseToCheck} ' it’s palindrome`);
            return true;
        }else{
            console.log(`The phrase ' ${phraseToCheck} ' isn’t palindrome`);
            return false;
        };