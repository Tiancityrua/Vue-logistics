<template>
  <div  class="app-container">
    <el-form ref="form" :model="form" label-width="125px" inline :rules="rules" size="large">
      <el-form-item  label="mawb" prop="mawb">
        <el-input type="text"  v-model="form.mawb"></el-input>
      </el-form-item>
        <el-form-item  label="shipper_no" prop="shipperNo">
        <el-input type="text"  v-model="form.shipperNo"></el-input>
        </el-form-item>
        <el-form-item  label="consignee_no" prop="consigneeNo">
        <el-input type="text"  v-model="form.consigneeNo"></el-input>
        </el-form-item>
        <el-form-item  label="issuing_carrier" prop="issuingCarrier">
        <el-input type="text"  v-model="form.issuingCarrier"></el-input>
        </el-form-item>
       <el-form-item  label="agent_iata" prop="agentIata">
        <el-input type="text"  v-model="form.agentIata"></el-input>
        </el-form-item>
       <el-form-item  label="account_no" prop="accountNo">
        <el-input type="text"  v-model="form.accountNo"></el-input>
        </el-form-item>
        <el-form-item  label="air_departure" prop="airDeparture"> 
        <el-input type="text"  v-model="form.airDeparture"></el-input>
        </el-form-item>
       <el-form-item  label="air_dest" prop="airDest">
        <el-input type="text"  v-model="form.airDest"></el-input>
        </el-form-item>
         <el-form-item  label="shipper" prop="shipper">
        <el-input type="textarea" autosize   v-model="form.shipper"></el-input>
        </el-form-item>
        <el-form-item  label="consignee" prop="consignee">
        <el-input type="textarea" autosize  v-model="form.consignee"></el-input>
        </el-form-item>
        <el-form-item  label="issued_by" prop="issuedBy">
        <el-input type="textarea" autosize  v-model="form.issuedBy"></el-input>
        </el-form-item>
        <el-form-item  label="account_info" prop="accountInfo">
        <el-input type="textarea" autosize  v-model="form.accountInfo"></el-input>
        </el-form-item>
        <el-form-item  label="to1" prop="to1">
        <el-input type="text"  v-model="form.to1"></el-input>
        </el-form-item>
        <el-form-item  label="by1" prop="by1">
        <el-input type="text"  v-model="form.by1"></el-input>
        </el-form-item>
        <el-form-item  label="to2" prop="to2">
        <el-input type="text"  v-model="form.to2"></el-input>
        </el-form-item>
        <el-form-item  label="by2" prop="by2">
        <el-input type="text"  v-model="form.by2"></el-input>
        </el-form-item>
        <el-form-item  label="to3" prop="to3">
        <el-input type="text"  v-model="form.to3"></el-input>
        </el-form-item>
        <el-form-item  label="by3" prop="by3">
        <el-input type="text"  v-model="form.by3"></el-input>
        </el-form-item>
        <el-form-item  label="flight_no" prop="flightNo">
        <el-input type="text"  v-model="form.flightNo"></el-input>
        </el-form-item>
        <el-form-item  label="flight_date" prop="flightDate">
        <el-date-picker
                        v-model="form.flightDate"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd" style="width: 206.4px;">
        </el-date-picker>
        </el-form-item>
        <el-form-item  label="currency" prop="currency">
        <el-input type="text"  v-model="form.currency"></el-input>
        </el-form-item>
        <el-form-item  label="chg_code" prop="chgCode">
        <el-input type="text"  v-model="form.chgCode"></el-input>
        </el-form-item>
        <el-form-item  label="wt_val" prop="wtVal">
        <el-input type="text"  v-model="form.wtVal"></el-input>
        </el-form-item>
        <el-form-item  label="other" prop="other">
        <el-input type="text"  v-model="form.other"></el-input>
        </el-form-item>
        <el-form-item  label="declared_carriage" prop="declaredCarriage">
        <el-input type="text"  v-model="form.declaredCarriage"></el-input>
        </el-form-item>
        <el-form-item  label="declared_customs" prop="declaredCustoms">
        <el-input type="text"  v-model="form.declaredCustoms"></el-input>
        </el-form-item>
        <el-form-item  label="amount_insurance" prop="amountInsurance">
        <el-input type="text"  v-model="form.amountInsurance"></el-input>
        </el-form-item>
        <el-form-item  label="handling_info" prop="handlingInfo">
        <el-input type="textarea" autosize  v-model="form.handlingInfo"></el-input>
        </el-form-item>
        <el-form-item  label="sci" prop="sci">
        <el-input type="text"   v-model="form.sci"></el-input>
        </el-form-item>
        <el-form-item  label="no_pieces" prop="noPieces">
        <el-input type="text"   v-model="form.noPieces"></el-input>
        </el-form-item>
        <el-form-item  label="gross_weight" prop="grossWeight">
        <el-input type="text"   v-model.number="form.grossWeight"></el-input>
        </el-form-item>
        <el-form-item  label="total_pieces" prop="totalPieces">
        <el-input type="text"   v-model="form.totalPieces"></el-input>
        </el-form-item>
        <el-form-item  label="total_weight" prop="totalWeight">
        <el-input type="text"   v-model.number="form.totalWeight"></el-input>
        </el-form-item>
        <el-form-item  label="kg_lb" prop="kgLb">
        <el-input type="text"   v-model="form.kgLb"></el-input>
        </el-form-item>
        <el-form-item  label="rate_class" prop="rateClass">
        <el-input type="text"   v-model="form.rateClass"></el-input>
        </el-form-item>
        <el-form-item  label="item_no" prop="itemNo">
        <el-input type="text"   v-model="form.itemNo"></el-input>
        </el-form-item>
        <el-form-item  label="charge_weight" prop="chargeWeight">
        <el-input type="text"   v-model.number="form.chargeWeight"></el-input>
        </el-form-item>
        <el-form-item  label="rate" prop="rate">
        <el-input type="text"  v-model="form.rate"></el-input>
        </el-form-item>
        <el-form-item  label="total1" prop="total1">
        <el-input type="text"   v-model="form.total1"></el-input>
        </el-form-item>
        <el-form-item  label="total2" prop="total2">
        <el-input type="text"   v-model="form.total2"></el-input>
        </el-form-item>
        <el-form-item  label="nature" prop="nature">
        <el-input type="text"   v-model="form.nature"></el-input>
        </el-form-item>
        <el-form-item  label="weight_ppd" prop="weightPpd">
        <el-input type="text"   v-model="form.weightPpd"></el-input>
        </el-form-item>
        <el-form-item  label="weight_coll" prop="weightColl">
        <el-input type="text"   v-model="form.weightColl"></el-input>
        </el-form-item>
        <el-form-item  label="val_ppd" prop="valPpd">
        <el-input type="text"   v-model="form.valPpd"></el-input>
        </el-form-item>
        <el-form-item  label="val_coll" prop="valColl">
        <el-input type="text"   v-model="form.valColl"></el-input>
        </el-form-item>
        <el-form-item  label="tax_ppd" prop="taxPpd">
        <el-input type="text"   v-model="form.taxPpd"></el-input>
        </el-form-item>
        <el-form-item  label="tax_coll" prop="taxColl">
        <el-input type="text"   v-model="form.taxColl"></el-input>
        </el-form-item>
        <el-form-item  label="agent_ppd" prop="agentPpd">
        <el-input type="text"   v-model="form.agentPpd"></el-input>
        </el-form-item>
        <el-form-item  label="agent_coll" prop="agentColl">
        <el-input type="text"   v-model="form.agentColl"></el-input>
        </el-form-item>
        <el-form-item  label="carrier_ppd" prop="carrierPpd">
        <el-input type="text"   v-model="form.carrierPpd"></el-input>
        </el-form-item>
        <el-form-item  label="carrier_coll" prop="carrierColl">
        <el-input type="text"   v-model="form.carrierColl"></el-input>
        </el-form-item>
        <el-form-item  label="total_ppd" prop="totalPpd">
        <el-input type="text"   v-model="form.totalPpd"></el-input>
        </el-form-item>
        <el-form-item  label="total_coll" prop="totalColl">
        <el-input type="text"   v-model="form.totalColl"></el-input>
        </el-form-item>
        <el-form-item  label="currency_rates" prop="currencyRates">
        <el-input type="text"   v-model="form.currencyRates"></el-input>
        </el-form-item>
        <el-form-item  label="dest_currency" prop="destCurrency">
        <el-input type="text"   v-model="form.destCurrency"></el-input>
        </el-form-item>
        <el-form-item  label="charges_dest" prop="chargesDest">
        <el-input type="text"   v-model="form.chargesDest"></el-input>
        </el-form-item>
        <el-form-item  label="totalcoll_charges" prop="totalcollCharges">
        <el-input type="text"   v-model="form.totalcollCharges"></el-input>
        </el-form-item>
        <el-form-item  label="other_charges" prop="otherCharges">
        <el-input type="text"   v-model="form.otherCharges"></el-input>
        </el-form-item>
        <el-form-item  label="shipper_certifies" prop="shipperCertifies">
        <el-input type="text"   v-model="form.shipperCertifies"></el-input>
        </el-form-item>
        <el-form-item  label="excuted_on" prop="excutedOn">
        <el-date-picker
                        v-model="form.excutedOn"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd" style="width: 206.4px;">
        </el-date-picker>
        </el-form-item>
        <el-form-item  label="place" prop="place">
        <el-input type="text"   v-model="form.place"></el-input>
        </el-form-item>
        <el-form-item  label="signature_shipper" prop="signatureShipper">
        <el-input type="text"   v-model="form.signatureShipper"></el-input>
        </el-form-item>
        <el-form-item  label="signature_carrier" prop="signatureCarrier">
        <el-input type="text"   v-model="form.signatureCarrier"></el-input>
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
    </el-form>
    <el-dialog :visible.sync="imageShow" width="400px">
  <el-upload
  class="upload-demo"
  drag
  action="http://localhost:8080/freight/upload/bill/mawb"
  name="file"
  :on-success="successup"
  >
  <i class="el-icon-upload"></i>  
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
</el-upload>
      </el-dialog>
  </div>
</template>
<style src="./index.less" lang="less">
</style>

<script>
  export default{
      name:'insertmawb',
      data(){
          return{
              imageShow:false,
              form:{
                mawb:'',
                shipperNo:'',
                consigneeNo:'',
                issuingCarrier:'',
                agentIata:'',
                accountNo:'',
                airDeparture:'',
                airDest:'',
                shipper:'',
                consignee:'',
                issuedBy:'',
                accountInfo:'',
                to1:'',
                by1:'',
                to2:'',
                by2:'',
                to3:'',
                by3:'',
                flightNo:'',
                flightDate:'',
                currency:'',
                chgCode:'',
                wtVal:'',
                other:'',
                declaredCarriage:'',
                declaredCustoms:'',
                amountInsurance:'',
                handlingInfo:'',
                sci:'',
                noPieces:'',
                grossWeight:'',
                totalPieces:'',
                totalWeight:'',
                kgLb:'',
                rateClass:'',
                itemNo:'',
                chargeWeight:'',
                rate:'',
                total1:'',
                total2:'',
                nature:'',
                weightPpd:'',
                weightColl:'',
                valPpd:'',
                valColl:'',
                taxPpd:'',
                taxColl:'',
                agentPpd:'',
                agentColl:'',
                carrierPpd:'',
                carrierColl:'',
                totalPpd:'',
                totalColl:'',
                currencyRates:'',
                destCurrency:'',
                chargesDest:'',
                totalcollCharges:'',
                otherCharges:'',
                shipperCertifies:'',
                excutedOn:'',
                place:'',
                signatureShipper:'',
                signatureCarrier:'',
              },
              rules:{
                  mawb:[
                       {required: true,trigger: 'blur' }
                  ],
                  airDeparture:[
                      {required: true,message:'air_departure is required', trigger: 'blur' }
                  ],
                  airDest:[
                      {required: true,message:'air_dest is required', trigger: 'blur' }
                  ],
                  shipper:[
                      {required: true, trigger: 'blur' }
                  ],
                  consignee:[
                      {required: true, trigger: 'blur' }
                  ],
                  flightNo:[
                      {required: true, message:'flight_no is required', trigger: 'blur' }
                  ],
                  flightDate:[
                      {required: true, message:'flight_date is required', trigger: 'blur' }
                  ],
                  accountInfo:[
                      {required: true,  message:'account_info is required',trigger: 'blur' }
                  ],
                  currency:[
                    {required: true,  trigger: 'blur' }
                  ],
                  wtVal:[
                    {required: true, message:'wt_val is required',trigger: 'blur' }                      
                  ],
                  other:[
                     {required: true,  trigger: 'blur' }  
                  ],
                  declaredCarriage:[
                      {required: true,  message:'declared_carriage is required', trigger: 'blur' }
                  ],
                  declaredCustoms:[
                      {required: true,  message:'declared_customs is required',trigger: 'blur' }
                  ],
                  amountInsurance:[
                      {required: true, message:'amount_insurance is required', trigger: 'blur' }
                  ],
                  handlingInfo:[
                    {required: true, message:'handling_info is required', trigger: 'blur' }
                  ],
                  noPieces:[
                    {required: true,  message:'no_pieces is required',trigger: 'blur' }
                  ],
                  grossWeight:[
                    {required: true,  message:'gross_weight is required',trigger: 'blur' },
                    {type:'number',message: 'gross_weight must be number'}
                  ],
                  totalPieces:[
                     {required: true,  message:'total_pieces is required',trigger: 'blur' }
                  ],
                  totalWeight:[
                     {required: true, message:'total_weight is required', trigger: 'blur' },
                    {type:'number',message: 'total_weight must be number'}  
                  ],
                  kgLb:[
                    {required: true,  message:'kg_lb is required', trigger: 'blur' }  
                  ],
                  itemNo:[
                     {required: true, message:'item_no is required', trigger: 'blur' }    
                  ],
                  chargeWeight:[
                     {required: true,  message:'charge_weight is required',trigger: 'blur' },
                    {type:'number',message: 'charge_weight must be number'}  
                  ],
                  rate:[
                     {required: true,  trigger: 'blur' }  
                  ],
                  total1:[
                     {required: true,  trigger: 'blur' } 
                  ],
                  total2:[
                      {required: true,  trigger: 'blur' }
                  ],
                  nature:[
                      {required: true,  trigger: 'blur' }
                  ],
                  excutedOn:[
                      {required: true,message:'excuted_on is required',  trigger: 'blur' } 
                  ],
                  place:[
                      {required: true,  trigger: 'blur' } 
                  ]
              }
          }
      },
      methods:{
          successup(response){
            let _this=this
            this.imageShow=false
            if(response.msg=='success'){
                this.form.accountInfo=response.data.accountinfo
                this.form.airDeparture=response.data.airdeparture
                this.form.airDest=response.data.airdest
                this.form.amountInsurance=response.data.amountinsurance
                this.form.consignee=response.data.consignee
                this.form.currency=response.data.currency
                this.form.declaredCarriage=response.data.valcarriage
                this.form.declaredCustoms=response.data.decalval
                this.form.flightNo=response.data.flightno
                this.form.handlingInfo=response.data.handlinginfo
                this.form.shipper=response.data.shipper
                this.form.to1=response.data.to1
                this.form.to2=response.data.to2
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
            onSubmit(formname){
                let _this=this;
                this.$refs[formname].validate((valid)=>{
                if(valid){
                var param=_this.form;
                _this.$api.insertmawb(param).then(function (response) {
                    var type=response.msg;
                    var message=response.event;
                    if(type=='success'){
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
                return false;
            }
      })
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
      }
}
}
</script>