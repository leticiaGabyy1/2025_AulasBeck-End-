let produto = {
    nome: "Celular",
    preco: 2000,
    marca:"Samsung",
    quebrado: false
}


//Exibindo todos os dados do objeto
console.log(produto);
console.log(produto.nome); //Celular
console.log(produto.marca); //Samsung
console.log(produto.modelo); //Undefined

console.log(produto['nome']); //Celular

produto.valor = 1900;
console.log(produto);
produto.modelo = 'Galaxy s24';
console.log(produto);

//Interando sobre as chaves do objeto utilizando o for 
for (let chave in produto){
    console.log(`Chave: ${chave} seu valor é ${produto[chave]}`);    
}

let aluno ={
    nome: 'Leticia',
    sexo:'F',
    idade: 16,
    dados_mae:{
        nome:'Gislaine',
        telefone:'18 99815-9727'
    },
    boletim: [
    {materia: "Português", nota:10, faltas:3},
    {materia: "Matemática", nota:7, faltas:4}
]

    //Gilbéria(pesquisar no instagram)
}

console.log(aluno);
console.log(aluno.dados_mae.telefone);
console.log(aluno.boletim[1].nota);





