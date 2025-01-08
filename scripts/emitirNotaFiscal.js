const emitirNotaFiscal = () => {
    console.log("Script carregado com sucesso!");

    // Capturar os dados do formulário
    const valueSale = parseFloat(document.getElementById('valor').value);
    const items = document.getElementById('itens').value;
    const irpf = parseFloat(document.getElementById('irpf').value);
    const pis = parseFloat(document.getElementById('pis').value);
    const cofins = parseFloat(document.getElementById('cofins').value);
    const inss = parseFloat(document.getElementById('inss').value);
    const issqn = parseFloat(document.getElementById('issqn').value);

    // Validar valores dos campos
    if (isNaN(valueSale) || isNaN(irpf) || isNaN(pis) || isNaN(cofins) || isNaN(inss) || isNaN(issqn)) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    // Calcular os impostos
    const valorIRPF = (irpf / 100) * valueSale;
    const valorPIS = (pis / 100) * valueSale;
    const valorCOFINS = (cofins / 100) * valueSale;
    const valorINSS = (inss / 100) * valueSale;
    const valorISSQN = (issqn / 100) * valueSale;

    const totalImpostos = valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;
    const valorLiquido = valueSale - totalImpostos;

    // Gerar Nota Fiscal
    const notaFiscalDiv = document.getElementById('nota-fiscal');
    notaFiscalDiv.innerHTML = `
        <p><strong>Itens Vendidos:</strong> ${items}</p>
        <p><strong>Valor da Venda:</strong> R$ ${valueSale.toFixed(2)}</p>
        <p><strong>Impostos Calculados:</strong></p>
        <ul>
            <li>IRPF: R$ ${valorIRPF.toFixed(2)}</li>
            <li>PIS: R$ ${valorPIS.toFixed(2)}</li>
            <li>COFINS: R$ ${valorCOFINS.toFixed(2)}</li>
            <li>INSS: R$ ${valorINSS.toFixed(2)}</li>
            <li>ISSQN: R$ ${valorISSQN.toFixed(2)}</li>
        </ul>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
    `;
}

emitirNotaFiscal()