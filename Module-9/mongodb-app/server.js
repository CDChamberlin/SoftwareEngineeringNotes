const express = require("express");
const app = express();

require("dotenv").config();
// parse requests of content-type - application / json;
let dbConnect = require("./dbConnect");
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port
${PORT}.`);
});
