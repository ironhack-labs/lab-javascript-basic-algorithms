// Iteration 1: Names and Input
let hacker1 = 'James'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Micheal'
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
let smallerName = 0;
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    smallerName=hacker1;
}else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    smallerName=hacker2;
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    smallerName=hacker1;
}
// Iteration 3: Loops
let spaceName = ""
for(let i=0; i < hacker1.length; i++){
    spaceName = spaceName + hacker1.charAt(i) + ` `;
}
console.log(spaceName.toUpperCase())
spaceName = ""
for(let i=hacker2.length; i >= 0; i--){
    spaceName = spaceName + hacker2.charAt(i);
}
console.log(spaceName)

if(hacker1.localeCompare(hacker2) < 0){
    console.log(`The driver's name goes first.`)
}else if (hacker1.localeCompare(hacker2) > 0){
    console.log(`Yo, the navigator goes first definitely.`)
}else{
    console.log('What?! You both have the same name?')
}
// let loremPar = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum velit justo, porttitor laoreet nisl blandit a. Proin convallis lectus nec nulla gravida, ut pulvinar odio vestibulum. Quisque quis sagittis ipsum, in auctor eros. Sed consectetur dignissim facilisis. Pellentesque sit amet arcu neque. Vivamus volutpat efficitur mauris a gravida. Curabitur eget felis nec justo vulputate dictum id vitae eros. Nullam non rhoncus neque. Pellentesque quam orci, mollis at lobortis in, sollicitudin vitae quam. Nullam ac magna hendrerit, cursus dui vitae, tristique nisi.  Etiam tempus velit nibh, vitae facilisis elit efficitur quis. Nunc eu lacus ut est ullamcorper finibus faucibus in nisi. Suspendisse lacinia tortor nec libero placerat mattis. Maecenas malesuada leo ac odio dignissim, ut tincidunt mi facilisis. Donec mollis, mauris ultricies aliquam lobortis, lacus augue rhoncus lacus, sit amet blandit erat justo in ipsum. Phasellus ac mauris finibus tellus laoreet rutrum. In non rutrum sapien, ac aliquet lorem. Nullam nulla nisi, commodo a mi vel, ornare blandit ex. Vestibulum eget rhoncus nulla, non mattis velit. Nam in velit est. Morbi nisi dui, euismod quis rhoncus ut, egestas at lorem. Nullam eu dictum mauris. Sed varius tempus ipsum, vitae commodo lectus scelerisque ut. Phasellus vitae velit vitae sapien accumsan molestie. Fusce vitae eleifend tellus, at tincidunt magna. Praesent consectetur posuere metus, et aliquet odio.  Nullam ultrices ex nunc, at pretium neque convallis vitae. Maecenas vitae arcu dui. Integer odio sem, sodales non metus a, vehicula eleifend sem. In in lectus non justo tincidunt tempor eget eget lectus. Proin eget elit tempor, porta nulla et, viverra orci. Sed non arcu fringilla, hendrerit arcu eu, cursus arcu. Vivamus feugiat lectus at enim molestie, eu lacinia lacus tincidunt. Aliquam vehicula augue eget posuere vestibulum. Quisque orci risus, consectetur ac ullamcorper sed, faucibus nec elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`
// let myChange = parseInt(prompt(`type in anything`))
// console.log(myChange);