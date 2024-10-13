(function() {
    console.log('Script de formatação de cidade carregado com sucesso.');

    function formatCityName(cityName) {
        if (!cityName) return '';

        // Remove acentos e caracteres especiais
        var formatted = cityName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        // Remove espaços e transforma em minúsculas
        formatted = formatted.replace(/\s+/g, '').toLowerCase();

        // Remove caracteres especiais e números
        formatted = formatted.replace(/[^a-z]/g, '');

        console.log('Cidade formatada: ' + formatted);
        return formatted;
    }

    // Verifica se a função está presente no escopo global
    window.formatCityName = formatCityName;
    console.log('Função formatCityName registrada no window.');
})();
