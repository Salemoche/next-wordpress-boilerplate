module.exports = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.svg$/,
            loader: "svg-inline-loader",
        });

        // config.module.rules.push({
        //     test: /\.(glsl|vs|fs)$/,
        //     loader: 'shader-loader',
        // });

        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            loader: 'raw-loader',
        });

        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            loader: 'glslify-loader',
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
