    function calcularImc(){
        const nome = document.getElementById("nome").value;
        const altura = document.getElementById("altura").value;
        const peso = document.getElementById("peso").value;
        const resultado = document.getElementById("result");


        /* 
        ESSE CODIGO E PRA SER FEITO PRIMEIRO
        const valorImc =  peso / (altura * altura).toFixed(1)
        console.log(valorImc);
        let classificacao = ""

            if(valorImc < 18.5){
                classificacao = "Abaixo do Peso.";
              }else if(valorImc < 25){
                  classificacao = "Peso Ideal Parabéns!!"
              }else if(valorImc < 30){
                  classificacao = "Levemente Acima do Peso"
              }else if(valorImc < 35){
                  classificacao = "Obesidade Gral 1."
              }else if(valorImc < 40){
                  classificacao = "Obesidade Gral 2."
              }else{
                  classificacao = "Obesidade Gral 3.
              }
              resultado.innerText = nome+ valorImc  +classificacao
               */

        if(nome != "" & altura != "" & peso != ""){
            const valorImc =  (peso / (altura * altura)).toFixed(1)
            /*  toFixed(1) SERA COLOCADO UM NUMERO APENAS DEPOIS DA VIRGULA*/
        console.log(valorImc);
        let classificacao = ""

            if(valorImc < 18.5){
                classificacao = "Abaixo do Peso.";
              }else if(valorImc < 25){
                  classificacao = "Peso Ideal Parabéns!!"
              }else if(valorImc < 30){
                  classificacao = "Levemente Acima do Peso"
              }else if(valorImc < 35){
                  classificacao = "Obesidade Gral 1."
              }else if(valorImc < 40){
                  classificacao = "Obesidade Gral 2."
              }else{
                  classificacao = "Obesidade Gral 3."
              }
      
               /* resultado.innerText = nome+ valorImc  +classificacao*/
       resultado.innerText = `${nome} O seu IMC é ${valorImc} você está com ${classificacao}`

        }else{
            resultado.innerText = "preencha todos os campos."
        }
        
       
       
    }

    