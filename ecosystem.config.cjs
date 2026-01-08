module.exports = {
  apps: [
    {
      name: "react-sample-app",
      script: "npm",
      args: "run preview",
      cwd: "./",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 5173,
      },
      env_development: {
        NODE_ENV: "development",
        PORT: 5173,
      },
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      time: true,
    },
  ],
};
