<template>
  <div id="app">
    <shareHead></shareHead>
    <router-view></router-view>
    </div>
</template>

<script>
  import shareHead from './components/head'
  import axios from 'axios'
  import qs from 'query-string'
  export default {
    name: 'App',
    components: {
      shareHead,axios,qs
    },
    data() {
      return {
        name: 'd3-share'
      }
    }
  }
</script>