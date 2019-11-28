<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['index']">
        <a-menu-item key="index">
            <a-icon type="video-camera" />
            <span>Index</span>
            <router-link to="/"></router-link>
        </a-menu-item>
        <a-menu-item key="HelloWorld">
          <a-icon type="user" />
          <span>HelloWorld</span>
          <router-link to="/hello-world"></router-link>
        </a-menu-item>
        <a-menu-item key="list">
          <a-icon type="upload" />
          <span>List</span>
          <router-link to="/list"></router-link>
        </a-menu-item>
        <a-menu-item key="department">
          <a-icon type="upload" />
          <span>Department</span>
          <router-link to="/department"></router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
    <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  export default {
    data() {
      return {
        collapsed: false,
      };
    },
  };
</script>
<style>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
