import express from "express";
const app = express();

app.get("/", function (_req, res) {
  res.send("Hello World");
});
app.get("/about", function (_req, res) {
  res.send("About Page");
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening ${port}...`));
console.log("a");
