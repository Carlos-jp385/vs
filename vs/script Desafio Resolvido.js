const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValueWithDiscount = 0

/*
    R$ 250,00 // 7%
    250*7 -> 1750/100 
*/

function calculateDiscount(price, disconunt) {
    const result = (price * disconunt) / 100
    return result
}

cart.forEach(value => {

    if (value > 30) {
        const disconunt = calculateDiscount(value, 10)
        finalValueWithDiscount = finalValueWithDiscount + (value - disconunt)
    } else {
        finalValueWithDiscount += value
    }
})

console.log(`O valor total da sua compra foi de R$  ${finalValueWithDiscount},
porem voce teve desconto, ira pagar apenas R$ ${finalValueWithDiscount.toFixed(2)},
voce economizou ${finalValueWithDiscount}`)