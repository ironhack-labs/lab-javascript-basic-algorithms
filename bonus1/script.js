let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et urna sed metus dignissim varius. Fusce et dui sed urna congue accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.

Ut congue, nisl id tincidunt lobortis, enim ante fermentum libero, at imperdiet sapien wisi sed libero. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor lobortis. Pellentesque eu est a nulla placerat dignissim. Morbi a enim in magna semper bibendum. Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat.`;

let words = longText.split(" ");
let wordCount = words.length;
console.log("Total number of words:", wordCount);

let etCount = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].toLowerCase() === "et") {
    etCount++;
  }
}
console.log("Number of times 'et' appears:", etCount);