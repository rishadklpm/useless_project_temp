function redirectToPlanet() {
    const selectedPlanet = document.getElementById('planet-select').value;
    let weatherCondition;

    // Example conditions, you can customize based on the planet
    switch (selectedPlanet) {
        case 'Mercury':
            weatherCondition = 'sunny';
            break;
        case 'Venus':
            weatherCondition = 'cloudy';
            break;
        case 'Mars':
            weatherCondition = 'snow';
            break;
        case 'Jupiter':
                weatherCondition = 'rain';
                break;
        case 'Saturn':
                weatherCondition = 'cloudy';
                break;
        case 'Uranus':
                weatherCondition = 'rain';
                break;
        case 'Neptune':
                weatherCondition = 'snow';
                break;
        // Add more cases for other planets as needed
        default:
            alert('Please select a planet!');
            return;
    }

    // Redirect to the new page with weather condition
    window.location.href = `${selectedPlanet.toLowerCase()}.html?weather=${weatherCondition}`;
}
