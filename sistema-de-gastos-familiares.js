/*
 ### Sistema de gastos familiar 

 Crie um objeto que possuirá 2 propiedades, ambas do tipo array:
    * receitas:[]
    * despesas: []
  
Agora, crie uma funcao que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

//criando objects com reeceitas e despesas da familia
let familia = {
  incomes: [13000, 7500, 2000, 500, 455.9], //receitas da família
  expenses: [320.34, 129.99, 99.99, 179.99, 3299.94, 2500] //despesas da família
}

// funco que soma o total de despesa e de receitas
function sum(array) {
  let total = 0
  for (let value of array) {
    //metodo for..of
    total += value
  }
  return total
}

// funcao que calcula o balanco final
function calculateBalance() {
  const calculateIncomes = sum(familia.incomes)
  const calculateExpenses = sum(familia.expenses)

  const total = calculateIncomes - calculateExpenses

  let balanceText = 'negativo '
  if (total >= 0) {
    balanceText = 'positivo'
  }
  //receita total
  console.log(`receita total: ${calculateIncomes}`)
  //despesa total
  console.log(`despesa total: ${calculateExpenses}`)
  //balaco geral
  console.log(`seu saldo é ${balanceText}: ${total}`)
}

//invocando funcao
calculateBalance()
