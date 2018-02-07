<template>
<div>
  <el-container>
    <el-header class="Header">
  <el-menu mode="horizontal" @select="handleSelect" background-color="#24292e"
  text-color="#dbdbdd"
  active-text-color="1">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
     </el-header>
      <el-container>
      <el-aside class="Aside">
           <el-menu
           mode="vertical"
      default-active="1"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>主分单查询</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">主单查询</el-menu-item>
          <el-menu-item index="1-2">分单查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>发票类查询</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">税务发票查询</el-menu-item>
          <el-menu-item index="2-2">物流发票查询</el-menu-item>
          <el-menu-item index="2-3">运费发票查询</el-menu-item>
          <el-menu-item index="2-4">送货单查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">主分单插入</span>
      </el-menu-item>
        <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">发票类插入</span>
      </el-menu-item>
    </el-menu>
      </el-aside>
          <el-main>
            <select-mawb></select-mawb>
          </el-main>
      </el-container>
  </el-container>
  </div>
</template>
<style lang="less" src='./index.less'>

</style>

<script>
    import selectmawb from '../select/mawb'
    export default{
        name:'main',
        components:{
            'select-mawb':selectmawb
        }
    }
</script>
