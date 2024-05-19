function formatMoney(value) {
    value = Math.ceil(value * 100) / 100 // arredonda só o último digito
    value = value.toFixed(2)
    return '$ ' + value
}

function formatSplit(value) {
    if (value == 1) return value + ' Person'
    return value + ' People'
}

function update() {
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value //label for=""
    let split = document.getElementById('splitInput').value //label for=""

    // Qtos porcento vou pagar:
    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    // Total e divide pela quantidade de pessoas:
    let billEach = billTotal / split

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('billEach').innerHTML = formatMoney(billEach)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
}

