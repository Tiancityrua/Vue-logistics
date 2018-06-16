<template>
  <div  class="app-container">
      <el-form ref="form1"  :model="form1" label-width="125px" inline :rules="rules" size="large" >
        <el-form-item  label="invoice_no" prop="invoiceNo">
       <el-select
                    v-model="form1.invoiceNo"
                    clearable
                    filterable
                    style="width: 206.4px;">
                    <el-option v-for="list in nos" :key="list.value"
                                :value="list.value" :label="list.label"></el-option>
        </el-select>
        </el-form-item>
      <el-form-item  label="date" prop="date">
            <el-date-picker
                        v-model="form1.date"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd" style="width: 206.4px;">
            </el-date-picker>
      </el-form-item>
      <el-form-item  label="terms" prop="terms">
        <el-input type="text" v-model="form1.terms"></el-input>
      </el-form-item>
      <el-form-item  label="invoice_to" prop="invoiceTo">
        <el-input type="textarea" autosize  v-model="form1.invoiceTo"></el-input>
      </el-form-item>
      <el-form-item  label="bill_laden" prop="billLaden">
        <el-input type="text" v-model="form1.billLaden" @blur="semaplcace(form1.billLaden)"></el-input>
      </el-form-item>
       <el-form-item  label="origin" prop="origin">
        <el-input type="text" v-model="form1.origin"></el-input>
      </el-form-item>
      <el-form-item  label="dstn" prop="dstn">
        <el-input type="text" v-model="form1.dstn"></el-input>
      </el-form-item>
      <el-form-item  label="nature" prop="nature">
        <el-input type="textarea" autosize v-model="form1.nature"></el-input>
        </el-form-item>
        <el-form-item  label="total" prop="total">
        <el-input type="text" v-model.number="form1.total"></el-input>
      </el-form-item>
      <el-form-item label="type" prop="type">
          <el-select v-model="form1.type" placeholder="select" clearable style="width: 206.4px;">
            <el-option
      v-for="item in type"
      :key="item.value"
      :label="item.label"
      :value="item.value">
            </el-option>
          </el-select>
      </el-form-item>
      <el-form-item  label="pay_date" prop="payDate">
            <el-date-picker
                        v-model="form1.payDate"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd" style="width: 206.4px;">
            </el-date-picker>
      </el-form-item>
        <el-form-item label="                   ">
        <el-button  type="primary" style="width:206.4px" @click="onSubmit('form1','form2')">{{$t('main.submit')}}</el-button>
        </el-form-item>    
        <el-form-item label="               ">
        <el-button  type="success" style="width:206.4px" @click="imageShow=true">{{$t('main.scan')}}</el-button>
        </el-form-item>  
        <el-form-item label="               ">
        <el-button  type="danger" style="width:206.4px" @click="resetForm('form1','form2')">{{$t('main.reset')}}</el-button> 
        </el-form-item>
      </el-form>
      <el-form ref="form2"  :model="form2" label-width="125px" inline size="large">
         <el-form-item
        v-for="(domain, index) in form2.domains"
        :label="''+index"
        :key="domain.key"
        :prop="'domains.'+index+'.amount'"
        :rules="[{
        required: true,message:'description and amount is required', trigger: 'blur'
        },{type: 'number', message: 'amount must be number'}]"
         >
     <el-input v-model="domain.description" style="width:206.4px" placeholder="description"></el-input>
    <el-input v-model.number="domain.amount" style="width:206.4px" placeholder="amount"></el-input>
    <el-button @click.prevent="removeDomain(domain)">{{$t('main.delete')}}</el-button>
  </el-form-item>

   <el-form-item>
    <el-button @click="addDomain()">{{$t('main.newitem')}}</el-button>
  </el-form-item>
      </el-form>
      <el-dialog :visible.sync="imageShow" width="400px">
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
              total:'',
              type:'',
              payDate:''
          },
          nos:null,
          imageShow:false,
          type:[{
            value:'purchases',
            label:'purchases'
          },
          {
            value:'sales',
            label:'sales'
          }],
          rules:{
                invoiceNo:[
                      {required: true, trigger: 'change' }
                  ],
                 date:[
                      {required: true, trigger: 'blur' }
                  ],
                  terms:[
                      {required: true, trigger: 'blur' }
                  ],
                  invoiceTo:[
                      {required: true, trigger: 'blur' }
                  ],
                  billLaden:[
                      {required: true, trigger: 'blur' }
                  ],
                  origin:[
                      {required: true, trigger: 'blur' }
                  ],
                  dstn:[
                      {required: true, trigger: 'blur' }
                  ],
                  nature:[
                      {required: true, trigger: 'blur' }
                  ],
                  total:[
                      {required: true, trigger: 'blur' },
                      {type: 'number', message: 'total must be number'}
                  ],
                  type:[
                    {required: true, trigger: 'blur' }
                  ]
          }
        }
      },
      mounted() {
          this.getnos()
      },
      methods:{
        successup(response){
          let _this=this
          this.imageShow=false
          if(response.msg=='success'){
          var list=response.data.date.split("/")
          this.form1.date=list[2]+"-"+list[1]+"-"+list[0]
          this.form1.invoiceTo=response.data.invoiceTo
          this.form1.billLaden=response.data.billLaden
          this.form1.origin=response.data.origin
          this.form1.dstn=response.data.dstn
          this.form1.nature=response.data.nature
          this.form1.terms=response.data.terms
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
          if(value!=''&&value!=null){
            if(value.indexOf('-')!=-1){
            var param={mawb:value}
              this.$api.selectmaplace(param).then(function(response){
                _this.form1.origin=response["data"][0].air_departure
                _this.form1.dstn=response["data"][0].air_dest
              })
            }
            else{
            var param={hawb:value}
              this.$api.selecthaplace(param).then(function(response){
                _this.form1.origin=response["data"][0].air_departure
                _this.form1.dstn=response["data"][0].air_dest
                _this.form1.nature=response["data"][0].nature
              })
            }
          }
          else{
            return false
          }
        },
        addDomain(){
          this.form2.domains.push({
              description:'',
              amount:'',
              key:Date.now()
          }
          )
        },
        onSubmit(formname1,formname2){
          let _this=this
          var list=[]
        var p1=new Promise(function(resolve, reject) {
        
            _this.$refs[formname1].validate((valid) => {
                if(valid){
                    resolve();
                }
            })
        })
        var p2=new Promise(function(resolve, reject) {
             _this.$refs[formname2].validate((valid) => {
              if(valid){
                resolve();
              }
            })
        })
        Promise.all([p2,p1]).then(
          ()=>{
            for(var i=0;i<_this.form2.domains.length;i++){
              if(_this.form2.domains[i].description!=''){
              list.push(
                {
                  invoiceNo:_this.form1.invoiceNo,
                  description:_this.form2.domains[i].description,
                  amount:_this.form2.domains[i].amount
                }
              )   
              }
              else{
                _this.$message.error('Incomplete Data')
                return false
              }  
          }
          _this.$api.insertinvoice(_this.form1).then(function(response){
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
        )
        },
        removeDomain(item){
        var index = this.form2.domains.indexOf(item)
        if (index !== -1) {
          this.form2.domains.splice(index, 1)
        }
        },
        resetForm(formname1,formname2) {
        this.$refs[formname1].resetFields();
        this.$refs[formname2].resetFields();
        },
        getnos(){ 
                  var date=new Date()
                  var month=date.getMonth()
                  var year=date.getFullYear()
                  year=year.toString().substring(2,4)
                  month++
                  month=month<10?'0'+month.toString():month
                  var time=month+year
                  var param={"time":time}
                  this.$api.selectno(param).then(res => {
                  const result = []
                  result.push({
                    value:"DVI"+res.dvi,
                    label:"DVI"+res.dvi
                  })
                  result.push({
                    value:"INV"+res.inv,
                    label:"INV"+res.inv
                  })
                  this.nos = result
              }, err => {
              })
              }
      }
      }
</script>