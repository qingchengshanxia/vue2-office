<template>
    <div class="index-box">
        <v-header></v-header>
        <router-view/>
        <v-footer></v-footer>
        <span class="totop iconfont icon-icon--" @click="goTop" :class="isshowhandle"></span>
    </div>
</template>

<script>
  import header from '../header/header.vue'
  import footer from '../footer/footer.vue'

  export default {
    name: 'index',
    data () {
      return {
        h:0,
      }
    },
    components:{
      'v-header':header,
      'v-footer':footer
    },
    methods:{
      goTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },
      isshow(){
        this.h=document.body.scrollTop||document.documentElement.scrollTop;
      }
    },
    computed:{
      isshowhandle(){
        return {
          show:this.h>document.documentElement.clientHeight
        }
      }
    },
    mounted(){
      window.addEventListener('scroll', this.isshow, true);
    },
    watch:{
      // 如果 `某个属性` 发生改变，这个属性对应的函数就会运行
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  body {
    .totop {
      position:fixed;
      right:40px;
      bottom:40px;
      width: 20px;
      height:20px;
      font-size: 40px;
      cursor:pointer;
      z-index:1000000;
      color:rgba(0,0,0,0.2);
      display:none;
      &.show {
        display:block;
      }
      &:hover {
        color:rgba(0,0,0,0.6);
      }
    }
  }
</style>
