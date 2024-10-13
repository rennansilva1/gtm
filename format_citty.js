(function() {
    function formatCityAPI(cityName, onSuccess, onFailure) {
        var apiUrl = 'https://api.theblackfox.app/api:cm6Pi0eK/cidade?cidade=' + encodeURIComponent(cityName);
        
        // Faz a requisição à API da cidade
        var xhr = new XMLHttpRequest();
        xhr.open('GET', apiUrl, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                var response = JSON.parse(xhr.responseText);
                if (response.response === 200 && response.city_formatted) {
                    onSuccess(response.city_formatted);
                } else {
                    onFailure('Erro na API: Formato inválido de resposta.');
                }
            } else {
                onFailure('Erro na API: ' + xhr.statusText);
            }
        };
        xhr.onerror = function() {
            onFailure('Erro de requisição.');
        };
        xhr.send();
    }

    // Verifica se a função está presente no escopo global
    window.formatCityAPI = formatCityAPI;
})();
