module.exports = {
  title: "前端梳理",
  themeConfig: {
    nav: [
      { text: "基础", link: "/frontend/basic/" },
      { text: "网络", link: "/frontend/network/" },
      { text: "工程", link: "/frontend/project/" },
    ],
    sidebar: {
      "/frontend/basic/": [
        ["HTML", "HTML"],
        ["CSS", "CSS"],
        ["JS", "JS"],
        ["V8", "V8"],
        ["浏览器", "浏览器"],
      ],
      "/frontend/network/": [
        ["网络原理", "网络原理"],
        ["网络安全", "网络安全"],
      ],
      "/frontend/project/": [
        ["VUE", "VUE"],
        ["项目优化", "项目优化"],
      ]
    }
  },
};
