import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs")
})
app.post("/submit", (req, res) => {
    const ccNumber = req.body["ccNumber"];
    const ccHolder = req.body["ccHolder"];
    const validUntil = req.body["validUntil"];
    const cvcNumber = req.body["cvcNumber"];
    res.render("index.ejs", {
        ccNumberOutput: ccNumber,
        ccHolderOutput: ccHolder,
        validUntilOutput: validUntil,
        cvcNumberOutput: cvcNumber 
    })
})
app.get("/about", (req, res) => {
    res.render("about.ejs")
})

app.listen(port, () => {
    console.log(`Server on port: ${port}`)
})