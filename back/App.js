const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()
const fs = require("fs");
const cors = require('cors')
const fileUpload = require('express-fileupload');

app.use(express.static('uploads'));

app.use(express.json());
app.use(cors());
app.use(fileUpload({
    createParentPath: true
}));

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, 'front/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, 'front/dist/index.html'))
})

const readArticles = () => JSON.parse(fs.readFileSync("./articles.json").toString());
app.get("/blog", (req, res) => {
    res.json(readArticles());
});
app.get("/blog/:id", (req, res) => {

    const articles = readArticles();
    const article = articles.find((article) => article.id === Number(req.params.id));
    res.json(article);
});

const port = process.env.PORT || 5000
app.listen(port)
console.log(`app is listening on port: ${port}`)