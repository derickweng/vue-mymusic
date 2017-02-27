import services from 'services'
const url = {
    getbanner : 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',//获取推荐专辑banner
    
    gettoplist : 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg', //获取排行榜

    getlistDetail : 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg',//获取排行榜详情

    gethotkey : 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',//获取热门歌曲

    search  : 'https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg',//搜索

    getlyc : 'https://api.darlin.me/music/lyric',//获取歌词
    
    getsong : 'http://ws.stream.qqmusic.qq.com/' //获取歌曲
} 
class API {  //新建一个API类
  constructor ({services, url}) {
    let serobj = {}
    this.url = url
    this.services = services
    Object.keys(url).forEach((item)=>{
       serobj[item] = services.jsonp.bind(null,url[item])
    })
    Object.assign(this,serobj) //导入多个方法
  }
  seturl (url, params) {//返回原始方法
    return this.services.jsonp.call(this,url,params)
  }
}
export default new API({
  services,
  url
})
