const path = require('path');
const rewired = require('react-app-rewired');

module.exports = function override(config) {
    // prevent two copies of React being loaded:
    config.resolve.alias.react = path.resolve(__dirname, 'node_modules', 'react');
    config.resolve.alias['react-dom'] = path.resolve(__dirname, 'node_modules', 'react-dom');

    // SASS: https://github.com/timarney/react-app-rewired/issues/66#issuecomment-330649196
    const cssLoader = rewired.getLoader(
        config.module.rules,
        rule => rule.test && String(rule.test) === String(/\.css$/)
    );
    const sassLoader = {
        test: /\.scss$/,
        use: [...(cssLoader.loader || cssLoader.use), 'sass-loader']
    };
    const oneOf = config.module.rules.find(rule => rule.oneOf).oneOf;
    oneOf.unshift(sassLoader);

    return config;
};
