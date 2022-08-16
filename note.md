### rollup环境搭建
1. npm init -y
2. npm install rollup rollup-plugin-babel @babel/core @babel/preset-env --save-dev
3. 新建rollup.config.js文件,配置文件
4. package.json -> scripts
  ```js
  "dev": "rollup -cw"
5. mkdir src -> index.js 
6. 新建.babelrc文件 写预设