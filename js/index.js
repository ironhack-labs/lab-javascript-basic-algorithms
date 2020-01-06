// Iteration 1: Names and Input

const hacker1 = "Alfonso"
console.log(`The driver´s name is ${hacker1}`)

const hacker2 = "Victor"
console.log(`The navigator´s name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

console.log(
    hacker1.toUpperCase()
           .split("")
           .join(" ")
  )
  
  console.log(
    hacker2.split("")
           .reverse()
           .join("")
  )
  
  
  if (hacker1.charCodeAt(0) < hacker2.charCodeAt(0)) {
     console.log('The driver´s name goes first')
  } else if (hacker1.charCodeAt(0) > hacker2.charCodeAt(0)) {
    console.log('Yo, the navigator goes first definitely.')
  } else {
    console.log('What?! You both have the same name?')
  }

// Bonus 1

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt, eros sed blandit tempor, nunc est accumsan massa, id scelerisque tortor tortor non odio. Nunc eleifend mi tortor, malesuada porttitor mauris viverra ac. Sed ut quam ligula. Vivamus congue pretium arcu aliquam venenatis. Sed vehicula elit nunc, sit amet pulvinar nunc mollis maximus. Sed fringilla eleifend sapien, quis viverra metus facilisis at. Aenean consequat suscipit maximus. Nunc eu quam nec tellus pulvinar feugiat. Quisque id nunc fringilla, facilisis libero tristique, viverra leo. Donec eu est ut turpis facilisis tristique a vel quam. Vestibulum elementum rhoncus lectus a tempor. Etiam sit amet libero eu odio aliquam gravida et varius orci. Nunc risus libero, ullamcorper et arcu at, tempor mollis ipsum.

Proin dolor nisi, vestibulum a consequat eget, tristique ut justo. Maecenas at sollicitudin lectus. Quisque tempor quam urna, eget scelerisque magna volutpat ut. In ornare leo libero, porta porta nunc imperdiet vitae. Suspendisse rhoncus, lectus id condimentum euismod, arcu tortor mattis dui, vitae pretium magna ligula vitae sapien. Aenean vestibulum nibh nibh, id sollicitudin magna tempus sit amet. Phasellus eu tellus nunc. Quisque lobortis, ligula eu posuere viverra, urna diam consectetur ante, eu tristique eros sapien ac diam. Proin bibendum eros sit amet sapien cursus ullamcorper.

Nulla ut tempor ante, nec sollicitudin ligula. Nam blandit lacus et pulvinar imperdiet. Nulla pretium tellus ut ligula vehicula porta. Integer vel elit consequat, tincidunt purus id, blandit mi. Nam placerat vitae eros vitae suscipit. Ut vulputate magna id massa pretium feugiat. Nullam blandit et elit ut imperdiet. Donec ultricies in ipsum nec vehicula. Proin sagittis turpis non laoreet scelerisque. Phasellus eu pharetra odio. Nunc non volutpat lectus, nec efficitur nibh. Suspendisse vestibulum, nibh a rhoncus tristique, tellus nunc vulputate sem, luctus accumsan massa ex vel nibh.`

console.log(
  lorem.split(' ')
       .length
)

console.log(
  lorem.match(/et/g)
       .length
)

// Bonus 2

const phraseToCheck = `No 'x' in Nixon`
const newPhrase = phraseToCheck.toLowerCase()
                               .match(/[a-z]/g)
                               .join('')



if (newPhrase === newPhrase.split('').reverse().join('')) {
  console.log('Palindrome!')
} else {
  console.log('Not a Palindrome!')
}