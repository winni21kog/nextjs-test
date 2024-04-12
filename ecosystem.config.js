module.exports = {
    apps: [
      {
        name: "alanhotai-nextjs-test",
        script: "./node_modules/next/dist/bin/next",
        args: "start -p " + (process.env.PORT || 3000),
        watch: false,
        autorestart: true,
      },
    ],
  };