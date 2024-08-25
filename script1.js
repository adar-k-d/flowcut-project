const { exec } = require('child_process');
const path = require('path');

function callPythonScript() {
    // Ensure the path is correctly pointed to your Python script
    // Using `__dirname` to get the directory of the current module (script1.js)
    const scriptPath = path.join(__dirname, 'hide_ico.py');
    const scriptPath2 = path.join(__dirname, 'sorting.py');
    // Explicitly specify the Python interpreter if necessary
    exec(`python "${scriptPath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Python Script Output: ${stdout}`);
    });

    exec(`python "${scriptPath2}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Python Script Output: ${stdout}`);
    });
}

callPythonScript();