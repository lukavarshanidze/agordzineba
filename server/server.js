// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const mongoose = require('./utils/database');
const Data = require('./models/data');
const upload = require('./upload');

const app = express();
const port = 8080;

// Middleware
app.use(cors({
    origin: ["https://agordzineba-frontend.vercel.app/"],
    credentials: true
}));
app.use(bodyParser.json());
app.use(express.static('uploads'));

// Connect to the database

app.post('/api/upload', upload.single('image'), (req, res) => {
    try {
        res.status(200).json({ filePath: req.file.path });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Routes
app.post('/api/data', async (req, res) => {
    const { text, image, header } = req.body;
    console.log(text);

    try {
        const newData = new Data({ header, text, image });
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        console.error('Error adding data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/data', async (req, res) => {
    try {
        const data = await Data.find();
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        // console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/getData/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id', id);
    try {
        const data = await Data.findById(id);
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        // console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.patch('/api/data/edit/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id, 'iddddd');
    const { text, header } = req.body;
    try {
        const data = await Data.findById(id);
        if (data) {
            data.text = text;
            data.header = header;
            await data.save();
        }
        res.status(200).json(data);
    } catch (error) {
        // console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/api/data/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const record = await Data.findById(id);
        if (record) {
            // Delete image file if it exists
            if (record.image) {
                const imagePath = path.join(__dirname, 'uploads', path.basename(record.image));
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                }
            }

            await record.deleteOne();
            res.status(200).json({ message: 'Record and image deleted successfully' });
        } else {
            res.status(404).json({ error: 'Record not found' });
        }
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/data/pinned', async (req, res) => {
    try {
        const data = await Data.find().sort({ pinned: -1, pinnedAt: -1 });
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching pinned data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.patch('/api/data/:id/pin', async (req, res) => {
    const { id } = req.body;
    const { pinned } = req.body;
    console.log(id, 'idddd');
    try {
        const record = await Data.findById(id);
        if (record) {
            record.pinned = pinned;
            record.pinnedAt = pinned ? new Date() : null;
            await record.save();

            const allRecords = await Data.find().sort({ pinned: -1, pinnedAt: -1 });
            res.status(200).json(allRecords);
        } else {
            res.status(404).json({ error: 'Record not found' });
        }
    } catch (error) {
        console.error('Error updating pinned status:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
