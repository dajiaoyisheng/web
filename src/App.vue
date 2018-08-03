<template>
  <div id="app">
    <!-- <nav class="nav-bar">
      <div class="nav-w">
        <ul class="nav-wrap clearfix">
          <li>
            <img src="./assets/logo.png" alt="" class="logo-img">
            <router-link class="link-item" to="/workbench">监狱智能监控系统</router-link>
          </li>
          <li>
            <router-link active-class="active" class="link-item" to="/workbench">工作台</router-link>
          </li>
          <li class="dropdown">
            <a class="link-item">监控预警</a>
            <ul class="twolevel">
              <li>
                <router-link active-class="active" class="link-item" to="/prewarning/tvmonitor">视频监控</router-link>
              </li>
              <li>
                <router-link active-class="active" class="link-item" to="/prewarning/personnelposition">人员定位</router-link>
              </li>
              <li>
                <router-link active-class="active" class="link-item" to="/prewarning/pointname">在押人员点名</router-link>
              </li>
              <li>
                <router-link active-class="active" class="link-item" to="/prewarning/posunusual">定位异常预警</router-link>
              </li>
              <li>
                <router-link active-class="active" class="link-item" to="/prewarning/violation">违规预警</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link active-class="active" class="link-item" to="/querystats">查询统计</router-link>
          </li>
          <li>
            <router-link active-class="active" class="link-item" to="/systemset">系统设置</router-link>
          </li>
          <li>
            <router-link active-class="active" class="link-item" to="/systemmanagement">系统管理</router-link>
          </li>
          <li>
            <input type="text" placeholder="搜索">
          </li>
          <li>
            <span class="user-w color-fff">cjd</span>
            <a class="color-fff" @click="loginout()">退出登录</a>
          </li>
        </ul>
      </div>
    </nav> -->
    <nav class="content-wrap-nav">
      <el-menu :default-active="activeIndex2" class="content-wrap" mode="horizontal" @select="handleSelect" background-color="#2f323c"
        text-color="#a0abb5" active-text-color="#fff">
        <el-menu-item index="1">
          <router-link to="/workbench">工作台</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">监控预警</template>
          <el-menu-item index="2-1">
            <router-link to="/prewarning/tvmonitor">视频监控</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/prewarning/personnelposition">人员定位</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link to="/prewarning/pointname">在押人员点名</router-link>
          </el-menu-item>
          <el-menu-item index="2-4">
            <router-link to="/prewarning/posunusual">定位异常预警</router-link>
          </el-menu-item>
          <el-menu-item index="2-5">
            <router-link to="/prewarning/violation">违规预警</router-link>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <router-link to="/querystats">查询统计</router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/systemset">系统设置</router-link>
        </el-menu-item>
        <el-menu-item index="5">
          <router-link to="/systemmanagement">系统管理</router-link>
        </el-menu-item>
        <el-menu-item index="6">
          <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-search" v-model="input">
          </el-input>
        </el-menu-item>
      </el-menu>
    </nav>
    <div class="content-wrap">
      <router-view class="content" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input: ''
      };
    },
    computed: {
      userInfo() {
        // return JSON.parse(localStorage.getItem('userInfo'))
        return ''
      }
    },
    methods: {
      loginout() {
        return ''
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

  // import $ from 'jquery';
  // import 'bootstrap/dist/css/bootstrap.css'
  // import 'bootstrap-vue/dist/bootstrap-vue.css'


</script>
<style>
.content-wrap-nav{
  background-color: rgb(47, 50, 60);
  height: 60px;
}

</style>
