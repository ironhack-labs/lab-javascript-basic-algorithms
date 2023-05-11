let hacker1 = `Hadrien`
let hacker2 = `Franklin`

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)


if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if(hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
}


let spaceName = ``
for(let i=0; i<hacker1.length;i++) {
  if(i===hacker1.length) {
    break;
  }
  spaceName += `${hacker1[i].toUpperCase()} `
}
console.log(spaceName)

let reverseName = ``
for(let i=hacker1.length-1; i>=0;i--) {
  reverseName += hacker1[i]
}
console.log(reverseName)

if(hacker1.localeCompare(hacker2)===-1) {
  console.log(`The driver's name goes first`)
}
else if(hacker1.localeCompare(hacker2)===1) {
  console.log(`Yo, the navigator goes first, definitely`)
}
else {
  console.log(`What?! You both have the same name?`)
}

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices velit sit amet nisl ullamcorper, sed vehicula orci sodales. Sed id efficitur erat. Curabitur consectetur porttitor rhoncus. Cras efficitur posuere ligula, non rutrum nulla congue molestie. Fusce vel ullamcorper lacus, a facilisis neque. Quisque viverra mauris vitae eros tincidunt, in lobortis orci sollicitudin. Integer faucibus dignissim sem, interdum condimentum dolor sodales quis. Nam fringilla tortor non lobortis pretium. Donec posuere urna sem, non vehicula elit lacinia sed. Nullam at eros in lorem vehicula ultrices facilisis in nunc. Integer urna est, efficitur ut turpis non, sagittis commodo nisi. Quisque malesuada varius dolor, eu luctus ante porta non.

Aliquam erat volutpat. Proin blandit sem erat, non varius nisl posuere pellentesque. Quisque vestibulum euismod lacus at interdum. Sed placerat sapien eget placerat eleifend. Donec pellentesque ipsum vel pellentesque luctus. Nam ac diam pharetra, hendrerit tortor vitae, imperdiet nunc. Integer id ultricies quam, ac faucibus enim. In lobortis fringilla tortor, a consequat dui porttitor nec. In sollicitudin libero nibh. Sed fringilla justo fermentum, pulvinar dui vel, posuere orci. Curabitur sed luctus urna. Pellentesque eu sem sed leo placerat sollicitudin vitae quis nibh. Integer imperdiet lacus nec neque ultrices, quis ultricies metus pharetra. Nunc ultricies ligula dolor, at dignissim orci cursus id. Quisque porta viverra nulla, porta pharetra urna commodo nec.

Proin id sodales dui, ut auctor sem. Sed dapibus finibus tortor sed congue. Nunc tempor nisi in vestibulum facilisis. Pellentesque eu porttitor lacus, id gravida lacus. Nullam suscipit sapien eget dolor mattis eleifend. Morbi pulvinar commodo lorem, sit amet imperdiet lorem placerat at. Aliquam sed ante justo. Phasellus et dui orci.`

let longArray = longText.replace(`\n`, ` `).split(` `)
console.log(longArray.length+1)

/* let counter = 0
for (let i=0; i<longText.length; i++) {
  if(longText[i] === ` ` && longText[i] !== `\n`) {
    counter +=1
  }
}
console.log(counter) */