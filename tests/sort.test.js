import { test } from './assert.js'

import sorters from '../algorithms/sort.repo.js'

console.log(`\nPerforming unit tests for ${sorters.length} sorting functions`)

for (const sort of sorters) {
  console.log(`  ${sort.name}`)

  test(sort, '[]')
    .expect(sort([]))
    .toEqual([])

  test(sort, '[5]')
    .expect(sort([5]))
    .toEqual([5])

  test(sort, '[1, 2, 3]')
    .expect(sort([1, 2, 3]))
    .toEqual([1, 2, 3])

  test(sort, '[5, 4, 3, 2, 1]')
    .expect(sort([5, 4, 3, 2, 1]))
    .toEqual([1, 2, 3, 4, 5])

  test(sort, '[3.4, -6.2, -0.7, 9.8, 1.6, -4.5]')
    .expect(sort([3.4, -6.2, -0.7, 9.8, 1.6, -4.5]))
    .toEqual([-6.2, -4.5, -0.7, 1.6, 3.4, 9.8])

  console.log('    passed!')
}

console.log('All unit tests for sorting functions passed!\n')
