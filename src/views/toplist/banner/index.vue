<template>
    <div class="banner">
        <ul class="slider-img">
            <li class="slider-item">
                <img src="http://y.gtimg.cn/music/photo_new/T003R720x288M0000023FL6U1M1SIE.jpg">
            </li>
            <li class="slider-item">
                <img src="http://y.gtimg.cn/music/photo_new/T003R720x288M0000023FL6U1M1SIE.jpg">
            </li>
            <li class="slider-item">
                <img src="http://y.gtimg.cn/music/photo_new/T003R720x288M0000023FL6U1M1SIE.jpg">
            </li>
        </ul>
        <ul class="banner-page">
            <li class="slider-btn"></li>
        </ul>
    </div>
</template>
<style scoped>
.banner{
    /*border:1px solid #fff;*/
}
.slider-img{
    display: flex;
    display: -ms-flexbox;
    flex-direction:row;
    transform: translate3d(-100vw,0,0);
}
.slider-item img{
   width:100vw;
}
</style>