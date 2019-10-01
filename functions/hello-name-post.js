const querystring = require('querystring');

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: event.body,
  };

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string
  const name = params.name || 'World';

  return {
    statusCode: 200,
    body: `Hello, ${name}`,
  };
};
