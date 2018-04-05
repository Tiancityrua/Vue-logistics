<template>
  <div  class="app-container">
      <el-form ref="form" :model="form" label-width="125px" inline :rules="rules" size="large">
        <el-form-item  label="invoice_no" prop="">
        <el-input type="text"></el-input>
      </el-form-item>
      <el-form-item  label="date" prop="">
         <el-date-picker type="date" style="width: 206.4px;"></el-date-picker>
      </el-form-item>
      <el-form-item  label="terms" prop="">
        <el-input type="text"></el-input>
      </el-form-item>
      <el-form-item  label="invoice_to" prop="">
        <el-input type="textarea" autosize ></el-input>
      </el-form-item>
      <el-form-item  label="bill_laden" prop="">
        <el-input type="text"></el-input>
      </el-form-item>
       <el-form-item  label="origin" prop="">
        <el-input type="text"></el-input>
      </el-form-item>
      <el-form-item  label="dstn" prop="">
        <el-input type="text"></el-input>
      </el-form-item>
      <el-form-item  label="nature" prop="">
        <el-input type="textarea" autosize ></el-input>
        </el-form-item>
        <el-form-item  label="total" prop="">
        <el-input type="text"></el-input>
      </el-form-item>
      </el-form>
  </div>
</template>
<script>
      export default{
      name:'insertinvoice',
      data(){
        return{
          form:{
            
          },
          rules:{

          }
        }
      },
      methods:{

      }
      }
</script>