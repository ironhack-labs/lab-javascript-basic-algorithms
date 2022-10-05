// Iteration 1: Names and Input
const hacker1 = "Yaron"
console.log(hacker1)
const hacker2= "Giuliano"
console.log(hacker2)


if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let nameChanged = ""
for (let i = 0; i < hacker1.length; i++){
    nameChanged += `${hacker1[i]} `
}
console.log(nameChanged)

let nameChanged2 = ""
for(let i = hacker2.length - 1; i>= 0; i--){
    const char2 = hacker2[i]
    nameChanged2 += char2
}
console.log(nameChanged2)


const bonusParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat neque iaculis, ornare turpis a, malesuada diam. Suspendisse quis varius nulla. Mauris diam elit, placerat id mollis et, ornare pharetra orci. Sed non metus nisi. Suspendisse euismod tempor mi, eu commodo quam elementum eu. Nullam mattis laoreet diam ut mattis. Mauris nec justo congue, efficitur dui sed, malesuada turpis. Quisque quis tortor ac augue pellentesque dictum a sit amet massa. In auctor magna urna, feugiat aliquet velit mollis non. Morbi a dolor vel tellus rutrum tincidunt id quis ex. Donec elementum eleifend feugiat. Vivamus pulvinar vitae tellus nec maximus. Donec sollicitudin commodo dolor, ut ultricies ex lobortis sit amet. Aliquam vestibulum libero et ligula faucibus scelerisque. In hac habitasse platea dictumst. Nam posuere feugiat efficitur. Aliquam sed turpis lacus. Phasellus venenatis hendrerit condimentum. Etiam mauris purus, accumsan vel massa sit amet, convallis porta arcu. Mauris porttitor sapien a mauris malesuada, vel efficitur augue porttitor. Praesent tincidunt vitae erat auctor dignissim. Nunc malesuada sed ante vel scelerisque. Quisque vel dignissim orci. Maecenas pellentesque facilisis augue, sed iaculis lacus rhoncus ac. Duis at condimentum nisi. Sed ut vestibulum purus. Vestibulum eu diam sed risus scelerisque venenatis. Donec rhoncus est ac nisi tincidunt dictum.`
let totalWords = 1
for(i = 0; i < bonusParagraph.length ; i++){
    if(bonusParagraph[i] === " "){
    totalWords++
    }
}
console.log(totalWords)

let totalEt = 0
for(i = 0; i < bonusParagraph.length ; i++){
    if(bonusParagraph[i] + bonusParagraph[i+1] === "et"){
    totalEt++
    }
}
console.log(totalEt)

function phraseToCheck(str){
    let reversed = ""
    for (let char of str){
        reversed = char + reversed
    }
    return reversed === str
}
console.log(phraseToCheck('amor roma'))

//Yaron and Giuliano

