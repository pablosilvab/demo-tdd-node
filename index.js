const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();

const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  res.status(200).send(data);
});

app.post("/", async (req, res) => {
  console.log(req.body);
  const { body } = req;
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    body
  );
  res.status(201).send(data);
});

app.put("/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  await axios.put(
    `https://jsonplaceholder.typicode.com/users/${id}`, body 
  );
  res.sendStatus(204)
});


app.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}` 
    );
    res.sendStatus(204);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
