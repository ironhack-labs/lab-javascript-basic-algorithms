// Iteration 1: Names and Input

let hacker1 =  'Malte'; 
console.log(`The drivers name is ${hacker1}`);


let hacker2 =  'Jean'; 
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else if (hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops
let newDriverName = '';
for (let i = 0; i < hacker1.length; i++){
    newDriverName = newDriverName + hacker1[i].toUpperCase() + ' ';
}
hacker1 = newDriverName;
console.log(hacker1)

let newNavigatorsName = '';
for (let j = hacker2.length-1; j > -1; j--){
    newNavigatorsName = newNavigatorsName + hacker2[j];
    console.log(j)

}
console.log(newNavigatorsName)

let driver = 'malte'
let navigator = 'jean'


if (driver[0]< navigator[0]) {
    console.log(`The driver's name goes first.`)
}else if (navigator[0]< driver[0]){
    console.log(`Yo, the navigator goes first definitely.`)
}else{
    console.log(`What?! You both have the same name?`)
}

// Bonus 1 
let LoremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis erat a aliquam luctus. Mauris suscipit tincidunt neque, ultrices efficitur eros imperdiet at. Cras urna nisl, ullamcorper lacinia libero sit amet, ornare ullamcorper nulla. Aenean vestibulum mauris a magna tincidunt, facilisis elementum diam elementum. Quisque vitae eros vel mauris iaculis scelerisque. Fusce purus felis, varius vel volutpat quis, rutrum et purus. Nam sodales nec lectus sit amet rutrum. Quisque urna velit, mattis eget justo eget, rutrum interdum eros. Proin libero mi, auctor sed vestibulum sed, vehicula feugiat mi. Duis ultricies justo mollis neque imperdiet, vel porttitor lectus venenatis.Quisque euismod turpis est, finibus iaculis felis sodales vel. Mauris sed dui massa. Vivamus commodo metus et commodo molestie. Proin ut ipsum id lorem ultricies semper at id lorem. Nunc luctus mi vitae congue egestas. Sed tempus nisi malesuada, viverra turpis at, fermentum ex. Fusce elementum imperdiet eros, id consequat sem dignissim eu. Integer justo sem, consequat vel venenatis et, vulputate in arcu. Etiam quis diam eu enim imperdiet eleifend in quis dui. Quisque tincidunt felis at libero hendrerit molestie. Ut feugiat turpis sapien, sed gravida tellus laoreet ut. Etiam vitae ex non tellus ornare aliquet nec a dui. Maecenas pretium accumsan leo. Vivamus mollis felis nec tellus venenatis, a faucibus augue sollicitudin. Vivamus id nunc nunc. Vestibulum fermentum, elit a pharetra consequat, dolor erat vulputate mi, eu sagittis tellus est vestibulum sem. Sed rutrum neque ut justo sagittis convallis. Proin pretium ex lobortis sodales varius. Proin placerat nulla quis neque ullamcorper aliquet at id velit. In sit amet semper urna. Cras eu enim odio. Suspendisse suscipit leo in est rutrum pretium. Nulla a libero porta, sagittis mi et, pulvinar risus. Nullam nec dignissim neque. Vestibulum lorem orci, porta sit amet risus at, sagittis pellentesque tellus. Suspendisse molestie velit accumsan, vehicula nisl ultrices, consectetur nisi. In mauris nisi, tincidunt id feugiat in, tincidunt mollis magna. Sed non risus non turpis aliquam facilisis. Morbi suscipit dignissim posuere. Etiam risus erat, fringilla ornare sem vitae, ornare imperdiet dolor. Quisque porta ante nec interdum egestas.'
let wordCount = LoremIpsum.split(" ").length-1;
console.log(wordCount);

//Bonus 1 et 

let hasEtInIt = LoremIpsum.split(" et ").length-1;
console.log(hasEtInIt);




