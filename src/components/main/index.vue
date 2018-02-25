<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
      <sidebar class="sidebar-container"></sidebar> 
      <div class="main-container">
           <nav-bar></nav-bar>
          <main-app></main-app>
      </div>
  </div>
</template>

<script>
    import {Sidebar,MainApp,NavBar} from './components'
    export default{
        name:'layout',
        components:{
            Sidebar,
            MainApp,
            NavBar
        },
        computed:{
            sidebar(){
                return this.$store.state.app.sidebar
            }
        }
    }
</script>




