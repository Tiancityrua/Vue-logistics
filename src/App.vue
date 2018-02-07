<template>
  <div id="app">
    <router-view></router-view>
    </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'query-string'
  export default {
    name: 'App',
    components: {
      axios,qs
    },
    data() {
      return {
        name: 'd3-share'
      }
    }
  }
</script>