<template>
    <div class="billboard-wrap">
        <ul class="billboard">
            <li class="billboard-item" v-for="item in listContent" @click="gotlist">
                <div class="ban-l"><img :src="item.url"></div>
                <ol class="ban-r">
                    <li>1.送情郎-岳云鹏/好妹妹乐队</li>
                </ol>
            </li>
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
    methods : {
        gotlist () {
            this.$store.dispatch('increTranStyle','leftslide').then(() => {
                this.$router.push({
                    name : 'list'
                })
            })
        }
    }
}
</script>
<style scoped lang="scss">
@import '~assets/css/theme.scss';
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
}
.ban-r li {
    color:#777;
}
</style>