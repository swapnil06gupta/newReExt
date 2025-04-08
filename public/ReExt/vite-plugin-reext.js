export default {
  name: "reextplugin",
  async config(config, { mode, command }) {
    console.log("who:", "vite");
    console.log("command:", command);
    console.log("mode:", mode);
    // eslint-disable-next-line no-undef
    console.log("cwd:", process.cwd());

    const reextKey =
      "bzJOOXhIaHJzTlZMZG1wXzg3dFR6N3NlQlVNakwwMGNoRDlwUWJobFJTbS45bFRPeWN6TjJVRE4zRWpPaUFIZwxKQ0xpY0dkeFpuZDVFVFp3Qm5NejBHT29KemN0Tm5iNkpXY3FGRE1mUldhc0ppT2lJV2R6SnllLjlKaU4xSXpVSUppT2ljR2JoSnll";
    config.define = {
      ...config.define,
      __IS_REEXT_RUNNING__: JSON.stringify(reextKey),
    };
  },
};
