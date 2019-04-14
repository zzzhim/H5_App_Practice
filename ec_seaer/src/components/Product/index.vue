<template>
    <section class="product">
        <router-link to="/product/ProductDetail">
            <img :src="require('@/assets/bg5.png')" />
            <div class="product-content">
                <p>Beidou GPS dual mode vehicle navigation</p>
                <button>Detail</button>
            </div>
        </router-link>
    </section>
</template>

<script>
    export default {
        props: [ 'data' ]
    }
</script>

<style lang="scss" scoped>
    .product {
        width: 3.35rem;
        height: 3.35rem + 1.36rem;
        display: block;
        @include mixin-box-shadow;
        @include mixin-bg-color(white);

        img {
            width: 3.35rem;
            height: 3.35rem;
            display: block;
            @include mixin-bg-color(white);
        }

        &-content {
            width: 3.35rem;
            height: 1.36rem;
            box-sizing: border-box;
            padding: 0px 0.4rem;
            border-top: 0.01rem solid #eeeeee;
            text-align: center;
            @include mixin-bg-color(white);

            & > p {
                font-family: Arial;
                font-size: 0.24rem;
                line-height: 1.4;
                letter-spacing: 0rem;
                margin-top: 0.2rem;
                @include mixin-color(grey);
                @include mixin-bg-color(white);
                @include mixin-textHiddens(2);
            }

            & > button {
                width: 0.98rem;
                height: 0.3rem;
                font-family: Arial;
                font-size: 0.22rem;
                letter-spacing: 0rem;
                border: none;
                @include mixin-color(white);
                @include mixin-bg-color(blue);
            }
        }
    }
</style>
