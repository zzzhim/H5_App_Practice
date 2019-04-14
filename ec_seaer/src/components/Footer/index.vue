<template>
    <footer id="footer">
        <div class="footer-container">
            <router-link to="/">
                <section class="footer-container-item">
                    <img
                        class="footer-container-list"
                        :src="Active == 'Home' ? require('@/assets/icon/shouy1.png') : require('@/assets/icon/shouy.png')"
                        />
                    <p
                        :class="'footer-container-text ' + (Active == 'Home' ? 'footer-container-active' : '')">
                        Home
                    </p>
                </section>
            </router-link>

            <router-link to="/ProductsCategories">
                <section class="footer-container-item">
                    <img
                        class="footer-container-list"
                        :src="Active == 'Classification' ? require('@/assets/icon/fl.png') : require('@/assets/icon/fl1.png')"
                        />
                    <p
                        :class="'footer-container-text ' + (Active == 'Classification' ? 'footer-container-active' : '')">
                        Classification
                    </p>
                </section>
            </router-link>

            <router-link to="/PersonalCenter">
                <section class="footer-container-item">
                    <img
                        class="footer-container-list"
                        :src="Active == 'Personal center' ? require('@/assets/icon/grzx1.png') : require('@/assets/icon/grzx.png')"
                        />
                    <p
                        :class="'footer-container-text ' + (Active == 'Personal center' ? 'footer-container-active' : '')">
                        Personal center
                    </p>
                </section>
            </router-link>
        </div>
    </footer>
</template>

<script>
    export default {
        props: ['Active']
    }
</script>

<style lang="scss" scoped>
    #footer {
        width: 7.5rem;
        height: 1rem;
        background-color: transparent;
        position: absolute;
        bottom: 0px;
        left: 0px;
        z-index: 10000;

        .footer-container {
            width: 7.5rem;
            height: 1rem;
            @include mixin-bg-color(white);
            box-shadow: 0rem -0.03rem 0.06rem 0rem rgba(0, 0, 0, 0.1);
            // position: fixed;
            bottom: 0px;
            left: 0px;
            box-sizing: border-box;
            @include mixin-flex(space-around, center);
            z-index: 10000;

            &-item {
                width: 2rem;
                @include mixin-flex(center, center, column);
            }

            &-list {
                width: 0.4rem;
                height: 0.4rem;
                display: block;
                margin-bottom: 0.12rem;
            }

            &-text {
                font-size: 0.24rem;
                line-height: 1;
                letter-spacing: 0rem;
                color: #d6d3d8;
            }

            &-active {
                @include mixin-color(blue);
            }
        }
    }
</style>
