/**
 * Sorts numeric array, in ascending order, in-place, using Insertion Sort. This
 * version does two comparisons per iteration, and moves twice more data than
 * necessary (this can be improved).
 * Complexity: time AO(n²) WO(n²) BO(n), space TO(n) AO(1).
 *
 * @param {number[]} nums Numeric array to be sorted.
 * @returns {number[]} Reference to the input array, now sorted.
 */
const insertionSwapSort = (nums) => {
  for (let loop = 1; loop < nums.length; loop++) {
    let idx = loop

    // Swap left until a lower value is found, or start of array is reached.
    while (idx > 0 && nums[idx - 1] > nums[idx]) {
      [nums[idx - 1], nums[idx]] = [nums[idx], nums[idx - 1]]
      idx--
    }
  }

  return nums
}

export default insertionSwapSort
