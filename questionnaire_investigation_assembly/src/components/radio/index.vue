<template>
    <div class="radio-item">
        <h1 class="title">{{ title }}</h1>
        <el-radio-group v-model="radio" @change="handleChange">
            <div class="radio-list" v-for="item in answer" :key="item.id">
                <el-radio :label="item">{{ item.seltitle }}</el-radio>
            </div>
        </el-radio-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radio: null
            };
        },
        props: {
            title: {
                type: String,
                default: '我是默认标题'
            },
            sort: {
                default: null
            },
            answer: {
                type: Array,
                required: true,
                default: []
            }
        },
        methods: {
            handleChange(data) {
                // 当用户更改选项触发自定义事件
                this.$emit('selectChange', {
                    question_id: data.question_id,
                    sort: this.sort,
                    result: data.id.toString()
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .radio-item {

        .title {
            font-size: 18px;
        }

        .radio-list {
            line-height: 30px;
        }
    }
</style>
