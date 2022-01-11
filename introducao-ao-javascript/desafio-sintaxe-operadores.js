const comparacao = (a, b) => {
  let soma = a + b
  let resultado
  if (a === b) {
    resultado = `Os numeros ${a} e ${b} são iguais.`
  } else {
    resultado = `Os numeros ${a} e ${b} não são iguais.`
  }

  if ((soma > 10) & (soma < 20)) {
    resultado += ` Sua soma é ${soma}, que é maior do que 10 e menor do que 20.`
  } else if ((soma > 10) & (soma > 20)) {
    resultado += ` Sua soma é ${soma}, que é maior do que 10 e maior do que 20.`
  } else if (soma < 10) {
    resultado += ` Sua soma é ${soma}, que é menor que 10.`
  } else if (soma === 10) {
    resultado += ` Sua soma é ${soma}, que é menor que 20.`
  } else if (soma === 20) {
    resultado += ` Sua soma é ${soma}, que é maior do que 10`
  }
  alert(resultado)
}

a = Number(prompt('Insira os primeiro valor'))
b = Number(prompt('Insira os segundo valor'))

comparacao(a, b)
