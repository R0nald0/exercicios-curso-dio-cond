
function confereValor (a ,b){
     var resultado;
    
     if (a !== b){
          resultado = a + b;          

          console.log("Os números "+ a + " e " + b +" não são iguais.Sua soma é " + resultado)
          
           resultado > 20
              ? console.log(" que é maior que 10  e maior que 20")
              :  resultado < 10 
                    ? console.log(" que é menor que 10  e menor que 20")
                    : console.log(" que é maior que 10  e menor que 20")     
                
        }else{
            resultado = a + b;     
            console.log("Os números "+ a + " e " + b +"  são iguais.Sua soma é " + resultado)
          
           resultado > 20
              ? console.log(" que é maior que 10  e maior que 20")
              :  resultado < 10 
                    ? console.log(" que é menor que 10  e menor que 20")
                    : console.log(" que é maior que 10  e menor que 20")     
     }
        
};


confereValor(7,7)
