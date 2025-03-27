## Landing Page

The landing page (index.html) will be displayed at startup.  This page will set the stage for the applications overall look and feel.  It should be colorful, fun, exciting while remaining professional.  

## Initialization

When this page starts it will initialize the application settings, resources, and quiz list data.  (See **ApplicationData.md** for more information)

**Example: Pseudocode**
```js
  initializeAppData();
```

## Dialog Window

Once the applcation data has been initialized, a dialog will be displayed in the cender of the screen.

## Title Bar

The title bar will display the applications name which will be stored in window.appResources.appName.

## Screen Name

In the center of the dialog the user will be prompted to enter their screen name.  The caption for this field will be localized. (window.appResources.screenName)  

## Language

Below the screen name, the user will have the option to select a different language from a dropdown list.  The dropdown list will display a list of supported languages along with a localized flag icon that represents the language. The localized flag files will be located in the /data/ alongside the settings.json file.  The flag file will be prefixed with the languages three letter code.  For example: engFlag.png for English, pycFlag.png for Russian and so on.

When the user selects a different language from the dropdown list the applcation will update window.appSettings.language variable to the selection language and load the requested resources. 

**Example: Pseudocode**
```js
loadAppResources(window.appSettings.language);
```

## Sign In

After the user has entered a screen name the OK button labled (window.appResources.okay) will be enabled.  The OK will be disabled during the page initialization process.

When the user click the OK button, the application will load the main page. (main.html)	
