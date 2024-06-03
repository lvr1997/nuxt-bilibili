import video from "@/database/video";

//获取视频详情接口
//通过defineEventHandler定义接口
export default defineEventHandler(event => {
    //获取路由参数
    const { id } = event.context.params || {};

    return video.find(v=> v.bvid === id)
})
