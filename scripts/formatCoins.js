const formatCoins = (elementID) => {
    const valueID = document.getElementById(elementID);
    console.log("valor input" + valueID.value);

    valueID.addEventListener('valueID', () => {
        let value = valueID.value.replace(/[^\d,]/g, '').replace(',', '.'); // Remove caracteres não numéricos
        if (!value) return (valueID.value = '');

        // Converte para número, formata e substitui pontos e vírgulas
        value = parseFloat(value).toFixed(2).toString();
        value = value.replace('.', ',');
        valueID.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    });
}

formatCoins();