// Map
const lista = [4, 5, 8, 9]
console.log(`O resultado do método map é ${lista.map(val => val * 3)}`)
console.log('--------')

// forEach
const lista_ = [7, 9, 12]
const novaLista = lista_.forEach(num => num * 2)
console.log(`O resultado do método forEach é ${novaLista}`)
console.log('--------')

//Filter
function filtraPares(numeros) {
  return numeros.filter(callback)
}

function callback(total) {
  return total % 2 === 0
}

const arrayNumeros = [1, 2, 3, 4, 5, 6]

console.log(`O resultado do método filter é ${filtraPares(arrayNumeros)}`)
console.log('--------')

//Reduce 1
function somaNumeros(lista) {
  return lista.reduce(function (futuro, atual) {
    return futuro + atual
  })
}

const numerais = [2, 4, 7, 8, 9]

console.log(`O resultado do método reduce - soma é ${somaNumeros(numerais)}`)
console.log('--------')

//Reduce 2
const comprar = [
  {
    name: 'cebola',
    preco: 2
  },
  {
    name: 'cafe',
    preco: 12
  },
  {
    name: 'macarrao',
    preco: 4
  },
  {
    name: 'limao',
    preco: 3
  }
]

/*
function subtraiDinheiro(comprar, saldo) {
  return comprar.reduce((prev, curr) => {
    return prev - curr.preco
  }, saldoDisponivel)
}
*/

function somaPreco(preco) {
  return preco.reduce((prev, curr) => {
    if (prev.preco === undefined) {
      return prev + curr.preco
    } else {
      return prev.preco + curr.preco
    }
  })
}

function subtraiDinheiro() {
  const saldoDisponivel = 30
  return saldoDisponivel - somaPreco(comprar)
}

console.log(`O saldo final após o pagamento será ${subtraiDinheiro()}`)
