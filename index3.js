class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataqueDescricao = "";

    switch (this.tipo) {
      case "mago":
        ataqueDescricao = "usou magia";
        break;
      case "guerreiro":
        ataqueDescricao = "usou espada";
        break;
      case "monge":
        ataqueDescricao = "usou artes marciais";
        break;
      case "ninja":
        ataqueDescricao = "usou shuriken";
        break;
      default:
        ataqueDescricao = "um ataque genérico"; // Caso algum tipo não listado seja inserido
    }

    console.log(`O ${this.tipo} atacou usando ${ataqueDescricao}`);
  }
}

// --- Exemplos de uso ---

// Criando instâncias (objetos) da classe Heroi
const magoExemplo = new Heroi("Merlin", 150, "mago");
const guerreiroExemplo = new Heroi("Aragorn", 87, "guerreiro");
const mongeExemplo = new Heroi("Oogway", 1000, "monge");
const ninjaExemplo = new Heroi("Naruto", 17, "ninja");

// Chamando o método atacar para cada herói
magoExemplo.atacar();
guerreiroExemplo.atacar();
mongeExemplo.atacar();
ninjaExemplo.atacar();

// Exemplo com um tipo não especificado na tabela (para testar o default)
const paladinoExemplo = new Heroi("Paladino", 30, "paladino");
paladinoExemplo.atacar();