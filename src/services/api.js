import services from 'services'

const serobj = (function(){
  const url = {

    getbanner : 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',//获取推荐专辑banner
    
    gettoplist : 'http://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg', //获取排行榜

    getlistDetail : 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg',//获取排行榜详情

    gethotkey : 'http://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',//获取热门歌曲

  }

  let serobj = {}

  Object.keys(url).forEach((item)=>{
      serobj[item] = services.jsonp.bind(null,url[item])
  })
  return serobj

})()

export default serobj
