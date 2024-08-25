const fs = require('fs');
let buttonPaths;
function findname(event,groupId){
//function findname(){
    const buttonId = event.target.id;
    let id = parseInt(buttonId.charAt(1)); // Extract the numeric part of the button id
    console.log(`${groupId}`);

    fs.readFile('data/desktop_files.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            remote.dialog.showErrorBox('Error', 'Failed to read JSON file.');
        } else {
            try {
                const buttonsData = JSON.parse(data);
                buttonPaths = buttonsData[groupId];
                if (!buttonPaths || buttonPaths.length === 0) {
                    console.error('Button data not found or empty.');
                    remote.dialog.showErrorBox('Error', 'Button data not found or empty.');
                } else {
                    console.log('Button data read successfully.');
                    console.log(`${buttonPaths}`);
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
                remote.dialog.showErrorBox('Error', 'Error parsing JSON.');
            }
        }
    });

    console.log(`${String(buttonPaths[id])}`);
    let appPath =buttonPaths[id];
    const appNameWithExtension = path.basename(filePath);
    const appNameParts = appNameWithExtension.split('.');
    const appName = appNameParts.slice(0, -1).join('.');
    return appName;
}