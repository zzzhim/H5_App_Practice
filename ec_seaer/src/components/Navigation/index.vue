<template>
    <header id="headerNav">
        <div class="headerNav-container">
            <div
                v-if="show"
                class="headerNav-container-btn"
                @click="$router.go(-1)"
                >
                <img :src="require('@/assets/icon/fanh.png')" />
            </div>
            <span class="headerNav-container-title" v-text="title"></span>
        </div>
    </header>
</template>

<script>
    export default {
        props: {
            title: {
                type: String
            },
            show: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    #headerNav {
        width: 7.5rem;
        height: .66rem + .12rem * 2;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 10000;

        .headerNav-container {
            width: 7.5rem;
            height: .66rem + .12rem * 2;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 10000;
            border-bottom: 1px solid #f7f7f7;
            @include mixin-flex(center, center);
            @include mixin-bg-color(white);

            &-btn {
                width: 0.2rem;
                height: 0.34rem;
                position: absolute;
                top: ((.66rem + .12rem * 2) - 0.34rem) / 2;
                left: 0.28rem;

                & > img {
                    @include mixin-img-block;
                }
            }

            &-title {
                font-family: Arial;
                font-size: 0.34rem;
                letter-spacing: 0rem;
                @include mixin-color(black);
                @include mixin-textHidden;
            }
        }
    }
</style>
