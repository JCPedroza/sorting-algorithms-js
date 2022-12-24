import nativeSort from './native-sort.js'
import bubbleTempSort from './bubble-temp-sort.js'
import bubbleTemplessSort from './bubble-templess-sort.js'
import selectionSort from './selection-sort.js'
import insertionSwapSort from './insertion-swap-sort.js'
import insertionShiftSort from './insertion-shift-sort.js'

/**
 * Collection of all sort functions for use in testing, profiling, etc.
 */
const sorters = [
  nativeSort,
  bubbleTempSort,
  bubbleTemplessSort,
  selectionSort,
  insertionSwapSort,
  insertionShiftSort
]

export default sorters
