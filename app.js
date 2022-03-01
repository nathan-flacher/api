const express = require('express');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/portfolio',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const Categories = require("./models/categories");

const app = express();

app.get('/api/categories', (req, res, next) => {
    Categories.find()
        .then((categories) => res.status(201).json({ categories }))
        .catch(error => res.status(400).json({ error }));
});

app.post('/api/categories', (req, res, next) => {
    const categories = new Categories({
        ...req.body
    });
    categories.save()
    .then(() => res.status(201).json({ message: 'Category enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

module.exports = app;