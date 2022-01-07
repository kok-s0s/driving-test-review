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
