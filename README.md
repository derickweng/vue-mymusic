![test.gif](http://upload-images.jianshu.io/upload_images/4149586-1849aa83e2decf56.gif?imageMogr2/auto-orient/strip)

####导语
##### 最近看到不少使用vue制作的音乐播放器，挺好玩的，本来工作中也经常使用Vue，一起交流学习，好的话点个star哦
>本项目特点如下 ： 
    1. 原生js封装自己的跨域请求函数，支持promise调用，支持错误处理
    2. 制作一些复用性强的vue组件，如轮播图组件，支持手势滑动，无限循环，图片按需加载
    3. 清晰明了的项目目录

###[项目仓库地址](https://github.com/derickweng/vue-mymusic)
###[项目演示地址](https://derickweng.github.io/vue-mymusic/dist/#/)

***
###一、规划目录
   一个易于维护和迭代的项目，应该是具有可靠的项目目录的，这里，在vue-cli生成的目录中，加入了services、directives、utils、store等目录，并在webpack中修改相应的导入地址：

![Paste_Image.png](http://upload-images.jianshu.io/upload_images/4149586-9291a38e485c3eae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
    1.  services 用于全局管理接口和http请求
    2.  directives 用于添加全局指令
    3.  utils 用于放置通用js函数
    4.  store 用于管理vuex数据等
```
![目录](http://upload-images.jianshu.io/upload_images/4149586-bf018eddbdc2d5cd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
***
###二、制作公共css，
  ####主要采用scss+em单位+currentColor继承父级颜色+before&after伪类制作
  ####本项目制作的公共css有:
        1. 播放器要用到的图标
        2. 用于vue transition标签切换时使用的css3动画
        3. css reset
        4. 项目主题颜色，目前只能在项目初始化之前设置主题颜色,用于管理，所有组件主题颜色都来源于此

![自定义公共图标](http://upload-images.jianshu.io/upload_images/4149586-7dd2f1c9c88ec9b6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

***
###三、全局API

分成两个部分：
    1.  jsonp分装，负责http请求
    2.  收集url地址，并放在API类上，并循环将url用bind函数导入到jsonp封装函数中，其他请求同样可用


![jsonp封装](http://upload-images.jianshu.io/upload_images/4149586-b1a658393c03b4dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![api公共类，seturl函数用于参数传入接口地址时，用call函数直接调用services服务](http://upload-images.jianshu.io/upload_images/4149586-a73204d598c1f14f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

***
###四、核心组件
 包括 : 
    1. banner组件
    2. 播放器
####1.banner组件
     该组件只对传入的数据进行处理，并相应转化，保证了组件的通用性
![Paste_Image.png](http://upload-images.jianshu.io/upload_images/4149586-230bced1cf9499a1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
      核心的函数主要是对***无限循环的处理、触摸屏滑动,图片按需加载***处理：
 ![banner所需参数](http://upload-images.jianshu.io/upload_images/4149586-be61325c795bb1a3.gif?imageMogr2/auto-orient/strip)
```
  computed : {
        sliderImg : function(){
            const [...saveImg] = this.bannerlist,    //拷贝图片列表数据，在展示区域的图片实际上首尾拷贝了一样的图片，即尾端拷贝第一张，首端拷贝最后一张
                  [imgfirst, ...other] = this.bannerlist;
            saveImg.unshift(other[other.length-1])      
            saveImg.push(imgfirst)
            return saveImg
        },
    },
    mounted () {
        if (this.bannerlist && this.bannerlist.length) {
            this.interTimer = setInterval(()=>{
                this.sliderStart()
            },3000)
        }
    },
    methods : {
        linkURl (item) {
            window.open(item[this.linkurl])
        },
        getURl (item,index) {  //用于减少一次性请求，只加载当前的图片，加载之后添加标识
            if (!item) {
                return reloadImg
            }
            if (item.hasload) {
                return item[this.picurl]
            }
            if (this.nowSlider == index-1) {
                item.hasload = true
                return item[this.picurl]
            }
            return reloadImg
        },
        stopSlider (e) {
            e.preventDefault()
            e.stopPropagation()
            if (e.target != e.currentTarget) {  //事件委托节省下事件绑定，排除当前绑定的dom
                clearInterval(this.interTimer)
                delete this.sliderActive['transition'] //关闭css3过渡效果
                this.startTouch = e.targetTouches[0].screenX
            }
        },
        moveSlider (e) {
            e.preventDefault()
            e.stopPropagation()
            if (this.nowSlider === -1||this.nowSlider === this.bannerlist.length) {  //首端与尾端未连接好禁止滑动
                return;
            }
            if (e.target != e.currentTarget) {
                this.moveTouch = e.targetTouches[0].screenX
                let slideDir = this.moveTouch - this.startTouch,
                    targetWidth = parseInt(window.getComputedStyle(e.target).width),
                    tranDir;
                if (slideDir < -50 || slideDir > 50) {  //加了50容错值，能预防触摸时图片突然闪动
                    if (slideDir < 0) {  //再重新补回差值
                        slideDir -= 50
                    } else {
                        slideDir += 50
                    }
                    tranDir = -targetWidth * (this.nowSlider+1) + slideDir//触摸时图片随手指移动，距离须减去当前图片宽度乘以当前滚动索引
                    this.sliderActive.transform = `translate3d(${tranDir}px,0,0)`
                }
            }
        },
        continSilder (e) { //结束触摸
            e.preventDefault()
            e.stopPropagation()
            if (e.target != e.currentTarget && this.moveTouch) {
                const slideDir = this.moveTouch - this.startTouch
                if (slideDir < 0) {
                    this.nowSlider ++
                } else if (slideDir > 0) {
                    this.nowSlider -- 
                }
                this.nowSlider --
                this.sliderStart() //立即设置位置
                this.moveTouch = 0  //清空手势位置
                this.startTouch = 0
                this.interTimer = setInterval(()=>{
                    this.sliderStart()
                },3000)
            }
        },
        sliderStart () {
           this.nowSlider ++ 
           this.nowSlider %= this.sliderImg.length
           if (this.nowSlider === this.bannerlist.length) {  //向右滑动到最大值时，将位置初始化并清0 nowSlider
               setTimeout(() => { //设置一个定时器，用于异步处理，一个进行尾端拷贝的图片的正常滑动，这个处理在差不多到达时重置，造成无限循环的错觉
                    this.sliderActive = {
                        transform: `translate3d(-100vw,0,0)`
                    }
                    this.nowSlider = 0
               }, 500)         
            }
            if (this.nowSlider === -1) {  //向右滑动到最小值时，将位置置为最大值
               setTimeout(() => {
                    this.nowSlider = this.bannerlist.length-1
                    this.sliderActive = {
                        transform: `translate3d(${-100*(this.nowSlider+1)}vw,0,0)`
                    }
               }, 500)       
            }
            this.sliderActive = Object.assign({},{
                transition:'transform 0.5s',
                transform: `translate3d(${-100*(this.nowSlider+1)}vw,0,0)`
            })
        } 
    }
```
####2.播放器功能
      播放器的所有功能主要依赖vuex（store.js）的控制，由于音乐是在整个app内都播放的，故audio标签放在了App.vue中：
store.js:
![播放数据控制](http://upload-images.jianshu.io/upload_images/4149586-55ddca87a97b00b6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


APP.vue:
```
  computed : {
    audioSrc : function () {  //对当前播放的音频切换，放在顶层
      const song = this.$store.state.nowsong;
      let audioTimer;
      if (!song) {
        this.$store.state.playing = false
        clearInterval(audioTimer)
        return null
      }
      this.$store.state.playing = true
      audioTimer = setInterval(()=>{  //每秒获取进度
        let audio = document.getElementById('m-audio');
        if (audio) {
           this.$store.state.audioProgss = audio.currentTime/audio.duration*100+'%'
        }  else {
           clearInterval(audioTimer)
        }
      },1000)
      return `${API.url.getsong}${song.songid}.m4a?fromtag=46` //播放一首歌曲
    },
    playing : function () {
       return this.$store.state.playing
    },
  },
  directives : {
    play : {  //控制是否播放
      update : function(el,binding) {
        if (binding.value) {
          el.play()
        } else {
          el.pause()
        }
      }
    }
  },
```
##整体项目核心功能介绍到此.有好的建议尽管提哦
