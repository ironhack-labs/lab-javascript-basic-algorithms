//Names and input
console.log("I'm Ready!")
var hacker1 = 'Luis'
console.log("The driver's name is", hacker1)
var hacker2 = (result = window.prompt ("What is the navigator's name?"))
console.log('The navigators name is', hacker2)

//Conditionals
if (hacker1.length > hacker2.length){
  console.log('The Driver has the longest name, it has', hacker1.length, 'characters');
} else if (hacker1.length < hacker2.length){
  console.log('Yo, navigator got the longest name, it has', hacker2.length, 'characters')
} else {'What?! You both got the same name?'}

//Loops
hacker1.split('').join(' ');
console.log(hacker1.split('').reverse().join(''));


//lexicographical
if( hacker1>hacker2){
  console.log('The driver\'s name goes first')
} else if (hacker1 < hacker2){
  console.log('Yo, the navigator goes first definitely')
} else{'What?! You both got the same name?'}

//Bonus!
var pal = prompt('Input your palindrome!').replace(/ /g, '').toLowerCase();
var lap = pal.split('').reverse().join('');

if (pal === lap) {
	console.log('This is a palindrome!');
} else 'This aint no palindrome whatchu mean';

//Lorem Ipsum Dolor
//count number of instances
var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et euismod purus. Sed eget nisi ante. Mauris vitae arcu sed lorem consectetur viverra. In quis lectus ac odio vestibulum rhoncus at nec dui. Sed condimentum, lorem nec dapibus malesuada, elit elit faucibus turpis, a suscipit nulla eros et ligula. Nullam viverra eros magna, vel ullamcorper nibh maximus eget. Quisque vitae tincidunt dolor, quis congue elit. Pellentesque ut rutrum turpis. Integer blandit, turpis ut lobortis molestie, est augue mollis orci, ut scelerisque ex turpis eget risus. Fusce porta nibh sit amet aliquet rutrum. Curabitur sagittis vitae turpis a laoreet. Praesent at sodales metus. Vivamus facilisis ut nisl at congue. Aenean enim magna, bibendum et mi ac, rutrum bibendum dolor. Curabitur sed nulla eget velit posuere congue a sed augue. Quisque quis eros sodales, consequat massa ut, vulputate lacus. Pellentesque efficitur, sem eu finibus dictum, mauris magna congue odio, eget feugiat leo diam a diam. Quisque pretium sem ac tincidunt hendrerit. Integer vel elit eget nulla pellentesque dignissim. Vestibulum ullamcorper tempus leo vel varius. Maecenas consectetur scelerisque elit eget vehicula. Donec consequat, odio et pellentesque condimentum, nibh nisl ultricies leo, ac tristique arcu mauris et justo. Praesent vel magna vel enim hendrerit luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum fermentum ex in erat ornare interdum. Sed dictum massa at magna pharetra, eu bibendum ex pretium. Proin quis mollis ex, et euismod ex. Integer ultrices tincidunt porta. In venenatis sapien in placerat pulvinar. Phasellus sit amet odio sit amet justo accumsan tincidunt quis quis lacus. Morbi quis diam tincidunt, gravida ipsum sed, tincidunt lacus. Pellentesque nec ipsum ac neque ornare commodo et a massa.'

console.log(lorem.split(' ').length)
console.log(lorem.split('et').length)