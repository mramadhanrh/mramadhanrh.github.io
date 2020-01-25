exports.onCreateWebpackConfig = ({ stage, actions }) => {
  // Workaround for hot loader based on
  // https://github.com/gatsbyjs/gatsby/issues/11934#issuecomment-538662592
  if (stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom'
        }
      }
    });
  }
};
