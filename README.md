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