<template>
    <section
        @mouseleave="onLeave"
        class="dropdown">
        <div
            @click="onEnter"
            class="dropdown-title"
            >
            <span>{{ title }}</span>
            <img class="sub" :src="require('@/assets/icon/xl.png')" alt="" />
        </div>

        <div
            class="dropdown-block"
            v-bind:style="drop ? 'height: ' + dropdownHeight : null">
            <ul class="dropdown-item" ref="dropdownItem">
                <li
                    class="dropdown-item-list"
                    @click="onClick(item)"
                    v-for="item in dropdownItem"
                    :key="item.value"
                    v-text="item.value"
                    >
                </li>
            </ul>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            drop: false,
            dropdownHeight: '0px',
            bool: false
        }
    },
    methods: {
        onEnter() {
            switch (this.bool) {
                case false:
                    this.drop = true
                    this.bool = true
                    this.dropdownHeight = this.$refs.dropdownItem.offsetHeight  + 'px'
                    break
                case true:
                    this.drop = false
                    this.bool = false
                    this.dropdownHeight = '0px'
                    break
            }
        },
        onLeave() {
            this.drop = false
            this.bool = false
            this.dropdownHeight = '0px'
        },
        onClick(item) {
            this.bool = false
            this.drop = false
            this.dropdownHeight = '0px'
            this.$emit('common', item)
        }
    },
    mounted() {
        const that = this
        window.addEventListener('touchend', function() {
            that.drop = false
            that.dropdownHeight = '0px'
            that.bool = false
        })
    },
    props: {
        dropdownItem: {
            type: Array
        },
        title: {
            type: String
        }
    },
    watch: {
        title: function() {
            this.drop = false
            this.bool = false
        }
    }
}
</script>


<style lang="scss" scoped>
    .dropdown {
        position: relative;
        z-index: 10000;

        &-title {
            width: 1rem;
            height: 0.66rem;
            font-size: 0.24rem;
            line-height: 0.66rem;
            letter-spacing: 0rem;
            cursor: pointer;
            @include mixin-color(grey);
            @include mixin-flex(space-between, center);

            img {
                width: 0.14rem;
                height: 0.07rem;
                display: block;
            }
        }

        &-block {
            height: 0px;
            box-sizing: border-box;
            overflow: hidden;
            transition: height 0.4s;
            position: absolute;
            top: 0.66rem;
            left: 0px;
            z-index: 10000;
            @include mixin-box-shadow;

        }

        &-item {
            padding: .2rem 0px;
            @include mixin-bg-color(white);

            &-list {
                width: 1rem;
                padding: .1rem .15rem;
                font-size: 0.24rem;
                line-height: 1.4;
                cursor: pointer;
                @include mixin-bg-color(white);
            }

            &-list:hover {
                @include mixin-color(blue);
                background-color: rgba(11,47,141, 0.1);
            }
        }
    }
</style>

