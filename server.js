const express = require('express');

const app = express()
const PORT = process.env.PORT || 3000

// Home page
app.get("/", (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
              <a href="/98">take one down, pass it around</a>`);
  });

// Number of bottles page
app.get("/:number_of_bottles", (req, res) => {
    const numberOfBottles = parseInt(req.params.number_of_bottles);
    let message = `${numberOfBottles} Bottles of beer on the wall.`;
    let link = "";
  
    if (numberOfBottles > 0) {
      link = `<a href="/${numberOfBottles - 1}">take one down, pass it around</a>`;
    }
    
    message += link;
    
    if (numberOfBottles === 0) {
        message += `<br><a href="/">Start Over</a>`};
    res.send(message);
  });

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})