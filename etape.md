## Introduction au Tutoriel

Dans ce tutoriel, nous allons construire une application de blog full stack en utilisant la stack MERN (MongoDB, Express, React et Node).
From scratch

On commence par créer deux dossier

- client
- api

Ensuite on install `yarn create react-app .`
puis lon lance le server avec `yarn start`

modifier le code dans `client\src\App.js`
en insérant seuelemt une `return <div>test</div>;`

### Creation du template de la page d'acceuil.

On créer le template html avec le header
et une liste d'article au format html
dans

`client\src\App.js`

```
import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          My Blog
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=1390&crop=1"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Full-house battery backup coming later this year</h2>
          <p className="info">
            <a href="" className="author">
              WilouGarou
            </a>
            <time>2023-08-10 16:45</time>
          </p>
          <p className="summary">
            Today at its special launch event, home backup power giant EcoFlow
            launched a flurry of new products, including a “Whole-Home Backup
            Power Solution.”
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=1390&crop=1"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Full-house battery backup coming later this year</h2>
          <p className="info">
            <a href="" className="author">
              WilouGarou
            </a>
            <time>2023-08-10 16:45</time>
          </p>
          <p className="summary">
            Today at its special launch event, home backup power giant EcoFlow
            launched a flurry of new products, including a “Whole-Home Backup
            Power Solution.”
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=1390&crop=1"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Full-house battery backup coming later this year</h2>
          <p className="info">
            <a href="" className="author">
              WilouGarou
            </a>
            <time>2023-08-10 16:45</time>
          </p>
          <p className="summary">
            Today at its special launch event, home backup power giant EcoFlow
            launched a flurry of new products, including a “Whole-Home Backup
            Power Solution.”
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
```

`client\src\App.css`

```
body {
  color: #222;
}
img {
  max-width: 100%;
}
main {
  padding: 10px;
  max-width: 700px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 50px;
  align-items: center;
}
header a {
  text-decoration: none;
  color: inherit;
}

header a.logo {
  font-weight: bold;
  font-size: 1.5rem;
}
header nav {
  display: flex;
  gap: 15px;
}

div.post {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 20px;
  margin-bottom: 30px;
}

div.post div.texts h2 {
  margin: 0;
  font-size: 1.8rem;
}

div.post p.info {
  margin: 6px 0;
  color: #888;
  font-size: 0.7rem;
  font-weight: bold;
  display: flex;
  gap: 10px;
}

div.post p.info a.author {
  color: #333;
}
div.post p.summary {
  margin: 10px 0;
  line-height: 1.4rem;
}
```

### Creation du routing avec react-router-dom

`yarn add react-router-dom`

On créer un composant `Post.js` et `Header.js`
Dans `client\src\index.js` on importe `import { BrowserRouter } from "react-router-dom";` afin de faire passer le Browser Router

```js
<BrowserRouter>
  <App />
</BrowserRouter>
```

On a egalement replacer dans `client\src\Header.js` les lien `<a href></a>` et `<Link to></Link>`

Creation du composant `Layout` contenant le header (menu) et apellant le composant prédéfinis `Outlet` fournis par la bibliothèque `react-router-dom`

Se composant permettra de transformer le composant `Layout` en route parent contenant des route enfant définissant des url avec l'élement quelles afficheront.

```js
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
```

### Authentification

on installe un serveur `yarn add express` dans le dossier `api` et dans `api\index.js`

```js
const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.json("test ok2");
});

app.listen(4000);
```

on install `yarn global add nodemon`
et on lance `nodedemon index.js`
Puis on vérifie que tout fonctionne dans `localhost:4000/test`

Ensuite je re définis le code dans `api\index.js` pour faire passer une valeur post

```js
const express = require("express");
const app = express();

app.post("/register", (req, res) => {
  res.json("test ok5");
});

app.listen(4000);
```

Et dans `client\src\Pages\RegisterPage.js`
on créer une fonction async await afin d'écouter l'evenement taper dans le formulaire en utilisant hook `useState` afin de mettre a jour la valeur de l'etat a chaque fois qu'il est appelé.

#### Utilisation du hook `useState` en React

1. **Importation du hook :** Importez le hook `useState` depuis la bibliothèque React.

   ```jsx
   import { useState } from "react";
   ```

2. **Déclaration des variables d'état :** Utilisez le hook `useState` pour déclarer des variables d'état et les fonctions associées pour les mettre à jour. Initialisez-les avec des valeurs par défaut.

   ```jsx
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   ```

   Dans cet exemple, `username` et `password` sont les variables d'état, et `setUsername` et `setPassword` sont les fonctions pour les mettre à jour.

3. **Utilisation des variables d'état :** Utilisez les variables d'état dans votre composant. Dans cet exemple, elles sont utilisées comme valeurs pour les champs de saisie.

   ```jsx
   <input
     type="text"
     placeholder="username"
     value={username}
     onChange={(ev) => setUsername(ev.target.value)}
   />
   <input
     type="password"
     placeholder="password"
     value={password}
     onChange={(ev) => setPassword(ev.target.value)}
   />
   ```

   Ici, la valeur du champ de saisie est liée à la variable d'état correspondante (`username` ou `password`), et la fonction `onChange` met à jour cette variable d'état en fonction des modifications dans le champ de saisie.

4. **Utilisation des variables d'état dans la logique :** Utilisez les variables d'état dans votre logique, comme dans la fonction `register` pour obtenir les valeurs actuelles de `username` et `password`.

   ```jsx
   async function register(ev) {
     ev.preventDefault();
     await fetch("http://localhost:4000/register", {
       method: "POST",
       body: JSON.stringify({ username, password }),
       headers: { "Content-Type": "application/json" },
     });
   }
   ```

5. **Retour du composant :** Utilisez les variables d'état et la logique dans le rendu de votre composant.

   ```jsx
   return (
     <form className="register" onSubmit={register}>
       <h1>Register</h1>
       {/* ... */}
     </form>
   );
   ```

#### Ajouter le CORS

CORS permet de protéger les utilisateurs en empêchant les sites malveillants d'accéder aux ressources d'autres sites sans autorisation.

On installe donc dans `api` le paquet `yarn add cors` puis on l'initialise dans `api\index.js`

#### Gestionnaire de Requêtes POST sur le Serveur (Node.js avec Express)

Le code suivant définit un gestionnaire de requêtes POST pour le serveur Express. Lorsqu'une requête POST est reçue à l'URL "/register", ce gestionnaire est activé pour traiter la demande.

```javascript
app.post("/register", (req, res) => {
  // Gestionnaire pour les requêtes POST à /register

  const { username, password } = req.body;
  // Extraction des données de la requête POST depuis le corps (body) de la requête
  // Cela suppose que le corps de la requête est au format JSON avec les propriétés "username" et "password"

  res.json({ requestData: { username, password } });
  // Envoi d'une réponse JSON contenant les données extraites de la requête
  // Verifier dans le devTools -> network -> preview OU payload
});
```

#### Création d'un projet mongoDb

On créer un nouveau projet mongoDb
on telecharge dans `api` le paquet `yarn add mongoose`
on créer le dossier `api/models`
On définis le fichier `api\models\User.js`

```js
// Importe la bibliothèque "mongoose" qui permet de travailler avec des bases de données MongoDB.
const mongoose = require("mongoose");

// Utilise "Schema" et "model" depuis la bibliothèque "mongoose".
const { Schema, model } = mongoose;

// Crée un nouveau schéma (plan) pour définir comment les données des utilisateurs seront stockées dans la base de données.
const UserSchema = new Schema({
  username: { type: String, required: true, min: 4, unique: true },
  password: { type: String, required: true },
});

// Crée un modèle (une sorte de modèle de données) basé sur le schéma défini pour les utilisateurs.
const UserModel = model("User", UserSchema);

// Exporte le modèle de l'utilisateur pour pouvoir l'utiliser dans d'autres parties du code.
module.exports = UserModel;
```

Le code commence par importer la bibliothèque "mongoose", qui aide à communiquer avec une base de données MongoDB (un type de base de données).

Ensuite, il extrait deux choses spécifiques de "mongoose" : Schema (schéma) et model (modèle). Un schéma définit comment les données seront organisées dans la base de données, et un modèle est une façon pratique de gérer ces données.

Le code crée un schéma pour définir comment les informations des utilisateurs seront stockées. Par exemple, il spécifie que chaque utilisateur a un "username" (nom d'utilisateur) qui doit avoir au moins 4 caractères, et un "password" (mot de passe) qui est obligatoire.

Ensuite, le code crée un modèle d'utilisateur basé sur le schéma défini. Cela signifie qu'il crée une sorte de "forme" pour les données d'utilisateur qui seront stockées dans la base de données.

Enfin, le modèle d'utilisateur est exporté, ce qui signifie que d'autres parties du code peuvent l'utiliser pour ajouter, obtenir, mettre à jour ou supprimer des informations sur les utilisateurs dans la base de données.

En résumé, ce code définit comment les informations des utilisateurs sont organisées et stockées dans une base de données MongoDB à l'aide de la bibliothèque "mongoose".
