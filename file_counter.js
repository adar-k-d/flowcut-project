const fs = require('fs');

// Function to count the number of lines in a file
function countLines(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n').length;
    return lines;
}

// Function to read files in the data folder and count lines in each file
function countLinesInFiles() {
    const dataFolder = 'data';
    const files = fs.readdirSync(dataFolder);
    const lineCounts = files.map(file => {
        const filePath = `${dataFolder}/${file}`;
        const lines = countLines(filePath);
        return { file, lines };
    });
    return lineCounts;
}

// Example usage
const lineCounts = countLinesInFiles();
console.log("Line counts for each file:");
lineCounts.forEach(({ file, lines }) => {
    console.log(`${file}: ${lines} lines`);
});
