<template>
    <div class="toplist">
        <banner></banner>
        <ul class="list-type">
            <li class="list-type-item active">排行榜</li>
            <li class="list-type-item">歌单</li>
            <li class="list-type-item">个性推荐</li>
            <li class="list-type-item">主播电台</li>
        </ul>
        <ul class="list-content">
            <li>
                <div class="ban-l"><img src="http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_200669704.jpg"></div>
                <ol class="ban-r">
                    <li>1.送情郎-岳云鹏/好妹妹乐队</li>
                </ol>
            </li>
        </ul>
    </div>

</template>
<script>
import banner from './banner'
export default{
    components : {
        banner
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
}
.list-type-item.active{
    border-bottom:2px solid #c62f2f;
}
.list-content{
    padding-top:1rem;
}
.ban-l{
    display: flex;
    flex:1;
}
.ban-r{
    display: flex;
    flex:1;
}
</style>