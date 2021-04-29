module.exports.handler = async function handler(event) {
  const { request } = event.Records[0].cf;

  if (request.uri.startsWith('/foo')) {
    return {
      headers: {
        location: [
          {
            key: 'Location',
            value: '/',
          },
        ],
      },
      status: '301',
    };
  }

  return request;
};
