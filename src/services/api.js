import services from 'services'
export default {

  getLyc: services.jsonp.bind(null, 'http://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'),

  getbanner : services.jsonp.bind(null,'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'), //获取推荐专辑banner

  gettoplist : services.jsonp.bind(null,'http://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'),
}
