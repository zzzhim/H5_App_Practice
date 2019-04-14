<template>
    <div class="app">
        <div class="main">
            <v-scroll :obj="obj">
                <header id="header">
                    <div class="header-container">
                        <v-dropdown
                            v-bind:title="drop"
                            v-on:common="onCommon"
                            v-bind:dropdown-item="dropdownItem">
                        </v-dropdown>
                        <input class="search" type="text" v-model="search">
                        <img class="sub" :src="require('@/assets/icon/search.png')" alt="" @click="onSearch(search)" />
                    </div>
                </header>

                <!-- 轮播 -->
                <section class="swiper-container slides">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <router-link to="/Product/ProductsList">
                                <img class="sub" :src="require('@/assets/bg3.png')" alt="" />
                            </router-link>
                        </div>
                        <div class="swiper-slide">
                            <router-link to="/Product/ProductsList">
                                <img class="sub" :src="require('@/assets/bg3.png')" alt="" />
                            </router-link>
                        </div>
                        <div class="swiper-slide">
                            <router-link to="/Product/ProductsList">
                                <img class="sub" :src="require('@/assets/bg3.png')" alt="" />
                            </router-link>
                        </div>
                    </div>
                </section>
                
                <!-- 分类 -->
                <section class="classification">
                    <div class="classification-left">
                        <router-link to="/Product/ProductsList">
                            <img
                                class="sub"
                                :src="require('@/assets/bg1.png')" alt="" />
                            <div class="classification-left-text">
                                <p>HOME APPLIANCE</p>
                                <p>Quality life health choice</p>
                            </div>
                        </router-link>
                    </div>
                    <div class="classification-right">
                        <section class="classification-right-block">
                            <router-link to="/Product/ProductsList">
                                <img class="sub" :src="require('@/assets/bg4.png')" alt="" />
                                <div class="classification-right-block-text">
                                    <p>HOME APPLIANCE</p>
                                    <p>Quality life health choice</p>
                                </div>
                            </router-link>
                        </section>
                        <section class="classification-right-block">
                            <router-link to="/Product/ProductsList">
                                <img class="sub" :src="require('@/assets/bg2.png')" alt="" />
                                <div class="classification-right-block-text">
                                    <p>HOME APPLIANCE</p>
                                    <p>Quality life health choice</p>
                                </div>
                            </router-link>
                        </section>
                    </div>
                </section>

                <!-- 商品列表 -->
                <section>
                    <v-product-list :products-list="productData"></v-product-list> <!-- products-list商品列表参数 -->
                </section>

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
                <template slot="footer">
                    <div class="swiper-slide" style="textAlign: center;lineHeight: 1rem;" v-if="footer">
                        It's already at the bottom.
                    </div>
                </template>
            </v-scroll>
        </div>

        <v-footer Active="Home"></v-footer>
    </div>
</template>

<script>
    import Footer from '@/components/Footer'
    import Dropdown from '@/components/Dropdown'
    import ProductList from '@/components/ProductList'
    import Scroll from '@/components/Scroll'

    export default {
        data() {
            const that = this
            let bool = true
            let refreshEnd = false

            return {
                drop: 'English',
                dropdownItem: [
                    { value: 'English' },
                    { value: '中文' }
                ],
                search: '',
                loading: false,
                footer: false,
                productData: 10,
                obj: {
                    on: {
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
                        setTranslate(translate){
                            const swiper = this
                            const active = document.activeElement
                            const num = swiper.virtualSize - Math.abs(translate)

                            active.blur()

                            if(num < swiper.height && bool) {
                                that.loading = that.footer ? true : false
                                setTimeout(() => {//模仿AJAX
                                    that.loading = true
                                    if(that.productData < 20) {
                                        that.productData = that.productData + 10;
                                    }else {
                                        that.footer = true
                                    }

                                    setTimeout(() => {
                                        swiper.update()
                                        bool = true
                                    }, 0)
                                },1000)

                                bool = false
                            }
                        }
                    }
                }
            }
        },
        methods: {
            onCommon(item) {
                this.drop = item.value
            },
            onSearch(val) {
                setTimeout(() => { // 模仿ajax
                    this.$router.push('/Product/ProductsList')
                }, 500)
            }
        },
        mounted() {
            const mySwiper = new Swiper('.slides', {
                autoplay: true,//可选选项，自动滑动
                loop : true
            })
        },
        components: {
            'v-footer': Footer,
            'v-dropdown': Dropdown,
            'v-product-list': ProductList,
            'v-scroll': Scroll
        }
    }
</script>

<style lang="scss" scoped>
    @mixin mixin-text {
        img {
            width: 100%;
            height: 100%;
            display: block;
        }

        &-text {
            & > p:first-of-type {
                width: 100%;
                box-sizing: border-box;
                padding: 0px 0.21rem;
                position: absolute;
                top: 0.31rem;
                left: 0px;
                font-size: 0.24rem;
                line-height: 1;
                letter-spacing: 0rem;
                font-weight: bold;
                font-family: 'Arial';
                @include mixin-color(black);
                @include mixin-textHidden;
            }

            & > p:last-of-type {
                font-family: Arial;
                width: 100%;
                box-sizing: border-box;
                padding: 0px 0.21rem;
                font-size: 0.2rem;
                line-height: 1;
                letter-spacing: 0rem;
                position: absolute;
                top: 0.63rem;
                left: 0px;
                @include mixin-color(grey);
                @include mixin-textHidden;
            }
        }
    }

    .app {
        height: 100vh;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        padding-bottom: 1rem;
    }

    #header {
        width: 7.5rem;
        height: .66rem + .12rem * 2;

        .header-container {
            width: 7.5rem;
            height: .66rem + .12rem * 2;
            box-sizing: border-box;
            padding: 0rem 0.28rem;
            border-bottom: 0.01rem solid #f7f7f7;
            @include mixin-flex(space-between, center);
            @include mixin-bg-color(white);

            .search {
                width: 5.6rem;
                height: 0.66rem;
                border-radius: 0.33rem;
                border: none;
                box-sizing: border-box;
                padding: 0px 0.8rem 0px 0.3rem;
                @include mixin-color(grey);
                background-color: #ececec;
                box-sizing: border-box;
            }

            .sub {
                width: 0.3rem;
                height: 0.32rem;;
                position: absolute;
                right: 0.6rem;
                top: (0.9rem - 0.32rem) / 2;
            }
        }
    }

    .main {
        width: 7.5rem;
        height: calc(100% - 1rem);
        overflow: hidden;
        background-color: #f7f7f7;
        box-sizing: border-box;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 10000;

        .slides {
            width: 7.5rem;
            height: 2.9rem;

            img{
                width: 7.5rem;
                height: 2.9rem;
                display: block;
            }
        }
    }

    .classification {
        width: 7.5rem;
        box-sizing: border-box;
        padding: 0.2rem 0.28rem;
        background-color: rgb(248, 248, 248);
        @include mixin-flex(space-between, center);

        &-left {
            width: 3.16rem;
            height: 4.14rem;
            position: relative;
            @include mixin-bg-color(white);
            @include mixin-box-shadow;

            @include mixin-text;
        }

        &-right {
            width: 3.6rem;
            height: 4.14rem;
            @include mixin-flex(space-between, center, column);

            &-block {
                width: 3.6rem;
                height: 1.98rem;
                @include mixin-bg-color(white);
                @include mixin-box-shadow;
                position: relative;

                @include mixin-text;
            }
        }
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

    .loadmore{
        position:absolute;
        line-height: 50px;
        top:100%;
        text-align:center;
        width:100%;
    }

    .loadmore img, .refresh img {
        width: 15px;
        height: 15px;
    }
</style>
