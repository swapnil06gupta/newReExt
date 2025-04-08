const reextPlugin = (nextConfig = {}) => {
  return {
    ...nextConfig,
    webpack(config, options) {
      // Define the global variable
      const reextKey =
        "bzJOOXhIaHJzTlZMZG1wXzg3dFR6N3NlQlVNakwwMGNoRDlwUWJobFJTbS45bFRPeWN6TjJVRE4zRWpPaUFIZwxKQ0xpY0dkeFpuZDVFVFp3Qm5NejBHT29KemN0Tm5iNkpXY3FGRE1mUldhc0ppT2lJV2R6SnllLjlKaU4xSXpVSUppT2ljR2JoSnll";
      config.define = {
        ...config.define,
        __IS_REEXT_RUNNING__: JSON.stringify(reextKey),
      };
      config.plugins.push(
        new options.webpack.DefinePlugin({
          __IS_REEXT_RUNNING__: JSON.stringify("true"),
        })
      );

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }
      return config;
    },
  };
};

export default reextPlugin;
