<template>
    <div class="toplist">
        <banner></banner>
        <ul class="list-type">
            <li class="list-type-item" :class="{'active':nowType === 0}"  @mouseover="nowType = 0">排行榜</li>
            <li class="list-type-item" :class="{'active':nowType === 1}"  @mouseover="nowType = 1">歌单</li>
            <li class="list-type-item" :class="{'active':nowType === 2}" @mouseover="nowType = 2">个性推荐</li>
            <li class="list-type-item" :class="{'active':nowType === 3}" @mouseover="nowType = 3">主播电台</li>
        </ul>
        <router-view></router-view>
    </div>

</template>
<script>
import banner from './banner'

export default{
    components : {
        banner
    },
    data (){
        return {
            nowType : 0,
        }
    },
    methods : {
    }
}
</script>
<style scoped>
.list-type{
    display: flex;
    flex-direction: row;
}
.list-type-item{
    flex:1;
    border-bottom:2px solid transparent;
    text-align: center;
    padding:1rem 0;
    cursor: pointer;
}
.list-type-item.active{
    border-bottom:2px solid #c62f2f;
}
</style>