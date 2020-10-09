// Given an integer, return an integer with the digits
// reversed.
// --- Examples
//   reverseInt(13) === 31
//   reverseInt(404) === 404
//   reverseInt(100) === 1
//   reverseInt(-13) === -31
//   reverseInt(-100) === -1

function reverseInt(n) {
  let reverse;
  //when we increase the input by a factor of 10,
  //the operation count increases by 1, so the complexity is O(log n)
  reverse = n.toString().split('').reverse().join('');
  if(n<0){
    return parseInt(reverse)*-1;
  }
  return parseInt(reverse); //we have 3 methods, Number(), parseFloat and parseInt
  // Number cannot process ("31-") while parseInt can
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Integer Reversal", () => {
  it("reverseInt() works on positive numbers", () => {
    assert.equal(reverseInt(3), 3);
    assert.equal(reverseInt(13), 31);
    assert.equal(reverseInt(100), 1);
    assert.equal(reverseInt(1408), 8041);
  });

  it("reverseInt() works on negative numbers", () => {
    assert.equal(reverseInt(-3), -3);
    assert.equal(reverseInt(-13), -31);
    assert.equal(reverseInt(-100), -1);
    assert.equal(reverseInt(-1408), -8041);
  });
});

mocha.run();
