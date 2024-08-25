const fs = require('fs');
//const { execFile } = require('child_process');
const { remote } = require('electron');
let buttonPaths;
let groupId;
// Function to handle button clicks
function handleButtonClick(event) {
    const buttonId = event.target.id;
    console.log(`Button clicked. ID: ${buttonId}`);
    if (/^B\d{2}$/.test(buttonId)) {

        let id = parseInt(buttonId.substring(1)); // Extract the numeric part of the button id
        console.log(`${groupId}`);
        console.log(`${String(buttonPaths[id])}`);
        let appPath =buttonPaths[id];
        exec(`start "" "${appPath}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(error);
               remote.dialog.showErrorBox('Error', 'Failed to run application.');
            } else {
                console.log('Application executed successfully.');
            }
        });
    }

    else{
        groupId=buttonId;
        fs.readFile('data/desktop_files.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                remote.dialog.showErrorBox('Error', 'Failed to read JSON file.');
            } else {
                try {
                    const buttonsData = JSON.parse(data);
                    buttonPaths = buttonsData[buttonId];
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
    }
}

/*
// Add event listener to all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
*/
document.querySelectorAll('button, img').forEach(element => {
    // Add click event listener to each element
    element.addEventListener('click', handleButtonClick);
});
