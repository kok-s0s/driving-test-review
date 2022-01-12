<details><summary>Create React App README</summary>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject` , you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject` . The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

</details>

--- 

[![Netlify Status](https://api.netlify.com/api/v1/badges/0b4524cb-c5f9-421c-ac90-1ec353322673/deploy-status)](https://app.netlify.com/sites/driving-test-review/deploys)

# 技术支持

**基于** `Create React App`

**[PWA](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)-渐进式Web应用（支持Chrome）**

**目前已使用**

* [React](https://zh-hans.reactjs.org/) -> 用于构建用户界面
* [React Router](https://reactrouter.com/docs/en/v6/getting-started/overview) -> 用于路由配置
* [Ant Design](https://ant.design/index-cn) -> 基于 React 的组件库
* [Sass](https://sass-lang.com/) -> 用于预处理 CSS

* [fonts](https://fonts.google.com/specimen/ZCOOL+QingKe+HuangYou?subset=chinese-simplified&preview.size=16&preview.layout=row) -> 个性化字体
* [json-server](https://pub.dev/documentation/json_server/latest/) -> 用于模拟接口

**待使用**

* [ECharts](https://echarts.apache.org/zh/index.html) -> 用于可视化数据
* [Redux](http://cn.redux.js.org/) -> 用于状态管理
       

`public` 目录结构

```bash
public
├── _redirects
├── assets
│   ├── icons
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon.ico
│   │   ├── logo192.png
│   │   ├── logo256.png
│   │   ├── logo384.png
│   │   ├── logo512.png
│   │   └── maskable.png
│   ├── pity.png
│   └── s0s__block.jpg
├── index.html
├── manifest.json
└── robots.txt
```

`src` 目录结构

```bash
src
├── App.js
├── components
│   ├── Button
│   │   ├── Button.js
│   │   └── Button.scss
│   ├── Content
│   │   ├── Content.js
│   │   └── Content.scss
│   ├── Divider
│   │   ├── Divider.js
│   │   └── Divider.scss
│   ├── Footer
│   │   ├── Footer.js
│   │   └── Footer.scss
│   └── Header
│       ├── Header.js
│       └── Header.scss
├── fonts
│   └── ZCOOLKuaiLe-Regular.ttf
├── index.js
├── service-worker.js
├── serviceWorkerRegistration.js
├── styles
│   └── App.scss
├── utils
└── views
    ├── About
    │   ├── About.js
    │   └── About.scss
    ├── DataBase
    │   ├── DataBase.js
    │   └── DataBase.scss
    ├── HomePage
    │   ├── HomePage.js
    │   └── HomePage.scss
    └── NoMatch
        ├── NoMatch.js
        └── NoMatch.scss
```

# 数据收集

这是折腾这东西最烦的地方；

## 科目一

<details>

**想法与现实的碰撞⚡️**

原计划依据《中华人民共和国道路交通安全法》学习与驾驶相关的法律知识，根据该法律中的每一条细则与现实社会生活出现的事件关联起来（利用搜索）；

![](/public/assets/idea__001.png)

不过，这是一个bug，就对于驾驶考试而言；

我个人有个问题，很奇怪又仔细想又很有合理：驾驶考试的科目一都是要求考核人清楚什么该做，什么不该做，什么情况要做什么，但是考核的内容以及国家制定的法律都没有指出如果取得机动车驾驶证的人在道路行驶违反了某个规定，作出不合理的行为具体可能会导致什么后果，这些都没有具体说明，因为仔细想没人会知道一个意外的损害程度会是什么样的。

当然，我们可以依据自己的常识能预料到在行驶时作出违法行为的后果，但人类有个问题，当真正的危险还没展现到其面前，通过言语听闻或者浏览新闻得知的事故往往很难说很在意；（这句话不认可的可以当我瞎扯）

所以我原计划就是将具体事件和国家规定的法律相关联，这样其实对我记忆有很大帮助（可能仅仅我而已）。

不过，和别人聊过，如果说我这样准备考核科目一可能不好过；

刷了12小时，感觉真的题海战术，我的接受度不大的，但是它就这么考，真TMD经典问题了 --> “学懂知识”与“考核”的差异；

> 接下来，17号考科目一；

我会将那个象司机科目一出现过的题目记录下来做归纳；

将那些问题整理好，其实那个象司机考的好多都是同一场景，就换了个样考你。

---

花了8元开通了个考试线索，我现在可以说这个项目可能保底值8元了!🤖

> 但其实我看了开通8元获取的东西无非就是把象司机所有的题细分了下，题还是那个题，只是题目多打了tag就多值8元了，属实666；

```css
维护正版: !important
```

> 我会用我自己的理解将这些题目打上我认为的tag，不会说直接把那个打好的tag弄过来，一万个人有一万个哈姆雷特！

> 花了8元其实是为心安，好久没考过试，感觉不会考试～～～

</details>
