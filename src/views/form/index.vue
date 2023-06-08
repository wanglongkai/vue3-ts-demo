<script setup lang='ts'>
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';

const labelPosition = ref<"right" | "top" | "left">('right');
const formRef = ref<FormInstance>()

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})

const rules = reactive<FormRules>({
  name: { required: true, message: 'Please input Activity name', trigger: 'blur' },
})

const handleSubmit = (form: FormInstance) => {
  form.validate((valid) => {
    if(valid){
      console.log(`output->fomrLabelAlign`,formLabelAlign);
    }
  })
}
const handleRest = (form: FormInstance) => {
  form.resetFields();
}
</script>

<template>
  <el-radio-group v-model="labelPosition" label="label position">
    <el-radio-button label="left">Left</el-radio-button>
    <el-radio-button label="right">Right</el-radio-button>
    <el-radio-button label="top">Top</el-radio-button>
  </el-radio-group>
  <el-form
    ref="formRef"
    :label-position="labelPosition"
    label-width="100px"
    :model="formLabelAlign"
    :rules="rules"
    :inline-message="false"
  >
    <el-form-item label="Name" prop="name">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="Activity zone" prop="region">
      <el-input v-model="formLabelAlign.region" />
    </el-form-item>
    <el-form-item label="Activity form" prop="type">
      <el-input v-model="formLabelAlign.type" />
    </el-form-item>
    <el-form-item>
      <el-button @click="handleSubmit(formRef!)">提交</el-button>
      <el-button @click="handleRest(formRef!)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
  
</style>