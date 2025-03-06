import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>inicializando mini servidor en express</h1>");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port PORT");
});
