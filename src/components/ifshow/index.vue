<template>
  <div class="if-show-page">
    <el-button type="primary" @click="switchTmp" size="small" style="display:block">切换</el-button>
    <div>
      <div>以下为饿了么组件示例</div>
      <template v-if="tmpData">
        <div>tmpData:{{tmpData}}</div>
        <el-input placeholder="tmpData为true" v-model="tmpTrue" style="width: 20%"></el-input>
      </template>
  
      <template v-else>
        <div>tmpData:{{tmpData}}</div>
        <el-input placeholder="tmpData为false" v-model="tmpFalse" style="width: 20%"></el-input>
      </template>
    </div>

    <div style="margin-top: 20px">
      <div>以下为原生示例</div>


      <div v-if="tmpData">
        <div>tmpData:{{tmpData}}</div>
        <span index="true">外层</span> 
        <input placeholder="tmpData为true外层" index="waitrue">

        
        <div>
          <input placeholder="tmpData为true" index="neitrue">
        </div>
      </div>

      <div v-else>
        <div>tmpData:{{tmpData1}}</div>
        <span index="false">外层</span>
        <input placeholder="tmpData为false外层" index="waifalse">


        <div>
          <input placeholder="tmpData为false" index="neifalse">
        </div>


      </div>



    </div>
  </div>
</template>
<style lang="less" src="./index.less"></style>
<script>
  export default {
    name: 'if-show',
    data() {
      return {
        tmpData: true,
        tmpTrue: '',
        tmpFalse: '',
      }
    },
    mounted() {

    },
    methods: {
      switchTmp() {
        this.tmpData = !this.tmpData
      },
    }
  }
</script>