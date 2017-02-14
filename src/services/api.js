import services from 'services'
export default {
  getLyc: services.jsonp.bind(null, 'http://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg')
}
