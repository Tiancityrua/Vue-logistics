<template>
  <div  class="app-container">
    <el-form ref="form" :model="form" label-width="125px" inline :rules="rules">
      <el-form-item  label="mawb" prop="mawb">
        <el-input type="text" size="large" v-model="form.mawb"></el-input>
      </el-form-item>
        <el-form-item  label="shipper_no">
        <el-input type="text" size="large" v-model="form.shipperNo"></el-input>
        </el-form-item>
        <el-form-item  label="consignee_no" >
        <el-input type="text" size="large" v-model="form.consigneeNo"></el-input>
        </el-form-item>
        <el-form-item  label="issuing_carrier" >
        <el-input type="text" size="large" v-model="form.issuingCarrier"></el-input>
        </el-form-item>
       <el-form-item  label="agent_iata" >
        <el-input type="text" size="large" v-model="form.agentIata"></el-input>
        </el-form-item>
       <el-form-item  label="account_no" >
        <el-input type="text" size="large" v-model="form.accountNo"></el-input>
        </el-form-item>
        <el-form-item  label="air_departure" prop="airDeparture">
        <el-input type="text" size="large" v-model="form.airDeparture"></el-input>
        </el-form-item>
       <el-form-item  label="air_dest" prop="airDest">
        <el-input type="text" size="large" v-model="form.airDest"></el-input>
        </el-form-item>
         <el-form-item  label="shipper" prop="shipper">
        <el-input type="textarea" autosize  size="large" v-model="form.shipper"></el-input>
        </el-form-item>
        <el-form-item  label="consignee" prop="consignee">
        <el-input type="textarea" autosize size="large" v-model="form.consignee"></el-input>
        </el-form-item>
        <el-form-item  label="issued_by" >
        <el-input type="textarea" autosize size="large" v-model="form.issuedBy"></el-input>
        </el-form-item>
        <el-form-item  label="account_info" prop="accountInfo">
        <el-input type="textarea" autosize size="large" v-model="form.accountInfo"></el-input>
        </el-form-item>
        <el-form-item  label="to1" >
        <el-input type="text" size="large" v-model="form.to1"></el-input>
        </el-form-item>
        <el-form-item  label="by1" >
        <el-input type="text" size="large" v-model="form.by1"></el-input>
        </el-form-item>
        <el-form-item  label="to2" >
        <el-input type="text" size="large" v-model="form.to2"></el-input>
        </el-form-item>
        <el-form-item  label="by2" >
        <el-input type="text" size="large" v-model="form.by2"></el-input>
        </el-form-item>
        <el-form-item  label="to3" >
        <el-input type="text" size="large" v-model="form.to3"></el-input>
        </el-form-item>
        <el-form-item  label="by3" >
        <el-input type="text" size="large" v-model="form.by3"></el-input>
        </el-form-item>
        <el-form-item  label="flight_no" prop="flightNo">
        <el-input type="text" size="large" v-model="form.flightNo"></el-input>
        </el-form-item>
        <el-form-item  label="flight_date" prop="flightDate">
        <el-date-picker type="date" size="large" v-model="form.flightDate" style="width: 206.4px;"></el-date-picker>
        </el-form-item>
        <el-form-item  label="currency" prop="currency">
        <el-input type="text" size="large" v-model="form.currency"></el-input>
        </el-form-item>
        <el-form-item  label="chg_code" >
        <el-input type="text" size="large" v-model="form.chgCode"></el-input>
        </el-form-item>
        <el-form-item  label="wt_val" prop="wtVal">
        <el-input type="text" size="large" v-model="form.wtVal"></el-input>
        </el-form-item>
        <el-form-item  label="other" prop="other">
        <el-input type="text" size="large" v-model="form.other"></el-input>
        </el-form-item>
        <el-form-item  label="declared_carriage" prop="declaredCarriage">
        <el-input type="text" size="large" v-model="form.declaredCarriage"></el-input>
        </el-form-item>
        <el-form-item  label="declared_customs" prop="declaredCustoms">
        <el-input type="text" size="large" v-model="form.declaredCustoms"></el-input>
        </el-form-item>
        <el-form-item  label="amount_insurance" prop="amountInsurance">
        <el-input type="text" size="large" v-model="form.amountInsurance"></el-input>
        </el-form-item>
        <el-form-item  label="handling_info" prop="handlingInfo">
        <el-input type="textarea" autosize size="large" v-model="form.handlingInfo"></el-input>
        </el-form-item>
        <el-form-item  label="sci" >
        <el-input type="text"  size="large" v-model="form.sci"></el-input>
        </el-form-item>
        <el-form-item  label="no_pieces" prop="noPieces">
        <el-input type="text"  size="large" v-model="form.noPieces"></el-input>
        </el-form-item>
        <el-form-item  label="gross_weight" prop="grossWeight">
        <el-input type="text"  size="large" v-model="form.grossWeight"></el-input>
        </el-form-item>
        <el-form-item  label="total_pieces" prop="totalPieces">
        <el-input type="text"  size="large" v-model="form.totalPieces"></el-input>
        </el-form-item>
        <el-form-item  label="total_weight" prop="totalWeight">
        <el-input type="text"  size="large" v-model="form.totalWeight"></el-input>
        </el-form-item>
        <el-form-item  label="kg_lb" prop="kgLb">
        <el-input type="text"  size="large" v-model="form.kgLb"></el-input>
        </el-form-item>
        <el-form-item  label="rate_class" >
        <el-input type="text"  size="large" v-model="form.rateClass"></el-input>
        </el-form-item>
        <el-form-item  label="item_no" prop="itemNo">
        <el-input type="text"  size="large" v-model="form.itemNo"></el-input>
        </el-form-item>
        <el-form-item  label="charge_weight" prop="chargeWeight">
        <el-input type="text"  size="large" v-model="form.chargeWeight"></el-input>
        </el-form-item>
        <el-form-item  label="rate" prop="rate">
        <el-input type="text" size="large" v-model="form.rate"></el-input>
        </el-form-item>
        <el-form-item  label="total1" prop="total1">
        <el-input type="text"  size="large" v-model="form.total1"></el-input>
        </el-form-item>
        <el-form-item  label="total2" prop="total2">
        <el-input type="text"  size="large" v-model="form.total2"></el-input>
        </el-form-item>
        <el-form-item  label="nature" prop="nature">
        <el-input type="text"  size="large" v-model="form.nature"></el-input>
        </el-form-item>
        <el-form-item  label="weight_ppd" >
        <el-input type="text"  size="large" v-model="form.weightPpd"></el-input>
        </el-form-item>
        <el-form-item  label="weight_coll" >
        <el-input type="text"  size="large" v-model="form.weightColl"></el-input>
        </el-form-item>
        <el-form-item  label="val_ppd" >
        <el-input type="text"  size="large" v-model="form.valPpd"></el-input>
        </el-form-item>
        <el-form-item  label="val_coll" >
        <el-input type="text"  size="large" v-model="form.valColl"></el-input>
        </el-form-item>
        <el-form-item  label="tax_ppd" >
        <el-input type="text"  size="large" v-model="form.taxPpd"></el-input>
        </el-form-item>
        <el-form-item  label="tax_coll" >
        <el-input type="text"  size="large" v-model="form.taxColl"></el-input>
        </el-form-item>
        <el-form-item  label="agent_ppd" >
        <el-input type="text"  size="large" v-model="form.agentPpd"></el-input>
        </el-form-item>
        <el-form-item  label="agent_coll" >
        <el-input type="text"  size="large" v-model="form.agentColl"></el-input>
        </el-form-item>
        <el-form-item  label="carrier_ppd" >
        <el-input type="text"  size="large" v-model="form.carrierPpd"></el-input>
        </el-form-item>
        <el-form-item  label="carrier_coll" >
        <el-input type="text"  size="large" v-model="form.carrierColl"></el-input>
        </el-form-item>
        <el-form-item  label="total_ppd" >
        <el-input type="text"  size="large" v-model="form.totalPpd"></el-input>
        </el-form-item>
        <el-form-item  label="total_coll" >
        <el-input type="text"  size="large" v-model="form.totalColl"></el-input>
        </el-form-item>
        <el-form-item  label="currency_rates" >
        <el-input type="text"  size="large" v-model="form.currencyRates"></el-input>
        </el-form-item>
        <el-form-item  label="dest_currency" >
        <el-input type="text"  size="large" v-model="form.destCurrency"></el-input>
        </el-form-item>
        <el-form-item  label="charges_dest" >
        <el-input type="text"  size="large" v-model="form.chargesDest"></el-input>
        </el-form-item>
        <el-form-item  label="totalcoll_charges" >
        <el-input type="text"  size="large" v-model="form.totalcollCharges"></el-input>
        </el-form-item>
        <el-form-item  label="other_charges" >
        <el-input type="text"  size="large" v-model="form.otherCharges"></el-input>
        </el-form-item>
        <el-form-item  label="shipper_certifies" >
        <el-input type="text"  size="large" v-model="form.shipperCertifies"></el-input>
        </el-form-item>
        <el-form-item  label="excuted_on" prop="excutedOn">
        <el-date-picker type="date" size="large" v-model="form.excutedOn" style="width: 206.4px;"></el-date-picker>
        </el-form-item>
        <el-form-item  label="place" prop="place">
        <el-input type="text"  size="large" v-model="form.place"></el-input>
        </el-form-item>
        <el-form-item  label="signature_shipper">
        <el-input type="text"  size="large" v-model="form.signatureShipper"></el-input>
        </el-form-item>
        <el-form-item  label="signature_carrier">
        <el-input type="text"  size="large" v-model="form.signatureCarrier"></el-input>
        </el-form-item>
        <el-form-item label="                   ">
        <el-button size="large" type="primary" style="width:206.4px" @click="onSubmit('form')">提交</el-button>
        </el-form-item>    
        <el-form-item label="               ">
        <el-button size="large" type="danger" style="width:206.4px">重置</el-button>
        </el-form-item>  
    </el-form>
  </div>
</template>
<style src="./index.less" lang="less">
</style>

<script>
import {generateTitle} from '../../../util/showtitle'
  export default{
      name:'insertmawb',
      data(){
          return{
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
                    {required: true,  message:'gross_weight is required',trigger: 'blur' }
                  ],
                  totalPieces:[
                     {required: true,  message:'total_pieces is required',trigger: 'blur' }
                  ],
                  totalWeight:[
                     {required: true, message:'total_weight is required', trigger: 'blur' }  
                  ],
                  kgLb:[
                    {required: true,  message:'kg_lb is required', trigger: 'blur' }  
                  ],
                  itemNo:[
                     {required: true, message:'item_no is required', trigger: 'blur' }    
                  ],
                  chargeWeight:[
                     {required: true,  message:'charge_weight is required',trigger: 'blur' }   
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
    }
}
}
</script>