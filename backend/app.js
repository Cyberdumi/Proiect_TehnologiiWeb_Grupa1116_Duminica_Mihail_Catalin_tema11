require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Testare conexiune cu baza de date
db.sequelize
  .authenticate()
  .then(() => console.log('Conexiunea la baza de date a reușit!'))
  .catch((err) => console.error('Eroare la conectarea cu baza de date:', err));

// Model: Artist
const Artist = db.Artist;

// Endpoint-uri
app.get('/artists', async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.status(200).json(artists);
  } catch (err) {
    res.status(500).json({ error: 'Eroare la preluarea artiștilor.' });
  }
});

app.post('/artists', async (req, res) => {
  try {
    const { name, username, profile_url } = req.body;
    const artist = await Artist.create({ name, username, profile_url });
    res.status(201).json(artist);
  } catch (err) {
    res.status(500).json({ error: 'Eroare la crearea artistului.' });
  }
});

app.delete('/artists/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Artist.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: 'Artist șters cu succes.' });
    } else {
      res.status(404).json({ error: 'Artistul nu a fost găsit.' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Eroare la ștergerea artistului.' });
  }
});

// Pornire server
app.listen(PORT, () => {
  console.log(`Serverul rulează pe http://localhost:${PORT}`);
});
