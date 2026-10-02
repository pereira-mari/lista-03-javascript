const aluno ={
    nome: "Mari",
    curso: "ADS"
}

function apresentarAluno(aluno){
    console.log("Bem vinda " + aluno.nome.toUpperCase() + "(" + aluno.curso + ")");
}

function main(){
    apresentarAluno(aluno);
}

main();