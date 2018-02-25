<template>
  <el-dropdown trigger="click" class="international" @command="handleLanguage">
      <div>
        <i class="el-icon-refresh"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh" :disabled="language==='zh'">中文</el-dropdown-item>
      <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
      </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
    export default{
     computed:{
         language(){
             return this.$store.getters.language
         }
     },
     methods:{
         handleLanguage(language){
             this.$i18n.locale=language
             this.$store.dispatch('setLanguage',language)
             this.$message({
                 message: 'switch language success',
                 type: 'success'
             })
         }
     }   
    }
</script>

<style scoped>
.el-icon-refresh {
  font-size: 20px;
  cursor: pointer;
  vertical-align: -5px!important;
}
</style>