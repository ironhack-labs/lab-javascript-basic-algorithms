// bonus 1
const paragrafo =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non urna molestie, rhoncus ante in, ultricies nibh. Aenean suscipit nunc et lobortis tincidunt. Vivamus dolor dui, sodales at dui tempor, egestas scelerisque metus. Suspendisse sit amet molestie neque, non viverra ex. Nullam et turpis in mauris malesuada faucibus nec et dolor. Integer pretium, nibh nec vestibulum elementum, libero turpis ultrices eros, non ullamcorper tortor diam eu mauris. Nullam feugiat quam odio, vel convallis purus pretium at. Sed feugiat tortor ut volutpat sollicitudin. Aenean ac suscipit ex. Morbi nunc sapien, aliquam eu dui vitae, faucibus finibus turpis. Mauris condimentum vel diam ut hendrerit. Duis non sapien nulla. Aliquam venenatis pulvinar augue eu ornare. Aliquam lobortis blandit volutpat. Praesent aliquam, urna sed vestibulum ornare, lectus velit luctus tellus, et scelerisque nulla arcu et mi. Nam cursus ligula quis erat tempus fringilla. Maecenas porttitor, libero eu dapibus pellentesque, augue ligula pharetra ante, nec suscipit sapien sapien quis elit. Aliquam volutpat tristique diam, id rutrum arcu. Maecenas id mi non mauris dictum egestas. Praesent fermentum justo nec neque viverra congue. Vestibulum fringilla facilisis odio vitae tristique. Suspendisse sollicitudin erat vel orci luctus, ut rutrum purus pellentesque. Curabitur vel consectetur odio. Phasellus quis ante ac urna ornare rutrum ut eget tortor. Curabitur eget nibh lorem. Nulla nec felis ornare, tempus massa in, mattis enim. Ut aliquet purus diam. Curabitur libero massa, venenatis at metus id, interdum dignissim odio. Aenean tellus eros, pharetra nec mauris in, vestibulum vulputate mauris. Etiam sit amet viverra metus. Vestibulum venenatis quam non turpis dignissim sagittis. Aenean vel sem hendrerit, tincidunt lectus a, sodales magna. Morbi rhoncus sem non dolor pellentesque, vitae elementum neque sagittis.";

let arrParagrafo = [...paragrafo.split(" ")];
let etCount = 0;

arrParagrafo.map((x) => (x = `et` ? (etCount = etCount + 1) : 0));

console.log(etCount);

// bonus 2

let phraseToCheck = prompt(`Palindrome check: `)
  .replace(" ", "_")
  .replace(",", "_")
  .replace("-", "_");
let phrase = phraseToCheck
  .toUpperCase()
  .split("")
  .reverse()
  .join("")
  .replace(" ", "_")
  .replace(",", "_")
  .replace("-", "_");

if (phraseToCheck.toUpperCase() === phrase) {
  console.log("YES");
} else {
  console.log("YESN`T");
}
console.log(phrase);
