const mongoose = require("mongoose");

const preferencesSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    sleep: {
      type: String,
      default: "",
    },
    responsibility: {
      type: String,
      default: "",
    },
    cleanliness: {
      type: String,
      default: "",
    },
    organization: {
      type: String,
      default: "",
    },
    communication: {
      type: String,
      default: "",
    },
    light: {
      type: String,
      default: "",
    },
    temperature: {
      type: String,
      default: "",
    },
    guests: {
      type: String,
      default: "",
    },
    study: {
      type: String,
      default: "",
    },
    quietness: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    smoking: {
      type: String,
      default: "",
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Preferences", preferencesSchema);
