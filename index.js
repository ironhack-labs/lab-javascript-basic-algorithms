//Section 1
let hacker1 = "Juan";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Pablo";
console.log(`The navigator's name is ${hacker2}`);

//Section 2
switch(true){
  case hacker1.length>hacker2.length:
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  break;
  case hacker2.length>hacker1.length:
  console.log(`The navigator got the longest name, it has ${hacker2.length} characters`);
  break;
  case hacker1.length === hacker2.length:
  console.log('What?! You both got the same name?');
  break;
}

//Section 3
let driversName = '';
for(i=0;i<hacker1.length;i++){
  if(i!== (hacker1.length-1)){
    driversName = driversName + hacker1.charAt(i).toUpperCase() + ' ';
  }else{
    driversName = driversName + hacker1.charAt(i).toUpperCase();
  }

}
console.log(driversName);

let navigatorsName = '';
for(i=hacker2.length; i>=0; i--){
  navigatorsName = navigatorsName + hacker2.charAt(i);
}
console.log(navigatorsName);

if(hacker1.charAt(0)<hacker2.charAt(0)){
  console.log("The driver's name goes first.");

} else if(hacker1.charAt(0)>hacker2.charAt(0)){
  console.log("Yo, the navigator goes first definitely.");
}else if(hacker1.charAt(0)===hacker2.charAt(0)){
  console.log("What?! You both got the same name?")
}

//Bonus

let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt metus non sem tempus, eget lobortis odio maximus. Suspendisse lectus elit, ullamcorper eu arcu et, elementum facilisis mauris. Morbi vestibulum interdum nibh, nec mattis mi congue ut. Mauris sed malesuada nisi. Ut et suscipit risus. Sed dapibus purus dignissim massa tincidunt, varius venenatis diam interdum. Mauris bibendum sapien eu magna rhoncus, non gravida nibh viverra. Donec fringilla elit sit amet nulla pellentesque faucibus. Proin quis sapien pretium, faucibus urna gravida, tempus est. Mauris ultricies lorem bibendum eros cursus pulvinar. Proin cursus ut mi sed congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In vulputate nisi leo, at sodales odio faucibus vitae. Praesent quis tristique lorem. Suspendisse et nisi vel erat condimentum venenatis. Pellentesque ut velit lacus. Fusce metus augue, porta id magna sit amet, venenatis vehicula massa. In quis arcu sed enim vehicula ultrices at at urna. Nunc sed ornare urna. Integer sit amet purus et nisl eleifend ultricies in eget urna. Nam nisl lacus, faucibus sit amet sapien at, tempus pulvinar risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sodales lobortis volutpat. Nullam euismod justo lacus. Praesent egestas tincidunt lacus, ut mattis risus accumsan eget. In hac habitasse platea dictumst. Morbi eget magna lectus. Vivamus cursus ultrices ligula sit amet sagittis. Donec lobortis vel tortor faucibus tristique. Etiam iaculis a ipsum auctor consequat. Aenean eget est convallis, elementum turpis eget, vulputate justo. Proin eget enim elit. Aliquam at mi arcu. Phasellus ac elit et lorem lobortis elementum. Donec nisl tortor, sollicitudin nec sapien in, ornare interdum metus. Integer maximus rhoncus lectus eget ultricies. Nullam consequat a turpis eleifend sodales. Sed viverra eros ante, vitae dignissim justo commodo non. Quisque scelerisque condimentum nisi, eget semper ante fermentum pellentesque. Mauris non accumsan lorem. Praesent pulvinar ut turpis et sagittis. Ut cursus eu libero a pretium. Etiam ac neque facilisis, vehicula justo eu, porttitor mauris. Aenean congue massa non nibh ornare, ac aliquam quam accumsan.'

let counter = 0;
let words = paragraph.split(' ');

console.log(`There are ${words.length} words in the string`);

let counter1 = 0;
let latin = 'et'


for(i=0;i<words.length;i++){
  if(words[i]===latin){
    counter1++;
  }
}
console.log(`The word et appears ${counter1++} times.`);