<template>
    <el-upload class="upload-demo" drag action="#" type="*.xml" :limit="1" :auto-upload="false" :on-change="handleChange">
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
            拖拽文件至此或 <em>点击上传</em>
        </div>
        <template #tip>
            <div class="el-upload__tip">
                Only XML files are accepted
            </div>
        </template>

    </el-upload>
</template>
  
<script setup lang="ts">
import { UploadFilled } from '@element-plus/icons-vue'
import ElMessage from 'element-plus/es/components/message';
import { ref } from 'vue';

const baseUrl = "http://"
const ip = "localhost:"
const port = "8080/"
const method = ""
const url = ref(baseUrl + ip + port + method)


const handleChange = (file:any, fileLists:any) => {
    console.log(file.raw.path);
}


</script>