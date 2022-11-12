# 零杯-珞珈任意门

队伍名称：甲方乙方

## 项目分支

- [Vue 源代码](https://github.com/immengzi/zero_2022)
- [Vue 打包后的 dist 目录](https://github.com/immengzi/zero_2022/tree/master)

## 项目主题

> 武大作为武汉旅游必来之地，有许多优美的景色。春天的樱花大道洁白如雪，恍若仙境；傍晚的樱顶晚霞绚丽，美轮美奂；雄伟的老图书馆庄重典雅，底蕴丰厚；引人入胜的万林博物馆弘扬文化，展现艺术魅力。

本项目从“**自然风光**”、“**典雅建筑**”、“**学生活动**”三个角度切入，以**门户网站**的形式展现珞珈山下的美景。

## 网站特色
- 主体使用 `html`、`js`、`css`、`vue`实现
- 实现了拖拽翻页，滚动翻页
- 使用了多种 Q 弹的动画
- 界面简洁美观
- 内容精心制作
- 项目可扩展性强
- 代码结构清晰
- 效果可在 https://zero.immengzi.wiki/ 中预览


## 路径结构
 ```
├─.idea
├─.vscode
├─dist                   #部署文件
│  └─assets              #静态资源
|  └─index.html          #主页
├─node_modules           #库文件
|
├─public                 #公共资源
└─src                    #源文件
    ├─assets              #静态资源
    │  ├─css              #css样式
    │  │  └─animation     #page的动画
    │  ├─fonts            #字体(未被使用)
    │  └─img              #图片资源(未被使用)
    │      ├─activity
    │      ├─buildings
    │      ├─home
    │      └─nature
    └─components          #vue组件
 ```



 ## 从源代码构建

 ### 安装包管理工具 npm
 ```
 npm install
 ```

 ### 启动本地服务器
 ```
 npm run dev
 ```

 ### 创建一个生产环境的构建版本
 ```
 npm run build
 ```


## 第三方库

- [Vue](https://vuejs.org/)
- [Vite](https://cn.vitejs.dev/)
- less
- [汇文明朝体](https://tieba.baidu.com/p/7193815211)

## 致谢

- 感谢我的队友包容我的睿智，两个人互相折磨着度过了这十多天，幸好最终结果大体使人满意。

- 感谢 Eric_Lian 对图片格式 AVIF 的提议，优化了页面的加载速度。

- 感谢武汉大学官方微博号发布的精美图文，和铭姐姐、畅畅提供的素材帮助。  
  因考虑整体效果，部分图片未被放置于最终构建的页面上。
