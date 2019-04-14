<template>
    <section class="block-list">
        <router-link to="/Product/ProductDetail">
            <div class="block-list-img">
                <img :src="require('@/assets/chp.png')" />
            </div>
            <p>4pcs/bag 10kg/mesh bag</p>
        </router-link>
    </section>
</template>

<script>
    export default {
        props: [ 'title', 'picture', 'link' ]
    }
</script>

<style lang="scss" scoped>
    .block-list {
        width: 2.05rem;
        height: 2.05rem + 0.97rem - 0.2rem;
        @include mixin-bg-color(white);
        text-align: center;

        &-img {
            width: 2.05rem;
            height: 2.05rem;
            @include mixin-bg-color(white);

            img {
                @include mixin-img-block;
            }
        }

        & p {
            box-sizing: border-box;
            padding-top: 0.1rem;
            width: 2.05rem;
            height: 0.97rem - 0.2rem;
            font-family: Arial;
            font-size: 0.2rem;
            letter-spacing: 0rem;
            line-height: 1.3;
            @include mixin-color(grey);
            @include mixin-textHiddens(2);
        }
    }
</style>
