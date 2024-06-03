<script lang="ts" setup>
import type { VideoItem } from '~/types/video';

//从接口返回数据中解构出data 重命名为channelList
const { data: channelList } = await useFetch('/api/channel')
// 获取视频列表数据
const { data: videoList } = await useFetch('/api/video')

const list = ref<VideoItem[]>([])
const loading = ref(false) //加载状态
const finished = ref(false) // 是否加载完成

// 页码 和 页容量
let page = 1
let pageSize = 10

const onLoad = () => {
  // 表示正在加载
  loading.value = false
  // 根据当前页码提取数据
  const data = videoList.value?.slice((page-1)*pageSize, page*pageSize) as VideoItem[]
  // 追加到用于渲染的数组中
  list.value.push(...data)
  page++
  //加载结束
  if(videoList.value?.length === list.value.length) {
    finished.value = true
  }
}
//页面初始化的时候调用一次 目的是为了 让seo能检索到
onLoad()
</script>
<template>
  <!-- 公共头部 -->
  <AppHeader/>
  <!-- 频道模块 -->
  <van-tabs> 
    <van-tab v-for="item in channelList" :key="item.id" :title="item.name" />
  </van-tabs>
  <!-- 视频列表 -->
  <van-list 
    v-model:loading="loading" 
    :finished="finished"
    finished-text="去 bilibili App 看更多"
    @load="onLoad">
    <div class="video-list">
      <VideoCard v-for="item in list" :key="item.aid" :videoItem="item"/>
    </div>
  </van-list>
</template>

<style scoped>
/* // 视频列表 */
.video-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}
</style>
