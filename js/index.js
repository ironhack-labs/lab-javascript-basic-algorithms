// Iteration 1: Names and Input

function names(hacker1,hacker2){
    return `The driver's name is ${hacker1} and the navigator's name is ${hacker2}`
}

// Iteration 2: Conditionals

function conditional(driver,navigator){
    if(driver.length>navigator.length){
        return `The driver has the longest name, it has  ${driver.length} characters.`
    }
    else if (driver.length<navigator.ength){
        return `It seems that the navigator has the longest name, it has ${navigator.length} characters.`
    }
    else {
        return `Wow, you both have equally long names, ${driver.length} characters!`
    }
}

// Iteration 3: Loops

function loops1(driver){
    let upper = driver.toUpperCase()
    let result = ''
    for(let i=0; i<upper.length-1; i++){
        result += `${upper[i]} `   
    }
    result += upper[(upper.length - 1)]
    return result
}

function loops2(navigator){
    let reverse = ''
    for(let i=navigator.length-1; i>=0; i--){
        reverse += `${navigator[i]}`
    }
    return reverse
}

function loops3(driver,navigator){
    let arr =[]
    arr.push(driver)
    arr.push(navigator)
    arr.sort()
    if(arr[0]===arr[1]){
        return "What?! You both have the same name?"
    }
    else if(arr[0]===driver){
        return "The driver's name goes first."
    }
    else if(arr[0]===navigator){
        return "Yo, the navigator goes first definitely."
    }
}

//Bonus 1

function bonus1(){
    let lorem= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida accumsan diam vitae laoreet. Etiam eleifend magna nec lectus faucibus ultricies. Maecenas et molestie neque, ut convallis urna. Cras pharetra tincidunt lacus eu vestibulum. Proin eleifend, elit vel ornare venenatis, lacus quam venenatis dui, sit amet pharetra orci dui ut est. Ut at enim nec risus accumsan fringilla. Aenean nec congue purus. Aenean vel neque nunc. Mauris a purus faucibus, lobortis augue malesuada, bibendum nisl. Praesent tempus posuere nunc at luctus. In vestibulum erat ut augue placerat, at lobortis diam eleifend. Maecenas tempus urna et odio cursus, at bibendum magna condimentum. Pellentesque quis bibendum risus. Maecenas accumsan lorem lorem. Duis sit amet magna sapien. Nulla dignissim sapien nisl, quis consequat arcu hendrerit facilisis. Sed est justo, faucibus id justo et, posuere venenatis ipsum. Cras mattis a massa a aliquet. Aenean molestie tortor eu cursus accumsan. Phasellus sit amet eleifend enim, eu iaculis mi. Maecenas nec laoreet lacus, ac hendrerit eros. Sed risus lorem, sodales nec elementum vitae, mattis vel magna."
    let splitSpace = lorem.split(' ')
    let countWords = splitSpace.length
    let splitEtSpace = lorem.split(' et ').length - 1
    let splitEtDot = lorem.split(' et.').length - 1
    let splitEtComma = lorem.split(' et,').length - 1
    let countEt = splitEtSpace + splitEtComma + splitEtDot
    return `A string contém ${countWords} palavras e dessas ${countEt} são a palavra et`
    }

//Bonus2

function bonus2(phraseToCheck){
    for(let i=0; i<phraseToCheck.length; i++){
        if (phraseToCheck[i] === phraseToCheck[phraseToCheck.length-i-1]){
            return true
        }
        else {
            return false
        }
    }
}

console.log(names('hudson', 'arpini'))
console.log(conditional('hudson', 'arpini'))
console.log(loops1('hudson'))
console.log(loops2('arpini'))
console.log(loops3('hudson', 'arpini'))
console.log(bonus1())
console.log(bonus2('arara'))