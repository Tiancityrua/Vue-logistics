<template>
    <el-menu class="navbar" mode="horizontal">
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
        <div class="right-menu">
        <lang-select class="international right-menu-item"></lang-select>

        <el-dropdown class="avatar-container right-menu-item" trigger="click">
            <div class="avatar-wrapper">
              <span>{{$t('login.hello')}}{{username}}</span>
            </div>
            <el-dropdown-menu class="" slot="dropdown">
            <el-dropdown-item>
            <span @click="logout" style="display:block;">{{$t('login.logout')}}</span>
            </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

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
                    'sidebar',
                    'username'          
                ]
            )
        },
        methods:{
            toggleSideBar() {
         this.$store.dispatch('setSidebar')
         },
         logout(){
           this.$store.dispatch('Logout').then(()=>{
             location.reload()
           }
           )
         }
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
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 0px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
      }
    }
}
</style>

