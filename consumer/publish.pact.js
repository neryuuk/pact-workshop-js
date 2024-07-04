const pact = require('@pact-foundation/pact-node');

if (!process.env.CI && !process.env.PUBLISH_PACT) {
  console.log("Skipping Pact publish...");
  process.exit(0)
}

const gitHash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString().trim();

pact.publishPacts({
  pactFilesOrDirs: ['./pacts/'],
  pactBroker: process.env.PACT_BROKER_BASE_URL,
  tags: ['prod', 'test'],
  consumerVersion: gitHash
}).then(() => {
  console.log('Pact contract publishing complete!');
  console.log('');
  console.log(`Head over to ${process.env.PACT_BROKER_BASE_URL}`);
  console.log('to see your published contracts.')
}).catch(e => {
  console.error('Pact contract publishing failed: ', e)
});
