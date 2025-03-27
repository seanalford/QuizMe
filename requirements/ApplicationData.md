## Application Data

All application data will be stored and organized within the **/data/** folder in **json** format.

## Appliction Settings 

The default application settings will be stored in **/data/settings.json** file.

**Example: settings.json**
```json
{
  "admin": false,
  "adminPassword": "",
  "defaultLanguage": "eng",
  "supportedLanguages": ["eng","pyc"]  
}
```

These settings will be loaded at startup and stored in the **appSettings** global object.

**Example: Pseudocode**
```js
function loadAppSettings(){
  window.appSettings = {
    admin: settingsData.admin,
    adminPassword: settingsData.adminPassword,
    language: settingsData.defaultLanguage,
    languages: settingsData.supportedLanguages
  };  
}
```

## Localized Resources

Localized resource data will be stored in **/data/local/appSettings.language/resource.json**.

**Example: resource.json**
```json
{
  "appName": "QuizMe"
  "welcomeMessage": "Welcome to",
  "screenName": "Screen Name:",
  "okay": "OK"
}
```

These resources will be loaded at startup and stored in the **appResources** global object.  The resources will be reloaded anyime the user changes languages.

**Example: Pseudocode**
```js
function loadAppResources(language){

  var resourceData.loadResourceFile("/data/local/" + language + "/resources.json"

  window.appResources = {
    appName: resourceData.appName,
    welcomeMessage: resourceData.welcomeMessage,
    screenName: resourceData.screenName,
    okay: resourceData.okay
  };  
}
```

## Quiz List

The localized quiz list will be stored in **/data/local/appSettings.language/quiz_list.json**.  When a quiz is added or removed from the file system, this list will need to be updated accordingly.  Note, that the name of the quiz must match the name of the quiz file.

**Example: quizList.json**
```json
{
  "quizList": [
  "quiz1.json",
  "quiz2.json",
  "quiz3.json",
  "quiz4.json",
  "quiz5.json"
  ]    
}
```

The quiz list will be loaded at startup and stored in the **appQuizList** global object.  

**Example: Pseudocode**
```js
function loadAppQuizList(){
  window.appQuizList = {
    quizList: appQuizList.quizList
  };  
}
```

## Application Intialization

The application data will intialized at startup. (See **LandingPage.md** for more additional information)

**Example: Pseudocode**
```js
function initializeAppData() {
  loadAppSettings();
  loadAppResources(language);
  loadAppQuizList();
}
```

























