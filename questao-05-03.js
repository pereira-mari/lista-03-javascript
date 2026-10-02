const alunos = [
    {
        nome: "João",
        idade: 20
    },
    {
        nome: "Maria",
        idade: 22
    },
    {
        nome: "Pedro",
        idade: 19
    }
];

function buscarAluno(lista, nomeBuscado){
    for(let i = 0; i < lista.length; i++){
        if(lista[i].nome.toLowerCase() === nomeBuscado.toLowerCase()){
            console.log(lista[i]);
        }
    }
}

function main(){
    let nomeBuscado = "Maria";
    buscarAluno(alunos, nomeBuscado);
}

main();