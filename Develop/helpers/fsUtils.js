const fs = require('fs');

function readFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      callback(err, null);
      return;
    }
    callback(null, JSON.parse(data));
  });
}

function writeFile(filePath, data, callback) {
  fs.writeFile(filePath, JSON.stringify(data), 'utf8', (err) => {
    if (err) {
      console.error(err);
      callback(err);
      return;
    }
    callback(null);
  });
}

module.exports = { readFile, writeFile };