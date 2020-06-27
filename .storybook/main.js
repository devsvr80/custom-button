const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.(js|mdx)'],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-knobs',
        '@storybook/addon-docs'
    ],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
                minimize: {
                    removeComments: false
                }
            }
        });

        return config;
    }
}