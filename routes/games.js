const express = require("express");
const router = express.Router();
const { list, create, show, update, remove } = require("../controllers/games");

// List
router.get("/games", list);
// Show
router.get("/games/:id", show);
// Create route
router.post("/games/", create);
// Update route
router.put("/games/:id", update);
// Delete route
router.delete("/games/:id", remove);

module.exports = router;
