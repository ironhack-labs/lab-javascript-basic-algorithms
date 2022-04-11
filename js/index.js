// Iteration 1: Names and Input
//
let hacker1 = 'João Antunes'

console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'João Morgado'

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length}`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`);
} else if (hacker1.length === hacker2.length) { 
    console.log(`Wow, you both have equally long names, ${hacker1.length}` );
}


// Iteration 3: Loops

// 3.1
let upperName1 = '';



for (let i = 0; i <= hacker1.length -1; i++){
    upperName1 += hacker1[i] + ' ';
}

console.log(upperName1.toUpperCase())

//3.2
let upperName2 = '';

for (let i = hacker2.length -1; i >= 0 ; i--){
    upperName2 += hacker2[i];
}

console.log(upperName2)

//3.3

let lexicOrder = hacker1.localeCompare(hacker2);

if (lexicOrder = -1) {
    console.log("The driver's name goes first.");
} else if (lexicOrder = 1){
    console.log("Yo, the navigator goes first definitely.");
} else if (lexicOrder = 0) { 
    console.log("What?! You both have the same name?");
}

// Bonus 1

// Count Words - 280

function getWordCount(str) {
    return str.split(' ')
      .filter(function(n) { return n != '' })
      .length;
}

const sent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel mattis augue, at dignissim lectus. Maecenas interdum, felis vitae eleifend bibendum, purus felis ultrices leo, rhoncus tristique lorem ex venenatis dolor. Aliquam ac faucibus orci. Praesent id ex gravida, rutrum felis eget, ultricies nunc. Morbi auctor lorem metus, eu tempor velit ornare fringilla. Nulla sit amet elit quis massa malesuada vestibulum sed sed dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent efficitur in mi vel vehicula. Aenean condimentum, diam sagittis vulputate convallis, nunc mi dignissim diam, sed maximus erat elit id metus. Donec et dignissim eros. Pellentesque hendrerit a arcu in pretium. Vivamus erat enim, cursus non lacus placerat, mollis porttitor urna. Nullam id porta odio, id laoreet mi. Aliquam malesuada nisl tortor, at aliquet elit euismod eu. Donec suscipit porttitor rhoncus. Nulla a tellus ante. Vivamus quis augue nisl. Vivamus vitae tincidunt magna, at pharetra purus. Pellentesque in quam gravida, tincidunt nisi eu, faucibus ex. Curabitur a ornare dolor, id pulvinar quam. Integer elementum porttitor purus, eget dapibus est. Nunc sapien tellus, mattis egestas lectus id, dictum congue lectus. Mauris hendrerit luctus tortor, sit amet dignissim sapien finibus nec. Morbi pulvinar hendrerit felis vitae sodales. Suspendisse potenti. Phasellus dapibus augue quis lorem laoreet, id gravida mi consectetur. Maecenas facilisis pulvinar sem quis ullamcorper. Ut varius, leo a placerat vehicula, ligula velit malesuada tortor, a maximus augue leo sed justo. Ut tincidunt eget eros eget auctor. Morbi maximus pretium urna quis maximus. In nec mauris dignissim, pretium nisl a, malesuada leo. Donec consectetur enim et venenatis imperdiet. Aenean magna lectus, dictum sed convallis sit amet, hendrerit eget metus. Sed porttitor id nunc non ultricies.';


console.log(getWordCount(sent));

// Count number of times 'et' appears

function countOccurences(string, word) {
    return string.split(word).length - 1;
 }
 var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel mattis augue, at dignissim lectus. Maecenas interdum, felis vitae eleifend bibendum, purus felis ultrices leo, rhoncus tristique lorem ex venenatis dolor. Aliquam ac faucibus orci. Praesent id ex gravida, rutrum felis eget, ultricies nunc. Morbi auctor lorem metus, eu tempor velit ornare fringilla. Nulla sit amet elit quis massa malesuada vestibulum sed sed dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent efficitur in mi vel vehicula. Aenean condimentum, diam sagittis vulputate convallis, nunc mi dignissim diam, sed maximus erat elit id metus. Donec et dignissim eros. Pellentesque hendrerit a arcu in pretium. Vivamus erat enim, cursus non lacus placerat, mollis porttitor urna. Nullam id porta odio, id laoreet mi. Aliquam malesuada nisl tortor, at aliquet elit euismod eu. Donec suscipit porttitor rhoncus. Nulla a tellus ante. Vivamus quis augue nisl. Vivamus vitae tincidunt magna, at pharetra purus. Pellentesque in quam gravida, tincidunt nisi eu, faucibus ex. Curabitur a ornare dolor, id pulvinar quam. Integer elementum porttitor purus, eget dapibus est. Nunc sapien tellus, mattis egestas lectus id, dictum congue lectus. Mauris hendrerit luctus tortor, sit amet dignissim sapien finibus nec. Morbi pulvinar hendrerit felis vitae sodales. Suspendisse potenti. Phasellus dapibus augue quis lorem laoreet, id gravida mi consectetur. Maecenas facilisis pulvinar sem quis ullamcorper. Ut varius, leo a placerat vehicula, ligula velit malesuada tortor, a maximus augue leo sed justo. Ut tincidunt eget eros eget auctor. Morbi maximus pretium urna quis maximus. In nec mauris dignissim, pretium nisl a, malesuada leo. Donec consectetur enim et venenatis imperdiet. Aenean magna lectus, dictum sed convallis sit amet, hendrerit eget metus. Sed porttitor id nunc non ultricies.';
 var count=countOccurences(text,"et");

 console.log(count);