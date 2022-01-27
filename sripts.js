let family = {
    incomes: [1000, 3500, 550.50],
    expenses: [2200.50, 500, 1000]
}

function sum(array){
    let total =0

    for(let value of array ){
        total += value
    }

    return total
} 

function calculateBalence() {
    const calculateIncomes = sum (family.incomes)
    const calculateExpenses = sum (family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >=0

    let resultText = "negativo"

    if (itsOk) {
        resultText = "positivo"
    }

    console.log(`Seu saldo está ${resultText}: R$${total.toFixed(2)}`)
}

calculateBalence()