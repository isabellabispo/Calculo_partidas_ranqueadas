
function Calculo(vitorias, derrotas){
    let saldoVitorias =  vitorias - derrotas
    
     if(saldoVitorias < 10){
       console.log(`O heroi tem saldo de ${saldoVitorias} e está no nivel de Ferro`)
       
    }else if ( saldoVitorias >= 11 && saldoVitorias <= 20){
        console.log(`O heroi tem saldo de ${saldoVitorias} e está no nivel de Bronze`)
        
    }else if ( saldoVitorias >= 21 && saldoVitorias <= 50){
        console.log(`O heroi tem saldo de ${saldoVitorias} e está no nivel de Prata`)
        
    }else if ( saldoVitorias >= 51 && saldoVitorias <= 80){
        console.log(`O heroi tem saldo de ${saldoVitorias} e está no nivel de Ouro`)
        
    }else if ( saldoVitorias >= 81 && saldoVitorias <= 90){
        console.log(`O heroi tem saldo de ${saldoVitorias} e está no nivel de Diamante`)
        
    }else if ( saldoVitorias >= 91 && saldoVitorias <= 100){
        console.log(`O heroi tem saldo de ${saldoVitorias}, e está no nivel de Lendário`)
        
    }else if ( saldoVitorias >= 101){
        console.log(`O heroi tem saldo de ${saldoVitorias} e está no nivel de Imortal`)
    }
     
  
}

Calculo(50, 18)