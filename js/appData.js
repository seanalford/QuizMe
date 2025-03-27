async function loadAppSettings() {
    try {
        const response = await fetch('/data/settings.json');
        const settingsData = await response.json();
        
        window.appSettings = {
            admin: settingsData.admin,
            adminPassword: settingsData.adminPassword,
            language: settingsData.defaultLanguage,
            languages: settingsData.supportedLanguages
        };
    } catch (error) {
        console.error('Failed to load settings:', error);
    }
}

async function loadAppResources(language) {
    try {
        const response = await fetch(`/data/local/${language}/resources.json`);
        const resourceData = await response.json();        
        window.appResources = resourceData;        
    } catch (error) {
        console.error('Failed to load resources:', error);
    }
}

async function loadAppQuizList(language) {
    try {
        const response = await fetch(`/data/local/${language}/quiz_list.json`);
        const quizListData = await response.json();
        
        window.appQuizList = {
            quizList: quizListData.quizList
        };
    } catch (error) {
        console.error('Failed to load quiz list:', error);
    }
}

async function initializeAppData() {
    await loadAppSettings();
    await loadAppResources(window.appSettings.language);
    await loadAppQuizList(window.appSettings.language);
}