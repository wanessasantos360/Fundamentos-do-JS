// function calculaProximaIdade(idade) {
//     idade += 1;
//     console.log ("A idade de Wanessa será: " + idade);
// }

// function calculaProximasIdades (idades) {
//     for (let i = 0; i < idades.lenght; i+=1){
//         idades[i] += 1;
//     }
//     console.log("As próximas idades serão: " + idades);
// }

// function calculaIdadesDaqui5Anos (idades){
//     for (let i = 0; i < idades.lenght; i +=1){
//         idades[i] +=5;
//     }
//     console.log (idades);
// }

// const idadeWanessa = 21;
// const idadesAmigos = [idadeWanessa, 48, 55, 17, 11];
// calculaProximaIdade(idadeWanessa); //de Wanessa
// calculaProximasIdades (idadesAmigos); // Wanessa + Amigos
// calculaIdadesDaqui5Anos(idadesAmigos); 


function calculaProximaIdade(idade) {
    idade += 1;
    console.log(idade);
}

function calculaProximasIdades(idades) {
    for (let i = 0; i < idades.length; i += 1) {
        idades[i] += 1;
    }
    console.log(idades);
}

function calculaIdadesDaqui5Anos(idades) {
     for (let i = 0; i < idades.length; i += 1) {
        idades[i] += 5;
    }
    console.log(idades);
}

const idadeStefany = 21;
calculaProximaIdade(idadeStefany);

const idadesAmigos = [idadeStefany, 20, 23, 18, 7];
calculaProximasIdades(idadesAmigos);

calculaIdadesDaqui5Anos(idadesAmigos);