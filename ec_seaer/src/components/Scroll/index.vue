<template>
    <div class="swiper-container" :id="name">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <slot></slot>
            </div>
            <!-- 上拉加载动画 -->
            <slot name="refresh"></slot>
            <!-- 下拉加载动画 -->
            <slot name="loadmore"></slot>
            <!-- 底部 -->
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                default: 'swiper-container'
            },
            obj: {
                type: Object,
                default: {}
            }
        },
        mounted() {
            const obj = {
                    resistance : true,
                    slidesPerView: 'auto',
                    freeMode: true,
                    direction: 'vertical',
                    setWrapperSize: true,
                    scrollbar: {}
                }
            const swiper = new Swiper('#' + this.name, Object.assign( obj, this.obj ))
        }
    }
</script>

<style lang="scss" scoped>
    .swiper-container {
        width: 100%;
        height:100%;
    }
    .swiper-slide {
        height: auto;
    }
</style>
