const fs = require("fs");

const createFile = () => {
    fs.appendFile('input.txt','',(err) => {
        if(err) throw err;
        console.log('Saved')
    })
}

createFile();

const readFile = (path, callback) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, data)
        }
    })
}

const writeFile = (path, data, callback) => {
    fs.writeFile(path, data, 'utf-8', err => {
        if (err) {
            callback(err);
        } else {
            callback();
        }
    })
}

readFile('input.txt', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        const newData = data.toUpperCase();
        writeFile('output.txt', newData, () => {
            console.log('File written successfully')
        });
    }
});