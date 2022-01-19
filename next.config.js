module.exports = {
    reactStrictMode: true,
    webpack: (config) => {
        config.module.rules.push({
        test: /\.svg$/,
        loader: "svg-inline-loader",
        });
        return config;
    },
    images: {
        domains: ['default.bachstein.ch'],
        // formats: ['image/avif', 'image/webp, 'image/jpg', 'image/png'],
    },
}
