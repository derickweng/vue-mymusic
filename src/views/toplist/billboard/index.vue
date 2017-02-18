<template>
    <div class="billboard-wrap">
        <div class="board-title">官方榜</div>
        <ul class="billboard">
            <li class="billboard-item" v-for="item in listContent">
                <div class="ban-l"><img :src="item.url"></div>
                <ol class="ban-r">
                    <li>1.送情郎-岳云鹏/好妹妹乐队</li>
                </ol>
            </li>
            <li class="billboard-item"></li>
        </ul>
    </div>
</template>
<script>
import listImg from 'assets/img/2.jpg'
export default {
    name : 'billboard',
    data () {
        return {
             listContent : [
                {
                    url : listImg
                },
                {
                    url : listImg
                },
                {
                    url : listImg
                }
            ]
        }
    },
    // watch : {
    //     $route (to,from) {
    //         console.log(from)
    //     }
    // },
}
</script>
<style scoped lang="scss">
.billboard-wrap{
    padding-top:1rem;
}
.board-title{
    margin-left:2rem;
    position: relative;
}
.board-title:before {
    width: 0.5rem;
    background-color: #c62f2f;
    height: 1.5rem;
    display: block;
    position: absolute;
    left: -1rem;
    content: '';
}
.billboard-item{
    display: flex;
    min-height: 4rem;
}
.ban-l{
    flex:1;
    padding: 1rem 0.5rem 0 1rem;
    img {
        width:100%;
    }
}
.ban-r{
    flex:2;
    padding:1rem 0.5rem;
}
.ban-r li {
    color:#777;
}
</style>