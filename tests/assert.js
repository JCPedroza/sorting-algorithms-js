const throwError = (why, id, arr, exp) => {
  const arrStr = Array.isArray(arr) ? `[${arr}]` : String(arr)
  const expStr = Array.isArray(exp) ? `[${exp}]` : String(exp)
  const msg = `${why}\n${id}\nReturned: ${arrStr}\nExpected: ${expStr}`
  throw new Error(msg)
}

const equalityChecker = (state) => ({
  toEqual: (arr) => {
    if (state.arr.length !== arr.length) {
      const id = `${state.fun.name}(${state.id})`
      throwError('Length difference', id, arr, state.arr)
    }

    for (let idx = 0; idx < arr.length; idx++) {
      const id = `${state.fun.name}(${state.id})`
      if (state.arr[idx] !== arr[idx]) {
        throwError('Inequality', id, arr, state.arr)
      }
    }
  }
})

export const test = (fun, id) => ({
  expect: (arr) => {
    const state = { fun, arr, id }

    return {
      ...equalityChecker(state)
    }
  }
})

export default {
  test
}
