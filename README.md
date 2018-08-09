# 前后端分离

> 在使用此案例前，请确保安装了nodejs

## 执行命令

``` bash
# 安装依赖，执行这个命令后会创建node_modules目录和package-lock.json文件
npm install

# 开发环境默认使用8080端口
# 如果想改用其他端口，请修改config/index.js文件中的port字段值
npm run dev

# 编译上线代码
npm run build
```
### 参考资料
https://github.com/Xia-Ao/vuex-mock.git
http://yangyi1024.com/2017/06/14/%E5%AD%A6%E4%B9%A0%E4%B8%8D%E4%B8%80%E6%A0%B7%E7%9A%84vue4:mock%E4%B8%8Eaxios%E5%AE%9E%E6%88%981/
https://github.com/BekeyChao/vue-spring-demo.git
https://juejin.im/entry/59616ef1f265da6c3559ab86
https://segmentfault.com/a/1190000009329474?_ea=2038402
https://www.imooc.com/article/22537
https://www.imooc.com/article/22536
### 监狱智能预警系统
#### 使用的技术
> vue 
#### vuex 
[借鉴博客](https://segmentfault.com/a/1190000009404727)
> vue 状态管理,组件之间的通信.相当于cookie, localstorage用来做本地缓存.
>> 每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。
> 1. Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
> 2. 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。
#####  使用 vuex
在main.js文件中
```js
import store from './vuex/store'
// 在实例化 Vue对象时加入 store 对象
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: {
    App
  },
  template: '<App/>'
})
```
store.js文件
```
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    loading: true
  }
})
export default store
```
axios/index.js

```
import store from '@/vuex/store'
axios.interceptors.response.use(response => {
    const res = response.data;
    if (res.status !== 0) {
        Message({
            message: res.statusinfo,
            type: 'error',
            duration: 5 * 1000
        })
    } else {
        store.state.loading = false; //当请求成功时loading消失
        return response.data
    }
}, error => {
    console.log('err:' + error)
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error)
})
```

组件App.vue中使用子组件vue-loading
```
<vue-loading class="v-c h-c" v-show="this.$store.state.loading" type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
```
这里 `this.$store.state.loading` 无论哪个组件都可以使用了。
#### axios  
> Axios 是一个基于 promise 的 HTTP 库
##### 特性
[文档](https://www.kancloud.cn/yunye/axios/234845)
> 从浏览器中创建 XMLHttpRequests
从 node.js 创建 http 请求
支持 Promise API
拦截请求和响应
转换请求数据和响应数据
取消请求
自动转换 JSON 数据
```
// 为给定 ID 的 user 创建请求
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
// 可选地，上面的请求可以这样做
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
//执行多个并发请求
function getUserAccount() {
  return axios.get('/user/12345');
}
function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}
axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));
```
##### 本项目中
main.js中将axios放在vue实例上
```
import axios from './axios';
Vue.prototype.$ajxj = axios;
```
axios/index.js

```
import axios from 'axios';
axios.interceptors.response.use(response => {
    const res = response.data;
    if (res.status !== 0) {
        Message({
            message: res.statusinfo,
            type: 'error',
            duration: 5 * 1000
        })
    } else {
        store.state.loading = false;
        return response.data
    }
}, error => {
    console.log('err:' + error)
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error)
})

export default axios
```

personnelposition.vue文件中使用
```
  getTableData(p) {
    var _this = this
    this.$ajxj.post('/pPTableData', {
        page: p || 1
      })
      .then(function (res) {
        _this.pPTableData = res.data.data
        _this.page = res.data.total
      }).catch(function (error) {
        console.log(error);
      }).then(function () {});
  },
```
#### vue-router
main.js
```
import router from './router';
new Vue({
  el: '#app',
  router,//使用router
  store,
  components: {
    App
  },
  template: '<App/>'
})
```
router/index.js

```
import Router from 'vue-router'
import workbench from '@/components/workbench/workbench.vue'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/workbench',
      name: 'workbench',
      component: workbench
    }]
   })
router.beforeEach((to, from, next) => {
  if (to.path === '/workbench') {
    next()
    }
})
export default router
```
App.vue

```
<router-link to="/workbench">工作台</router-link>
```

#### axios-mock-adapter
[参考博客](https://segmentfault.com/a/1190000009464850)
> 通过axios模拟调用后台，后台数据可以使用mock.js来造假数据。
mock/mock.js
```
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { pPTableData } from './data/pptabledata';
mock.onPost('/pPTableData').reply(config => {            
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            defaultResData.data = pPTableData;
            resolve([200, defaultResData])
         }, 1000);
     });
});
```
mock/data/pptabledata.js

```
import Mock from 'mockjs';

let p = 10;
let pPTableData = {
  "total": 23,
  data: []
};

for (let i = 0; i < p; i++) {
  pPTableData.data.push({
    starttime:Mock.mock('@datetime'),
    endtime:Mock.mock('@datetime'),
    during:Mock.mock('@natural(1, 100)'),
    tyle:'无法定位',
    area:"餐厅",
    tv:'http://mockjs.com/examples.html#Date',
  });
}

export { pPTableData };
```
#### v-echarts 
#### element-ui

#### webpack babel
> 通过vue-cli 搭建项目自动配置

#### node.js express
> 起初用来配合mock模拟后台接口以及造假数据,后用`axios-mock-adapter`取代

#### stylus