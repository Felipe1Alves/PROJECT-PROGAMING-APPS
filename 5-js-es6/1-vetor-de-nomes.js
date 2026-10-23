const listaNomes = ['Marta', 'José', 'Maria']

console.log('\nExibindo todos os elementos do vetor: ')
console.log(listaNomes)

console.log('\nExibindo o primeiro elemento do vetor: ')
console.log(listaNomes[0])

console.log('\nAdicionando um elemento do vetor: ')
listaNomes.push('Marilia')
console.log(listaNomes)
// Sua vez, adicione seu nome no vetor
console.log('\nAdicionando um elemento do vetor: ')
listaNomes.push('Felipe')
console.log(listaNomes)

console.log('\nRemovendo o primeiro elemento do vetor: ')
listaNomes.shift()
console.log(listaNomes)

console.log('\nRemovendo um elemento específico do vetor: ')
// a partir do índice 2, remover apenas um elemento
listaNomes.splice(2,1)
console.log(listaNomes)

console.log('\nRemovendo o último elemento do vetor: ')
listaNomes.pop()
console.log(listaNomes)
