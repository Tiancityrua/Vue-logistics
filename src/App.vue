<template>
  <div id="app">
    <shareHead></shareHead>
    <router-view></router-view>
    </div>
</template>

<script>
  import svg from './components/svg/index'
  import real from './components/real-dashboard/index'
  import shareHead from './components/head'
  import axios from 'axios'
  import qs from 'query-string'
  export default {
    name: 'App',
    components: {
      shareHead,axios,qs,svg,real
    },
    data() {
      return {
        name: 'd3-share'
      }
    }
  }
</script>