<template>
  <div  class="app-container">
      <el-form ref="form"  :model="form" label-width="125px" inline :rules="rules" size="large" >
        <el-form-item  label="invoice_no" prop="invoiceNo">
        <el-input type="text" v-model="form.form1.invoiceNo"></el-input>
      </el-form-item>
      <el-form-item  label="date" prop="date">
         <el-date-picker type="date" style="width: 206.4px;" v-model="form.form1.date"></el-date-picker>
      </el-form-item>
      <el-form-item  label="terms" prop="">
        <el-input type="text" v-model="form.form1.terms"></el-input>
      </el-form-item>
      <el-form-item  label="invoice_to" prop="">
        <el-input type="textarea" autosize  v-model="form.form1.invoiceTo"></el-input>
      </el-form-item>
      <el-form-item  label="bill_laden" prop="">
        <el-input type="text" v-model="form.form1.billLaden"></el-input>
      </el-form-item>
       <el-form-item  label="origin" prop="">
        <el-input type="text" v-model="form.form1.origin"></el-input>
      </el-form-item>
      <el-form-item  label="dstn" prop="">
        <el-input type="text" v-model="form.form1.dstn"></el-input>
      </el-form-item>
      <el-form-item  label="nature" prop="">
        <el-input type="textarea" autosize v-model="form.form1.nature"></el-input>
        </el-form-item>
        <el-form-item  label="total" prop="">
        <el-input type="text" v-model="form.form1.total"></el-input>
      </el-form-item>
        <el-form-item label="                   ">
        <el-button  type="primary" style="width:206.4px" @click="onSubmit('form')">{{$t('main.submit')}}</el-button>
        </el-form-item>    
        <el-form-item label="               ">
        <el-button  type="success" style="width:206.4px">{{$t('main.scan')}}</el-button>
        </el-form-item>  
        <el-form-item label="               ">
        <el-button  type="danger" style="width:206.4px" @click="resetForm('form')">{{$t('main.reset')}}</el-button> 
        </el-form-item>  
         <el-form-item
        v-for="(domain, index) in form.form2.domains"
        :label="''+index"
        :key="domain.key"
         >
     <el-input v-model="domain.description" style="width:206.4px" placeholder="description"></el-input>
    <el-input v-model="domain.amount" style="width:206.4px" placeholder="amount"></el-input>
    <el-button @click.prevent="removeDomain(domain)">{{$t('main.delete')}}</el-button>
  </el-form-item>
   <el-form-item>
    <el-button @click="addDomain()">{{$t('main.newitem')}}</el-button>
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
          form2:{
            domains:[
              {
                description:'',
                amount:''
              }
            ],
          },
          form1:{
            invoiceNo:'',
            date:'',
            terms:'',
            invoiceTo:'',
            billLaden:'',
            origin:'',
            dstn:'',
            nature:'',
            total:''
          }
          },
          rules:{
            invoiceNo:[
              {required: true,trigger: 'blur' }
            ],
            date:[
             {required: true,trigger: 'blur' }
            ]
          }
        }
      },
      methods:{
        addDomain(){
          this.form.form2.domains.push({
              description:'',
              amount:'',
              key:Date.now()
          }
          )
        },
        onSubmit(formname){
          let _this=this
          var list=[]
          for(var i=0;i<_this.form.form2.domains.length;i++){
              list.push(
                {
                  invoiceNo:_this.form.form1.invoiceNo,
                  description:_this.form.form2.domains[i].description,
                  amount:_this.form.form2.domains[i].amount
                }
              )     
          }
          this.$refs[formname].validate((valid)=>{
          if(valid){
          _this.form.form1.date.setDate(_this.form.form1.date.getDate()+1)
          _this.$api.insertinvoice(_this.form.form1).then(function(response){
                    var type=response.msg;
                    var message=response.event;
                    if(type=='success'){
                        _this.$api.insertdetail(list)
                        _this.$message(
                            {
                                message:message,
                                type:'success'
                            }
                        )
                    }
                    else {
                        _this.$message.error(message)
                    }
          })
          }
          })
        },
        removeDomain(item){
        var index = this.form.form2.domains.indexOf(item)
        if (index !== -1) {
          this.form.form2.domains.splice(index, 1)
        }
        },
        resetForm(formName) {
        this.$refs[formName].resetFields();
        }
      }
      }
</script>