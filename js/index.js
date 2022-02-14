// Iteration 1: Names and Input

let hacker1 = "Jaime"

console.log ("The driver's name is" + hacker1)

let hacker2 = "Amy"

console.log ("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length){
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {`Wow, you both have equally long names, ${hacker1.length} characters!`}


// Iteration 3: Loops

let allCapsDrivers = " "

for (let i=0; i<hacker1.length; i++){
    allCapsDrivers += hacker1[i].toUpperCase() + " "
};

console.log(allCapsDrivers);

let reverseNavigatorName = " "

for (let i = hacker2.length -1; i>=0; i--){
    reverseNavigatorName+= hacker2[i]
};

console.log (reverseNavigatorName)

if(hacker1===hacker2){
    console.log ("What?! You both have the same name?")
} else if (hacker1<hacker2){
    console.log ("The driver's name goes first.")
} else {
    console.log ("Yo, the navigator goes first definitely.")
}

// Bonus 1

let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis dictum ullamcorper. Donec a finibus elit. Sed ex est, ullamcorper vitae facilisis in, rhoncus vitae lorem. Vivamus accumsan scelerisque pellentesque. Vivamus lorem tortor, tempor vitae feugiat ut, tempor scelerisque lacus. Aenean id viverra lectus. Nunc condimentum elementum elit vel facilisis. Praesent laoreet eros eget accumsan rhoncus. Mauris sit amet cursus tellus. Quisque tempus, nisi a congue vehicula, lacus dui dignissim mauris, a posuere tellus nisi at magna. Quisque sit amet mollis risus. Maecenas in magna gravida, varius erat sed, lacinia magna. Quisque pretium nibh et libero pharetra sollicitudin. In hac habitasse platea dictumst. Duis neque diam, blandit at tristique nec, consectetur et sapien. Integer non nunc at purus auctor ultricies.
Praesent consequat efficitur mi vel tempus. Curabitur sit amet nibh feugiat, scelerisque arcu quis, sagittis eros. Fusce dignissim posuere mi, sit amet pulvinar magna vestibulum ac. Aenean eget turpis tortor. In hac habitasse platea dictumst. Fusce libero sapien, varius et tortor quis, tristique fermentum erat. Suspendisse maximus laoreet ligula. Curabitur viverra ac urna id bibendum. Vestibulum at lorem a augue ultrices pretium sit amet a lacus. Nam luctus semper sagittis. Etiam diam felis, sagittis vitae leo ut, porttitor tincidunt est. Praesent convallis commodo fringilla. Suspendisse congue pulvinar nisi, at aliquam mauris vestibulum ac. Maecenas maximus, tellus in interdum faucibus, nibh odio posuere odio, a varius magna enim non mi. Sed eu justo sit amet turpis sagittis hendrerit. Proin nunc sem, ultrices vitae venenatis in, placerat quis dolor.
Nullam pretium euismod ante, sed vestibulum quam tincidunt at. Donec et varius ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam rhoncus elit magna, ac placerat sapien tempor non. Maecenas suscipit malesuada velit, ac pretium neque efficitur ac. Nunc maximus pellentesque cursus. Quisque vitae arcu libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis at euismod eros. Donec eros lectus, facilisis quis nulla in, hendrerit ultricies lorem. Cras nec pulvinar leo. Donec convallis auctor suscipit.`


let etCount = 0

for (let i=0; i<wordsInText.length; i++) {
    if (text[i]=== 'et'|| text[i] === 'Et') {
        etCount++ 
    }
}

console.log (etCount)

let wordCount = text.split(" ")

console.log (wordCount.length)



// Bonus 2

