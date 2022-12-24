/**
 * Sorts numeric array, in ascending order, in-place, using Selection Sort.
 * Complexity: time AO(n²) WO(n²) BO(n²), space TO(n) AO(1).
 *
 * @param {number[]} nums Numeric array to be sorted.
 * @returns {number[]} Reference to the input array, now sorted.
 */
const selectionSort = (nums) => {
  for (let loop = 0; loop < nums.length; loop++) {
    let idx = loop + 1
    let min = loop

    // In the unsorted portion, find min and swap it with the first item.
    while (idx < nums.length) {
      if (nums[idx] < nums[min]) min = idx
      idx++
    }

    [nums[loop], nums[min]] = [nums[min], nums[loop]]
  }

  return nums
}

export default selectionSort
