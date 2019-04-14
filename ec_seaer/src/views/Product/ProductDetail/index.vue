<template>
    <div class="app">
        <v-navigation title="Product Details"></v-navigation>

        <div class="main">
            <v-scroll :obj="obj">
                <div class="swiper-container slides">
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide"
                            v-for="(item, index) in 3"
                            :key="index">
                            <img class="slides-list" :src="require('@/assets/cptp.png')" alt="">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>

                <section class="price">
                    <p>Beidou GPS dual mode vehicle navigation</p>
                    <p>US$ 127.00 - US$ 152.00</p>
                </section>

                <section class="attribute">
                    <div
                        class="attribute-item"
                        v-for="(item, index) in attrs"
                        :key="index">
                        <span v-text="item.item"></span>
                        <span v-text="item.value"></span>
                    </div>
                </section>

                <section class="description">
                    <h1 class="description-title">Product Description</h1>

                    <!-- 富文本编辑器输出内容 -->
                    <div class="description-content" v-html="'111'"></div>
                </section>

                <div class="send">
                    <router-link to="/inquiry/inquiry">
                        <button type="button">Send Inquiry</button>
                    </router-link>
                </div>
            </v-scroll>
        </div>
    </div>
</template>


<script>
    import Navigation from '@/components/Navigation'
    import Scroll from '@/components/Scroll'

    export default {
        data() {
            return {
                attrs: [
                    {
                        item: 'MOQ',
                        value: '10kg/mesh bag'
                    },
                    {
                        item: 'Port',
                        value: 'QingDao'
                    },
                    {
                        item: 'Payment',
                        value: 'T / T，PayPal，Payoneer，VISA'
                    },
                    {
                        item: 'SKU',
                        value: 'HTLK1821'
                    },
                ],
                obj: {
                    resistance : true,
                    slidesPerView: 'auto',
                    freeMode: true,
                    direction: 'vertical',
                    setWrapperSize: true,
                    scrollbar: {}
                }
            }
        },
        mounted() {
            const mySwiper = new Swiper('.slides', {
                autoplay: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                }
            })
        },
        components: {
            'v-navigation': Navigation,
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
        // padding-bottom: 1rem;
        padding-top: 0.9rem;
    }

    .main {
        background-color: #f7f7f7;
        height: 100%;

        .slides {
            width: 7.5rem;
            height: 7.5rem;

            &-list {
                width: 7.5rem;
                height: 7.5rem;
                display: block;
            }
        }

        .price {
            width: 7.5rem;
            height: 1.11rem;
            @include mixin-bg-color(white);
            border-top: 0.01rem solid #f7f7f7;
            box-sizing: border-box;
            padding-top: 0.24rem;
            padding-left: 0.28rem;
            padding-right: 0.28rem;

            & > p {
                font-family: Arial;
                letter-spacing: 0rem;
                font-size: 0.26rem;
                line-height: 1;
                @include mixin-textHidden;
            }

            & > p:first-of-type {
                @include mixin-color(black);
                padding-bottom: 0.16rem;
            }

            & > p:last-of-type {
                @include mixin-color(red);
            }
        }

        .attribute {
            margin-top: 0.2rem;
            background-color: #ffffff;
            box-sizing: border-box;
            padding-right: 0.3rem;
            padding-left: 0.3rem;

            &-item {
                width: 7.5rem - 0.3rem * 2;
                height: 0.7rem;
                @include mixin-flex(space-between, center);
                border-top: 0.01rem solid #f7f7f7;

                & > span {
                    font-family: Arial;
                    font-size: 0.22rem;
                    line-height: 1;
                    letter-spacing: 0rem;
                    @include mixin-color(grey);
                    @include mixin-textHidden;
                }
            }

            &-item:first-of-type {
                border-top: none;
            }
        }

        .description {

            &-title {
                width: 7.5rem;
                height: 0.67rem;
                line-height: 0.67rem;
                background-color: #f7f7f7;
                padding-left: 0.47rem;
                box-sizing: border-box;
                position: relative;
                font-size: 0.24rem;

                &::before {
                    content: '';
                    width: 0.04rem;
                    height: 0.22rem;
                    background-color: #0b2f8d;
                    position: absolute;
                    top: 0.20rem;
                    left: 0.29rem;
                    @include mixin-bg-color(blue);
                }
            }

            &-content {
                @include mixin-bg-color(white);
            }
        }

    }

    .send {
        width: 7.5rem;
        height: 0.8rem;
        margin-top: 0.2rem;

        & button {
            width: 7.5rem;
            height: 0.8rem;
            font-family: Arial;
            font-size: 0.24rem;
            line-height: 1;
            letter-spacing: 0rem;
            @include mixin-color(white);
            @include mixin-bg-color(blue);
            border: none;
            bottom: 0px;
            left: 0px;
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
