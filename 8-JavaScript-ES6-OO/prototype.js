//aviao
//atributos cor e modelo; método levantarVoo

//Obejto Literal
let a1= {
    cor: 'Branco',
    modelo: 'Airbus a380',
    levantarVoo: function(){console.log('Levantar voo')}
}

//Função Construtora
let aviaoF = function() {
    this.cor = 'Azul'
    this.modelo = 'Boeing 787'
    this.levantarVoo = function(){
        console.log('Levantar Voo')
    }
}

let a2 = new aviaoF()

//Classe
class AviaoC{
   constructor(){
      this.cor = 'Vermelho'
      this.modelo = 'Embrar E-Jets'
   }

   levantarVoo(){
       console.log('Levantar Voo')
   } 
}

let a3 =  new AviaoC()

console.log(a1)
console.log(a2)
console.log(a3)