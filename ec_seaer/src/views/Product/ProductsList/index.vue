<template>
    <div class="app">
        <v-navigation title="Product List"></v-navigation>

        <div class="main">
            <v-scroll :obj="obj">
                <v-product-list class="swiper-slide" :products-list="productData"></v-product-list> <!-- products-list商品列表参数 -->

                <!-- 加载动画 -->
                <template slot="loadmore">
                <div class="refresh">
                        <img :src="require('@/assets/icon/loading.gif')" alt="">
                    </div>
                </template>
                <template slot="loadmore">
                    <div class="loadmore" v-show="!loading">
                        <img class="sub" :src="require('@/assets/icon/loading.gif')" alt="" />
                    </div>
                </template>
            </v-scroll>
        </div>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation'
    import ProductList from '@/components/ProductList'
    import Scroll from '@/components/Scroll'


    export default {
        data() {
            let refreshEnd = false
            const that = this

            return {
                productData: 10,
                loading: false,
                obj: {
                    speed: 300,
                    mousewheel: true,
                    on:{
                        //下拉释放刷新
                        touchEnd(){
                            const swiper = this

                            if(this.translate > 100){
                                swiper.setTransition(this.params.speed)
                                swiper.setTranslate(100)
                                swiper.touchEventsData.isTouched = false//跳过touchEnd事件后面的跳转(4.0.5)

                                swiper.allowTouchMove = false
                                setTimeout(function() {//模仿AJAX
                                    that.productData = that.productData
                                    refreshEnd = true
                                    swiper.allowTouchMove = true
                                    swiper.setTranslate(0)
                                },1000)
                            }
                        },
                        touchStart(){
                            if(refreshEnd == true){
                                refreshEnd = false
                            }
                        },
                        //加载更多
                        momentumBounce(){
                            const swiper = this
                            if(swiper.translate < -100){
                                that.loading = false
                                setTimeout(() => {//模仿AJAX
                                    that.loading = true
                                    that.productData = that.productData + 10

                                    setTimeout(() => {
                                        swiper.update()
                                    }, 0)
                                }, 1000)
                            }
                        },
                    }
                }
            }
        },
        methods: {
            
        },
        mounted() {
        },
        components: {
            'v-navigation': Navigation,
            'v-product-list': ProductList,
            'v-scroll': Scroll
        }
    }
</script>

<style lang="scss" scoped>
    .app {
        height: 100vh;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        padding-top: 0.9rem;

        .main {
            height: 100%;
            overflow: hidden;
            background-color: #f7f7f7;
        }

        .swiper-container {
            width: 100%;
            height:100%;
        }
        .swiper-slide {
            height: auto;
        }

        .refresh {
            position:absolute;
            line-height:100px;
            bottom:100%;
            text-align:center;
            width:100%;
        }
        .loadmore {
            position:absolute;
            line-height: 50px;
            top:100%;
            text-align:center;
            width:100%;
        }
        .refresh img, .loadmore img {
            width: 15px;
            height: 15px;
        }
    }
</style>
