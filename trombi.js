const fs = require("fs");
const express = require("express");
const cors = require('cors')
const fileUpload = require('express-fileupload');
const app = express()
const port = 1501;

app.use(express.static('uploads'));

app.use(express.json());
app.use(cors());
app.use(fileUpload({
    createParentPath: true
}));

const readArticles = () => JSON.parse(fs.readFileSync("./articles.json").toString());
const readProducts = () => JSON.parse(fs.readFileSync("./products.json").toString());

getAge = (dateString) => {
    let today = new Date();
    let birthDates = new Date(dateString);
    let age = today.getFullYear() - birthDates.getFullYear();
    let m = today.getMonth() - birthDates.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDates.getDate())) {
        age--;
    }
    return age;
}

app.get("/blog", (req, res) => {
    res.json(readArticles());
});

app.post("/blog", (req, res) => {
    const body = req.body;
    // Récupère la liste des articles
    const articles = readArticles();
    // Création du nouvel article
    if (articles.some((article) => article.email === body.email)) {
        return res.status(403).send({err:'Cet email est déjà utilisé, veuillez en saisir un autre'});
    } else if (!req.files) {
        res.send({
            status: false,
            message: 'No file uploaded'
        });
    } else {
        let avatar = req.files.avatarUrl;
        avatar.mv('./uploads/' + avatar.name);
        res.json(req.files.avatarUrl);

        const newArticle = {
            id: Math.max(...articles.map((article) => article.id)) + 1,
            lastName: body.lastName.toUpperCase(),
            firstName: body.firstName,
            email: body.email,
            birthDate: body.birthDate,
            age: getAge(body.birthDate),
            avatarUrl: 'http://localhost:1501/'+avatar.name,
            gender: body.gender,
        };


            // Ajoute le nouveau user dans le tableau d'users
        articles.push(newArticle);
            // Ecris dans le fichier pour insérer la liste des users
            fs.writeFileSync("./articles.json", JSON.stringify(articles, null, 4));
            res.json(articles);
        }
});

app.put("/blog/:id", (req, res) => {
    const body = req.body;

    // Récupère la liste des users
    const users = readArticles();

    // Création du nouveau user

    const id = Number(req.params.id);
    if (users.filter((user) => user.id !== body.id).some((user) => user.email === body.email)) {
        return res.status(403).send({err:'Cet email est déjà utilisé, veuillez en saisir un autre'});
    } else {

        const newUser = {
        id: id,
        lastName: body.lastName.toUpperCase(),
        firstName: body.firstName,
        email: body.email,
        birthDate: body.birthDate,
        age: getAge(body.birthDate),
        avatarUrl: body.avatarUrl,
        gender: body.gender,
    };

        // Ajoute le nouveau user dans le tableau d'users
        const newUsers = [...users.filter((user) => user.id !== id), newUser];
        // Ecris dans le fichier pour insérer la liste des users
        fs.writeFileSync("./users.json", JSON.stringify(newUsers, null, 4));
        res.json(newUser);
    }
});

app.get("/users/:id", (req, res) => {

    // Récupère la liste des users
    const users = readArticles();
    const user = users.find((user) => user.id === Number(req.params.id));

    res.json(user);
});

app.delete('/users/:id', function (req, res) {
    // Récupère la liste des users
    const users = readArticles();
    const newUsers = users.filter((user) => user.id !== Number(req.params.id));

    fs.writeFileSync("./articles.json", JSON.stringify(newUsers, null, 4));
    res.json(newUsers);

});

// PRODUCTS //
app.get("/products", (req, res) => {
    res.json(readProducts());
});


app.listen(port, () => console.log(`le serveur est lancé sur le port ${port}`))