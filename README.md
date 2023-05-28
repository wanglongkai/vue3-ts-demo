# vue3项目实战
## eslint配置
1. 安装eslint
`pnpm i eslint -D`
2. 生成配置文件:` .eslint.cjs`
`npx eslint --init`
3. 手动生成`.eslintignore`
4. 修改`.eslint.cjs`配置文件, 见项目
5. 修改package.json
```js
"scripts": {
    ...
    "lint": "eslint --ext .ts,.js,.vue src"
  },
```


## 安装husky进行eslint检查和提交规范检查
1. 安装 相关依赖
`pnpm install husky @commitlint/cli @commitlint/config-conventional -D`

2. 新建`commitlint.config.cjs`，见项目
3. 修改package.json
  ```js
  "scripts": {
    ...
    "prepare": "husky install",
  },
  ```
4. 执行`pnpm run prepare`
5. 执行`npx husky add .husky/pre-commit "pnpm run lint`
   >commit前执行eslint检验 
6. 执行`npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"' `
   > commit前校验commit的message格式 

## 路径别名配置
```js
// vite.config.ts
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
}

//tsconfig.json
"baseUrl": "./",
"paths": {
  "@/*":["src/*"],
}
```

## mock服务配置
1. 安装依赖
`pnpm i vite-plugin-mock@2 mockjs -D`
2. 配置`vite.config.ts`：
   ```js
    import { viteMockServe } from "vite-plugin-mock";
    plugins: [
      //...
      viteMockServe({
        mockPath: "./mock",//设置mock文件存储目录
        localEnabled: true,//设置是否启用本地mock文件
        logger: true,//是否在控制台显示请求日志
      }),
    ],
   ```

## iconfont字体图标引入
symbol方式引入
1. 在阿里字体官网下载iconfont.js,并全局引入
2. 封装svg-icon组件，注意` <use :xlink:href="xxx" />`中`xxx`是直接写入`#字体图标名称`，不要加其他前缀

## element_plus按需引入
按照文档配置后，按需引入时，**不用在特别import组件，可以直接使用，就像全局组件一样**。