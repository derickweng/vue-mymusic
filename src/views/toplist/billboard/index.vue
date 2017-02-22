<template>
    <div class="billboard-wrap">
        <ul class="billboard">
            <li class="billboard-item bill-loading" v-load="listContent">
                <img :src="loadgif">
            </li>
            <li class="billboard-item" v-for="item in listContent" @click="gotlist(item)">
                <div class="ban-l"><img :src="item.picUrl"></div>
                <ol class="ban-r">
                    <li v-for="(song, index) in item.songList">{{index+1}}. {{song.songname}}/{{song.singername}}</li>
                </ol>
            </li>
        </ul>
    </div>
</template>
<script>
import loadgif from 'assets/img/load.gif'
import API from 'api'
export default {
    name : 'billboard',
    data () {
        return {
             listContent : [],
             loadgif : loadgif
        }
    },
    mounted () {
        this.getbillboard()
    },
    methods : {
        getbillboard () {
            API.gettoplist({
                g_tk:5381,
                uin:0,
                format:'jsonp',
                inCharset:'utf-8',
                outCharset:'utf-8',
                notice:0,
                platform:'h5',
                needNewCode:1,
                _:new Date().getTime(),
                callback:'jsonpCallback'
            }).then(res => {
                this.listContent = res.data.topList
            })
        },
        gotlist (item) {
            this.$store.dispatch('increTranStyle','leftslide').then(() => {
                this.$router.push({
                    name : 'list',
                    params : {
                        id : item.id
                    }
                })
            })
        }
    }
}
</script>
<style scoped lang="scss">
@import '~assets/css/theme.scss';
.bill-loading img{
    display:block;
    width:5rem;
    margin:0 auto;
}
.billboard {
    padding-bottom:4rem;
}
.billboard-wrap{
    padding-top:1rem;
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
    overflow:hidden;
}
.ban-r li {
    color:#777;
    margin :1rem 0;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
</style>