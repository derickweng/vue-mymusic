<template>
    <div class="banner">
        <div class="slider-wrap">
            <ul class="slider-img" :style="sliderActive">
                <li class="slider-item" v-for="item in paseImg(sliderImg)"><img :src="item.url"></li>
            </ul>
        </div>
        <ul class="banner-page">
            <li class="slider-btn" v-for="(item,index) in sliderImg" :class="{'active':nowSlider === index}"></li>
        </ul>
    </div>
</template>
<script>
import img from 'assets/img/1.jpg'
export default {
    data () {
        return {
            sliderImg : [
                {
                    url : img
                }, 
                {
                    url : img
                }, 
                {
                    url : img
                }
            ],
            sliderActive : {
                transform: 'translate3d(0,0,0)'
            },
            nowSlider : 0
        }
    },
    mounted () {
        this.sliderStart()
    },
    methods : {
        paseImg (arr) {
            // return arr
            // let paseArr = Object.assign([],arr).push(arr[arr.length-1])
            // console.log(arr,paseArr)
            return arr
        },
        sliderStart () {
            setInterval(()=>{
                this.nowSlider ++ 
                this.nowSlider %= (this.sliderImg.length) 
                this.sliderActive = Object.assign({},{
                    transform: `translate3d(${-100*(this.nowSlider)}%,0,0)`
                })                
            },3000)
        }
    }
}
</script>
<style scoped>
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
    background:#c62f2f;
}
.slider-wrap{
    overflow:hidden;
}
.slider-img{
    display: flex;
    display: -ms-flexbox;
    flex-direction:row;
    transition:all 2s;
    font-size:0;
}
.slider-item img{
   width:100vw;
}
</style>