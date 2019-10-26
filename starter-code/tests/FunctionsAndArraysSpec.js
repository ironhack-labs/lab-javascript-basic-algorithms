function shuffle(currentArray) {
  const array = currentArray.map(arr => arr.slice());
  const counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}
describe("Find the maximum - maxOfTwoNumbers", () => {
  it("Defines maxOfTwoNumbers", () => {
    expect(typeof maxOfTwoNumbers).toBe("function");
  });

  it("First parameter larger", () => {
    expect(maxOfTwoNumbers(2, 1)).toBe(2);
  });

  it("Second parameter larger", () => {
    expect(maxOfTwoNumbers(1, 3)).toBe(3);
  });

  it("First and Second parameter equal", () => {
    expect(maxOfTwoNumbers(4, 4)).toBe(4);
  });
});

describe("Finding Longest Word - findLongestWord", () => {
  it("Defines findLongestWord", function() {
    expect(typeof findLongestWord).toBe("function");
  });

  it("returns null when called with an empty array", () => {
    expect(findLongestWord([])).toBe(null);
  });

  it("returns the word when called with a single-word array", () => {
    expect(findLongestWord(["foo"])).toBe("foo");
  });

  it("returns the first occurrence word when longest have multiple occurrences ", () => {
    expect(findLongestWord(["foo", "bar"])).toBe("foo");
    expect(findLongestWord(["bar", "foo"])).toBe("bar");
  });

  it("returns the longest occurrence when it has multiple words", () => {
    const words = ["a", "zab", "12abc", "$$abcd", "abcde", "ironhack"];
    for (let i = 0; i < 10; i++) {
      words = shuffle(words);
      expect(findLongestWord(words)).toBe("ironhack");
    }
  });
});

describe("Calculating a Sum - sumArray", () => {
  it("Defines sumArray", () => {
    expect(typeof sumArray).toBe("function");
  });

  it("returns zero with an empty array", () => {
    expect(sumArray([])).toBe(0);
  });

  it("returns the sum with one number array", () => {
    expect(sumArray([4])).toBe(4);
  });

  it("returns zero if all elements are zero", () => {
    expect(sumArray([0, 0, 0, 0, 0])).toBe(0);
  });

  it("returns the sum", () => {
    expect(sumArray([10, 5, 4, 32, 8])).toBe(59);
  });
});

describe("Calculating the Average - averageNumbers", () => {
  it("Defines averageNumbers", () => {
    expect(typeof averageNumbers).toBe("function");
  });

  it("returns null with an empty array", () => {
    expect(averageNumbers([])).toBe(null);
  });

  it("returns the average of a unique element array", () => {
    expect(averageNumbers([9])).toBe(9);
  });

  it("returns the average even with negative values", () => {
    expect(averageNumbers([9, -3, -4, 6])).toBe(2);
  });

  it("returns the average of the array", () => {
    expect(averageNumbers([9, 10, 82, 92, 32, 102, 58])).toBe(55);
  });
});

describe("Calculating the Average - averageWordLength", () => {
  it("Defines averageWordLength", () => {
    expect(typeof averageWordLength).toBe("function");
  });

  it("returns null with an empty array", () => {
    expect(averageWordLength([])).toBe(null);
  });

  it("returns the average of a unique element array", () => {
    expect(averageWordLength(["ironhack"])).toBe(8);
  });

  it("returns the average of a the array", () => {
    expect(
      averageWordLength([
        "Ironhack",
        "Madrid",
        "Barcelona",
        "Paris",
        "Miami",
        "Mexico",
        "Berlin",
        "Programmers"
      ])
    ).toBe(7);
  });
});

describe("Unique Arrays - uniquifyArray", () => {
  it("Defines uniquifyArray", () => {
    expect(typeof uniquifyArray).toBe("function");
  });

  it("returns [] with an empty array", () => {
    expect(uniquifyArray([])).toEqual([]);
  });

  it("returns the correct array when having an array of the same element", () => {
    expect(uniquifyArray(["Ironhack", "Ironhack", "Ironhack"])).toEqual([
      "Ironhack"
    ]);
  });

  it("returns the same array when no element is repeated", () => {
    expect(uniquifyArray(["Cat", "Dog", "Cow"])).toEqual(["Cat", "Dog", "Cow"]);
  });

  it("returns the uniquified array", () => {
    expect(
      uniquifyArray([
        "iPhone",
        "Samsung",
        "Android",
        "iOS",
        "iPhone",
        "Samsung",
        "Nokia",
        "Blackberry",
        "Android"
      ])
    ).toEqual(["iPhone", "Samsung", "Android", "iOS", "Nokia", "Blackberry"]);
  });
});

describe("Finding Elements - doesWordExist", () => {
  it("Defines doesWordExist", () => {
    expect(typeof doesWordExist).toBe("function");
  });

  it("returns false with an empty array", () => {
    expect(doesWordExist([])).toBe(false);
  });

  it("returns true if the word we are looking is the only one on the array", () => {
    expect(doesWordExist(["machine"], "machine")).toBe(true);
  });

  it("returns false if the word we are looking is not in the array", () => {
    expect(
      doesWordExist(
        ["machine", "poison", "eat", "apple", "horse"],
        "ratatouille"
      )
    ).toBe(false);
  });

  it("returns true if the word we are looking is in the array", () => {
    expect(
      doesWordExist(
        ["pizza", "sandwich", "snack", "soda", "book", "computer"],
        "book"
      )
    ).toBe(true);
  });
});

describe("Counting Repetition - howManyTimes", () => {
  it("Defines howManyTimes", () => {
    expect(typeof howManyTimes).toBe("function");
  });

  it("returns 0 with an empty array", () => {
    expect(howManyTimes([])).toBe(0);
  });

  it("returns one when the word appears only one time on the array", () => {
    expect(howManyTimes(["basketball", "football", "tennis"], "tennis")).toBe(
      1
    );
  });

  it("returns zero when the word does not appears on the array", () => {
    expect(howManyTimes(["basketball", "football", "tennis"], "rugby")).toBe(0);
  });

  it("returns five when the word appears 5 times on the array", () => {
    expect(
      howManyTimes(
        [
          "basketball",
          "football",
          "tennis",
          "rugby",
          "rugby",
          "ping pong",
          "rugby",
          "basketball",
          "rugby",
          "handball",
          "rugby"
        ],
        "rugby"
      )
    ).toBe(5);
  });
});

describe("Bonus Quest - greatestProduct", () => {
  it("Defines greatestProduct", () => {
    expect(typeof greatestProduct).toBe("function");
  });

  it("Return 1 when all the numbers of the arrays are 1", () => {
    let matrix = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    expect(greatestProduct(matrix)).toBe(1);
  });

  it("Return 16 when all the numbers of the arrays are 2", () => {
    let matrix = [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ];
    expect(greatestProduct(matrix)).toBe(16);
  });
});
