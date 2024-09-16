/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
              svgProps: { fill: 'currentColor', stroke: 'currentColor' },
            },
          },
        ],
      });
      return config;
    },
    compiler : {
      styledComponents: true
    }
  };
  
  export default nextConfig;
