module.exports = {
  apps: [{
    name: 'official_website', // 应用名称
    script: './dist/main.js', // 入口文件
    instances: 'max', // 使用所有可用CPU核心
    autorestart: true, // 崩溃时自动重启
    watch: false, // 生产环境关闭监听
    env: {
      NODE_ENV: 'production', // 生产环境变量
    }
  }]
};
