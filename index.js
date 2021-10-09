const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const gamesRouter = require("./routes/games");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/api", gamesRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
