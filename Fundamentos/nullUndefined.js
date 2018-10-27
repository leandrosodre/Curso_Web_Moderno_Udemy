let valor
console.log(valor)

valor = null //ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

delete produto.preco
console.log(produto)

