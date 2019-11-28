module.exports = {
//   presets: ['@vue/cli-plugin-babel/preset'],
    presets: ["@vue/app"],
    plugins: [
        [
          "import",
          { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css" }
        ]
    ],
    // configureWebpack: config => {
    //     config.resolve = {
    //         extensions: [".js", ".vue", ".json", ".css"],
    //         alias: {
    //             'vue': 'vue/dist/vue.js'
    //         }
    //     };
    // }
}
