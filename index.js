class Heroi {
  constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
  }

  atacar() {
      let ataque = "";
      
      if (this.tipo === "mago") {
          ataque = "usou magia";
      } else if (this.tipo === "guerreiro") {
          ataque = "usou espada";
      } else if (this.tipo === "monge") {
          ataque = "usou artes marciais";
      } else if (this.tipo === "ninja") {
          ataque = "usou shuriken";
      } else {
          ataque = "usou um ataque desconhecido";
      }

      console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}


const heroi1 = new Heroi("Merlin", 150, "mago");
heroi1.atacar();  // Saída: "O mago atacou usando usou magia"

const heroi2 = new Heroi("kojiro", 35, "guerreiro");
heroi2.atacar();  // Saída: "O guerreiro atacou usando usou espada"

const heroi3 = new Heroi("batata", 33, "monge");
heroi3.atacar();  // Saída: "O monge atacou usando usou artes marciais"

const heroi4 = new Heroi("Hanzo", 28, "ninja");
heroi4.atacar();  // Saída: "O ninja atacou usando usou shuriken"
    