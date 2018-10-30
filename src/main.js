const {Blockchain, Transaction} = require('./blockchain')
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate('2de8b943ebbb4950445584b7379570d7cce645689e149cb985c9216f830df08c')
const myWalletAddress = myKey.getPublic('hex')

let savjeeCoin = new Blockchain()

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10)
tx1.signTransaction(myKey)
savjeeCoin.addTransaction(tx1)

console.log(`Starting the miner...`)
savjeeCoin.minePendingTransactions(myWalletAddress)

console.log()
console.log(`Balance of xavier is ${savjeeCoin.getBalanceOfAddress(myWalletAddress)}`)

//savjeeCoin.chain[1].transactions[0].amount = 11

console.log()
console.log('Is chain valid?', savjeeCoin.isChainValid())

console.log()
console.log('JSON chain below...')
console.log(JSON.stringify(savjeeCoin, null, 4))
