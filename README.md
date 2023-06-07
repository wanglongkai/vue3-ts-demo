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

## proxy代理配置
**配置代理后，浏览器控制台网络面板还是显示的localhost,但实际发往目标地址了**

## 环境变量配置
.env.xxx文件    
**默认情况下，新建的VITE_开头的变量没有ts提示，如果需要提示可以安装官方文件配置下**

## postcss配置
postcss可以理解为css后处理器，它处理less、scss等预处理器处理过后的css。比如：    
1. 增加浏览器厂商前缀
2. css语法降价
3. ....
最常用的postcss插件：`postcss-preset-env`;    
具体的配置方法请查看[postcss官方配置](https://github.com/postcss/postcss/blob/main/docs/README-cn.md)

## 构建优化-分包
使用rollup分包策略进行分包，具体参考[rollup拆分公共chunk文档](https://cn.rollupjs.org/configuration-options/#output-manualchunks)

```js
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        lodash: ['lodash'],
        element_plus: ['element-plus']
      }
    }
  }
}
```

## 使用element_plus的BEM css命名思路
1. 引入`useNamespace`,并生成命名空间(前缀)
```js
import { useNamespace } from 'element-plus';
const ns = useNamespace('w-icons'); // 使用element_plus的默认全局命令空间，解析class为：el-w-icons
const ns = useNamespace('w-icons', ref('wlk')); // 自定义命令空间，解析class为：wlk-w-icons
```
2. 样式文件：
```css
<style lang="scss" scoped>
  /* 不适用自定义命名空间 */
  @include b(w-icons){
    font-size: 25px;
  }

  /* 使用自定义命名空间 */
  $namespace: wlk;
  @include b(w-icons){   /* 这里的b混合是全局引入了element_plus定义的mixins, vite.config.ts的 @use "element-plus/theme-chalk/src/mixins/mixins" as *; */
    font-size: 25px;
  }
</style>
```
3. 模版文件：
```html
<!-- 产生一个BEM的B -->
<p :class="[ns.b()]">test</p>
```

## 样式穿透
```scss
:deep(.el-button){
  color: pink;
}
```