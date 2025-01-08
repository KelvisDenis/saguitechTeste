const formatCoins = (elementID) => {
    if (elementID == null) {
        console.log(`Element is null`);
        return;
    }
    const valueID = document.getElementById(elementID);
    console.log("valor input" + valueID.value);

    valueID.addEventListener('input', () => {
        let value = valueID.value.replace(/[^\d,]/g, '').replace(',', '.'); // Remove caracteres não numéricos e substitui vírgula por ponto
        if (!value) return (valueID.value = ''); // Se não houver valor, limpe o campo

        // Converte para número, garantindo que o valor seja uma string com 2 casas decimais
        value = parseFloat(value).toFixed(2).toString();

        // Adiciona formatação de moeda brasileira (milhares e vírgula para casas decimais)
        value = value.replace('.', ',');
        valueID.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        console.log("valor input final" + valueID.value);
    });
    
}

