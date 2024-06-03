// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // runtimeConfig: {
  //   // 服务器端可以获取使用
  //   apiSecret: "123456",
  //   // 客户端获取使用
  //   public: {
  //     apiBase: "/api",
  //   },
  // },
  // typescript: {
  //   typeCheck: true,
  // }
  devtools: { enabled: true },

  modules: ["@vant/nuxt"],
  // 移动端适配
  postcss: {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 375, //设计稿的大小
      },
    },
  },
})