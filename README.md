# 零杯-珞珈任意门

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
 
