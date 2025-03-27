document.addEventListener('DOMContentLoaded', async () => {
    // Disable the start button during initialization
    const startButton = document.getElementById('startButton');
    startButton.disabled = true;

    // Initialize application data
    await initializeAppData();

    // Update UI with localized resources
    document.getElementById('appName').textContent = window.appResources.appName;
    document.getElementById('welcomeMessage').textContent = `${window.appResources.welcomeMessage} ${window.appResources.appName}!`;
    document.getElementById('screenName').placeholder = window.appResources.screenName;    
    startButton.textContent = window.appResources.okay;

    // Setup language selector
    const languageSelect = document.getElementById('languageSelect');
    const flagContainer = document.createElement('div');
    flagContainer.className = 'flag-container';
    const flagImg = document.createElement('img');
    flagImg.className = 'language-flag';

    // Add error handling to debug image loading
    flagImg.onerror = () => {
        console.error(`Failed to load flag: ${flagImg.src}`);
        // Optionally show a default or placeholder image
        // flagImg.src = 'path/to/placeholder.png';
    };
    flagImg.onload = () => console.log(`Successfully loaded flag: ${flagImg.src}`);

    // Try with different path formats to see which one works
    flagImg.src = `./data/${window.appSettings.language}Flag.png`;
    // or try these alternatives:
    // flagImg.src = `/data/${window.appSettings.language}Flag.png`;
    // flagImg.src = `../data/${window.appSettings.language}Flag.png`;

    flagImg.alt = window.appSettings.language;
    flagContainer.appendChild(flagImg);

    // Insert flag before the select element
    languageSelect.parentNode.insertBefore(flagContainer, languageSelect);

    window.appSettings.languages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang;
        option.textContent = lang.toUpperCase();
        languageSelect.appendChild(option);
    });

    // Handle language change
    languageSelect.addEventListener('change', async (e) => {
        const newLanguage = e.target.value;
        window.appSettings.language = newLanguage;
        
        // Update flag image
        flagImg.src = `./data/${newLanguage}Flag.png`;
        flagImg.alt = newLanguage;
        
        await loadAppResources(newLanguage);
        await loadAppQuizList(newLanguage);
        
        // Update UI with new language
        document.getElementById('appName').textContent = window.appResources.appName;        
        document.getElementById('welcomeMessage').textContent = `${window.appResources.welcomeMessage} ${window.appResources.appName}!`;
        document.getElementById('screenName').placeholder = window.appResources.screenName;
        startButton.textContent = window.appResources.okay;
    });

    // Handle screen name input
    const screenNameInput = document.getElementById('screenName');
    screenNameInput.addEventListener('input', () => {
        startButton.disabled = !screenNameInput.value.trim();
    });

    // Handle start button click
    startButton.addEventListener('click', () => {
        const screenName = screenNameInput.value.trim();
        if (screenName) {
            localStorage.setItem('screenName', screenName);
            localStorage.setItem('language', window.appSettings.language);
            window.location.href = 'main.html';
        }
    });

    // Enable the start button after initialization
    startButton.disabled = !screenNameInput.value.trim();
});






