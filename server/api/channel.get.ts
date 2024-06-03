import channel from '@/database/channel'

//获取频道信息 请求地址/api/channel 请求方式 get
export default defineEventHandler(event => {
    return channel
})