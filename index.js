
// TTalk - Temporal Talk

import express from "express";
import bodyParser from "express";

const port = 3000; 
const app = express(); 

// All TTs
let all_tts = [];

/* Middleware. */
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs", {
        all_tts: all_tts
    }); 
});
e


app.get("/new-tt", (req, res) => {
    res.render("new-tt.ejs"); 
});


app.get("/edit-tt", (req, res) => {
    console.log(req.body.id);

    res.render("edit-tt.ejs", { tt_to_edit: "pls edit this TT" });
});


// Create new TT.
app.post("/submit", (req, res) => {
    // Get date. 
    let date = new Date(); 

    let d = date.getDate()+"."+(date.getMonth()+1)+"."+(date.getFullYear()-2000);

    // Check if title and content is blank. 
    let title = req.body.title; 
    if (!title) {
        title = "No Title 😞";
    }

    let content = req.body.content; 
    if (!content) {
        content = "No Content 😿";
    }

    // Create new tt out of the data.
    let tt = new TT(title, content, d);
    all_tts.unshift(tt);

    res.redirect('/');
});

app.listen(port, () => { 
    console.log("Server is running on port ", port);
});

let x = 0; 

// TT Class 
class TT {
    constructor(title, content, date) {
        this.title = title;
        this.content = content; 
        this.date = date; 
    }
}



