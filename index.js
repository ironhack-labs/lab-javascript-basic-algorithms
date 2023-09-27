//Iteration 1
let hacker1 = "Daniel"
console.log("The driver's name is " + hacker1)
let hacker2 ="Julia"
console.log ("The navigator's name is " + hacker2)

//Iteration 2

if (hacker1.length > hacker2.length){
  console.log ("The driver has the longest name, it has " + hacker1.length + " characters")
}
  
  else if (hacker2.length > hacker1.length) {
  console.log ("It seems like the navigator has the longest name, it has " + hacker2.length + " characters.")
  }

else{
  console.log ("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

//Iteration 3

let i = 0
let result = ""
for (i = 0; i < hacker1.length; i++) {
 result +=  hacker1[i] + " "
}
console.log(result.toUpperCase())

let resultReversed = ""
for (i = (hacker1.length - 1); i >= 0; i--){
  resultReversed += hacker1[i]
}
console.log (resultReversed)

if (hacker1.localeCompare(hacker2) === -1){
  console.log ("The driver's name goes first")
}
else if (hacker1.localeCompare(hacker2) === 1){
  console.log ("Yo, the navigator goes first, definitely")
}
else{
  console.log("What?! You both have the same name?")
}

// Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non pharetra turpis. Fusce vitae sapien vel risus lobortis molestie. Ut molestie quis velit et venenatis. Nulla accumsan magna elit, nec feugiat elit efficitur vel. Proin ut erat arcu. Curabitur commodo, sem sed consequat eleifend, enim metus ullamcorper tellus, eget posuere nisl enim vitae quam. Maecenas mi diam, luctus ut diam ac, aliquet fringilla nibh. Quisque at egestas justo. Nullam fringilla tincidunt libero sed elementum. Nulla quis elit pharetra, finibus nibh vel, iaculis lectus. Etiam purus arcu, commodo ut tellus vitae, venenatis efficitur nisl. Proin diam lorem, ultrices nec purus sed, aliquam tempus justo. Ut ut orci velit. Aliquam fringilla id libero tempor fringilla. Nulla non odio et dolor varius malesuada. Maecenas ex mi, tincidunt quis cursus efficitur, consequat ac leo. Vestibulum vitae tempor velit. Nam faucibus sem fringilla, viverra dui sed, elementum tellus. Nunc arcu quam, commodo nec pulvinar at, ornare a metus. Aenean eleifend elementum eros, sed efficitur massa sagittis vitae. Donec quis semper nisi. Pellentesque justo quam, maximus eu rutrum in, iaculis eu dui. Vestibulum dapibus, nulla nec mollis eleifend, mi lectus tristique ligula, at maximus ligula felis sed mauris. In volutpat enim a tellus tempor mattis. Nunc rutrum urna sit amet magna pellentesque dapibus id eu quam. Suspendisse at efficitur urna. Duis id euismod urna, non dictum odio. Aliquam at turpis erat. Curabitur gravida dictum mattis. Maecenas facilisis feugiat sollicitudin. Duis pellentesque augue eget consequat pretium. Duis suscipit enim sit amet libero fermentum pulvinar aliquam ut quam. Pellentesque ex augue, convallis eu venenatis eget, pellentesque vitae dui. Quisque mattis mollis tellus, id faucibus turpis posuere et. Suspendisse vel massa id velit semper luctus. Aliquam semper, enim eget malesuada pharetra, mauris mi aliquet neque, nec convallis odio enim in est. Phasellus faucibus est ut viverra tempus. Integer a hendrerit lectus. Nam vehicula, turpis venenatis dapibus sodales, neque leo bibendum erat, vel pretium risus quam sed turpis. Curabitur quis justo nec sem sodales euismod in nec mauris. Suspendisse vestibulum lorem a sapien auctor, id semper metus porttitor. Pellentesque commodo vitae ante quis luctus. Nam sed fringilla risus, sed pretium urna. Maecenas vitae tellus at est imperdiet lobortis. Donec convallis auctor commodo. Curabitur velit erat, commodo vel commodo at, fermentum vitae et magna."

let count = 0
  function wordCount (){
    const words = longText.split(' ');
    
    for (i = 0; i < words.length; i++){
      if (words[i] !== '') {
      count++;
      }
    }
      return count;
  }

console.log (wordCount (longText))

let countEt = 0
  function etCount (){
    const etWords = longText.split(' ');
    
    for (i = 0; i <= etWords.length; i++){
      if (etWords[i] === 'et') {
      countEt++;
      }
    }
      return countEt;
  }
console.log (etCount (longText))


//Bonus 2











