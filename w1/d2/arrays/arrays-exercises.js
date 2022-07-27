// List out 5 of your classmates in an array declaration.
const names = ['Aymeric', 'Hamza', 'Charlotte', 'Benjamin', 'Sébastien']

// Add a name to the end
names.push('Arcadio')

// Add a name to the start
names.unshift('Igor')

// Remove three names from the middle
names.splice(2, 3)

// Loop over the remaining names, greeting them with a hello (in any language)
names.forEach((name) => {
  console.log(`Ola, ${name}!`)
})
const greeting = (name) => {
  console.log(`Hallo, ${name}!`)
}
// the return value from calling .forEach is always undefined
console.log(names.forEach(greeting))

// Advanced
// List out in an array all of the coins in a currency (usually starts 1, 2, 5)
const coins = [1, 2, 5, 10, 20, 50, 100, 200]

// initialise sum to be 0
let sum = 0
// Use a for loop to sum them up
for (let i = 0; i < coins.length; i++) {
  // add the coin value onto sum
  sum += coins[i]
}
// for (const coin of coins) {
//   sum += coin
// }
console.log('sum', sum)

let forEachSum = 0
coins.forEach((coin) => {
  forEachSum += coin
})
console.log('forEachSum', forEachSum)

// Use a map to create a new array where every coin value is 100 times larger
const newCoins = coins.map((coin) => coin * 100)
console.log('newCoins', newCoins)

const newCoins2 = coins.map(function (coin) {
  return coin * 100
})
console.log(newCoins2)
console.log(coins)
