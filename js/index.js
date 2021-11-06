// Iteration 1: Names and Input

let hacker1 = 'Pablo';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Vicente';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1} characters!`);
}

// Iteration 3: Loops

hacker1 = hacker1.split('');
for(let i = 0; i < hacker1.length; i++){
  hacker1[i] = hacker1[i].toUpperCase();
}
hacker1 = hacker1.join(' ');
console.log(hacker1)


let hacker2Backwards = [];
for(let i = hacker2.length; i >= 0; i--){
  hacker2Backwards.push(hacker2[i]);
}
hacker2 = hacker2Backwards.join('');
console.log(hacker2);

hacker1 = 'Pablo';
hacker2 = 'Vicente';

if(hacker1.localeCompare(hacker2) < 0 ) {
  console.log(`The driver's name goes first.`)
} else if (hacker1.localeCompare(hacker2) > 0 ){
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`)
}

//BONUS 1

let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac tempus turpis, eu consectetur odio. Curabitur molestie, sem et dictum facilisis, sapien ante aliquam diam, nec interdum dolor libero eget sapien. Integer viverra blandit lorem eu feugiat. Duis blandit ligula mi, ut molestie leo mattis ac. Quisque fringilla odio sed odio bibendum tempor sed ut turpis. Praesent eget turpis magna. Nam molestie rutrum mauris vel vulputate. Aenean lacinia auctor lectus sed mattis. Fusce eu velit faucibus, fermentum massa eget, dignissim libero. Donec ullamcorper leo arcu, tincidunt luctus sapien tristique at. Proin cursus fermentum finibus. Vivamus porttitor vitae velit et dignissim. Aenean hendrerit, nunc id lacinia tempus, augue elit suscipit lacus, vel sollicitudin nisi velit a diam. 

Proin eget urna non lacus viverra congue. Ut eu est finibus turpis fermentum pretium. Integer vitae urna fermentum nisi tristique interdum. Morbi sodales lorem urna, quis porttitor purus sodales vel. Sed sit amet posuere lectus. Vivamus aliquam tristique consectetur. Quisque tempus suscipit tempus. Vivamus commodo nunc et massa elementum maximus. Aliquam orci nisl, consectetur ac interdum mattis, suscipit at orci. Aliquam erat volutpat. Integer diam neque, lobortis sed pulvinar ut, aliquam quis dolor. Nam pretium massa lobortis diam porttitor ultricies. Sed interdum velit nec mauris fringilla, at faucibus lorem ultricies. Duis tincidunt turpis nec consequat porta.

Aliquam in nunc sit amet nibh congue iaculis. Donec ullamcorper nulla ac mollis tincidunt. Quisque auctor, odio nec facilisis suscipit, risus quam imperdiet justo, nec elementum ante justo ut justo. Pellentesque luctus nulla eu lectus lobortis, et feugiat velit scelerisque. Donec sollicitudin libero vel felis vulputate, vitae rutrum odio ornare. Proin blandit magna a arcu convallis aliquam. Donec mollis vehicula mi id iaculis. Cras augue tortor, porta nec dui et, varius porttitor tortor. Quisque imperdiet nisl non nisl interdum, a convallis orci venenatis. Nulla ornare massa lectus, eget feugiat felis gravida in. Donec sed faucibus tortor. Mauris consequat sapien sed neque gravida facilisis. Quisque ut tellus mattis tellus fermentum finibus non mattis neque.`;

paragraphs = paragraphs.split(/[,\s]/);

function countingWords(arr) {
  let countWords = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i]){
    countWords++;
    }
  }
  return countWords;
}

console.log(countingWords(paragraphs));

let count = 0;

function countEt(arr){
  for (let i = 0; i < arr.length; i++){
    if(arr[i] === 'et'){
      count++;
    }
  }
  return count;
}

console.log(countEt(paragraphs));