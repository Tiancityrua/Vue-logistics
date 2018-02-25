<template>
    <el-menu class="navbar" mode="horizontal">
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
        <div class="right-menu">
        <lang-select class="international right-menu-item"></lang-select>
        </div> 

        
    </el-menu>
</template>

<script>
import {mapGetters} from 'vuex'
import Hamburger from '../../hamburger'
import LangSelect from '../../langselect'

export default{
        components:{
            Hamburger,
            LangSelect
        },
        computed:{
            ...mapGetters(
                [
                    'sidebar'
                ]
            )
        },
        methods:{
            toggleSideBar() {
         this.$store.dispatch('setSidebar')
         },
        }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
    .navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container{
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international{
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
  }
}
</style>

