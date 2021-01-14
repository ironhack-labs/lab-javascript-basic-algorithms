// Iteration 1: Names and Input

let hacker1 = 'Abel'

console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Alejandro'

console.log(`The navigators's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

  }

// Iteration 3: Loops

let separateName = ''

for (let i = 0; i < hacker1.length; i++) {

  separateName += `${hacker1.charAt(i).toUpperCase()} `

}

console.log(separateName)

let reverseName = ''

for (let i = hacker2.length; i >= 0; i--) {

reverseName += hacker2.charAt(i)

}

console.log(reverseName)

switch (hacker1.localeCompare(hacker2)){

    case -1:
      console.log(`The driver's name goes first.`)
      break
  
    case 1:
      console.log(`Yo, the navigator goes first definitely.`)
      break
  
    case 0:
      console.log(`What?! You both have the same name?`)
      break
  }

  // Bonus 1

let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec purus dignissim, ornare nunc quis, maximus mi. Nullam mi est, tempus et sapien at, viverra pellentesque nisi. Suspendisse placerat eget lectus a ultricies. Nulla enim tellus, scelerisque sit amet auctor nec, iaculis ut lacus. Morbi eu elit ac tellus cursus congue vitae ac nunc. Morbi convallis bibendum libero. Maecenas pretium suscipit risus vitae dictum. Suspendisse vel imperdiet mi. Proin sed aliquet urna. Nunc sit amet nulla ipsum. Fusce dui augue, gravida tincidunt diam in, elementum fermentum diam. Curabitur vitae sodales augue. Maecenas sagittis nibh nulla, eu viverra turpis dictum vel. Sed ultricies, nisl at interdum mattis, leo risus molestie leo, vel efficitur dolor turpis quis nunc. Nulla facilisi. Ut ac consequat ligula, in tempus dui. Sed aliquet, ex quis cursus sodales, eros felis dignissim nisl, ut egestas dui nisl et sem. Suspendisse at posuere odio, ac ultrices nibh. Nunc ut nisl ac neque ultrices sagittis. Aliquam elit nunc, tempor dignissim aliquet eleifend, congue sed velit. Ut condimentum ac felis vitae condimentum. Aenean vulputate arcu ac nisi aliquam mollis sed vitae leo. Praesent blandit cursus velit non iaculis. Integer feugiat quam non commodo molestie. Nunc nisl justo, finibus ac diam tempor, fermentum bibendum sem. Etiam accumsan dui sed fringilla porta. Praesent nisl neque, sodales sit amet risus ut, maximus finibus nisi. Cras consequat ultricies vulputate. Fusce id venenatis urna. Vestibulum sollicitudin risus non mauris hendrerit viverra. Donec commodo diam eu nibh consectetur, vitae ultrices quam tincidunt. Nulla placerat enim risus, eu viverra nulla vehicula eu. Etiam dapibus arcu velit, volutpat congue neque sagittis volutpat. Curabitur nibh magna, faucibus a finibus non, consequat eu turpis. Praesent porttitor, sem at consectetur iaculis, ligula erat fringilla nisl, vitae molestie augue erat sit amet elit. Donec mattis at quam quis tristique. Mauris aliquam posuere quam, eget lobortis leo porta ut. Maecenas consequat rhoncus diam in blandit. Aenean vehicula nec est a mollis. Fusce iaculis congue tellus, ac congue sapien hendrerit vitae. ornare odio lectus, quis eleifend arcu porta ac.'

let words = text.split(' ')

console.log(words.length)

