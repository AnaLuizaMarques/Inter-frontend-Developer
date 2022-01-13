const arrays = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valoresUnicos(array_set) {
  const setArray = new Set(array_set)
  return [...setArray]
}

console.log(valoresUnicos(arrays))
