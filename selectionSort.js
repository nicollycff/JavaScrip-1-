const livros = require ('./listaLivros');
const menorValor = require('./menorValor');


for (let atual = 0; atual < livros.length - 1; atual++) {
   let menor = menorValor(livros, atual)

   let livroAtual = livros[atual];
   console.log(`posição atual`, atual)
   console.log(`livros atual`, livros[atual])
   let livrosMenorPreco = livros[menor];
    console.log(`livros atual`, livros[menor])

   livros[atual] = livrosMenorPreco
   livros[menor] = livrosAtual
}

console.log(livros)