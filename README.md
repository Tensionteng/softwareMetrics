# electron-vite-vue3-pinia

**中南大学软件度量前端项目**

# 下载依赖
```sh
// 使用npm
npm install

// 使用pnpm(推荐)
pnpm install
```

# 运行
```sh
npm run dev

pnpm run dev
```

# 打包
```sh
npm run build

pnpm run build
```

# 项目结构
```sh
'|-- src',
  '    |-- App.vue', 
  '    |-- main.ts',
  '    |-- vite-env.d.ts',
  '    |-- components', -- 组件
  '    |   |-- MyBar.vue',  -- 导航栏
  '    |   |-- UploadFile.vue', -- 文件上传组件
  '    |   |-- UploadUsercase.vue', -- 用例图的文件上传组件
  '    |   |-- Welcome.vue',    -- 首页
  '    |-- httpConfig', -- 网络设置
  '    |   |-- api.ts', -- 封装好的api
  '    |   |-- axiosCongfig.ts',    -- 网络设置
  '    |-- result', -- 数据展示页
  '    |   |-- CKResult.vue',   -- CK度量
  '    |   |-- LKResult.vue',   -- LK度量
  '    |   |-- MessageFlowResult.vue',  -- 信息流图度量
  '    |   |-- UsercaseWeight.vue', -- 用例图度量
  '    |   |-- type',
  '    |       |-- type.ts',    -- 定义数据返回类型
  '    |-- router', -- 路由
  '    |   |-- index.ts',
  '    |-- samples',
  '    |   |-- node-api.ts',
  '    |-- store',  -- pinia状态管理
  '        |-- store.ts',
  ''
```