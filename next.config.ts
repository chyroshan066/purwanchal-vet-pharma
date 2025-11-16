import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'mixed-decls', 'legacy-js-api'],
  },
};

export default nextConfig;
