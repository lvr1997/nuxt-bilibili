<template>
  <!-- 使用keepalive缓存 -->
  <NuxtPage :keepalive="{ max: 10 }"/>
</template>

<script setup>
//b站图片源做了防盗链，所以你访问就403了
useHead({
  meta: [
    {
      name: "referrer",
      content: "no-referrer"
    }
  ]
})
//SEO优化信息
useSeoMeta({
  // 网站标题
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
  // 网站描述
  description:'bilibili是国内知名的在线视频弹幕网站，拥有最棒的ACG氛围，哔哩哔哩内容丰富多元，涵盖动漫、电影、二次元舞蹈视频、在线音乐、娱乐时尚、科技生活、鬼畜视频等。下载客户端还可离线下载电影、动漫。',
  // 搜索关键词
  keywords: 'B站,bilibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,在线动漫,高清电影',
})
</script>

<style lang="scss">
@import './assets/styles/base.scss';
@import './assets/styles/iconfont.scss';
/* vant-ui 主题定制 */
:root {
  --van-primary-color: #fb7299 !important;
  --van-back-top-background: #fbfbfb !important;
  --van-back-top-text-color: #666 !important;
}
</style>
