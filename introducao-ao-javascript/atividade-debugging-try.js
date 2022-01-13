function validaArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError('Envie Parâmetros!')

    if (typeof arr !== 'object')
      throw new TypeError('O array precisa ser do tipo objeto!')

    if (typeof arr !== 'number')
      throw new TypeError('O array precisa ser do tipo número!')

    if (arr.length !== um) throw new RangeError('Tamanho inválido!')

    return arr
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('Erro do tipo ReferenceError')
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log('Erro do tipo TypeError')
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log('Erro do tipo RangeError')
      console.log(e.message)
    } else {
      console.log(`Tipo de erro não esperado: ${e}`)
    }
  }
}

console.log(validaArray())
