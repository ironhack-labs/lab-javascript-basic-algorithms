// Iteration 1: Names and Input
let hacker1 = "Sarah";
console.log(`The driver's name is ${hacker1}`) ;

let hacker2 = "Sarah";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
  }

// Iteration 3: Loops
function capitals () {
  let str = "";
  for (let i = 0; i < hacker1.length; i++){
    str += `${hacker1.charAt(i)} `;
  }
  return str.toUpperCase();
}

function reverse(){
  let str = "";
  for (let i = hacker1.length; i >= 0; i--){
    str += hacker1.charAt(i);
  }
  return str;
}

function order (){
  let names = [hacker1, hacker2];
  let namesOrder = names.sort();

  for (let i = 0; i < namesOrder.length; i++){
    if ((namesOrder[i] === hacker1) && (namesOrder[i] === hacker2)){
        return "What?! You both have the same name?"
    }else if (namesOrder[i] === hacker1){
        return "The driver's name goes first."
    }else if (namesOrder[i] === hacker2){
        return "Yo, the navigator goes first definitely."
    }
  }
}

console.log(capitals());
console.log(reverse());
console.log(order())

///Bonus 1
text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis et dolor ut consequat. Suspendisse quis facilisis libero. Duis a lacinia mi, non dapibus mauris. Donec interdum tortor sed eleifend viverra. Pellentesque maximus urna a vestibulum pretium. Curabitur at est in metus pulvinar tincidunt at vel mauris. Sed quis turpis pharetra, mattis justo in, consequat purus. Donec tortor nisi, luctus venenatis sapien eu, dignissim pulvinar lectus. Curabitur tristique nibh quis rhoncus tristique.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque nibh sapien, varius sit amet enim sollicitudin, ultrices laoreet dolor. Quisque eget molestie libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus blandit gravida molestie. Morbi bibendum tincidunt odio ut rutrum. Etiam enim dui, egestas sed pharetra sed, feugiat quis dui.

Interdum et malesuada fames ac ante ipsum primis in faucibus. In pulvinar mauris et dui malesuada, vitae tempor augue sodales. Donec quam metus, vehicula et consequat id, bibendum pellentesque nisl. Nam rhoncus tempor lacus vel mattis. Duis cursus tincidunt arcu. Cras sapien metus, consequat eu metus ac, mollis rutrum quam. Etiam posuere lorem in tellus gravida, eget ultrices nunc vehicula. Aenean egestas, lorem in blandit vestibulum, sapien velit auctor turpis, eget dapibus mi lorem ut arcu. Nunc euismod scelerisque vehicula. Donec risus nulla, semper quis libero a, tristique volutpat turpis. Ut convallis dui ante, ut sodales felis vulputate non. In at maximus dui. Proin mattis, lectus quis finibus luctus, turpis lacus ultricies odio, nec faucibus risus tortor ut mi. Etiam consectetur efficitur suscipit. Curabitur vel enim varius, ornare odio ut, molestie ante. Quisque non ipsum mattis, dignissim nisi ac, luctus justo.`;

function wordsCounter(str){
  let words = 0;
  let etWord = 0
  for (let i = 0; i < str.length; i++){
    if(str[i] === " "){
      words ++;
    }
    if ((str[i] === "e") && (str[i+1] === "t") && (str[i+2] === " ") && str[i-1] === " " ){
      etWord ++;
    }
  }
  console.log(words);
  console.log(etWord);
}

wordsCounter(text);

//Bonus 2
