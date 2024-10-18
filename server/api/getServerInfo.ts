export default defineEventHandler((event) => {
  // 获取服务器信息，可以包括区域、环境变量等
  return {
    region: process.env.CF_REGION || "unknown", // Cloudflare Pages会自动设置一些环境变量
    nodeVersion: process.version,
    runtime: "Edge Function", // 标明是运行在边缘节点的
  };
});
