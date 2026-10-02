const lista = [
    {
        nome: "salgado",
        preco: 4.00
    },
    {
        nome: "doce",
        preco: 2.00

    }
]

function cadastrarProduto(lista, nome, preco){
    lista.push({nome: nome, preco: preco});
}

function main(){
    let nome = "suco";
    let preco = 3.00;
    cadastrarProduto(lista, nome, preco);
    cadastrarProduto(lista, "refrigerante", 5.00);

    console.log(lista);
}

main();