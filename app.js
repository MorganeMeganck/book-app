const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();

// Chargement des variables d'environement
require("dotenv-flow").config();

// Variable de config
const { PORT, NODE_ENV, DB_CONNECTIONSTRING } = process.env;
// Middlewares
app.use("/books", router);
// const password = "7kzk6ySn4GpuYNmF";
// const cluster = "cluster0.zzr95";
// const dbname = "book-app";

mongoose.connect(DB_CONNECTIONSTRING);

// Demarrage du serveur
app.listen(PORT, () => {
  console.log(`Server up on port ${PORT} [${NODE_ENV}]`);
});
