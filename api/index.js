const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const secret = "joijoifjofdijfdoidj64654";

// Activation de la gestion des requêtes cross-origin et du traitement du JSON
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect(
  "mongodb+srv://wilonweb:dCC7R5eSXaXcn07Z@cluster0.tfjisx6.mongodb.net/?retryWrites=true&w=majority"
);

// Route pour l'inscription d'un utilisateur
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

// Route pour vérifier que le username = password crypté dans la page login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json("ok");
    });
    //res.json()
  } else {
    // not logged in
    res.status(400).json("wrong credentials");
  }
});

app.listen(4000);
