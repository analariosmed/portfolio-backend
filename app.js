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

const server = app.listen(port, () => console.log(`Portfolio app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

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
