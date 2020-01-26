const ghpages = require('gh-pages');
const pjson = require('../package.json');

ghpages.clean();
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: `https://${process.env.GH_TOKEN}@github.com/mramadhanr/mramadhanr.github.io.git`,
    message: `Deploy version ${pjson.version} to github pages`
  },
  err => {
    if (err) {
      console.error(err);
      console.error('Deployment failed with error above');
      return;
    }

    console.log('Github Pages Successfully Deployed');
  }
);
