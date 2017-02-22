import Vue from 'vue'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
function deal (res) {//接口返回code码处理
  if (res.code != 0) {
    return Promise.reject(res)
  }
  return Promise.resolve(res)
}

function myJsonp(url,params){  //封装jsonp跨域请求
  return new Promise ((resolve,reject) => {
    try {
      let scriptEle = document.createElement('script'),
          headEle = document.getElementsByTagName('head')[0],
          srcPar = '',
          time = new Date().getTime();
      Object.keys(params).forEach((item) => {
          if (item != 'callback') {
              srcPar += `${item}=${params[item]}&`
          }
      })   
      scriptEle.src = `${url}?${srcPar}${params.callback}=jsonpback${time}`
      headEle.appendChild(scriptEle)
      window[`jsonpback${time}`] = function(result){
        resolve(result)
        headEle.removeChild(scriptEle)
      }
    }catch(e){
      reject(e)
    }
  })
}

function jsonp(url,params) {
  return myJsonp(url,params).then(res=>{
      return deal(res)
  })
}
export default {
  jsonp
}
