<template>
    <div class="article">
        <el-card class="box-card" shadow="none"
            style="background-color: ; width: calc(100vw - 200px); height: 600px; overflow-y: auto;" v-if="articleShow">
            <div>
                <div style="padding: 5px 0;">请写内容</div>
                <div>
                    <el-input type="textarea" v-model="textValue" :rows="4" placeholder="告诉我该为你写什么。按3+Enter生成。" />
                </div>
                <div>
                    <div style="display: flex;align-items: center;padding: 5px 0;">
                        <!-- <SlControlPause /> -->
                        <el-icon size="20">
                            <Notification />
                        </el-icon>
                        <div style="padding-left: 2px;">字数长短</div>
                    </div>
                    <div class="numLength">
                        <div v-for="item in firstBtn" :key="item.id" @click="handleButton1Click(item)"
                            :class="{ bgcolor: btn1Bg === item.id }"
                            style="border: 1px solid rgb(146, 173, 230); padding: 3px 7px; border-radius: 6px; cursor: pointer;margin-right: 10px; ">
                            {{ item.content }}
                        </div>
                    </div>
                </div>
                <div>
                    <div style="display: flex;align-items: center;padding: 5px 0;">
                        <el-icon size="20">
                            <Document />
                        </el-icon>
                        <div style="padding-left: 2px;">格式(多选)</div>
                    </div>
                    <div class="numLength">
                        <div v-for="item in secondBtn" :key="item.id" @click="handleButton2Click(item)"
                            :style="{ backgroundColor: selectedItems.includes(item.id) ? 'rgb(146, 173, 230)' : 'transparent' }"
                            style="border: 1px solid rgb(146, 173, 230); padding: 3px 7px; border-radius: 6px; cursor: pointer; margin-right: 10px;">
                            {{ item.content }}
                        </div>
                    </div>
                </div>
                <div>
                    <div style="display: flex;align-items: center;padding: 5px 0;">
                        <el-icon size="20">
                            <Operation />
                        </el-icon>
                        <div style="padding-left: 2px;">风格</div>
                    </div>
                    <div class="numLength">
                        <div v-for="item in thirdBtn" :key="item.id" @click="handleButton3Click(item)"
                            :class="{ bgcolor: btn3Bg === item.id }"
                            style="border: 1px solid rgb(146, 173, 230); padding: 3px 7px; border-radius: 6px; cursor: pointer; margin-right: 10px;">
                            {{ item.content }}
                        </div>
                    </div>
                </div>
                <div>
                    <div style="display: flex;align-items: center;padding: 5px 0;">
                        <el-icon size="20">
                            <Switch />
                        </el-icon>
                        <div style="padding-left: 2px;">语言</div>
                    </div>
                    <div class="numLength">
                        <div v-for="item in fourBtn" :key="item.id" @click="handleButton4Click(item)"
                            :class="{ bgcolor: btn4Bg === item.id }"
                            style="border: 1px solid rgb(146, 173, 230); padding: 3px 7px; border-radius: 6px; cursor: pointer; margin-right: 10px;">
                            {{ item.content }}
                        </div>
                    </div>
                </div>
                <div>
                    <div style="display: flex;align-items: center;padding: 5px 0;">
                        <el-icon size="20">
                            <Guide />
                        </el-icon>
                        <div style="padding-left: 2px;">领域</div>
                    </div>
                    <div class="numLength">
                        <div v-for="item in domain" :key="item.id" @click="handleButton5Click(item)"
                            :class="{ bgcolor: btn5Bg === item.id }"
                            style="border: 1px solid rgb(146, 173, 230); padding: 3px 7px; border-radius: 6px; cursor: pointer; margin-right: 10px;">
                            {{ item.content }}
                        </div>
                    </div>
                </div>
                <div>
                    <div style="display: flex;align-items: center;padding: 5px 0;">
                        <el-icon size="20">
                            <Box />
                        </el-icon>
                        <div style="padding-left: 2px;">文体</div>
                    </div>
                    <div class="numLength">
                        <div v-for="item in litForm" :key="item.id" @click="handleButton6Click(item)"
                            :class="{ bgcolor: btn6Bg === item.id }"
                            style="border: 1px solid rgb(146, 173, 230); padding: 3px 7px; border-radius: 6px; cursor: pointer; margin-right: 10px;">
                            {{ item.content }}
                        </div>
                    </div>
                </div>
                <div>
                    <div style="display: flex;align-items: center;padding: 5px 0;">
                        <el-icon size="20">
                            <PriceTag />
                        </el-icon>
                        <div style="padding-left: 2px;">面向受众</div>
                    </div>
                    <div class="numLength">
                        <div v-for="item in colony" :key="item.id" @click="handleButton7Click(item)"
                            :class="{ bgcolor: btn7Bg === item.id }"
                            style="border: 1px solid rgb(146, 173, 230); padding: 3px 7px; border-radius: 6px; cursor: pointer; margin-right: 10px;">
                            {{ item.content }}
                        </div>
                    </div>
                </div>
                <div>
                    <div style="display: flex;align-items: center;padding: 5px 0;">
                        <el-icon size="20">
                            <Star />
                        </el-icon>
                        <div style="padding-left: 2px;">态度</div>
                    </div>
                    <div class="numLength">
                        <div v-for="item in attitude" :key="item.id" @click="handleButton8Click(item)"
                            :class="{ bgcolor: btn8Bg === item.id }"
                            style="border: 1px solid rgb(146, 173, 230); padding: 3px 7px; border-radius: 6px; cursor: pointer; margin-right: 10px;">
                            {{ item.content }}
                        </div>
                    </div>
                </div>
                <div>
                    <div style="display: flex;align-items: center;padding: 5px 0;">
                        <el-icon size="20">
                            <School />
                        </el-icon>
                        <div style="padding-left: 2px;">场合</div>
                    </div>
                    <div class="numLength">
                        <div v-for="item in occasion" :key="item.id" @click="handleButton9Click(item)"
                            :class="{ bgcolor: btn9Bg === item.id }"
                            style="border: 1px solid rgb(146, 173, 230); padding: 3px 7px; border-radius: 6px; cursor: pointer; margin-right: 10px;">
                            {{ item.content }}
                        </div>
                    </div>
                </div>
                <div style="padding: 10px 0;box-sizing: border-box;text-align: center;">
                    <el-button @click="handleDraft">生成草案</el-button>
                    <el-button style="margin-left: 10px;" @click="handleArticle">查看文章</el-button>
                </div>
            </div>
        </el-card>
        <div shadow="none" :border="none" style="width: calc(100vw - 200px); height: 600px; overflow-y: auto;"
            v-if="generateContent">
            <div>
                <el-input type="textarea" :rows="25" style="overflow-y: auto;" />
            </div>
            <div style="margin-top: 10px;">
                <el-button @click="regeneration">再生</el-button>
                <el-button @click="back">返回</el-button>
            </div>

        </div>


    </div>
</template>
<script setup >
import { ref } from 'vue';
// import {OpenAIStream} from '@/api/talk/index.js'
// import { WriteAritcle } from '@/api/talk/index.js';
import request from '@/utils/request'

const firstBtn = ref([
    {
        id: '0',
        content: '自动',
    },
    {
        id: '1',
        content: '短篇（0-500）',
    },
    {
        id: '2',
        content: '中篇（500-3000）',
    },
    {
        id: '3',
        content: '长篇（3000-10000）',
    },
]);
const secondBtn = ref([
    {
        id: '1',
        content: '需要标题',
    },
    {
        id: '2',
        content: '需要摘要',
    },
    {
        id: '3',
        content: '需要关键词',
    },
    {
        id: '4',
        content: '需要引用参考文献',
    },
])
const thirdBtn = ref([
    {
        id: '0',
        content: '自动',
    },
    {
        id: '1',
        content: '严肃',
    },
    {
        id: '2',
        content: '诙谐',
    },
    {
        id: '3',
        content: '幽默',
    },
    {
        id: '4',
        content: '简洁',
    },
    {
        id: '5',
        content: '商务',
    },
    {
        id: '6',
        content: '口语',
    },
]);
const fourBtn = ref([
    {
        id: '0',
        content: '中文',
    },
    {
        id: '1',
        content: '英文',
    },
]);
// 领域 美食、旅行、美容、影视、体育、教育、宠物、健康、职业、音乐、心灵、游戏、环境等
const domain = ref([
    {
        id: '0',
        content: '自动',
    },
    {
        id: '1',
        content: '美食',
    },
    {
        id: '2',
        content: '旅行',
    },
    {
        id: '3',
        content: '美容',
    },
    {
        id: '4',
        content: '影视',
    },
    {
        id: '5',
        content: '体育',
    },
    {
        id: '6',
        content: '教育',
    },
    {
        id: '7',
        content: '宠物',
    },
    {
        id: '8',
        content: '健康',
    },
    {
        id: '9',
        content: '职业',
    },
    {
        id: '10',
        content: '音乐',
    },
    {
        id: '11',
        content: '心灵',
    },
    {
        id: '12',
        content: '游戏',
    },
    {
        id: '13',
        content: '环境',
    },
]);
// 文体 邮件、短信、评论、短文、故事、议论文、说明文、记叙文、想法、博客、大纲、推文、摘要、日记等
const litForm = ref([
    {
        id: '0',
        content: '自动',
    },
    {
        id: '1',
        content: '邮件',
    },
    {
        id: '2',
        content: '短信',
    },
    {
        id: '3',
        content: '评论',
    },
    {
        id: '4',
        content: '短文',
    },
    {
        id: '5',
        content: '故事',
    },
    {
        id: '6',
        content: '议论文',
    },
    {
        id: '7',
        content: '说明文',
    },
    {
        id: '8',
        content: '记叙文',
    },
    {
        id: '9',
        content: '想法',
    },
    {
        id: '10',
        content: '博客',
    },
    {
        id: '11',
        content: '大纲',
    },
    {
        id: '12',
        content: '推文',
    },
    {
        id: '13',
        content: '摘要',
    },
    {
        id: '14',
        content: '日记',
    },
]);
// 面向受众
const colony = ref([
    {
        id: '0',
        content: '自动',
    },
    {
        id: '1',
        content: '学生',
    },
    {
        id: '2',
        content: '上班族',
    },
    {
        id: '3',
        content: '上司',
    },
    {
        id: '4',
        content: '下属',
    },
    {
        id: '5',
        content: '大众用户',
    },
    {
        id: '6',
        content: '老师',
    },
]);
// 态度 主观（贬义、褒义）、中立、阴阳怪气等
const attitude = ref([
    {
        id: '0',
        content: '自动',
    },
    {
        id: '1',
        content: '主观（贬义）',
    },
    {
        id: '2',
        content: '主观（褒义）',
    },
    {
        id: '3',
        content: '中立',
    },
    {
        id: '4',
        content: '阴阳怪气',
    },
]);
// 场合
const occasion = ref([
    {
        id: '0',
        content: '自动',
    },
    {
        id: '1',
        content: '课堂',
    },
    {
        id: '2',
        content: '考试',
    },
    {
        id: '3',
        content: '报纸',
    },
    {
        id: '4',
        content: '杂志',
    },
    {
        id: '5',
        content: '网站',
    },
    {
        id: '6',
        content: '演讲',
    },
]);

const selectBtn1 = ref('自动')
const btn1Bg = ref('0')
const handleButton1Click = (item) => {
    selectBtn1.value = item.content
    btn1Bg.value = item.id
}
// const selectBtn2 = ref([])
// const btn2Bg = ref([])
const selectedItems = ref([])
const handleButton2Click = (item) => {
    const index = selectedItems.value.indexOf(item.id);
    if (index === -1) {
        selectedItems.value.push(item.id); // 如果没有选中，则加入选中列表
    } else {
        selectedItems.value.splice(index, 1); // 如果已经选中，则移除
    }
    console.log(selectedItems.value)
}
const selectBtn3 = ref('自动')
const btn3Bg = ref('0')
const handleButton3Click = (item) => {
    selectBtn3.value = item.content
    btn3Bg.value = item.id
}
const selectBtn4 = ref('中文')
const btn4Bg = ref('0')
const handleButton4Click = (item) => {
    selectBtn4.value = item.content
    btn4Bg.value = item.id
}
const selectBtn5 = ref('自动')
const btn5Bg = ref('0')
const handleButton5Click = (item) => {
    selectBtn5.value = item.content
    btn5Bg.value = item.id
}
const selectBtn6 = ref('自动')
const btn6Bg = ref('0')
const handleButton6Click = (item) => {
    selectBtn6.value = item.content
    btn6Bg.value = item.id
}
const selectBtn7 = ref('自动')
const btn7Bg = ref('0')
const handleButton7Click = (item) => {
    selectBtn7.value = item.content
    btn7Bg.value = item.id
}
const selectBtn8 = ref('自动')
const btn8Bg = ref('0')
const handleButton8Click = (item) => {
    selectBtn8.value = item.content
    btn8Bg.value = item.id
}
const selectBtn9 = ref('自动')
const btn9Bg = ref('0')
const handleButton9Click = (item) => {
    selectBtn9.value = item.content
    btn9Bg.value = item.id
}

let articleShow = ref(true)
let generateContent = ref(false)
const textValue = ref('')


// const openAIStream = async (model, messagesToSend) => {
//     const apiUrl = "http://120.55.181.128:80/bar"; // 替换为你的 API 地址
//     const data = {
//         'model_name': model,
//         'messages': messagesToSend,
//     };

//     try {
//         const response = await request(apiUrl, data, {
//             headers: {
//                 "Content-Type": "application/json",
//                 'Access-Control-Allow-Origin': '*'
//             }
//         });

//         if (response.status !== 200) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = response.data; // 获取返回的数据

//         // 处理返回的结果，更新消息等操作
//         // ...

//         return result; // 返回数据流
//     } catch (error) {
//         console.error('Error:', error);
//         throw error; // 抛出错误或者处理错误情况
//     }
// };

const OpenAIStream1 = async (model, messagesToSend) => {
        const encoder = new TextEncoder();
        const decoder = new TextDecoder();
        // console.log('apiUrl', apiUrl)
        // apiUrl = "http://10.110.232.63:7863/chat/chat/";
//        apiUrl = "http://chengxiai.top:7862/chat/chat/";
//        apiUrl = "http://127.0.0.1:8000/bar";
       const apiUrl = "http://120.55.181.128:80/bar"
        console.log("###########################1###########################");
        const data = {
            'model_name': model,
            'messages': messagesToSend,
        }
        let res = await request(apiUrl, {
            method: 'post',
            headers: {
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        }).then(response => {
            console.log("###################################################");
            console.log(response);
            // 检查响应是否有效
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const reader = response.body.getReader();
            let result = '';
            return reader.read().then(function processChunk({ done, value }) {
                // 当数据块可用时
//                 if (value) {
// //                    result += JSON.parse(new TextDecoder('utf-8').decode(value))["result"];
// //                    result += JSON.parse(new TextDecoder('utf-8').decode(value))["text"];
//                     result += new TextDecoder('utf-8').decode(value);
//                     setMessages(
//                         [
//                             ...messages,
//                             {content: result, role: 'assistant'}
//                         ]
//                     );
//                 }
                if (done) {
                    console.log('Download complete.');
                    return result;
                } else {
                    return reader.read().then(processChunk);
                }
            });
        }).then(data => {
            console.log('Complete data:', data);
            return data;
        })
            .catch(error => {
                console.error('Error:', error);
            });
        let answer = res;
        const textEncoder = new TextEncoder();
        const textUint8Array = textEncoder.encode(answer);
        const textStream = new ReadableStream({
            start(controller) {
                // 将 Uint8Array 写入到控制器
                controller.enqueue(textUint8Array);
                // 关闭流
                controller.close();
            },
        });
        return textStream;
    };

    const getRequirement = () => {
        let requirement = `请根据后续内容写一篇`
        if (selectBtn5.value != '自动') {
            requirement += `${selectBtn5.value}领域的`;
        }
        requirement += "文章"
        requirement += `，使用${selectBtn4.value}`
        // ，篇幅为${selectBtn1}，风格为${selectBtn3}，面向受众为${selectBtn7}，态度为${selectBtn8}，场合为${selectBtn9}，文体为${selectBtn6}，${selectBtn2}。`;
        if (selectBtn1.value != '自动') {
            requirement += `，篇幅为${selectBtn1.value}`;
        }
        if (selectBtn3.value != '自动') {
            requirement += `，风格为${selectBtn3.value}`;
        }
        if (selectBtn7.value != '自动') {
            requirement += `，面向受众为${selectBtn7.value}`;
        }
        if (selectBtn8.value != '自动') {
            requirement += `，态度为${selectBtn8.value}`;
        }
        if (selectBtn9.value != '自动') {
            requirement += `，场合为${selectBtn9.value}`;
        }
        if (selectBtn6.value != '自动') {
            requirement += `，文体为${selectBtn6.value}`;
        }
        console.log(selectedItems.value)
        if (selectedItems.value.length > 0) {
            for (const i in selectedItems.value) {
                requirement += `，${selectedItems.value[i]}`;
            }
        }
        return requirement;
    };
// 查看文章
const handleDraft = () => {
    console.log('生成草案')
    articleShow.value = false
    generateContent.value = true
    const requirement = getRequirement();
    console.log('requirement', requirement);
        // OpenAIStream("", "", model_name, messages)
        const messages = [
            {
                content: requirement,
                role: 'system',
            },
            {
                content: textValue.value,
                role: 'user',
            },
        ];
        OpenAIStream1('qwen-api',messages)
        // OpenAIStream("", "", model_name, messages)
}
const handleArticle = () => {
    console.log('查看文章')
    articleShow.value = false
    generateContent.value = true
}

// const OpenAIStream = async (apiUrl, apiKey, model, messagesToSend) => {
//         // console.log('apiUrl', apiUrl)
//         apiUrl = 'http://47.99.179.159:7862/chat/chat/';
//         const data = {
//             model_name: model,
//             messages: messagesToSend,
//         };
//         let res = await window
//             .fetch(apiUrl, {
//                 method: 'post',
//                 headers: {
//                     'Content-type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             })
//             .then((response) => {
//                 console.log('#######################response############################');
//                 console.log(1111, response);
//                 // 检查响应是否有效
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const reader = response.body.getReader();
//                 let result = '';
//                 return reader.read().then(function processChunk({ done, value }) {
//                     // 当数据块可用时
//                     if (value) {
//                         result += JSON.parse(new TextDecoder('utf-8').decode(value))['text'];
//                         console.log(result);
//                         // setShowArticle(result);
//                         textValue.value = result
//                     }
//                     if (done) {
//                         console.log('Download complete.');
//                         return result;
//                     } else {
//                         return reader.read().then(processChunk);
//                     }
//                 });
//             })
//             .then((data) => {
//                 console.log('Complete data:', data);
//                 return data;
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//         return res;
//     };

// 再生
const regeneration = () =>{

}
const back = () =>{
    generateContent.value = false
    articleShow.value = true
}

</script>
<style lang="scss" scoped>.bgcolor {
    background-color: rgb(146, 173, 230);
}

.numLength {
    display: flex;
}</style>
