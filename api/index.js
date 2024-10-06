const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors')
app.use(cors())

app.get("/", (req, res) => { 
  res.type('html').send("<h1>Portfolio api</h1>")
});

app.get("/api", (req, res) => { 
  res.type('json').send(json)
});

app.get("/api/:id", (req, res) => { 
  const id = parseInt(req.params.id, 10);
  const data = JSON.parse(json);
  if (id >= 0 && id <= data.portfolio.length) {
    res.type('json').send(data.portfolio[id]);
  } else {
    res.status(404).send({ error: "Project not found" });
  }
});

app.listen(port, () => console.log(`Portfolio app listening on port ${port}!`));

const json = `
{"portfolio": [
    {
      "name": "Project 1",
      "description": "This is a project",
      "url": "https://www.google.com"
    },
    {
      "name": "Project 2",
      "description": "This is a project",
      "url": "https://www.google.com"
    },
    {
      "name": "Project 3",
      "description": "This is a project",
      "url": "https://www.google.com"
    },
    {
      "name": "Project 4",
      "description": "This is a project",
      "url": "https://www.google.com"
    },
    {
      "name": "Project 5",
      "description": "This is a project",
      "url": "https://www.google.com"
    },
    {
      "name": "Project 6",
      "description": "This is a project",
      "url": "https://www.google.com"
    },
    {
      "name": "Project 7",
      "description": "This is a project",
      "url": "https://www.google.com"
    },
    {
      "name": "Project 8",
      "description": "This is a project",
      "url": "https://www.google.com"
    },
    {
      "name": "Project 9",
      "description": "This is a project",
      "url": "https://www.google.com"
    },
    {
      "name": "Project 10",
      "description": "This is a project",
      "url": "https://www.google.com"
    }
  ]
}
`

// Export the Express API
module.exports = app