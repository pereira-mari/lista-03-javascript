const palavra = "mariana";

function contarVogais(palavra){
    let i, contador = 0;
    for(i=0; i < palavra.length; i++){
        if(palavra[i].includes("a") || palavra[i].includes("e") || palavra[i].includes("i") || palavra[i].includes("o") || palavra[i].includes("u")){
            contador++;
        }
    }
    return contador;
}

function main(){
    let vogais = contarVogais(palavra);
    console.log(vogais);
}

main();