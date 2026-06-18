const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  // Replace with your public Production Webhook URL
  const url = "https://tbuilds-automation-hub.hf.space/webhook/keep-alive";

  try {
    const response = await fetch(url);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Pinged ${url} - Status: ${response.status}`,
      }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
