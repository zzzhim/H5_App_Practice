import Mock from 'mockjs';

Mock.mock('/api/select', [
    //第一条数据
    {
        id: 50,  //
        is_must: "t",
        is_part: "f",
        isdelete: "f",
        item_id: 57,
        option_id: 1,
        question: "性别",
        score: "5.0",   //分数
        sort: 1,        //排序
        tips: null,
        typetitle: "o",   //类型 o代表单选 d代表多选 p判断 t填空
        answer: [
            {
                id: 82,   //点击选项 将这个id发送给后端
                isdelete: "f",
                item_id: 57,
                pic: "",
                question_id: 50,
                remark: "",
                rightkey: "t",
                seltitle: "男",
                sort: 1,
            },
            {
                id: 83,
                isdelete: "f",
                item_id: 57,
                pic: "",
                question_id: 50,
                remark: "",
                rightkey: "t",
                seltitle: "女",
                sort: 2
            }
        ]
    },
    //第二条数据
    {
        id: 55,
        is_must: "t",
        is_part: "f",
        isdelete: "f",
        item_id: 57,
        option_id: 4,
        question: "蛋糕",
        score: "5.0",
        sort: 6,
        tips: null,
        typetitle: "t",
        answer: [
            {
                id: 94,
                isdelete: "f",
                item_id: 57,
                pic: "",
                question_id: 55,
                remark: "",
                rightkey: "t",
                seltitle: "奶油蛋糕",
                sort: 1,
            },
            {
                id: 95,
                isdelete: "f",
                item_id: 57,
                pic: "",
                question_id: 55,
                remark: "",
                rightkey: "t",
                seltitle: "巧克力蛋糕",
                sort: 1,
            }
        ],
    },
    //第三条数据
    {
        id: 52,
        is_must: "t",
        is_part: "f",
        isdelete: "f",
        item_id: 57,
        option_id: 2,
        question: "电脑",
        score: "5.0",
        sort: 3,
        tips: null,
        typetitle: "o",
        answer: [
            {
                id: 86,
                isdelete: "f",
                item_id: 57,
                pic: "",
                question_id: 52,
                remark: "",
                rightkey: "t",
                seltitle: "台式机",
                sort: 1,
            },
            {
                id: 87,
                isdelete: "f",
                item_id: 57,
                pic: "",
                question_id: 52,
                remark: "",
                rightkey: "t",
                seltitle: "笔记本",
                sort: 2,
            }
        ]
    },
    //  第四条数据
    {
        id: 53,
        is_must: "t",
        is_part: "f",
        isdelete: "f",
        item_id: 57,
        option_id: 2,
        question: "电器",
        score: "5.0",
        sort: 4,
        tips: null,
        typetitle: "d",
        answer: [
            {
                id: 88,
                isdelete: "f",
                item_id: 57,
                pic: "",
                question_id: 53,
                remark: "",
                rightkey: "t",
                seltitle: "冰箱",
                sort: 1,
            },
            {
                id: 89,
                isdelete: "f",
                item_id: 57,
                pic: "",
                question_id: 53,
                remark: "",
                rightkey: "t",
                seltitle: "空调",
                sort: 2,
            }
        ]
    },
    {
        id: 54,
        is_must: "t",
        is_part: "f",
        isdelete: "f",
        item_id: 57,
        option_id: 3,
        question: "水果",
        score: "5.0",
        sort: 5,
        tips: null,
        typetitle: "x",
        answer: [
            {
                id: 90,
                isdelete: "f",
                item_id: 57,
                pic: "",
                question_id: 54,
                remark: "",
                rightkey: "t",
                seltitle: "苹果",
                sort: 1,
            },
            {
                id: 91,
                isdelete: "f",
                item_id: 57,
                pic: "",
                question_id: 54,
                remark: "",
                rightkey: "t",
                seltitle: "香蕉",
                sort: 2,
            },
            {
                id: 92,
                isdelete: "f",
                item_id: 57,
                pic: "",
                question_id: 54,
                remark: "",
                rightkey: "t",
                seltitle: "葡萄",
                sort: 3,
            },
            {
                id: 93,
                isdelete: "f",
                item_id: 57,
                pic: "",
                question_id: 54,
                remark: "",
                rightkey: "t",
                seltitle: "橘子",
                sort: 4,
            }
        ]
    },
    {
        id: 51,
        is_must: "t",
        is_part: "f",
        isdelete: "f",
        item_id: 57,
        option_id: 1,
        question: "键盘",
        score: "5.0",
        sort: 2,
        tips: null,
        typetitle: "o",
        answer: [
            {
                id: 84,
                isdelete: "f",
                item_id: 57,
                pic: "",
                question_id: 51,
                remark: "",
                rightkey: "t",
                seltitle: "樱桃键盘",
                sort: 1,
            },
            {
                id: 85,
                isdelete: "f",
                item_id: 57,
                pic: "",
                question_id: 51,
                remark: "",
                rightkey: "t",
                seltitle: "雷神键盘",
                sort: 2,
            }
        ]
    }
]);

export default Mock;