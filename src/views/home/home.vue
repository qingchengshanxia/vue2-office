<template>
    <div class="home-box">
        home
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'


  //以下是加轮播图的基本数据格式，可以放开注释，然后添加template结构和图片就行
  export default {
    name: 'home',
    data () {
      return {
      //   swiperOption: {
      //     slidesPerView: 'auto',
      //     loopedSlides:3,
      //     effect : 'slide', //slide的切换效果，默认为"slide"（位移切换），可设置为'slide'（普通切换、默认）,"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）。
      //     direction : 'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
      //     loop:true,//循环
      //     centeredSlides: true,//
      //     speed:800, //滚动速度
      //     autoplay: {
      //       delay: 5000,//自动切换的时间间隔
      //       disableOnInteraction: false //用户操作swiper之后，是否禁止autoplay。
      //     },
      //     mousewheel: false, //开启鼠标滚轮控制Swiper切换
      //     pagination: {
      //       el: '.swiper-pagination',//分页器容器的css选择器或HTML标签。。
      //       clickable: true//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
      //     },
      //     navigation: {
      //       nextEl: '.swiper-button-next',//前进按钮的css选择器或HTML元素。
      //       prevEl: '.swiper-button-prev'//后退按钮的css选择器或HTML元素。
      //     }
      //   },
      //   imgurl1:require('../../assets/images/home/home_bg1.png'),
      //   imgurl2:require('../../assets/images/home/home_bg1.png'),
      //   imgurl3:require('../../assets/images/home/home_bg1.png'),
      //   imgurl4:require('../../assets/images/home/home_bg1.png'),
      }
    },
    components:{
      swiper,
      swiperSlide
    },
    methods:{
      callback(){

      }
    },
    computed:{
      // swiper() {
      //   return this.$refs.mySwiper.swiper
      // }
    },
    mounted(){
      // this.swiper.slideTo(3, 1000, false)
    },
    watch:{
      // 如果 `某个属性` 发生改变，这个属性对应的函数就会运行
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
<style type="text/css">

</style>
