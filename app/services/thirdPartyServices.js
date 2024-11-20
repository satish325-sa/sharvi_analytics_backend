
const axios = require('axios');

// Environment variables for third-party API configuration
const THIRD_PARTY_API_URL_POST_PMORDER = process.env.THIRD_PARTY_API_URL_POST_PMORDER ||"http://10.10.10.50:8001/gtp/result?sap-client=400"

const THIRD_PARTY_USERNAME = process.env.THIRD_PARTY_USERNAME || "Mounika";
const THIRD_PARTY_PASSWORD = process.env.THIRD_PARTY_PASSWORD || "India@2024";

// Function to get Authorization Header
const getAuthHeader = () => {
  if (!THIRD_PARTY_USERNAME || !THIRD_PARTY_PASSWORD) {
    throw new Error('Third-party API credentials are missing');
  }
  const credentials = `${THIRD_PARTY_USERNAME}:${THIRD_PARTY_PASSWORD}`;
  const token = Buffer.from(credentials).toString('base64');
  return `Basic ${token}`;
};


// // Function to send a GET request to the third-party API
const fetchPMOrder = async (payload) => {
  try {
    const response = await axios.post(
      THIRD_PARTY_API_URL_POST_PMORDER,
      { MASTER: payload },
      {
        headers: {
          'Authorization': getAuthHeader(),
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('POST Response from third-party API:', JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error('Error in fetchPMOrder:', error.message);
    throw new Error(`Failed to fetch data from third-party API: ${error.message}`);
  }
};



module.exports = {
  getAuthHeader,
  fetchPMOrder,
  
};