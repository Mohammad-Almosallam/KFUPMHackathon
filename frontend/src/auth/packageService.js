import axios from "axios";

const API_URL = "/api/preferences/";

const createPreferences = async (preferencesData, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(API_URL, preferencesData, config);

    return response;
  } catch (err) {
    return err.response;
  }
};

const updatePreferences = async (preferencesData, preferencesId) => {
  try {
    const response = await axios.put(API_URL + preferencesId, preferencesData);

    return response;
  } catch (err) {
    return err.response;
  }
};

const getPreferences = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(API_URL, config);

    return response;
  } catch (err) {
    return err.response;
  }
};

const getAllPreferences = async () => {
  try {
    const response = await axios.get(API_URL + "allPreferences");

    return response.data;
  } catch (err) {
    return err.response;
  }
};

export {
  createPreferences,
  updatePreferences,
  getPreferences,
  getAllPreferences,
};
