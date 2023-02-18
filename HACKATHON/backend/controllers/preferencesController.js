const asyncHandler = require("express-async-handler");

const Preferences = require("../models/prefrencesModel");
const User = require("../models/userModel");

// @desc    Get Preferences
// @route   GET /api/preferences
// @access  Private
const getPreferences = asyncHandler(async (req, res) => {
  //req.user.id is accesed after autherization thru authMiddleware
  const preferences = await Preferences.find({ user: req.user.id });

  res.status(200).json(preferences);
});

const getAllPreferences = asyncHandler(async (req, res) => {
  const preferences = await Preferences.find();
  if (!preferences) {
    res.status(400);
    throw new Error("Error while fetching all preferences");
  }
  res.status(200).json(preferences);
});

// @desc    create Preferences
// @route   POST /api/preferences
// @access  Private
const createPreferences = asyncHandler(async (req, res) => {
  const {
    responsibility,
    cleanliness,
    organization,
    communication,
    light,
    temperature,
    guests,
    study,
    sleep,
    quietness,
    status,
    description,
    smoking,
  } = req.body;

  const newPreferences = await new Preferences({
    user: req.user.id,
    responsibility: responsibility,
    cleanliness: cleanliness,
    organization: organization,
    communication: communication,
    light: light,
    temperature: temperature,
    guests: guests,
    study: study,
    sleep: sleep,
    quietness: quietness,
    status: status,
    smoking: smoking,
    description: description,
  });

  newPreferences.save();
  // res.status(200).json(senderPackage);
  res.status(200).json(newPreferences);
});

// @desc    Update Preferances
// @route   PUT /api/preferances/:id
// @access  Private
const updatePreferences = asyncHandler(async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  const preferences = await Preferences.findById(req.params.id);

  if (!preferences) {
    res.status(400);
    throw new Error("Prefernce not found");
  }

  const updatedPreferences = await Preferences.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedPreferences);
});

module.exports = {
  getPreferences,
  createPreferences,
  updatePreferences,
  getAllPreferences,
};
