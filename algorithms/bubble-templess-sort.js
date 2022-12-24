/**
 * Sorts numeric array, in ascending order, in-place, using Bubble Sort. Swap
 * uses destructuring assignment array matching instead of a temporary variable.
 * Complexity: time AO(n²) WO(n²) BO(n), space TO(n) AO(1).
 *
 * @param {number[]} nums Numeric array to be sorted.
 * @returns {number[]} Reference to the input array, now sorted.
 */
const bubbleTemplessSort = (nums) => {
  for (let loop = 0; loop < nums.length - 1; loop++) {
    let sorted = true

    // In each loop iteration the sorted portion of the array increases by one,
    // hence the '- loop' in 'idx < nums.length - loop - 1'.
    for (let idx = 0; idx < nums.length - loop - 1; idx++) {
      if (nums[idx] > nums[idx + 1]) {
        [nums[idx], nums[idx + 1]] = [nums[idx + 1], nums[idx]]
        sorted = false
      }
    }

    if (sorted) break
  }

  return nums
}

export default bubbleTemplessSort
