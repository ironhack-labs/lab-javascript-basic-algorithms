// Names and Input

var hacker1 = 'Paula';
console.log('The driver\'s name is ' + hacker1);

var hacker2;
hacker2 = window.prompt('What\'s your name?', 'Navigator\'s name');
console.log('The navigator\'s name is ' + hacker2);


//Conditionals

if (hacker1.length > hacker2.length){
    console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
} else if (hacker2.length > hacker1.length){
    console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
} else {
    console.log('Wow, you both got equally long names, ' + hacker1.length + ' characters!!');
}


//Loops

var nameCapitals = '';
for (var i = 0; i <= hacker1.length - 1; i++){
    var char = hacker1[i].toUpperCase();
    if (i === 0){
        nameCapitals += char;
    } else {
        nameCapitals += ' ' + char;
    }
}
console.log(nameCapitals);

var reverseOrder = '';
for (var j = hacker2.length - 1; j >= 0; j--){
    reverseOrder += hacker2[j];
}
console.log(reverseOrder);


//Lexicographic order

var names = [hacker1, hacker2].sort();
if (names[0] === names[1]){
    console.log('What?! You both got the same name?');
} else if (names[0] === hacker1){
    console.log('The driver\'s name goes first');
} else {
    console.log('Yo, the navigator goes first definitely');
}


// Lorem ipsum generator

var textLorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum velit vel ligula congue, ac lobortis ex tincidunt. Aenean vitae urna et purus cursus feugiat. Phasellus et ipsum tempor, aliquam ligula non, interdum neque. Aenean dignissim ligula ut ex tristique sodales. Proin mattis diam eu leo viverra dictum. Ut dapibus erat sit amet venenatis varius. Phasellus sed ultricies est. Pellentesque laoreet et arcu sed accumsan. Maecenas at mollis odio. Proin sollicitudin tempus finibus. Etiam felis sem, mollis id suscipit eu, cursus non metus. Maecenas consectetur dictum tellus quis hendrerit. Fusce non purus a purus molestie vestibulum eget sit amet felis. Aenean eu elit non orci tristique congue ac in lacus. Nunc vitae erat euismod, ultrices eros eget, tempor orci. Mauris consectetur aliquam molestie. Nullam dolor risus, congue sit amet scelerisque pulvinar, tristique at risus. Nullam pretium pulvinar tellus, et eleifend libero lacinia vitae. Nulla id nisl eu diam imperdiet lobortis vel at magna. Sed pharetra ullamcorper ante in eleifend. Mauris magna nulla, dictum feugiat nunc nec, bibendum maximus augue. Pellentesque vel ultrices sem. Sed eget fermentum purus, nec facilisis urna. Donec molestie turpis non magna condimentum, at faucibus tellus accumsan. In in egestas sem. Integer arcu libero, imperdiet et facilisis et, rutrum sit amet velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae aliquam lacus, sit amet rutrum lacus. Proin metus elit, maximus in arcu ut, rhoncus tincidunt leo. Maecenas elementum suscipit nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis finibus pharetra augue. Aliquam non aliquam mi, id semper lacus. Vestibulum ultrices sagittis placerat. Sed ut nibh consectetur eros egestas fermentum. Morbi luctus risus quam, at sollicitudin felis varius at. Etiam at purus nunc. Mauris ultricies pharetra euismod. Curabitur nulla lorem, ornare id interdum ut, ornare eu dui. Curabitur ut lacus sit amet mi iaculis feugiat sit amet quis enim. Integer vel cursus sapien, eget elementum nisl. Nulla consequat augue ac purus pharetra, nec imperdiet diam ultricies.';

var counterWords = 1;
for (var i = 0; i <= textLorem.length - 1; i++){
    if (textLorem[i] === ' '){
        counterWords += 1;
    }
}
console.log('Number of words: ' + counterWords);

var counterEt = 0;
for (var i = 0; i <= textLorem.length - 1; i++){
    if (textLorem[i]+textLorem[i+1] === 'et'){
        counterEt += 1;
    }
}
console.log('Number of times et appears: ' + counterEt);
