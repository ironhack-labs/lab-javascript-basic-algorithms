// Iteration 1: Names and Input

let hacker1 = "Luci"
let hacker2 = "Andrei"

console.log(`The driver's name is ${hacker1}`)

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
   } else if(hacker1.length < hacker2.length) {
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    } else if(hacker1.length == hacker2.length) {
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }

// Iteration 3: Loops

let str = ""
for (let i = 0; i < hacker1.length; i++){
  str += hacker1[i] + ' ';
}
console.log(str)

let str2 = ""
for (let i = hacker2.length -1; i >= 0; i--){
  str2 += hacker2[i];
}
console.log(str2)

if (hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first.")
  } else if (hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first definitely.")
  } else {
    console.log("What?! You both have the same name?")
  }

  // Bonus 1

  let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet dapibus erat, sit amet consectetur metus. Maecenas at pharetra est. Aliquam erat volutpat. In sed luctus lectus. Pellentesque quis bibendum erat. Pellentesque vitae viverra leo. Duis finibus ac quam eget faucibus. Mauris ac varius eros. Donec sit amet nisi cursus, ullamcorper metus sed, molestie risus. Nulla faucibus facilisis mauris sed luctus. Duis metus augue, faucibus vitae interdum sit amet, volutpat quis quam. Suspendisse ullamcorper ex aliquet enim tempus, id vehicula risus porta. Nulla in nibh imperdiet, congue felis et, semper felis.

Aenean a metus id mi blandit mollis. Maecenas nec ligula a diam varius vestibulum. Etiam aliquet nisi sed lacus pharetra ultrices. Nullam mollis facilisis dolor, a aliquam mi vehicula eget. Praesent condimentum pellentesque justo, semper tristique lectus venenatis eu. Quisque velit nulla, euismod vitae dui ac, mollis dapibus risus. In venenatis felis scelerisque sapien hendrerit consequat. Ut ipsum metus, consectetur ut nulla ut, mollis cursus nisi. Nullam interdum sapien massa, et rutrum risus placerat sit amet. Sed sollicitudin, ligula in sagittis malesuada, dolor ex blandit elit, ut pretium diam nisl sed magna. In hac habitasse platea dictumst. Duis quis lorem odio. Aliquam erat volutpat. Fusce ullamcorper, lorem vitae posuere facilisis, neque turpis cursus quam, non euismod lacus sapien vel lacus. Sed lacinia sed velit quis bibendum. Suspendisse efficitur pellentesque nibh, ac pretium enim.

Vivamus pulvinar eu erat eu dictum. Donec lobortis nunc ut velit elementum, ac venenatis magna eleifend. Fusce placerat augue nec tellus pulvinar, mollis venenatis velit sollicitudin. Curabitur lobortis tempus turpis, sed molestie tortor vulputate nec. Aliquam scelerisque ornare lacus vel porta. Pellentesque vel tellus ipsum. Donec in orci ac elit tempus posuere. Donec hendrerit fringilla pretium. Proin nec rutrum arcu. Vivamus ut diam varius, bibendum sapien id, efficitur nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis dapibus dictum magna.`

let count = 0;
let split = loremIpsum.split(" ")

for (let i = 0; i <= split.length; i++){
  if (loremIpsum[i])
          count += 1 
}
console.log(count)

let loremIpsumSinComas = loremIpsum.replace(/,/g,` `);
let count2 = 0;
let split2 = loremIpsumSinComas.split(" ")
for (let i = 0; i <= split2.length; i++) {
  if(split2[i] === `et`) 
    count2 += 1;
}
    console.log(count2)