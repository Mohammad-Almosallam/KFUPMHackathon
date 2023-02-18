const express = require("express");
const router = express.Router();
const {
  getPreferences,
  createPreferences,
  updatePreferences,
  getAllPreferences,
} = require("../controllers/preferencesController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getPreferences).post(protect, createPreferences);
router.route("/:id").put(updatePreferences);
router.get("/allPreferences", getAllPreferences);

module.exports = router;
