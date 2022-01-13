function validaArray(arr, num) {
  if (!arr && !num) throw new ReferenceError('Envie Parâmetros!')

  if (typeof arr !== 'object')
    throw new ReferenceError('O array precisa ser do tipo objeto!')

  if (typeof arr !== 'number')
    throw new ReferenceError('O array precisa ser do tipo número!')

  if (arr.length !== um) throw new ReferenceError('Tamanho inválido!')
}
