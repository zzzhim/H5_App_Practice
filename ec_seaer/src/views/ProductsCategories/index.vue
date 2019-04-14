<template>
    <div class="app">
        <v-navigation :show="false" title="Classification"></v-navigation>

        <div class="main">
            <aside class="main-aside">
                <v-scroll :obj="obj">
                    <ul class="main-aside-item">
                        <li
                            class="main-aside-item-list"
                            :class=" aside == index ? 'main-aside-item-active' : null "
                            v-for="(item, index) in 15"
                            :key="item"
                            @click="aside = index, onClickAside(item)"
                            > <!-- 分类列表 -->
                            <span>
                                Apple <!-- 分类名称  -->
                            </span>
                        </li>
                    </ul>
                </v-scroll>
            </aside>

            <section class="main-body">
                <v-scroll :obj="obj" name="swiper-container2">
                    <div class="main-body-block" v-for="(item, index) in 2" :key="index">
                        <div class="main-body-block-title">Dehydrated Garlic Products</div> <!-- 分类名称 -->
                        <section class="main-body-block-box">
                            <v-class-item :products-list="4"></v-class-item> <!-- ProductsList 商品列表 -->
                        </section>
                    </div>
                </v-scroll>
            </section>
        </div>

        <v-footer Active="Classification"></v-footer>
    </div>
</template>

<script>
    import Footer from '@/components/Footer'
    import Navigation from '@/components/Navigation'
    import ClassItem from '@/components/ClassItem'
    import Scroll from '@/components/Scroll'

    export default {
        data() {
            return {
                aside: 0,
                obj: {
                    mousewheel: true,
                    slidesPerView: 'auto',
                    freeMode: true,
                    direction: 'vertical',
                    setWrapperSize: true,
                    scrollbar: {}
                }
            }
        },
        methods: {
            onClickAside(val) {
                // 
            }
        },
        mounted() {
        },
        components: {
            'v-footer': Footer,
            'v-navigation': Navigation,
            'v-class-item': ClassItem,
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
        padding-bottom: 1rem;
    }

    .main {
        position: absolute;
        top: 0.9rem;
        left: 0px;
        z-index: 10000;
        box-sizing: border-box;
        width: 7.5rem;
        height: calc(100% - 0.9rem - 1rem);
        padding: 0.22rem 0px;
        background-color: #f7f7f7;
        @include mixin-flex(space-between, flex-start);
        overflow: hidden;

        &-aside {
            height: 100%;
            overflow: hidden;

            &-item {

                &-list {
                    width: 2.32rem;
                    height: 0.9rem;
                    border-top: 0.02rem solid #f1f1f1;
                    @include mixin-bg-color(white);
                    @include mixin-flex(center, center);

                    & > span {
                        font-family: Arial;
                        font-size: 0.22rem;
                        line-height: 1.4;
                        letter-spacing: 0rem;
                        @include mixin-color(grey);
                        display: block;
                        width: 1.9rem;
                        @include mixin-textHiddens(2);
                    }
                }

                &-active {
                    background-color: #f7f7f7;
                    position: relative;

                    &::before {
                        content: '';
                        display: block;
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 0.04rem;
                        height: 100%;
                        @include mixin-bg-color(blue);
                    }

                    & > span {
                        @include mixin-color(blue);
                    }
                }
            }
        }

        &-body {
            height: 100%;
            overflow: hidden;

            &-block {
                width: 5rem;
                background-color: #ffffff;
                margin-bottom: 0.2rem;

                &-title {
                    font-family: Arial;
                    font-size: 0.24rem;
                    line-height: 1;
                    letter-spacing: 0rem;
                    padding: 0.3rem 0.2rem;
                    @include mixin-color(black);
                    @include mixin-textHidden;

                }

                &-box {
                }
            }

            &-block:last-of-type {
                margin-bottom: 0rem;
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
</style>
