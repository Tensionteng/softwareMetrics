<template>
    <el-menu default-active="/" class="el-menu-vertical-demo" @select="selectHandle" :router="true" span="12">
        <el-menu-item index="/">
            <el-icon>
                <Operation />
            </el-icon>
            <span>首页</span>
        </el-menu-item>

        <el-menu-item index="/uploadLK">
            <el-icon>
                <icon-menu />
            </el-icon>
            <span>面向对象LK度量</span>
        </el-menu-item>

        <el-menu-item index="/uploadCK">
            <el-icon>
                <reading />
            </el-icon>
            <span>面向对象CK度量</span>
        </el-menu-item>

        <el-menu-item index="/uploadUsercase/upload">
            <el-icon>
                <document />
            </el-icon>
            <span>用例点度量</span>
        </el-menu-item>

        <el-menu-item index="/messageFlow">
            <el-icon>
                <setting />
            </el-icon>
            <span>信息流度量</span>
        </el-menu-item>

    </el-menu>
</template>


<script lang="ts" setup>
import {
    Document,
    Reading,
    Menu as IconMenu,
    Setting,
    Operation
} from '@element-plus/icons-vue'


const selectHandle = (key: string) => {
    console.log(key)
}



</script>


<style scoped>
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.el-menu {
    height: 97vh;
}
</style>



