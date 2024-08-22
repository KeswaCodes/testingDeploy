const fs = require('fs');
const path = './data.json';

// Read the existing data from the JSON file
function readData() {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) reject(err);
            resolve(JSON.parse(data));
        });
    });
}

// Write data to the JSON file
function writeData(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(data, null, 2), 'utf8', (err) => {
            if (err) reject(err);
            resolve('Data written successfully');
        });
    });
}

// Example usage
async function main() {
    try {
        // Read existing data
        let data = await readData();
        console.log('Current Data:', data);

        // Modify data
        data.users.push({ id: 3, name: 'Charlie' });

        // Write updated data
        await writeData(data);
        console.log('Data updated successfully');
    } catch (err) {
        console.error('Error:', err);
    }
}

main();
