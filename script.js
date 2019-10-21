const hackerOne = 'Sam'
const hackerTwo = 'Thommy'

function someFunc() {
  if (hackerOne.length > hackerTwo.length ) {
    console.log(`the driver has the longest name, he has ${hackerOne.length} characters`)
    } else if (hackerOne.length < hackerTwo.length) {
      console.log(`the navigator has the longest name, he has ${hackerTwo.length} characters!`)
    } else if (hackerOne.length === hackerTwo.length) {
      console.log(`Wow, you both have equally long names ${hackerOne.length} characters!` )
    }

}
function anotherFunc(name) {
const capName = name.toUpperCase()
const splitName = capName.split("").join(' ')
console.log(splitName)
}

function thirdFunc(name) {
  const splitName = hackerTwo.split("");
  const reverseArray = splitName.reverse()
  const joinName = reverseArray.join("")
  console.log(joinName)
}

function lastFunc() {
  if (hackerOne < hackerTwo ) {
    console.log("The driver goes first")
  } else if (hackerOne > hackerTwo) {
    console.log("Yo the navigator goes first definitely")
  } else if (hackerOne === hackerTwo) {
    console.log("What?! you both have the same name?!")
  }
}

someFunc()

anotherFunc(hackerTwo)

thirdFunc(hackerTwo)
 lastFunc()

 const bonus = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lacus eget libero dictum molestie. Ut quis odio ut lorem interdum interdum. Nulla quis erat in metus commodo rutrum faucibus quis arcu. Phasellus sit amet tempus tellus, quis mattis ante. Curabitur pharetra ligula ut nulla blandit molestie. Nam et vulputate erat, in venenatis risus. Nam convallis est metus, eget ornare ligula venenatis quis. Pellentesque quis ultrices nibh, sed tincidunt sem. Curabitur ac nisl vel lectus varius accumsan nec in lectus. Curabitur eros dolor, placerat non metus blandit, congue imperdiet mauris. Aenean quis enim justo. Fusce sapien nulla, pharetra sit amet consectetur id, imperdiet sit amet libero. Aenean varius eget justo sit amet dapibus. Etiam cursus ac tellus elementum facilisis. Fusce ut eros sapien. Pellentesque at ullamcorper justo. Duis ac bibendum dui. Duis sed vulputate nunc, eget lacinia erat. Vivamus dignissim ultrices nunc sodales consequat. Vestibulum at velit lobortis, fringilla lorem nec, elementum enim. Vestibulum nec sapien egestas, dignissim ligula eget, hendrerit ligula. Vestibulum faucibus tristique ultricies. Curabitur malesuada ut ante vitae viverra. Aliquam rhoncus mi mi, et efficitur ante pulvinar et. Nulla ut ipsum id ante elementum commodo id at urna. Nullam non lorem ac erat congue interdum quis quis dui. Nulla risus quam, placerat ut lorem in, sollicitudin aliquam lacus. Etiam ultricies, tortor in tempus aliquet, orci felis interdum justo, at scelerisque nisi ipsum ut arcu. Proin a magna ac velit convallis rhoncus. Donec libero lorem, faucibus nec finibus ut, lobortis sit amet lorem. Donec in accumsan justo. Proin interdum nibh elit, sed cursus enim tempus id. Maecenas tristique ex interdum, finibus neque sed, hendrerit turpis. Praesent efficitur, enim vitae elementum feugiat,  mi lectus laoreet lectus, at vestibulum eros sem in dolor. Nulla cursus lacinia felis, at venenatis odio elementum eget. Quisque erat orci, lobortis quis orci nec, pretium ultrices nibh. Nam euismod arcu quis dolor pellentesque egestas. Donec tempus pharetra metus vel aliquam. Etiam vulputate sollicitudin nisl.  "

function bonusFunc(str){
return str.split(" ").length
}
bonusFunc(bonus)

function bonusFuncTwo(str) {
  const wordArr = str.split(" ")
  let counter = 0
  for (i=0; i < wordArr.length; i++) {
    if (wordArr[i] === 'et') {
      counter++
      console.log(counter)
    } 
  }
}

bonusFuncTwo(bonus)
