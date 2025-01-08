const emitirNotaFiscal = () => {
    
    let replaceValue = document.getElementById('valor').value.replace(".", "");
    replaceValue = replaceValue.replace(",", "");
    replaceValue = replaceValue.replace(".", "");

    const valueSale = parseFloat(replaceValue);
    const items = document.getElementById('itens').value;
    const irpf = parseFloat(document.getElementById('irpf').value);
    const pis = parseFloat(document.getElementById('pis').value);
    const cofins = parseFloat(document.getElementById('cofins').value);
    const inss = parseFloat(document.getElementById('inss').value);
    const issqn = parseFloat(document.getElementById('issqn').value);

    if (isNaN(valueSale) || isNaN(irpf) || isNaN(pis) || isNaN(cofins) || isNaN(inss) || isNaN(issqn)) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    const valorIRPF = (irpf / 100) * valueSale;
    const valorPIS = (pis / 100) * valueSale;
    const valorCOFINS = (cofins / 100) * valueSale;
    const valorINSS = (inss / 100) * valueSale;
    const valorISSQN = (issqn / 100) * valueSale;

    const totalImpostos = valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;
    const valorLiquido = valueSale - totalImpostos;

    const notaFiscalDiv = document.getElementById('nota-fiscal');
    notaFiscalDiv.innerHTML = `
        <p><strong>Itens Vendidos:</strong> ${items}</p>
        <p><strong>Valor da Venda:</strong> R$ ${formatCoins(null, valueSale)}</p>
        <p><strong>Impostos Calculados:</strong></p>
        <ul>
            <li>IRPF: R$ ${formatCoins( null, valorIRPF)}</li>
            <li>PIS: R$ ${formatCoins(null, valorPIS)}</li>
            <li>COFINS: R$ ${formatCoins(null, valorCOFINS)}</li>
            <li>INSS: R$ ${formatCoins(null, valorINSS)}</li>
            <li>ISSQN: R$ ${formatCoins(null, valorISSQN)}</li>
        </ul>
        <p><strong>Total de Impostos:</strong> R$ ${formatCoins(null, totalImpostos)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${formatCoins(null, valorLiquido)}</p>
    `;
}

