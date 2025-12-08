module.exports = {
  apps: [{
    name: 'official_website',       // 应用名称
    script: 'node_modules/next/dist/bin/next',  // Next.js 启动入口
    args: 'start',            // 启动参数（对应 next start）
    instances: 'max',         // 启动实例数，max 表示根据 CPU 核心数自动分配
    exec_mode: 'cluster',     // 集群模式，提高性能
    port: 3000,               // 应用端口（需与 Next.js 配置一致）
    env: {
      NODE_ENV: 'production', // 生产环境标识
    },
    // 日志配置
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    merge_logs: true,
    // 自动重启配置
    autorestart: true,
    watch: false,             // 生产环境关闭文件监听
  }]
};
