(function() {
    console.log('Script de formatação de cidade carregado com sucesso.');

    function formatCityName(cityName) {
        // Verifica se o nome da cidade foi fornecido
        if (!cityName) {
            console.log('Nenhum nome de cidade recebido.');
            return '';
        }

        console.log('Nome da cidade recebido: ' + cityName);

        // Remove acentos e caracteres especiais
        var formatted = cityName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        // Remove espaços e transforma em minúsculas
        formatted = formatted.replace(/\s+/g, '').toLowerCase();

        // Remove caracteres especiais e números
        formatted = formatted.replace(/[^a-z]/g, '');

        console.log('Cidade formatada: ' + formatted);

        // Retorna a cidade formatada
        return formatted;
    }

    // Verifica se a função está presente no escopo global
    window.formatCityName = formatCityName;
    console.log('Função formatCityName registrada no window.');

    // Adiciona logs para monitorar se o evento foi enviado ao Google Tag Manager
    window.onSuccess = function(cityFormatted) {
        console.log('Evento de sucesso disparado. Cidade formatada enviada ao GTM: ' + cityFormatted);
    };

    window.onFailure = function(errorMessage) {
        console.log('Evento de erro disparado. Mensagem de erro enviada ao GTM: ' + errorMessage);
    };
})();
