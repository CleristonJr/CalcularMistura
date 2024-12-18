
function calcularQuantidade(){
    
    const porcentagemDeProteina = document.getElementById('porcentagemDeProteina').value;
    console.log("porcentagemDeProteina: " + porcentagemDeProteina);
    const quantidadeRacao = document.getElementById('quantidadeRacao').value;
    console.log("quantidadeRacao: " + quantidadeRacao);
    const porcentagemNucleo = document.getElementById('porcentagemNucleo').value;
    console.log("porcentagemNucleo: " + porcentagemNucleo);

    if(quantidadeRacao && porcentagemDeProteina){
        const proteinaSoja = 45;
        const proteinaMilho = 9;
        if(porcentagemDeProteina >= proteinaMilho){
            partesSoja = porcentagemDeProteina - proteinaMilho;
            console.log("partesSoja: " +  partesSoja);
        }else{
            partesSoja =  proteinaMilho - porcentagemDeProteina;
            console.log("partesSoja: " + partesSoja);
        }

        if(porcentagemDeProteina >= proteinaSoja){
            partesMilho = porcentagemDeProteina - proteinaSoja;
            console.log("partesMilho: " + partesMilho);
        }else{
            partesMilho =  proteinaSoja - porcentagemDeProteina;
            console.log("partesMilho: " + partesMilho);
        }

        const quantidadePartes = partesMilho + partesSoja;
        console.log("quantidadePartes: " + quantidadePartes);
        const porcentagemSoja = (partesSoja * 100)/quantidadePartes;
        console.log("porcentagemSoja: " + porcentagemSoja);
        const porcentagemSojaArredondado = Math.round(porcentagemSoja);
        const porcentagemMilho = 100 - porcentagemSojaArredondado;
        console.log("porcentagemMilho: " + porcentagemMilho);

       

        if(porcentagemNucleo){

            document.getElementById('nucleo').style.display = 'block';

            const totalMenosONucleo = 100 - porcentagemNucleo;
            console.log("totalMenosONucleo: " + totalMenosONucleo);
            const resultadoNucleo = quantidadeRacao*(porcentagemNucleo/100);
            console.log("resultadoNucleo: " + resultadoNucleo);

            const porcentagemSojaNucleo = (porcentagemSojaArredondado * totalMenosONucleo) / 100;
            console.log("porcentagemSojaNucleo: " + porcentagemSojaNucleo);
            const resultadoSoja = quantidadeRacao * (porcentagemSojaNucleo/100);
            console.log("resultadoSoja: " + resultadoSoja);
            
            const porcentagemMilhoNucleo = 100-porcentagemSojaNucleo-porcentagemNucleo;
            console.log("porcentagemMilhoNucleo: " + porcentagemMilhoNucleo);
            const resultadoMilho = quantidadeRacao * (porcentagemMilhoNucleo/100);
            console.log("resultadoMilho: " + resultadoMilho);

            document.getElementById('milho').innerText = `Milho: ${resultadoMilho}`;
            document.getElementById('soja').innerText = `Soja: ${resultadoSoja}`;
            document.getElementById('nucleo').innerText = `Núcleo: ${resultadoNucleo}`;

        }else{

            const resultadoMilho = quantidadeRacao * (porcentagemMilho/100);
            const resultadoSoja = quantidadeRacao * (porcentagemSojaArredondado/100);
            document.getElementById('milho').innerText = `Milho: ${resultadoMilho}`;
            document.getElementById('soja').innerText = `Soja: ${resultadoSoja}`;
            document.getElementById('nucleo').style.display = 'none';
            
        }

        
    }else {
        document.getElementById('milho').innerText = 'Por favor, preencha todos os campos.';
    }
}
