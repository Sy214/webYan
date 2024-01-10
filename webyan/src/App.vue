

<template>
  <div>
    <el-container class="common-layout">
      <el-aside :width='250 - asideNum'>
        <div class="aside-con">
          <div class="aside-menu">
            <div>
              <div class="avator">
              <img src="./assets/logo/icon.png" alt="" width="40px" height="40px">
            </div>
            <div class="aside-item1">
              <el-icon size="30" :class="{ active: clickNum === 1 }" color="gray"><ChatDotSquare @click="handleChat(1)"/></el-icon>
            </div>
            <div class="aside-item1">
              <el-icon size="30" :class="{ active: clickNum === 2 }" color="gray"><ZoomIn  @click="handleSearch(2)" /></el-icon>
            </div>
            <div class="aside-item1">
              <el-icon size="30" :class="{ active: clickNum === 3 }" color="gray"><Edit  @click="handleArt(3)" /></el-icon>
            </div>
            </div>
            <div>
              <div class="aside-item1">
              <el-icon size="30" :class="{ active: clickNum === 4 }" color="gray"><Phone  @click="handlePhone(4)" /></el-icon>
            </div>
            </div>
            <!-- <div class="aside-bottom">
              <div class="aside-item1">
              <el-icon size="30" color="gray"><Search /></el-icon>
            </div>
            <div class="aside-item1">
              <el-icon size="30" color="gray"><Edit  /></el-icon>
            </div>
            </div> -->
          </div>
          <div class="aside-list" v-if="asideShow">
            <div class="list-item">
              <div>快捷使用</div>
              <div>
                <el-icon size="20" color="gray"><Plus  @click="handleAdd"/></el-icon>
              </div>
            </div>
            <div class="list-item1" v-for="item in listData " :key="item.id" 
            @mouseover="handleMouseOver(item)"
            @mouseout="handleMouseOut(item)" 
            :class="{ mouseActive: mouseNum === item.id ,clickActive : menuClickNum === item.id}"
            @click="handleClick(item)"
            
            >
              {{ item.content }}
            </div>
          </div>
        </div>
      </el-aside>
      <el-main class="main" >
        <Dialog :isShow="isShow" :title="title" @handleCancel1="handleCancel1" @handleSave1="handleSave1" @handleClose1="handleClose1" ></Dialog>
        <div class="top">
          {{ topTitle }}
        </div>
        <div class="middle">
          <router-view></router-view>
        </div>
        <el-card class="dialog" v-if="dropMenuIsShow">
          <div v-for=" item in dropmenuData" :key="item.id" 
          style="display: flex;" class="content" @mouseover="handleDropmenu(item)"
           @mouseout="handleDropmenuItem"
           @click="handleItem(item)"
           >
            <img :src="item.image" alt="" width="24" height="24" >
            <div style="padding-left: 5px;" :class="{dropmenuActive:dropMenuNum ===item.id}">{{ item.label }}</div>
          </div>
        </el-card>
        <div class="content-bottom" v-if="bottomShow" >
            <div class="content-bottom-top">
              <div></div>
              <div class="bottom-dropmenu">
                <div class="bottom-dropdown-text"  @click="dropMenuShow">
                  <img :src="imgUrl" alt="" width="24" height="24">
                  <div style="padding-left: 5px;">{{text}}</div>
                </div>
                
              </div>
            </div>
            <div style="width: 100%;">
              <el-input type="textarea" :rows="6" resize="none"  placeholder="Shift + Enter 换行"  />
            </div>
            <div class="bombtn">
              <div class="aside-item1 send">
              <el-icon size="23" color="gray"><Position  /></el-icon>
            </div>
            <div class="aside-item1">
              <el-icon size="23" color="gray"><Delete  /></el-icon>
            </div>
            </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Dialog from '@/views/Search/Dialog/index.vue'
//侧边栏数据
const listData = ref([
  {
    id:'1',
    content:'默认查询',
    url:'defaultsearch'
  },
  {
    id:'2',
    content:'总结',
    url:'sumup'
  },
  {
    id:'3',
    content:'翻译',
    url:'translate'
  },
  {
    id:'4',
    content:'重写',
    url:'rewrite'
  },
  {
    id:'5',
    content:'拓展',
    url:'expansion'
  },
  {
    id:'6',
    content:'解释',
    url:'explain'
  },
  {
    id:'7',
    content:'语法',
    url:'grammar'
  },
  {
    id:'8',
    content:'Q&A',
    url:'qa'
  },
  {
    id:'9',
    content:'代码解释',
    url:'code'
  },
])
//下拉菜单数据
const dropmenuData = ref([
  {
            id: 1,
            label: '通义千问',
            image: '/tyqw.png',
            model_name: 'qwen-api',
        },
        {
            id: 2,
            label: '清华智谱',
            image: '/zpqy.png',
            model_name: 'zhipu-api',
        },
        {
            id: 3,
            label: '百川智能',
            image: '/bczn.png',
            model_name: 'baichuan-api',
        },
        {
            id: 4,
            label: '文心一言',
            image: '/wxyy.png',
            model_name: 'qianfan-api',
        },
        {
            id: 5,
            label: '讯飞星火',
            image: '/th.png',
            model_name: 'xinghuo-api',
        },
])

const router = useRouter()

let clickNum = ref(0)
let topTitle = ref('默认查询')
let asideShow = ref(true)
let asideNum = ref(0)
let bottomShow = ref(true)
// 点击最左侧按钮
const handleChat = (index)=>{
  console.log(111)
  clickNum.value = index
  router.push('/chat/defaultsearch')
  topTitle.value = '默认查询'
  asideShow.value = true
  bottomShow.value = true
}
const handleSearch = (index) =>{
  console.log(2222)
  clickNum.value = index
  router.push('/search')
  topTitle.value = '快捷使用'
  asideShow.value = true
  bottomShow.value = false
}
let articleNum = ref('0')
const handleArt = (index) =>{
  console.log(3333)
  clickNum.value = index
  router.push('/article')
  topTitle.value = '文章写作'
  asideShow.value = false
  bottomShow.value = false
  articleNum.value = '100% - 62px'
  asideNum.value = 175
}

const handlePhone = (index) =>{
  clickNum.value = index
  topTitle.value = '联系我们'
  asideShow.value = false
  bottomShow.value = false
  articleNum.value = '100% - 62px'
  asideNum.value = 175
  router.push('/contactus')

}

let mouseNum = ref(0)
// 鼠标移入移除事件
const handleMouseOver = (item) =>{
  console.log(item)
  mouseNum.value = item.id

}
const handleMouseOut = (item) =>{
  console.log(item)
  mouseNum.value = 0
}
// 点击某个元素触发的事件
let menuClickNum = ref(0)
const handleClick = (item) =>{
  menuClickNum.value = item.id
  console.log(item.id)
  bottomShow.value = true
  router.push(`/chat/${item.url}`)
}

// 鼠标在下拉菜单栏中移动的事件
let dropMenuNum = ref(0)
const handleDropmenu = (item) =>{
  console.log(item)
  dropMenuNum.value = item.id
}

// 鼠标移出事件
const handleDropmenuItem = () =>{
  dropMenuNum.value = 0
}

// 点击文心一言，弹出弹窗
let dropMenuIsShow = ref(false)
const dropMenuShow = () =>{
  dropMenuIsShow.value = !dropMenuIsShow.value
}

// 点击弹出弹窗的item
let imgUrl = ref('/wxyy.png')
let text = ref('文心一言')
const handleItem = (item) =>{
  console.log(item)
  imgUrl.value = item.image
  text.value = item.label
  dropMenuIsShow.value = false
  dropMenuNum.value = item.id

}

//添加新的快捷使用

const isShow = ref(false)
const title = ref('编辑')
const handleAdd = () =>{
  console.log('新增')
  isShow.value = true
  title.value = '新增'
}
const handleCancel1 = (item)=>{
  console.log(11111,item)
  isShow.value = item

}
const handleSave1 = (item) =>{
  console.log(2222,item)
  isShow.value = item
}

const handleClose1 = (item) =>{
  isShow.value = item
}
</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
  }
  .active{
    padding:0 5px;
    background-color: white;
    border-radius: 5px;
  }
  .mouseActive{
    background-color: #f5f5f5;
  }
  .clickActive{
    background-color: #eff4fd;
  }
  .dropmenuActive{
    background: #f0f0f0;
  }
  .common-layout{
    height: 100vh;
    position: relative;
    .main{
      width: 100%;
      .top{
        height: 60px;
        border-bottom: .5px solid #e5e7eb;
        line-height: 60px;
        padding-left: 20px;
        box-sizing: border-box;
      }
      .middle{
        height: 60%;
        display: flex;
        justify-content: center;
        padding-top: 20px;
        box-sizing: border-box;
      }
      .dialog{
        position: absolute;
        right: 20px;
        bottom: 230px;
        .content{
          height: 30px;
          line-height: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
      }
      .content-bottom{
        border-top: .5px solid #e5e7eb;
        height: calc(100vh - 60% - 62px);
        width: 100%;
        padding: 0px 10px 0 10px;
        box-sizing: border-box;
        .content-bottom-top{
          height: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .bottom-dropmenu{
            display: flex;
            align-items: center;
            height: 40px;
            line-height: 40px;
            // padding-right: 20px;
            .bottom-dropdown-text{
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              padding-right: 30px;
              box-sizing: border-box;
            }
          }
        }
        
      }
      .bombtn{
        display: flex;
        align-items: bottom;
        padding-top: 10px;
        box-sizing: border-box;
        .send{
          padding-right: 10px;

        }
      }
    }
  }
  .main{
    padding: 0;
  }
  .aside-con{
    display: flex;
    justify-content: space-between;
    .aside-menu{
      width: 75px;
      height: 100vh;
      background-color: #e4e9ed;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 10px;
      box-sizing: border-box;
      .avator{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
      }
      .aside-item1{
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .aside-list{
      width: 175px;
      border-right: .5px solid #e5e7eb;
      .list-item{
        height: 60px;
        display: flex;
        align-items: center;
        padding-left: 10px;
        box-sizing: border-box;
        justify-content: space-between;
        padding-right: 10px;
      }
      .list-item1{
        height: 60px;
        text-align: left;
        padding-left: 10px;
        box-sizing: border-box;
        line-height: 60px;
      }
    }
  }
</style>

