<template>
  <div class="share-head">
    <span class="head-text">{{headText}}</span>
    <div class="option-btn">
      <i class="el-icon-d-arrow-left pre-btn" @click="preroute"></i>
      <i class="el-icon-d-arrow-right next-btn" @click="nextroute"></i>
    </div>
  </div>
</template>

<style lang="less" src="./index.less"></style>

<script>
  import routers from '../index.js';
  export default {
    name: 'share-head',
    data() {
      return {
        headText: '',
        routers
      }
    },
    watch: {
      '$route': {
        handler(val) {
          this.watchRoute(val)
        }, 
        deep: true
      }
    },
    mounted() {
      this.watchRoute(this.$route)
    },
    methods: {
      watchRoute(route) {
        const name = route.name;
        const curroute = this.routers.find(item => item.name === name);
        this.headText = curroute.name
      },
      preroute() {
        const name = this.$route.name;
        const currouteIndex = this.routers.findIndex(item => item.name === name);
        if (currouteIndex < 1) return
        this.$router.push({
          name: this.routers[currouteIndex - 1].name
        })
      },
      nextroute() {
        const name = this.$route.name;
        const currouteIndex = this.routers.findIndex(item => item.name === name);
        if (currouteIndex >= this.routers.length - 1) return
        this.$router.push({
          name: this.routers[currouteIndex + 1].name
        })
      }
    }
  }
</script>