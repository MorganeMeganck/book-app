const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index");
const app = express();
const cors = require("cors");

// Permet d'avoir une propagation des erreurs avec les async/await dans express
require("express-async-errors");
// Chargement des variables d'environement
require("dotenv-flow").config();
app.use(express.json());
app.use(cors());
// Variable de config
const { PORT, NODE_ENV, DB_CONNECTIONSTRING } = process.env;
// Middlewares
app.use("/", router);
// const password = "7kzk6ySn4GpuYNmF";
// const cluster = "cluster0.zzr95";
// const dbname = "book-app";

mongoose.connect(DB_CONNECTIONSTRING);

// Demarrage du serveur
app.listen(PORT, () => {
  console.log(`Server up on port ${PORT} [${NODE_ENV}]`);
});
