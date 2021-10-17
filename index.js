const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const gamesRouter = require("./routes/games");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", gamesRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
