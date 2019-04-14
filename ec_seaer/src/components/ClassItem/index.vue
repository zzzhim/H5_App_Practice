<template>
    <div class="block-item">
        <section
            class="block-item-box"
            v-for="(item, index) in ProductsList"
            :key="index"
            >
            <v-list picture="" title="" link=""></v-list>
        </section>
    </div>
</template>

<script>
    import List from '@/components/ClassList'

    export default {
        props: [ 'ProductsList' ],
        components: {
            'v-list': List
        }
    }
</script>

<style lang="scss" scoped>
    .block-item {
        box-sizing: border-box;
        padding: 0 0.3rem;
        padding-bottom: 0.2rem;
        @include mixin-flex(space-between, center);
        flex-wrap: wrap;
    }
</style>
