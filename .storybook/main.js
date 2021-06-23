const { loaders } = require('../webpack/common');
const path = require('path');
const fs = require('fs');
const PATHS = require('../webpack/paths');
const { merge } = require('webpack-merge');

const file_loaders = [
    // Images & Videos
    {
        test: /\.(gif|svg|mp4|gif)$/i,
        loader: 'file-loader',
    },

    // webfonts
    {
        test: /\.(woff|woff2|ttf|eot|webfont.svg)(\?v=[\S]+)?$/,
        loader: 'file-loader',
    },

    // graphql
    {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
    },
];

const getPackageDir = (filepath) => {
    let currDir = path.dirname(require.resolve(filepath));
    while (true) {
        if (fs.existsSync(path.join(currDir, 'package.json'))) {
            return currDir;
        }
        const { dir, root } = path.parse(currDir);
        if (dir === root) {
            throw new Error(`Could not find package.json in the parent directories starting from ${filepath}.`);
        }
        currDir = dir;
    }
};

module.exports = {
    stories: ['../src/**/examples.tsx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-actions/register',
        '@storybook/addon-storysource/register',
        '@storybook/addon-viewport/register',
    ],
    babel: async (options) => {
        return {
            ...options,
            presets: [...options.presets, require.resolve('next/babel')],
            plugins: [
                ...options.plugins,
                require.resolve('@emotion/babel-plugin'),
                [require.resolve('@babel/plugin-proposal-private-property-in-object'), { loose: true }],
            ],
        };
    },
    webpackFinal: (config) => {
        const { css, scss, js } = loaders;

        // responsive images
        config.module.rules.unshift({
            test: /\.(jpe?g|png)$/i,
            loader: 'responsive-loader',
            options: {
                // we'll use jimp until build perf becomes a problem
                // adapter: require('responsive-loader/sharp'),
            },
        });

        config.resolve.modules.push(PATHS.base);

        // config.module.rules.push(css({ __DEV__: true, useStyleLoader: true, __BROWSER__: true }));
        config.module.rules.push(scss({ __DEV__: true, useStyleLoader: true, __BROWSER__: true }));

        config.module.rules.push(js);
        config.module.rules = config.module.rules.concat(file_loaders);

        // Get pass an emotion version issue without downgrading
        return merge(config, {
            resolve: {
                alias: {
                    '@emotion/core': getPackageDir('@emotion/react'),
                    '@emotion/styled': getPackageDir('@emotion/styled'),
                    'emotion-theming': getPackageDir('@emotion/react'),
                },
            },
        });
    },
};
