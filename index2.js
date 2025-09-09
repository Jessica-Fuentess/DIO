// Função que calcula o nível do jogador
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de partidas
    let saldo = vitorias - derrotas;
    let nivel = "";

    // Determina o nível de acordo com as vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return { saldo, nivel };
}

// Recebe os dados do usuário
let vitorias = parseInt(gets());
let derrotas = parseInt(gets());

// Calcula o resultado chamando a função
let resultado = calcularNivel(vitorias, derrotas);

// Exibe a mensagem final
print(`O Herói tem de saldo de ${resultado.saldo} está no nível de ${resultado.nivel}`);