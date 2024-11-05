const express = require('express');
const app = express();
const outfitRoutes = require('./routes/outfitRoutes');
app.use('/api/outfits', outfitRoutes);

module.exports = app;