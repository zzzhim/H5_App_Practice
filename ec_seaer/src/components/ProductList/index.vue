<template>
    <div class="ProductList">
        <section
            class="ProductList-block"
            v-for="(item, index) in ProductsList"
            :key="index"
            >
            <v-product :data="item"></v-product>
        </section>
    </div>
</template>

<script>
    import Product from '@/components/Product'

    export default {
        props: [ 'ProductsList' ], // products-list商品列表参数
        components: {
            'v-product': Product
        }
    }
</script>


<style lang="scss" scoped>
    .ProductList {
        box-sizing: border-box;
        width: 7.5rem;
        height: auto;
        padding: 0.2rem 0.28rem;
        padding-top: 0px;
        @include mixin-flex(space-between, center);
        flex-wrap: wrap;
        background-color: #f7f7f7;

        &-block {
            margin-top: 0.2rem;
        }
    }
</style>