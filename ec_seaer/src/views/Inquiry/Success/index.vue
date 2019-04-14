<template>
    <div class="app">
        <v-navigation title="Send Inquiry"></v-navigation>

        <div class="success">
            <v-scroll :obj="obj">
                <div class="success-content">
                    <img class="success-content-img" :src="require('@/assets/icon/cengg.png')" alt="">
                    <button
                        class="success-content-btn"
                        type="button"
                        @click="onClick"> <!-- 跳转事件 -->
                        Return
                    </button>
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
                obj: {}
            }
        },
        methods: {
            onClick() {
                this.$router.push('/Product/ProductDetail')
            }
        },
        mounted() {
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
        padding-top: 0.9rem;
        background-color:  #f7f7f7;
    }

    .success {
        width: 7.5rem;
        height: calc(100vh - 0.9rem);

        &-content {
            @include mixin-flex(flex-start, center, column);

            &-img {
                width: 1.68rem;
                height: 1.68rem;
                border-radius: 50%;
                display: block;
                margin-top: 2.65rem;
                margin-bottom: 0.6rem;
            }

            &-btn {
                font-family: Arial;
                font-size: 0.26rem;
                line-height: 1;
                letter-spacing: 0rem;
                width: 1.64rem;
                height: 0.48rem;
                @include mixin-color(white);
                @include mixin-bg-color(blue);
                border: none;
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
