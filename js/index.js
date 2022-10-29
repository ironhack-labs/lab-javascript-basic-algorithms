// Iteration 1: Names and Input

const hacker1 = "taylor"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "john"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

// taylor -> T A Y L O R
let hacker1_2 = ""
for (i = 0; i < hacker1.length; i++) {
    if (i < hacker1.length - 1) {
        hacker1_2 += hacker1[i] + " "
    } else {
        hacker1_2 += hacker1[i]
    }
}
hacker1_2 = hacker1_2.toUpperCase()

// john -> J O H N
let hacker2_2 = ""
for (i = 0; i < hacker2.length; i++) {
    if (i < hacker2.length - 1) {
        hacker2_2 += hacker2[i] + " "
    } else {
        hacker2_2 += hacker2[i]
      }
}
hacker2_2 = hacker2_2.toUpperCase()

// taylor -> rolyat
let hacker1_3 = ""
for (i = hacker1.length - 1; i >= 0; i--) {
  hacker1_3 += hacker1[i]
}

// john -> nhoj
let hacker2_3 = ""
for (i = hacker2.length - 1; i >= 0; i--) {
  hacker2_3 += hacker2[i]
}

// The driver's name goes first.
if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
  } else if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
  } else {
    console.log("What?! You both have the same name?")
  }


// BONUS 1

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis urna, egestas aliquam mauris. Phasellus tortor ligula, faucibus in ornare nec, hendrerit sit amet turpis. Integer est libero, dictum ultricies purus eu, pulvinar feugiat nunc. Mauris ultrices ornare rutrum. Ut scelerisque consectetur nibh, nec elementum felis congue ac. Nullam ut urna diam. Cras quis mattis nisl. Sed mauris felis, rutrum in est non, porttitor tempor ipsum. Nulla tristique orci enim, et pulvinar justo dignissim quis. Duis sit amet posuere eros, in viverra nibh. Aliquam neque ligula, auctor vitae ex ac, mattis euismod diam. Fusce placerat iaculis lacinia. Nunc in iaculis nisl, lacinia tincidunt ligula. Vestibulum blandit malesuada erat, eget rhoncus ipsum gravida et. Etiam volutpat a eros malesuada convallis. Nam pulvinar purus in ipsum vestibulum, at imperdiet dolor fringilla. Aenean a velit quis sapien pharetra faucibus non ac dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque congue congue luctus. Nam vulputate ante felis, finibus gravida ante vulputate at. In luctus blandit pellentesque. Nulla ornare rhoncus neque ac lobortis. Nullam elementum erat pretium, ultricies diam et, euismod sapien. Phasellus blandit nulla tortor, at tempor augue venenatis vel. Nullam pretium justo non felis suscipit, non aliquam ante elementum. Ut sit amet egestas turpis. Aliquam pretium, nisi eget dignissim molestie, ipsum sem laoreet justo, ac semper orci augue et dui. Nam arcu nunc, semper et dui consequat, commodo porttitor elit. Maecenas auctor quis libero sit amet rhoncus. Maecenas tristique urna ligula, et vestibulum libero pretium eget. Suspendisse molestie auctor bibendum. Morbi et metus vitae tortor vulputate fermentum. Integer vitae turpis vestibulum, eleifend massa at, faucibus risus. Vestibulum nec tincidunt diam, vel rutrum tortor. Etiam fermentum luctus vehicula. Sed interdum et mauris eget tristique. Etiam ex lectus, commodo sed finibus ac, gravida at tellus. Aliquam in libero eget arcu pretium pretium non nec enim. Vivamus in arcu lacus."

const text2 = text.replace(/[,.!¡¿?:;‘]/g, "")
const textArr = text2.split(" ")

let count = 0

for (i = 0; i < textArr.length; i++) {
  if (textArr[i] === "et") {
    count ++
  }
}

console.log(count)


// BONUS 2

const phraseToCheck = "A man, a plan, a canal, Panama!"
const phraseToCheck2 = phraseToCheck.replace(/[\s,.!¡¿?:;‘]/g, "").toLowerCase()
console.log(phraseToCheck2)

let potentialPalindrome = ""
for(i = phraseToCheck2.length - 1; i >= 0; i--) {
  potentialPalindrome += phraseToCheck2[i]
}

if (potentialPalindrome === phraseToCheck2) {
  console.log("Palindrome!")
}