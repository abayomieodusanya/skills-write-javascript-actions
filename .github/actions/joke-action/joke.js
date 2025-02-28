const axios = require("axios"); // Import axios

// Define options similar to request-promise
const options = {
  method: "GET",
  url: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills course.",
  },
};

async function getJoke() {
  try {
    const response = await axios(options); // Pass the options object
    return response.data.joke; // Axios stores response data in 'data' field
  } catch (error) {
    console.error("Error fetching joke:", error);
    return "Failed to fetch joke!";
  }
}

module.exports = getJoke;
