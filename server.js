const express = require("express");

const Wish = require("./model/wish");



const app = express();

app.set ("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));



app.get('/', (req, res) => {
     
        res.render("index", {myWishes: wishesFromFile});
        
    });





app.post("/wish", upload.single("userFile"), (req, res) => {
    let userData = req.body.userWish;

    let newWish = new Wish(userData, reg.file.filename);
    newWish.saveWish();
    res.redirect("/");

});

const port = 5000;

app.listen(port, () => {
    console.log(`Server is running ${port}.`);
});


