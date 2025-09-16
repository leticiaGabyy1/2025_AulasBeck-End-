const aprovado = true;
let mensagem ="";
//Modo no if tradicional

if (aprovado == true) {
 mensagem = "aprovado"

}else{
    mensagem = "Reprovado"
}

//Modo ternario

//se for verdadeiro vai receber (?), se não (:)

mensagem = (aprovado == true) ? "aprovado" : "reprovado"