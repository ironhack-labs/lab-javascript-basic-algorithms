// Iteration 1: Names and Input

let hacker1 = 'Joe'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Jane'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker2.length > hacker1.length) {
  console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters`)
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length}`)
}

// Iteration 3: Loops

let x = ""
for (const char of hacker1) {
  x = x + char.toUpperCase() + ' '
}
console.log(x)

let y = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  y = y + hacker2[i]
}
console.log(y)

if (hacker1 < hacker2) {
  console.log('The drivers name goes first.')
}
else if ( hacker2 < hacker1) {
  console.log('Yo, the navigator goes first definetly')
}
else {
  console.log('What?! You both have the same name?')
}

//Bonus 1

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie sed lorem eu mollis. Nullam eu metus erat. Vivamus rhoncus porta erat non porta. Sed consequat nunc elit, imperdiet molestie nulla dictum ac. Vestibulum in enim id nisl mollis hendrerit. Integer vel malesuada elit. Nam at luctus velit. Nulla quis sollicitudin tellus. Aliquam pellentesque, risus ac commodo bibendum, nibh nisi placerat sapien, eu maximus mauris arcu vitae est. Integer accumsan ex vitae erat varius, bibendum pretium orci ornare. Curabitur a massa nec nulla pulvinar aliquam id malesuada lorem. Suspendisse rhoncus nisi a quam sodales, id posuere odio rhoncus. Donec at ante vel felis vulputate egestas. Nunc id condimentum nibh. Donec efficitur enim lectus, sed feugiat nisi vulputate non. Integer vel pharetra odio. Pellentesque sit amet magna ante. Cras congue est eros, a eleifend massa tempus et. Praesent auctor elementum est ac molestie. Praesent fringilla volutpat lacus, a commodo velit volutpat vel. Aenean dictum ligula enim, non mollis odio semper nec. Nullam sem sapien, lacinia at porttitor maximus, ullamcorper sit amet mi. Integer blandit luctus tempor. Donec nec urna lacus. Duis eget bibendum odio. Nunc nisl nibh, hendrerit non libero at, ultricies viverra mauris. Aliquam semper et ipsum eget iaculis. Vivamus rutrum non tortor nec cursus. Praesent mattis urna ut eros vehicula, ac fermentum ligula hendrerit. Morbi interdum risus ac ipsum placerat, eu dictum augue fringilla. Curabitur ac dignissim magna, eget varius purus."
let wordCount = 0;
for (const word in text.split(' ')) {
  wordCount++
}

let etCount = 0;
for (const word of text.split(' ')) {
  if (word == "et") {
    etCount++
  }
}

console.log(`Words: ${wordCount}`)
console.log(`etCount: ${etCount}`)
