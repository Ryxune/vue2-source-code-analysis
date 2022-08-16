// rollup 默认导出一个对象,作为打包配置文件

import babel from "rollup-plugin-babel";

export default {
  input: "./src/index.js", // 入口
  output: {
    file: "./dist/vue.js", // 出口
    name: "Vue", // new Vue 在全局增加Vue global.Vue
    format: "umd", // 打包格式:esm, es6 commonJS iife umd统一模块规范(兼容commonJS和amd)
    sourcemap: true, // 可调试源代码
  },
  plugins: [
    babel({
      exclude: "node_modules/**", // 排除模块
    }),
  ],
};
