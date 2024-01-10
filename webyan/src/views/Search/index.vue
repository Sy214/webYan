<template>
    <div class="search">
      <div class="item" v-for="item in searchData" :key="item.id">
        <div class="item-top">
          <div>{{ item.title }}</div>
          <div><el-icon @click="handleEdit(item)"><EditPen /></el-icon></div>
        </div>
        <div class="item-bottom">
          {{ item.content }}
        </div>
      </div>
      <div class="item">
        <div class="item1-top">
          <el-icon size="28" @click="handlePlus"><Plus /></el-icon>
        </div>
        <div class="item1-bottom">
          添加您的快捷操作
        </div>
      </div>
      <Dialog :isShow="isShow" :title="title" :itemObj="itemObj" @handleCancel1="handleCancel1" @handleSave1="handleSave1" @handleClose1="handleClose1" ></Dialog>
    </div>
</template>
<script setup >
import { ref } from 'vue';
import Dialog from './Dialog/index.vue'
const searchData = ref([
  {
    id:'1',
    title:'总结',
    content:'请帮我总结一下文本内容，要求简单精炼，条理清晰',
    icon:''
  },
  {
    id:'2',
    title:'翻译',
    content:'请充当一个中英文翻译助手，根据我的输入内容返回对应翻译结果，不要写解释或其它内容。我的输入是:',
    icon:''
  },
  {
    id:'3',
    title:'重写',
    content:'请重写以下文本，我希望你用美丽、优雅的句子替换我的简单词汇，如果有需要可以加入适当的名人名言、诗句等内容。',
    icon:''
  },
  {
    id:'4',
    title:'拓展',
    content:'请拓展以下文本，你可以适当的补充一些细节。',
    icon:''
  },
  {
    id:'5',
    title:'解释',
    content:'请解释以下内容，用你尽可能多的认知解释你所知道的相关内容，你的回答要尽可能简要明了。',
    icon:''
  },
  {
    id:'6',
    title:'语法',
    content:'请帮我检查以下文本是否有语法问题，并纠正他。',
    icon:''
  },
  {
    id:'7',
    title:'Q&A',
    content:'请回答下面这个问题',
    icon:''
  },
  {
    id:'8',
    title:'代码解释',
    content:'请尽可能详细的帮我解释下面这段代码',
    icon:''
  }

])



const isShow = ref(false)
const title = ref('编辑')
const itemObj = ref({})
// 编辑
const handleEdit = (item) =>{
  console.log(item)
  isShow.value = true
  title.value = '编辑'
  itemObj.value = item
}
// 新增
const handlePlus = () =>{
  console.log('新增')
  isShow.value = true
  title.value = '新增'
}

const handleCancel1 = (item)=>{
  console.log(11111,item)
  isShow.value = item

}
// const a = ref()
const handleSave1 = (item,input1,input2,tit,obj) =>{
  console.log(2222,item)
  isShow.value = item
  console.log('wwww',input1,input2,tit,obj)
  // if(tit == '编辑'){
  //   a.value = searchData.value.map((item)=>{
      
  //     if(item.id == obj.id){
  //       item.title = input1
  //       item.content = input2
  //     }
      
  //   })
  //   console.log(a.value)
    
  // }
}

const handleClose1 = (item) =>{
  isShow.value = item
}

</script>
<style lang="scss" scoped>

.search{
  width: calc(100vw - 100px);
  overflow: auto;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  .item{
    width: 350px;
    height: 80px;
    border: .8px solid rgb(230, 234, 242);
    margin-left: 20px;
    margin-top: 10px;
    box-sizing: border-box;
    .item-top{
      display: flex;
      justify-content: space-between;
      padding: 10px;
      box-sizing: border-box;
    }
    .item-bottom{
      padding:0 10px 10px 10px;
      box-sizing: border-box;
      white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 350px;
    }
    .item1-top{
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .item1-bottom{
      text-align: center;
    }
  }
}


</style>
