import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

function deal (res) {
  if (res.data.code != 0) {
    return Promise.reject(res)
  }
  return Promise.resolve(res)
}
function get (url, params) {
  return Vue.http.get(url, { params: params }).then((res) => { return deal(res) })
}
function jsonp(url,params){
    return Vue.http.jsonp(url,{ 
       params: {
              g_tk: 5381,
              loginUin: 0,
              hostUin: 0,
              format: 'jsonp',
              inCharset: 'utf8',
              outCharset: 'utf-8',
              notice: 0,
              platform: 'yqq',
              needNewCode: 0
            },
            jsonp: 'jsonpCallback'
        }).then((res) => { 
            // let res2 = JSON.stringify(res)
            // console.log(res.data.data)
            return deal(res) 
        })
}
export default {
  get,
  jsonp
}
