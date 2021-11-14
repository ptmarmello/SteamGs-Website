const composePlugins = require('next-compose-plugins');
const mdxRemote = require('next-mdx-remote');

module.exports = composePlugins([
    // mdxRemote({
    //     mdxRemoteComponents: {
    //         '@components': './pages/posts',
    //         '@layouts': './templates',
    //     },
    // })
]);