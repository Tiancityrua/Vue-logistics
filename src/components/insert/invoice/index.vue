<template>
  <div  class="app-container">
      <el-form ref="form"  :model="form" label-width="125px" inline :rules="rules" size="large" >
        <el-form-item  label="invoice_no" prop="invoiceNo">
       <el-select
                    v-model="form.form1.invoiceNo"
                    clearable
                    filterable
                    style="width: 206.4px;">
                    <el-option v-for="list in nos" :key="list.value"
                                :value="list.value" :label="list.label"></el-option>
        </el-select>
        </el-form-item>
      <el-form-item  label="date" prop="date">
            <el-date-picker
                        v-model="form.form1.date"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd" style="width: 206.4px;">
            </el-date-picker>
      </el-form-item>
      <el-form-item  label="terms" prop="">
        <el-input type="text" v-model="form.form1.terms"></el-input>
      </el-form-item>
      <el-form-item  label="invoice_to" prop="">
        <el-input type="textarea" autosize  v-model="form.form1.invoiceTo"></el-input>
      </el-form-item>
      <el-form-item  label="bill_laden" prop="">
        <el-input type="text" v-model="form.form1.billLaden" @blur="semaplcace(form.form1.billLaden)"></el-input>
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
        <el-button  type="success" style="width:206.4px" @click="imageShow=true">{{$t('main.scan')}}</el-button>
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
      <el-dialog :visible.sync="imageShow">
  <el-upload
  class="upload-demo"
  drag
  action="http://localhost:8080/freight/upload/invoice/invoice"
  name="file"
  :on-success="successup"
  >
  <i class="el-icon-upload"></i>  
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
</el-upload>
      </el-dialog>
  </div>
</template>
<style lang="less">

</style>

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
          nos:null,
          imageShow:false
        }
      },
      mounted() {
          this.getnos()
      },
      methods:{
        successup(response){
          let _this=this
          console.log(response)
          this.imageShow=false
          if(response.msg=='success'){
          var list=response.data.date.split("/")
          this.form.form1.date=list[2]+"-"+list[1]+"-"+list[0]
          this.form.form1.invoiceTo=response.data.invoiceTo
          this.form.form1.billLaden=response.data.billLaden
          this.form.form1.origin=response.data.origin
          this.form.form1.dstn=response.data.dstn
          this.form.form1.nature=response.data.nature
          }
          else{
            _this.$message(
              {
                message:response.event,
                type:response.msg
              }
            )
          }
        },
        semaplcace(value){
          let _this=this
            if(value.indexOf('-')!=-1){
            var param={mawb:value}
              this.$api.selectmaplace(param).then(function(response){
                _this.form.form1.origin=response["data"][0].air_departure
                _this.form.form1.dstn=response["data"][0].air_dest
              })
            }
            else{
            var param={hawb:value}
              this.$api.selecthaplace(param).then(function(response){
                _this.form.form1.origin=response["data"][0].air_departure
                _this.form.form1.dstn=response["data"][0].air_dest
                _this.form.form1.nature=response["data"][0].nature
              })
            }
        },
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
          this.$refs[formname].validate((valid)=>{
          if(valid){
          for(var i=0;i<_this.form.form2.domains.length;i++){
              list.push(
                {
                  invoiceNo:_this.form.form1.invoiceNo,
                  description:_this.form.form2.domains[i].description,
                  amount:_this.form.form2.domains[i].amount
                }
              )     
          }
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
          else{
            return false
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
        },
        getnos(){ 
                  var date=new Date()
                  var day=date.getDate()
                  var month=date.getMonth()
                  var year=date.getFullYear()
                  month++
                  day=day<10?'0'+day.toString():day
                  month=month<10?'0'+month.toString():month
                  var time=year.toString()+month+day
                  var param={"time":time}
                  this.$api.selectno(param).then(res => {
                  const result = []
                  result.push({
                    value:"DVI"+res.dvi,
                    label:"DVI"+res.dvi
                  })
                  result.push({
                    value:"IVD"+res.ivd,
                    label:"IVD"+res.ivd
                  })
                  this.nos = result
              }, err => {
              })
              }
      }
      }
</script>