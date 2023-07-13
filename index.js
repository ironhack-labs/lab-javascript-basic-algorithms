// Iteration 1: Names and Input

const hacker1 = "Jorge"

console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Rodrigo"

console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the logest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

// 3.1

let driverSpaces = ""

for (let i = 0; i < hacker1.length; i++) {
    driverSpaces += `${hacker1[i].toUpperCase()} `
}

console.log(driverSpaces)

// 3.2

let navigatorReverse = ""

for (let i = hacker2.length-1; i >= 0; i--) {
    navigatorReverse += `${hacker2[i]}`
}

console.log(navigatorReverse)

// 3.3

let nameLength

if (hacker1.length > hacker2.length) {

    nameLength = hacker1.length
}
else {
    nameLength = hacker2.length
}

let nameAux = ""

for (let i = 0; i < nameLength; i++) {
    if (hacker1.charCodeAt(i) === hacker2.charCodeAt(i)) {
        nameAux += `${hacker1[i]}`
    }
    else if (hacker1.charCodeAt(i) > hacker2.charCodeAt(i) || hacker1.length > hacker2.length) {
        console.log("Yo, the navigator goes first, definitely.")
        break
    }
    else {
        console.log("The driver's name goes first.")
        break
    }
}

if (nameAux === hacker1 && nameAux === hacker2) {
    console.log("What?! You both have the same name?")
}

// Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis massa ac volutpat pretium. Pellentesque efficitur pulvinar dui id convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nisi nulla. Vivamus et augue nec nisi vestibulum sagittis. Nam mattis euismod mollis. Proin et condimentum massa, vel hendrerit mauris. Nunc sit amet urna commodo, consectetur leo at, euismod erat. Donec quam justo, dapibus eu dictum ut, pretium nec tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Aliquam vitae augue quis ligula egestas vehicula at at eros. Nam malesuada aliquam nisi, a hendrerit nulla condimentum in. Nam vitae massa ac justo varius varius. Pellentesque sit amet lorem eu nunc varius dapibus eu vel elit. Aenean vestibulum tempor purus, blandit maximus dolor convallis sed. Proin at laoreet orci, sed dapibus arcu. Mauris nec lacus pretium, molestie neque quis, egestas felis. Nulla dignissim nibh ac est fermentum, gravida pharetra mi rutrum. Cras id elit ac magna dictum tempor. Nullam in ipsum quis purus viverra consequat vitae in velit. Nulla vel leo feugiat, vestibulum neque lobortis, mattis purus. Nunc tincidunt lacinia auctor. Sed tortor mi, auctor ut sollicitudin in, mattis et diam. Praesent nisi erat, malesuada a lectus ac, luctus porta felis. Curabitur ullamcorper enim metus, quis volutpat mauris tristique ac. Donec facilisis tristique tortor, egestas pulvinar dolor volutpat sit amet. Nullam in posuere elit. Nam iaculis turpis tellus, eu venenatis erat sagittis nec. Mauris commodo vitae mauris a sagittis. Donec sagittis felis eu ex maximus eleifend. Cras euismod rhoncus tortor ut dapibus. Sed sodales, mi vel pharetra fringilla, est justo tincidunt velit, eu sollicitudin augue nunc at mi. Pellentesque vel facilisis urna. Sed ac vehicula velit. Aliquam ex nibh, venenatis id ex at, suscipit blandit nunc. Aenean vitae imperdiet quam, id iaculis nunc. Morbi fermentum eleifend dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut luctus pretium risus at viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."

