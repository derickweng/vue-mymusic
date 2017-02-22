<template>
    <div class="banner" v-if="bannerlist.length" >
        <div class="slider-wrap">
            <ul class="slider-items" :style="[sliderActive,{'width':sliderImg.length*100+'vw'}]" @touchstart="stopSlider($event)" @touchmove="moveSlider($event)" @touchend="continSilder($event)">
                <li class="slider-item" v-for="(item,index) in sliderImg" @click="linkURl(item)"><img :src="getURl(item,index)" class="item-img"></li>
            </ul>
        </div>
        <ul class="banner-page">
            <li class="slider-btn" v-for="(item,index) in bannerlist" :class="{'active':index === nowSlider}"></li>
        </ul>
    </div>
</template>
<script>
import reloadImg from 'assets/img/loading.gif'
export default {
    name : 'banner',
    props : {
        bannerlist : {
            require : true,
        },
        picurl : {
            require : true,
        },
        linkurl : {
            require : true
        }
    },
    data () {
        return {
            sliderActive : {
                transform: 'translate3d(-100vw,0,0)',
                transition:'transform 2s'
            },
            interTimer : '',
            startTouch : '',
            moveTouch : '',
            canslider : true,
            nowSlider : 0
        }
    },
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
        this.interTimer = setInterval(()=>{
            this.sliderStart()
        },3000)
    },
    methods : {
        linkURl (item) {
            window.open(item[this.linkurl])
        },
        getURl (item,index) {  //用于减少一次性请求，只加载当前的图片，加载之后添加标识
            if (item.hasload) {
                return item[this.picurl]
            }
            if (this.nowSlider == index-1) {
                item.hasload = true
                return item[this.picurl]
            } else {
                return reloadImg
            }
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
               setTimeout(() => { //设置一个定时器，像当于两个线程，一个进行尾端拷贝的图片的正常滑动，这个处理在差不多到达时重置，造成无限循环的错觉
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
}
</script>
<style scoped lang="scss">
@import '~assets/css/theme.scss';
.banner{
   position:relative;
}
.banner-page{
   position:absolute;
   bottom:1rem;
   justify-content:center;
   display: flex;
   align-items:center;
   width:100%;
}
.slider-btn{
    width:0.8rem;
    height:0.8rem;
    background-color:#aaa;
    border-radius: 50%;
    margin-right:0.5rem;
}
.slider-btn.active{
    background:$themeColor;
}
.slider-wrap{
    overflow:hidden;
}
.slider-items{
    font-size:0;
    overflow: hidden;
}
.slider-item {
    width: 100vw;
    float: left;
}
.slider-item .item-img{
    width: 100%;
}
</style>