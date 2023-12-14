const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const charFrequency1 = countCharFrequency(s1);
  const charFrequency2 = countCharFrequency(s2);

  let commonCount = 0;

  for (const char in charFrequency1) {
    if (charFrequency2.hasOwnProperty(char)) {
      commonCount += Math.min(charFrequency1[char], charFrequency2[char]);
    }
  }

  return commonCount;
}

function countCharFrequency(str) {
  const charFrequency = {};

  for (const char of str) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  return charFrequency;
}

module.exports = {
  getCommonCharacterCount
};
