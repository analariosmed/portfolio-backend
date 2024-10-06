const express = require("express");
const app = express();
const port = process.env.PORT || 3001;


app.get("/api", (req, res) => { 
  res.type('json').send(json)
});

const server = app.listen(port, () => console.log(`Portfolio app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const json = `
{"portfolio": "Hello World"}
`
