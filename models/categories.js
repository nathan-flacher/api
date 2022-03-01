const mongoose = require('mongoose');

const CategoriesSchema = mongoose.Schema({
  title: { type: String },
});

module.exports = mongoose.model('Categories', CategoriesSchema);