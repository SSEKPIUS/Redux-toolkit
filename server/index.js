const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { randomBytes } = require("crypto");

const app = express();
app.use(bodyParser.json());
app.use(cors());

//retieving posts
const todos = [];

//retieving posts
app.get("/todoList", (req, res) => {
  console.log("get todo list");
  res.send(todos);
});

//adding new post
app.post("/todo", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { todo } = req.body;

  todos.push({ id, todo });

  res.status(201).send(todos);
});

app.listen(4000, () => {
  console.log("post service listening at 4000");
});
