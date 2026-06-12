import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'sample.txt');

// CREATE
function createFile(content) {
    fs.writeFileSync(filePath, content);
    console.log('File created successfully.');
}

// READ
function readFile() {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        console.log('File Content:', data);
    } else {
        console.log('File does not exist.');
    }
}

// UPDATE
function updateFile(newContent) {
    if (fs.existsSync(filePath)) {
        fs.appendFileSync(filePath, `\n${newContent}`);
        console.log('File updated (appended).');
    } else {
        console.log('File does not exist.');
    }
}

// DELETE
function deleteFile() {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log('File deleted successfully.');
    } else {
        console.log('File does not exist.');
    }
}

// Demo
createFile("This is the original content.");
readFile();
updateFile("This is the appended content.");
readFile();
deleteFile();