function saudacao(nome){   //nomeada
    console.log(`Tenha um bom dia ${nome}!`);
    
}


const saudacaoAnonima = function (nome){  //anônima
    console.log(`Tenha um bom dia ${nome}!`);
    
}

const saudacaoArrow =  (nome) => {  //Arrow Function
    console.log(`Tenha um bom dia ${nome}!`);  
    
}
saudacaoArrow("João");

 const soma =  (v1, v2) => {
    console.log(v1 + v2);

 }