<template>
  <div  class="app-container">
    <el-form ref="form" :model="form" label-width="120px" inline>
      <el-form-item  label="mawb" >
        <el-input type="text" size="large" v-model="form.mawb"></el-input>
      </el-form-item>
        <el-form-item  label="shipper_no">
        <el-input type="text" size="large" v-model="form.airline"></el-input>
        </el-form-item>
        <el-form-item  label="consignee_no" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="issuing_carrier" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
       <el-form-item  label="agent_iata" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
       <el-form-item  label="account_no" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="shipper" >
        <el-input type="textarea" autosize  size="large" v-model="form.flightNo"></el-input>
        </el-form-item>
        <el-form-item  label="consignee" >
        <el-input type="textarea" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="issued_by" >
        <el-input type="textarea" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="account_info" >
        <el-input type="textarea" autosize size="large"></el-input>
        </el-form-item>
       <el-form-item  label="air_departure" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
       <el-form-item  label="air_dest" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="to1" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="to1" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="to1" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="to1" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="to1" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="to1" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="flight_no" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="flight_date" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="currency" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="chg_code" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="wt_val" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="other" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="declared_carriage" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="declared_customs" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="amount_insurance" >
        <el-input type="text" size="large"></el-input>
        </el-form-item>
        <el-form-item  label="handling_info" >
        <el-input type="textarea" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="sci" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="no_pieces" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="gross_weight" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="total_pieces" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="total_weight" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="kg_lb" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="rate_class" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="item_no" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="charge_weight" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="rate" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="total1" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="total2" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="nature" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="weight_ppd" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="weight_coll" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="val_ppd" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="val_coll" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="tax_ppd" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="tax_coll" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="agent_ppd" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="agent_coll" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="carrier_ppd" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="carrier_coll" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="total_ppd" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="total_coll" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="currency_rates" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="dest_currency" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="charges_dest" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="totalcoll_charges" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="shipper_certifies" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="excuted_on" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="place" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="signature_shipper" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
        <el-form-item  label="signature_carrier" >
        <el-input type="text" autosize size="large"></el-input>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {generateTitle} from '../../../util/showtitle'
  export default{
      name:'insertmawb',
      data(){
          return{
              form:{
                  mawb:'',
                  airline:'',
                  flightNo:'',
                  flightDate:'',
                  accInfo:'',
                  shipper:'',
                  consignee:'',
                  weight:'',
                  volume:'',
                  chargableWeight:'',
                  airDeparture:'',
                  airDestination:''
              }
          }
      },
      methods:{
            onSubmit(){
                let _this=this;
                var param=this.form;
                this.$api.insertmawb(param).then(function (response) {
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
      }

  }
</script>