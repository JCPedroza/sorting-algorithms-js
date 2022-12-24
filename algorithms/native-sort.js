/**
 * Sorts numeric array, in ascending order, in-place, using the sort implementation
 * provided by the runtime.
 * Complexity: Depends on the runtime's sort implementation.
 *
 * @param {number[]} nums Numeric array to be sorted.
 * @returns {number[]} Reference to the input array, now sorted.
 */
const nativeSort = (nums) => nums.sort((a, b) => a - b)

export default nativeSort
