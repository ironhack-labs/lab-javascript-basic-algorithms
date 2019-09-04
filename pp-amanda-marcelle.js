let hacker1 = "Amanda";
let hacker2= "Marcelle";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

if(hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker2.length > hacker1.length) {
    console.log(`Yo navigator got the longest name, it has ${hacker2.length} characters`)
}
else {
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters!`)
}

let driversName = ""; 
let driverUpperCase = hacker1.toUpperCase();
console.log(driverUpperCase);

for(let i = 0; i < driverUpperCase.length; i += 1) {
    if (i < driverUpperCase.length)  {
        driversName += driverUpperCase[i] + " ";
    } 
    else if (i < driverUpperCase.length -1) {
        driversName += driverUpperCase[i];
    }
    console.log(driversName);
}
;


console.log(hacker1.split("").reverse().join(""));

if(hacker1.localeCompare(hacker2 === 1)) {
    console.log("The driver's name goes first.")
} 
else if(hacker1.localeCompare(hacker2 === -1)) {
    console.log("- Yo, the navigator goes first definitely.")
} 
else {
    console.log("- What?! You both got the same name?")
}

let latinText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida malesuada felis in fermentum. Donec neque orci, pulvinar id nisi ac, ultrices ultricies sem. Pellentesque tempor enim sit amet rhoncus gravida. Nulla nisl arcu, facilisis in vehicula convallis, fringilla ut ante. Sed id lacus eget turpis dignissim dignissim eu eget metus. Vivamus luctus risus aliquam venenatis ultrices. Morbi malesuada molestie aliquam. Pellentesque mi neque, auctor vel sollicitudin eget, ullamcorper eu mi. Aliquam dolor purus, euismod sed viverra eget, lobortis eu lacus. Nunc vulputate et velit eget porttitor. Donec at urna in orci rhoncus posuere. Donec ullamcorper arcu vitae augue consectetur, non mollis ipsum congue. Donec malesuada dolor dui, sit amet convallis sem laoreet in. Duis dictum hendrerit nisl id sodales. Vestibulum ut dui quis neque consequat eleifend a in dolor. Pellentesque et rhoncus tellus. Duis feugiat, lacus eget feugiat tempor, mauris neque laoreet eros, in fringilla dui augue rhoncus tellus. Morbi volutpat sagittis ex vel maximus. In ullamcorper, lectus ac venenatis vulputate, metus lacus convallis purus, et elementum nisi leo ut elit. Ut vehicula viverra vehicula. Mauris eleifend in dui id semper. Praesent et tristique mi, vel cursus ipsum. Sed arcu velit, euismod non ullamcorper sit amet, vehicula vitae erat. Duis aliquam urna eu dolor elementum, in pharetra ex ornare. Maecenas et ipsum ut odio posuere placerat. Vestibulum eros turpis, porta in nisl sit amet, euismod hendrerit ante. Curabitur vel arcu vitae est dictum pretium. Morbi faucibus ex quis nunc posuere porta. Quisque sed tortor vitae est gravida posuere. Vestibulum dui lacus, blandit non erat et, scelerisque consectetur ante. In quis nisi convallis, pretium mi ut, volutpat massa. Mauris sed massa ut felis pretium malesuada. Vestibulum eget pellentesque quam. Donec vel magna at mauris ullamcorper laoreet non nec mauris. Nunc in mi fringilla purus consequat varius nec eu lacus."

console.log(latinText.split(" ").length);
console.log(latinText.split(" et").length -1);
