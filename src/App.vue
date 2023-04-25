<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <MyBar />
      </el-aside>
      <el-main>
        <div>
          <RouterView></RouterView>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MyBar from './components/MyBar.vue'

</script>

<style></style>
