const formatCoins = (elementIDparm, valueparm) => {
    if (elementIDparm != null) {
        const valueID = document.getElementById(elementIDparm);

        valueID.addEventListener('input', () => {
            let value = valueID.value.replace(/[^\d]/g, ''); 
    
            if (!value) {
                valueID.value = '';
                return;
            }
    
    
            value = (parseFloat(value) / 100).toFixed(2).toString();
    
    
            value = value.replace('.', ',');
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
    
            valueID.value = value;    
        })
    }else if(valueparm != null){
        let value = valueparm; 
        value = (parseFloat(value) / 100).toFixed(2).toString();
        value = value.replace('.', ',');
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return value;    
    }
} 

    


