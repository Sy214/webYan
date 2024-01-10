<template>
  <div>
    <el-dialog v-model="centerDialogVisible" :title="title" width="30%" align-center :before-close="handleClose">
      <!-- <span>Open the dialog from the center from the screen</span> -->
      <div>
        <el-input v-model="input1" placeholder="请输入动作名" class="input1"/>
        <el-input v-model="input2" placeholder="请输入提示词" class="input2"/>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleCancel">取消</el-button>
          <el-button type="primary" @click="handleSave">
            保存
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup >
import { defineProps, ref, watch,defineEmits } from 'vue'
const props = defineProps({
  isShow: String,
  title: String,
  itemObj:Object
})
const input1 = ref('')
const input2 = ref('')
const centerDialogVisible = ref(false)
watch(() => props.isShow, (newValue, oldValue) => {
  console.log('Prop value changed:', newValue)
  centerDialogVisible.value = newValue
})

const emit = defineEmits(['handleCancel1', 'handleSave1','handleClose'])

// 取消操作
const handleCancel = () =>{
  centerDialogVisible.value = false
  emit('handleCancel1',false)

}
// 保存操作
const handleSave = () =>{
  centerDialogVisible.value = false
  emit('handleSave1',false,input1.value,input2.value,props.title,props.itemObj)
  console.log(input1.value ,input2.value)
}

// 关闭事件
const handleClose = () =>{
  centerDialogVisible.value = false
  emit('handleClose1',false)
}



</script>
<style lang="scss" scoped>
.input1{
  border-radius: 20px;
  margin-bottom: 20px;
}
</style>
