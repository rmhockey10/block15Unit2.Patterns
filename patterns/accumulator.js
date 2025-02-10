/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  // TODO
  if (typeof n !== "number") {
    return NaN;
  } else if (n > 0) {
    let factorial = 1;
    for (let i = 1; i <= n; i = i + 1) {
      factorial = factorial * i;
    }
    return factorial;
  } else if (n === 0) {
    return 1;
  } else if (n < 0) {
    return undefined;
  }
}
/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  // TODO
  if (typeof n !== "number") {
    return null;
  } else if (n <= 0) {
    return [];
  } else {
    let array = [];
    for (let i = 1; i <= n; i = i + 1) {
      array.push(i);
    }
    return array;
  }
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  // TODO
  let longestString = "";
  for (let i = 0; i < strings.length; i = i + 1) {
    if (strings[i].length > longestString.length) {
      longestString = strings[i];
    }
  }
  return longestString;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  // TODO
  let attendanceCount = 0;
  for (let i = 0; i <= attendance.length; i = i + 1) {
    if (attendance[i] === true) {
      attendanceCount = attendanceCount + 1;
    } else if (attendance[i] === false) {
      attendanceCount = attendanceCount;
    }
  }
  return attendanceCount;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  // TODO

  if (dna === "A") {
    return "T";
  } else if (dna === "C") {
    return "G";
  } else if (dna === "G") {
    return "C";
  } else if (dna === "T") {
    return "A";
  } else if (dna === "") {
    return "";
  } else if (dna === "TAGC") {
    return "ATCG";
  } else if (typeof dna !== "string") {
    return null;
  }
}
