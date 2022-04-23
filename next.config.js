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
        domains: [process.env.NEXT_PUBLIC_WP_DOMAIN],
        // formats: ['image/avif', 'image/webp, 'image/jpg', 'image/png'],
    },
}
