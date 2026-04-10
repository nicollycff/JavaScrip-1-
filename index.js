const livros = require(`./listaLivros`);

let maisBarato = 0; 

for (let atual = 0; atual < LIVROS. length; atual++){
    if (LIVROS[atual].preco < LIVROS[maisBarato]) {
      maisBarato = atual  
    }
}

console.log(`o livro mais barato custa  ${livros[maisBarato].
    preco} e o título é ${livros[maisBarato].titulo} Trabalho realizado por Nicolly`);