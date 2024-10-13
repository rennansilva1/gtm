(function() {
    console.log('Script format_citty.js carregado com sucesso.');  // Log para indicar que o script foi carregado

    function formatCityAPI(cityName, onSuccess, onFailure) {
        console.log('formatCityAPI chamada com a cidade: ' + cityName);  // Log para verificar se a função foi chamada
        var apiUrl = 'https://api.theblackfox.app/api:cm6Pi0eK/cidade?cidade=' + encodeURIComponent(cityName);

        // Faz a requisição à API da cidade
        var xhr = new XMLHttpRequest();
        xhr.open('GET', apiUrl, true);
        xhr.onload = function() {
            console.log('Resposta da API recebida. Status: ' + xhr.status);  // Log da resposta da API
            if (xhr.status >= 200 && xhr.status < 400) {
                var response = JSON.parse(xhr.responseText);
                if (response.response === 200 && response.city_formatted) {
                    console.log('Cidade formatada recebida da API: ' + response.city_formatted);  // Log do sucesso
                    onSuccess(response.city_formatted);
                } else {
                    console.log('Erro no formato da resposta da API.');  // Log de erro na resposta
                    onFailure('Erro na API: Formato inválido de resposta.');
                }
            } else {
                console.log('Erro na chamada da API. Status: ' + xhr.statusText);  // Log de erro da chamada
                onFailure('Erro na API: ' + xhr.statusText);
            }
        };
        xhr.onerror = function() {
            console.log('Erro de requisição para a API.');  // Log de erro de requisição
            onFailure('Erro de requisição.');
        };
        xhr.send();
    }

    // Verifica se a função está presente no escopo global33
    window.formatCityAPI = formatCityAPI;
    console.log('Função formatCityAPI registrada no window.');
})();
