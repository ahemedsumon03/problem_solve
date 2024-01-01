function letterCombinationOfPhoneNumber(digit) {
  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let result = [];
  let comb = [];

  function backtrack(index) {
    if (index === digit.length) {
      result.push(comb.join(""));
      return;
    }

    let letters = map[digit[index]]; // 2->abc , 3->def
    console.log(letters);
    // console.log(letters.length) // 3
    for (let i = 0; i < letters.length; i++) {
      comb.push(letters[i]);
      // console.log(letters[i]);
      console.log(`combo push: ${comb.push(letters[i])}`);
      backtrack(index + 1);
      comb.pop();
      console.log(`combo pop: ${comb.pop()}`);
    }
  }

  backtrack(0);
  return result;

}

console.log(letterCombinationOfPhoneNumber("23"));