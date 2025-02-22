import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>inicializando mini servidor en express</h1>");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
