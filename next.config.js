const withOptimizedImages = require('next-optimized-images');
const withTM = require('next-transpile-modules')(['mobx', 'mobx-react-lite']);

module.exports = withTM(
    withOptimizedImages({
        optimizedImages: {
            inlineImageLimit: 8192,
            imagesFolder: 'images',
            imagesName: '[name]-[hash].[ext]',
            handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif'],
            removeOriginalExtension: false,
            optimizeImages: true,
            optimizeImagesInDev: false,
            mozjpeg: {
                quality: 80,
            },
            optipng: {
                optimizationLevel: 3,
            },
            pngquant: false,
            gifsicle: {
                interlaced: true,
                optimizationLevel: 3,
            },
            svgo: {
                plugins: [{ removeViewBox: false }],
            },
            webp: {
                preset: 'default',
                quality: 75,
            },
        },

        basePath: '/amwork',
        assetPrefix: '/amwork/',


        webpack(config, options) {
            return config;
        },
    })
);
