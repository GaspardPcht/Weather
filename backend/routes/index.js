// Exemple dans index.js ou app.js

// Si vous utilisez Express.js
const express = require("express");
const app = express();

// Autres routes et middlewares...

// Route pour la racine
app.get("/", (req, res) => {
  res.send("Welcome to the Weather App Backend");
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
