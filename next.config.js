module.exports = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.svg$/,
            loader: "svg-inline-loader",
        });

        config.module.rules.push({
            test: /\.(glsl|vs|fs)$/,
            loader: 'shader-loader',
        });

        if (!isServer) {
            config.resolve.fallback = { 
                // fs: false,
                // path: false,
                // os: false,
                // stream: false,
                // constants: false,
                // module: false,
            };
        }

        return config;
    },
}
