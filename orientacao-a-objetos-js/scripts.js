class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia
    this.numero = numero
    this.tipo = tipo
    this.saldo = 0
  }

  get saldo() {
    return this._saldo
  }

  set saldo(valor) {
    this._saldo = valor
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return 'Operação inválida'
    }
    this._saldo = this._saldo - valor
    return this._saldo
  }

  depositar(valor) {
    this._saldo = this._saldo + valor
    return this._saldo
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero, cartaoCredito)
    this.tipo = 'corrente'
    this.cartaoCredito = cartaoCredito
  }

  get cartaoCredito() {
    return this._cartaoCredito
  }

  set cartaoCredito(valor) {
    return (this._cartaoCredito = valor)
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = 'poupanca'
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero)
    this.tipo = 'universitaria'
  }

  sacar(valor) {
    if (valor > 500) {
      return 'Operação negada. Seu limite é menor que esse valor.'
    }
    return this._saldo - valor
  }
}

/* Para teste:
1º  const minhaConta = new ContaCorrente(1, 234, true);
2º  minhaConta.saldo;
3º  minhaConta.depositar(800)
4º  minhaConta.sacar(400)
5º  minhaConta.saldo
6º  minhaConta.sacar(500)
*/
