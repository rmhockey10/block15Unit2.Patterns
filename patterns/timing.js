/**
 * @param {string[]} playlist
 * @param {string} song
 * @returns {boolean} whether `song` is in `playlist`
 * @returns `false` if `playlist` is empty
 */
export function isSongInPlaylist(playlist, song) {
  for (const songInPlaylist of playlist) {
    if (songInPlaylist === song) {
      return true;
    }
  }
  return false;
}

/**
 * @param {number[]} numbers
 * @returns {boolean} whether all `numbers` are even
 * @returns `undefined` if `numbers` is empty
 */
export function isAllEven(numbers) {
  // TODO
  let evenNumArray = [];
  for (let i = 0; i < numbers.length; i = i + 1) {
    if (numbers === "") {
      return undefined;
    } else if (numbers[i] % 2 !== 0) {
      return false;
    } else {
      evenNumArray.push(i);
      if (evenNumArray.length === numbers.length) {
        return true;
      }
    }
  }
}

/**
 * You're in charge of a group camping trip. You've packed supplies in a backpack,
 * and each item in the backpack has a category, such as "food", "equipment", or "clothes".
 * Each item in the "food" category is enough to feed one person.
 *
 * @param {{category: string}[]}} backpack
 * @param {number} people
 * @returns {boolean} whether there is enough food in the backpack to feed everyone
 */
export function haveEnoughFood(backpack, people) {
  // TODO
  if (people === 0) {
    return true;
  } else if (backpack.length === 0) {
    return false;
  }
  const bkpk = backpack[0].category;
  if (bkpk === "food" && people <= 1) {
    return true;
  } else {
    return false;
  }
}