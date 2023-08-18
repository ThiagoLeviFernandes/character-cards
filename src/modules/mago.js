import { Personagem } from "./personagem.js";

export class Mago extends Personagem {
    elementoMagico
    LevelMagico
    inteligencia
   static tipo =  'Mago'
   static descricao ='Detentor de lancas e flechas mágicas!'
    
    constructor(nome, elementoMagico, levelMagico, inteligencia) {
        super(nome)
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia =  inteligencia
    }       
    
    obterInsignia() {
        if(this.levelMagico >= 5 && this.inteligencia >= 5) {
            return  `Mestre do ${this.elementoMagico}`;
        }
        return super.obterInsignia();
    }

}    

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 8)
console.log(magoAntonio.nome) 