// Iteration 1: Names and Input
var hacker1 = "Alex";
console.log(`The drivers name is ${hacker1}`);

var hacker2 = "Chrome";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length < hacker2.length) {
  console.log(
    `The driver has the longest name, it has {hacker1.length} characters`
  );
} else if (hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long ${hacker1.length}`);
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker1.length2} characters`
  );
}

// Iteration 3: Loops

var nameCap = "";

//print separated

for (i = 0; i < hacker1.length; i++) {
  nameCap += hacker1[i] + " ";
}
console.log(nameCap.toUpperCase());

// print reverse in capital letters

for (i = hacker1.length - 1; i >= 0; i--) {
  nameCap += hacker1[i];
}
console.log(nameCap.toUpperCase());

// lexicographical order

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

var str1 ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat hendrerit mi a vulputate. Phasellus congue porta elit, dictum elementum nunc tempus quis. Curabitur aliquam cursus felis, quis feugiat magna hendrerit eu. Donec bibendum, orci vel maximus placerat, nisl erat vulputate mi, non pretium risus odio eget dolor. Donec auctor nulla nec nunc pellentesque egestas sit amet non ex. Nam sit amet odio sit amet ligula commodo ultrices non porttitor mauris. Mauris facilisis volutpat nunc, ac faucibus quam lobortis vel.

Phasellus velit arcu, pretium sit amet mollis sed, tristique sit amet velit. Integer placerat ante sem. Nam placerat volutpat hendrerit. Praesent finibus, massa non suscipit aliquam, mauris neque tristique metus, at auctor lacus ipsum sit amet quam. Curabitur euismod, odio eu fermentum lobortis, odio turpis luctus purus, vel lacinia lectus urna sit amet sapien. Mauris pellentesque, ipsum nec egestas pretium, orci ipsum iaculis purus, nec fringilla nunc eros hendrerit mi. Sed risus ligula, condimentum non mollis vel, malesuada non leo. Aenean id finibus dolor. Donec ut leo felis. Vivamus ac ipsum ac lacus semper viverra ac quis urna. Nam laoreet eu lacus eget condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

Etiam ullamcorper semper convallis. Fusce vel sem lorem. Proin cursus condimentum est in sodales. Morbi sodales vel lorem et aliquam. Vivamus fermentum erat in quam commodo varius. Nulla vitae sollicitudin urna. Duis eu facilisis lectus. Etiam fermentum lacus at diam vehicula laoreet.

Praesent convallis lectus nibh, eget aliquam odio elementum sed. Vestibulum cursus consequat ante non tempor. Suspendisse sollicitudin ligula dui, at aliquet ex commodo ac. Mauris sagittis erat odio, ac dapibus massa euismod eu. Sed in finibus sem, eget imperdiet tellus. Etiam semper nulla erat, at tincidunt nibh euismod in. Maecenas eu justo quis odio bibendum imperdiet. Ut augue diam, pharetra eu fringilla eget, tempor congue lacus. Nunc sit amet neque sit amet justo pellentesque tempor. Nulla pulvinar est sed dictum faucibus.

Curabitur auctor ante ut molestie bibendum. Donec bibendum lectus et sem lobortis luctus. Cras porttitor, enim sit amet suscipit lobortis, odio est sagittis lorem, et viverra leo risus id augue. Aliquam vitae hendrerit dolor, vitae ornare dolor. Pellentesque nec sodales est, eget imperdiet arcu. Donec et faucibus turpis. Ut ac magna blandit, aliquam urna vel, pellentesque turpis. Sed tempor felis eu efficitur mattis. Fusce auctor sed nibh at cursus. Aliquam vitae dignissim lorem, et tristique augue. Mauris sagittis ante ligula. Nullam aliquam eu erat et lobortis. Nulla pulvinar commodo leo. Duis dignissim maximus consectetur. Vestibulum iaculis lacus quis sapien condimentum varius.'

var str2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu velit, aliquam mollis convallis non, tincidunt vel sapien. Aenean porttitor sem non leo vehicula congue. Nullam efficitur turpis a sem tempor, quis feugiat nibh efficitur. Integer venenatis felis sed cursus lobortis. Sed pellentesque lacus in leo semper, a volutpat erat tincidunt. Nullam lobortis, mauris ut cursus hendrerit, tortor justo congue eros, quis dictum metus risus ac neque. Donec porttitor felis vel condimentum sodales. Morbi consectetur eros ac eros posuere pharetra. Fusce in ante ornare, sodales lorem et, congue odio. Vivamus eu nisi rutrum ipsum scelerisque gravida. Quisque elementum massa quis quam ultrices, quis ultrices tellus finibus. Proin vel finibus quam. Aenean risus mauris, tempor ac nisl non, tempus porttitor mi. Duis sit amet varius mauris, quis egestas odio.

Nullam sit amet feugiat est. Nunc facilisis nisi vitae tellus dapibus molestie. Morbi sodales nec nisl eu semper. Cras dignissim dictum metus, a lacinia est. Donec nisl diam, mollis in lacinia in, porttitor ut ante. Vivamus lobortis velit sit amet magna varius sagittis. Nulla turpis orci, aliquam in arcu in, faucibus varius mi. Mauris ac auctor mauris. Curabitur vitae sapien magna. Nulla aliquet, risus vitae porta congue, est elit consequat quam, nec tempus mauris nunc in tellus. Donec ex tellus, facilisis eu risus id, egestas pellentesque erat. Pellentesque hendrerit libero ac orci vehicula, aliquet consectetur odio suscipit. Quisque vel est ut ex consequat posuere.

Praesent gravida interdum pulvinar. Morbi egestas a massa non aliquet. Aenean a ultricies tortor. Maecenas sodales interdum est, ac malesuada lorem fermentum a. Proin non mattis magna. Etiam fermentum enim eget dolor interdum, nec mollis erat volutpat. Phasellus nec egestas tortor, ac pulvinar erat. Quisque vitae ligula dapibus, fringilla massa non, congue neque. Donec odio quam, aliquet ornare mi nec, scelerisque porta mauris. Curabitur gravida volutpat ex, et laoreet mi tristique quis. Curabitur metus justo, ultricies eget lacus non, imperdiet tincidunt nisl. Nulla sollicitudin et neque fringilla scelerisque. Cras a dignissim lorem.

Aliquam a ante dignissim, lobortis est sit amet, vulputate augue. Praesent sed consequat purus, aliquet rutrum turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu tortor nibh. Fusce blandit in risus quis bibendum. Cras rutrum id dolor ac aliquet. Nulla venenatis mi nec felis bibendum, non suscipit erat pellentesque. Pellentesque lacinia auctor lorem, vel tristique nulla volutpat et. Maecenas eleifend molestie urna, vitae lobortis dui.

Maecenas in elementum velit, sed auctor turpis. Aliquam finibus, ipsum in varius sagittis, arcu justo congue nibh, eu tincidunt enim metus ut justo. Ut et suscipit odio, quis imperdiet arcu. Vivamus ac condimentum erat. Ut fringilla id orci a mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In feugiat, mauris in porta vulputate, nisl urna dictum nunc, at maximus lectus ipsum vel massa. Etiam ut vulputate sem. Mauris dignissim egestas iaculis. Nam vel lacus a felis congue porta. Pellentesque hendrerit congue dictum. Nullam purus massa, molestie ut turpis ac, cursus ullamcorper dui. Cras molestie magna eu iaculis scelerisque. Nulla finibus, mauris eget eleifend ullamcorper, diam sem dignissim leo, id tempus est nunc in nisl. Morbi ornare maximus maximus. Praesent iaculis enim eros, eu facilisis urna rutrum sed.'

var str3='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nibh sit amet urna mollis tempus. Nunc massa felis, placerat vitae ornare semper, tempor quis arcu. Duis nulla tellus, molestie quis ex eu, sodales aliquet nisl. Vestibulum at metus porta, placerat sem non, sodales tortor. Donec congue eget sem et interdum. Quisque sagittis hendrerit finibus. Vestibulum a ornare est, in rhoncus metus. Maecenas maximus odio nulla, in pharetra diam mollis eget. Ut arcu arcu, euismod id vulputate a, pharetra vitae velit. Suspendisse sem elit, dignissim nec mattis ac, tincidunt a sapien. Curabitur aliquam commodo turpis, sit amet vulputate enim scelerisque in. Curabitur vitae dignissim leo. Aenean interdum placerat dapibus.

Cras nec malesuada diam. Aliquam interdum ipsum et ex sodales dignissim. Curabitur malesuada a tellus eu faucibus. Curabitur rhoncus sapien ut sollicitudin porttitor. In lobortis nibh neque, auctor consectetur ligula semper sed. Maecenas quis ultricies nisi, sit amet efficitur risus. Maecenas feugiat eros mattis erat rutrum, eget dignissim turpis pretium. Cras condimentum sit amet ante at fermentum. Nunc nec ex porta odio ullamcorper ultrices sit amet eget tellus. Phasellus maximus odio et faucibus consequat. Nunc lacinia elit quis aliquet dignissim. Sed at consectetur libero.

Pellentesque fermentum felis ut odio suscipit maximus. Donec dui massa, porta ac porta quis, bibendum ut dui. Ut convallis in elit ut tristique. In hac habitasse platea dictumst. Sed porta neque ex, sed malesuada orci euismod non. Fusce et sapien sed nisi rutrum rutrum laoreet vehicula ante. Maecenas eu neque tempor, lobortis lorem ac, egestas erat. Praesent aliquam nunc quis volutpat viverra. Maecenas sit amet tortor eget massa lacinia posuere. Quisque pellentesque aliquet felis eu pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus blandit euismod quam, quis efficitur tortor molestie vel.

'
let counter=0
for (let i=0;i<str1.length;i++){
    if(str1[i]===' ')
    counter++
}
console.log(counter+1)

// The same for the other two strings.

let counter=0
let position=0
while (position<str1.length)
{ 
    position = str1.indexOf('et')
    counter++
}
console.log(counter)