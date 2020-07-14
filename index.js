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
  res.send(data);
});

app.post("/", async (req, res) => {
    console.log(req.body);
    const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/users"
      );
    res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
