// Iteration 1: Names and Input
const hacker1 = "Andrés"
console.log("The driver's name is " + hacker1)
const hacker2 = "Alexandra"
console.log("The navigator's name is " + hacker2)

console.log(hacker1.length)
console.log(hacker2.length)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, XX characters!`)
}

// Iteration 3: Loops

let hackerCap = hacker1.toUpperCase()
  let horString = ""
  
for (i = 0; i < hackerCap.length;i++) {
  horString += hackerCap[i] + " " 
  }
console.log(horString)

for (i = hacker2.length-1; i >= 0; i--) {
    console.log(hacker2[i])
    }

if (hacker1.localeCompare(hacker2)=== -1) {
  console.log(`The driver's name goes first.`)
} 
else if (hacker1.localeCompare(hacker2) === 1 ) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log (`What?! You both have the same name?`)
}
//Count Par

const threePar = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare odio a convallis bibendum. Duis varius, neque quis suscipit euismod, orci mi ultricies nisl, sit amet tincidunt ex odio et tellus. Aliquam erat volutpat. Pellentesque et turpis commodo, consectetur nibh vel, placerat risus. Pellentesque sapien nisi, lacinia ac cursus ut, aliquet ut leo. Pellentesque fermentum auctor odio ac malesuada. Aliquam at ante eget justo scelerisque fermentum. Praesent iaculis quam nulla, ac porta elit vestibulum in. Aliquam erat volutpat. Maecenas bibendum ante urna, a posuere tellus molestie nec. Nunc consequat sem eu erat lacinia, vitae feugiat erat dictum. Duis faucibus id libero in lacinia. In quis luctus nisl, quis elementum nulla. Suspendisse iaculis blandit ipsum et pretium. Nullam eu lorem egestas, ultrices mauris at, lacinia nibh. Suspendisse non hendrerit lorem. Sed rutrum elementum nibh id tristique. Donec congue, enim sed efficitur eleifend, nulla ipsum facilisis magna, a tempus lorem nunc nec ante. Nunc nec magna et massa ullamcorper rhoncus quis a libero. In accumsan consequat mi, ac bibendum neque. Pellentesque porttitor id sapien sit amet hendrerit. Phasellus at fermentum lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras aliquet ligula non quam feugiat sodales. Mauris pulvinar in libero ac ornare. Cras ac porta tortor, non mollis dui. Fusce tristique turpis eu dolor suscipit sagittis. Mauris fermentum, nisi nec dapibus aliquet, augue risus elementum ante, vel tincidunt enim massa quis tellus. Cras accumsan sodales semper. Suspendisse euismod mauris eu cursus tincidunt. Etiam vel libero et tortor tempus bibendum. Donec vitae lobortis diam. Integer sit amet facilisis turpis. Fusce sodales nibh diam, vitae molestie neque pharetra vel."

let count = threePar.length
console.log(count)
let totalEt = 0

for (i = 0; i < count; i++) {
  if (threePar[i] + threePar[i+1] === "et") {
    totalEt++
  }
}
console.log(totalEt)

// palindrome

