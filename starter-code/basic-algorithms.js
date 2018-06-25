// Names and Input
//1
var hacker1 = 'Núria';
//2
console.log(`The driver\'s name is ${hacker1}`);
//3
var hacker2 = prompt('Whats your name?');
//4
console.log(`The navigator\'s name is ${hacker2}`);

//Conditionals
//5
if(hacker1.length > hacker2.length){
    console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
} else if(hacker2.length > hacker1.length){
    console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
} else {
    console.log('wow, you both got equally long names, ' + hacker1.length + ' characters!!');
}

//6
var str1 = '';
for(var i = 0; i < hacker1.length; i++){
    str1 += hacker1[i].toUpperCase() + ' ';
}
console.log(str1);

//7
var str2 = '';
for(var j = 0; j < hacker2.length; j++){
    str2 = hacker2[j] + str2;
}
console.log(str2);

//8
if(hacker1.localeCompare(hacker2)<0){
    console.log('The driver\'s name goes first');
} else if(hacker1.localeCompare(hacker2)>0){
    console.log('Yo, the navigator goes first definitely');
} else {
    console.log('What?! You both got the same name?');
}

//Palindrome
var possiblePalindrome = prompt('Put a possible palindrome!').replace(/[\.\,\ \!\?\']/g,'').toLowerCase();
var inverted = '';
for(var i = 0; i < possiblePalindrome.length; i++){
    inverted = possiblePalindrome[i] + inverted;
}
if(possiblePalindrome === inverted){
    console.log('It\'s a palidrome!!');
} else {
    console.log('It\'s not a palindrome...');
}

// Lorem ipsum generator
var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat odio ex, consequat scelerisque libero euismod eget. Nulla ac nisi ac felis maximus blandit. Phasellus purus lacus, finibus non nisi ut, pharetra tempor leo. Nulla id augue vel tellus sollicitudin convallis non non mi. Vivamus lectus sapien, porta nec tincidunt vitae, convallis vel nisi. Aliquam efficitur est non nisi auctor, quis consequat est aliquam. In hac habitasse platea dictumst. Curabitur nec laoreet augue. Proin eu arcu sed velit placerat vestibulum. Suspendisse placerat eros eu quam tempus pretium. Cras ultrices vel arcu vitae faucibus. Suspendisse ut molestie orci. Suspendisse ornare tincidunt est, efficitur facilisis nunc hendrerit sed. Nam nec odio sit amet tellus lobortis porta. Aenean tristique mi vitae malesuada varius. \
Cras sodales est in lacus imperdiet, nec fermentum enim auctor. Quisque mattis mattis odio eu luctus. Nullam sagittis massa id vehicula tempus. Cras faucibus tellus vitae tincidunt viverra. Donec eget mi nec mi vestibulum bibendum. Vivamus ultrices ipsum risus, dignissim tempor orci consequat ut. Nam rutrum imperdiet ipsum a aliquam. Aliquam sit amet lacus vel orci accumsan suscipit sit amet in leo. Fusce ullamcorper porta lacus, ac ultrices erat sagittis volutpat. Sed sit amet lorem vitae dolor facilisis elementum non quis diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ut tincidunt sapien. Sed ut ante est. Pellentesque convallis magna ut porttitor commodo. Curabitur quis aliquet tortor. Curabitur tempor rhoncus quam, eu luctus est semper vitae. \
Nam rutrum imperdiet purus ut varius. Nunc congue purus et congue fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus laoreet placerat felis, interdum lobortis augue molestie sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer eu erat pulvinar, luctus neque ut, condimentum orci. Etiam neque ex, imperdiet eget nisi nec, fringilla vulputate tortor. Donec a viverra velit, at lacinia turpis.';
var words = loremIpsum.replace(/[\.\,\!\?\']/g,'').split(' ');
console.log(words.length);
var count = 0;
for (var word in words) {
    if(words[word] === 'et'){
        count++;
    }
}
console.log(count);

