const express = require("express");
const app = express();
const path = require('path');
const port = 5000;
const cors = require('cors')
app.use(cors())


app.get("/", (req, res) => {
   res.type('html').send("<h1>Portfolio API</h1>")
});

app.get("/api", (req, res) => {
   res.type('json').send(json)
});

app.get("/api/:id", (req, res) => {
   const id = parseInt(req.params.id, 10);
   const data = JSON.parse(json);
   if (id >= 0 && id < data.portfolio.length) {
     res.type('json').send(data.portfolio[id]);
   } else {
     res.status(404).send({ error: "Project not found" });
   }
});

app.get("/images/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const options = {
    root: path.join(__dirname, 'images')
  };

  res.sendFile(imageName, options, (err) => {
    if (err) {
      res.status(404).send({ error: "Image not found"+imageName });
    }
  });
});

app.listen(port, () => console.log(`Portfolio app listening on port ${port}!`));

const json = `{
  "portfolio": [
    {
      "name": "Hi-Tech Order Management System",
      "description": "This system is made using Microsoft Visual Studio 2022, C#, and SQL Server 2022/2019. Its main goal is to make managing orders, keeping track of inventory, dealing with customers, and managing employees easier and more organized.                                                            ",
      "url": "https://github.com/analariosmed/TechDistribution/blob/master/README.md",
      "image": "images/tech.jpg"
    },
    {
      "name": "College Courses Management",
      "description": "This project implements a professor class that ranks professors based on seniority and hire date, along with an automated course allocation system for La Salle College. Using a priority queue, the system assigns courses to professors based on their disciplines and weekly hour preferences.",
      "url": "https://github.com/analariosmed/CollegeCoursesManagement/blob/master/README.md",
      "image": "images/Queue.jpg"
    },
    {
      "name": "Food-Mood Application",
      "description": "The Mood Food application is designed to help users track their food intake and its impact on mood. Users can input details about the food they consume, including the type, portion size, and time of day, as well as rate their mood before and after eating on a scale of 1 to 10.             ",
      "url": "https://github.com/analariosmed/Food-Mood/blob/master/README.md",
      "image": "images/foog.jpg"
    }
  ]
}`

module.exports = app;
