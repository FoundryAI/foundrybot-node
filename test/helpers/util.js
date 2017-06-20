const getTestKey = () => {
  return process.env.FOUNDRYBOT_TEST_API_KEY || '977c5b50-7b91-49ef-a0f6-ac3ca761083b';
};

const spyify = (resource) => {
  if ('makeRequest' in resource) {
    resource.makeRequest = Promise.resolve(true);
  }

  return resource;
};

module.exports = {
  getTestKey,
  spyify
};