const express = require('express');
const fs = require('fs');
const app = express();
const os = require('os');

app.use(express.json());
app.use(express.static('.'));

const contentFile = 'content.json';

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name in interfaces) {
    for (const interface of interfaces[name]) {
      if (interface.family === 'IPv4' && !interface.internal) {
        return interface.address;
      }
    }
  }
  return '127.0.0.1'; // Fallback to localhost
}
app.post('/update-content', (req, res) => {
  // Replace newlines with <br> tags
  const updatedContent = {
    person1: req.body.person1.replace(/\n/g, '\r\n'),
    boy2: req.body.boy2.replace(/\n/g, '\r\n'),
    central: req.body.central.replace(/\n/g, '\r\n'),
  };
    fs.writeFile(contentFile, JSON.stringify(updatedContent, null, 2), (err) => {
        if (err) {
            res.status(500).send('Error saving content');
        } else {
            res.status(200).send('Content saved successfully');
        }
    });
});
const localIP = getLocalIP();
app.listen(3000, () => {
    console.log(`Server running on ${localIP}:3000`);
});
