/**
 * Sorts numeric array, in ascending order, in-place, using Insertion Sort.
 * This version does one comparison and one swap per iteration. Other movements are
 * shifts instead of swaps, having the data moved around when compared to the
 * swap heavy version.
 * Complexity: time AO(n²) WO(n²) BO(n), space TO(n) AO(1).
 *
 * @param {number[]} nums Numeric array to be sorted.
 * @returns {number[]} Reference to the input array, now sorted.
 */
const insertionShiftSort = (nums) => {
  for (let loop = 1; loop < nums.length; loop++) {
    let idx = loop

    // Value is the new minimum.
    if (nums[0] > nums[idx]) {
      const temp = nums[idx]

      while (idx > 0) {
        nums[idx] = nums[idx - 1] // Shift to the right.
        idx--
      }

      nums[0] = temp
    // Not the new minimum, find its new place.
    } else {
      const temp = nums[idx]

      while (nums[idx - 1] > nums[idx]) {
        nums[idx] = nums[idx - 1] // Shift to the right.
        idx--
      }

      nums[idx] = temp
    }
  }

  return nums
}

export default insertionShiftSort
