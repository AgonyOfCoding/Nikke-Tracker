const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/investmentData', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'investmentData.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.post('/api/save-investments', (req, res) => {
    const dirPath = path.join(__dirname, 'data');
    const filePath = path.join(dirPath, 'investmentData.json');

    fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) {
            console.error('Error creating directory:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        fs.writeFile(filePath, JSON.stringify(req.body, null, 2), (err) => {
            if (err) {
                console.error('Error writing to the file:', err);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.status(200).send('Investments saved successfully');
        });
    });
});

app.get('/api/teamData', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'teamsData.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.post('/api/save-team', (req, res) => {
    const dirPath = path.join(__dirname, 'data');
    const filePath = path.join(dirPath, 'teamsData.json');

    fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) {
            console.error('Error creating directory:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        fs.writeFile(filePath, JSON.stringify(req.body, null, 2), (err) => {
            if (err) {
                console.error('Error writing to the file:', err);
                res.status(500).send('Internal Fooobar Server Error');
                return;
            }
            res.status(200).send('Teams saved successfully');
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
