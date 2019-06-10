let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus nisl non pretium feugiat. Morbi tristique ut tellus et bibendum. Ut facilisis vitae urna sed suscipit. Donec convallis volutpat risus eget euismod. Aliquam euismod turpis eu consectetur pellentesque. Sed placerat erat pretium ante tincidunt, a imperdiet diam pharetra. Sed in interdum risus. Etiam ipsum enim, mollis vel nibh sit amet, mattis tincidunt nunc. Vivamus sit amet nisl ut augue commodo tristique. Nam cursus nibh eu magna mattis, eu lobortis turpis varius.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi porta purus nec arcu suscipit ultricies. Phasellus at sapien nec dui malesuada eleifend eget eu urna. Sed urna dui, porttitor eget mollis id, imperdiet maximus ipsum. Donec volutpat diam enim, quis finibus elit bibendum quis. Vestibulum quis metus vel tortor pharetra consequat. Maecenas eu magna eu odio fringilla convallis nec pharetra velit. Sed laoreet sapien molestie arcu ullamcorper lobortis non ac libero. Fusce iaculis dignissim sem et pharetra. Aliquam quis malesuada nibh. Curabitur tempus tortor vel placerat elementum. Ut at tristique lorem, eget consequat ex. Fusce non metus ligula. Nunc cursus orci eget sagittis tempor. Proin facilisis nulla arcu, vel ultrices turpis luctus eu.

Donec vitae consequat ipsum. Proin sollicitudin a justo a tempus. Nunc molestie nisl sed metus imperdiet, efficitur scelerisque urna rutrum. Nulla vestibulum dui massa, a sollicitudin erat eleifend sed. Proin aliquam convallis felis sit amet convallis. Morbi vitae ultrices odio. Praesent ac ornare nulla.`
let words = 0;
let et = 0;
for(let w = 0; w < paragraph.length; w++){
while(paragraph[w] != ' '){
  w++;
}
  words++;
}
console.log(words);