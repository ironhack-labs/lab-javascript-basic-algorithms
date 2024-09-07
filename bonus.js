//BONUS

let longtext = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque urna ac nisi pretium sagittis. Suspendisse potenti. Sed molestie mollis viverra. Fusce blandit, elit ac accumsan interdum, nisl magna pretium ante, ac sodales odio erat vitae purus. Vestibulum justo ex, vestibulum et finibus eget, viverra sed justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus euismod mi, eget pulvinar libero gravida semper. Proin quis orci massa. Aenean at felis ac nulla posuere luctus. Proin eu est nec massa pharetra tristique sit amet id mauris. In hac habitasse platea dictumst.

Curabitur nisl massa, tincidunt non quam nec, tincidunt consequat arcu. Vivamus quis dui semper, feugiat dolor ac, dapibus neque. Suspendisse potenti. Proin nisi tortor, vehicula ut placerat in, blandit quis ligula. Aenean hendrerit enim felis, quis finibus purus ultrices vitae. Aliquam in rhoncus mi, vestibulum suscipit nunc. Aliquam erat volutpat. Praesent consequat eget arcu ut aliquam. In auctor consequat enim, non porttitor ex. Nam viverra a massa vel congue.

Nullam pharetra tortor ac finibus mattis. Quisque quam nisl, accumsan tempus posuere eget, fringilla at turpis. Pellentesque efficitur, augue eget accumsan imperdiet, augue ligula posuere leo, eget imperdiet diam quam in nunc. Curabitur quis diam quis arcu fermentum tempor. Vestibulum eros est, interdum ac augue non, condimentum sollicitudin est. Donec tristique, est in placerat tincidunt, ante neque rutrum magna, eu gravida lectus nulla sit amet dui. Donec iaculis erat vel lorem tincidunt faucibus ac sed tellus. Suspendisse facilisis rhoncus diam, vestibulum semper tortor fermentum id. Maecenas eget ante justo. Praesent ut diam tristique, gravida enim id, efficitur tellus. Mauris sodales malesuada turpis. Sed ut elit dignissim, feugiat orci nec, malesuada elit.`;

let wordcount = longtext.split(/\s+/).length;
console.log(wordcount);
let etCount = (longtext.match(/\bet\b/g) || []).length;
console.log(etCount);
