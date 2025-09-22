let diaSemana = 'sexta'; 

switch (diaSemana) {
    case 'Segunda':  //if (diaSemana = 'segunda')
        console.log('Hoje tem SENAI');
        break;
         case 'Terça': 
        console.log('Hoje tem SENAI');
        break;
         case 'Quarta': //else if (diaSemana == 'quarta' || dia)
         case 'Quinta':
         case 'Sexta':
        console.log('Hoje tem aula do SESI');
        break;
        default:  //else
            console.log('Hoje não tem aula');
        break;

}