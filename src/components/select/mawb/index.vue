<template>
    <div class="app-container">
        <el-form ref="form" inline :model="form" label-width="125px" size="large">
            <el-form-item label="mawb">
                <el-input  v-model="form.mawb"></el-input>
            </el-form-item>
            <el-form-item label="flight_no">
                <el-input v-model="form.flightNo"></el-input>
            </el-form-item>
            <el-form-item label="shipper">
                <el-select
                    v-model="form.shipper"
                    clearable
                    filterable
                    style="width: 206.4px;">
                    <el-option v-for="list in ships" :key="list.value"
                                :value="list.value" :label="list.label"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="consignee">
                <el-select
                        v-model="form.consignee"
                        clearable
                        filterable
                         style="width: 206.4px;">
                    <el-option v-for="list in consignees" :key="list.value"
                               :value="list.value" :label="list.label"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="start_time">
            <el-date-picker
                        v-model="form.date1"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd" style="width: 206.4px;">
            </el-date-picker>
            </el-form-item>
            <el-form-item label="end_time">
            <el-date-picker
                    v-model="form.date2"
                    type="date"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd" style="width: 206.4px;">
            </el-date-picker>
            </el-form-item>
            <el-form-item label="air_departure">
                <el-input v-model="form.airDeparture">
                </el-input>
            </el-form-item>
            <el-form-item label="air_dest">
                <el-input v-model="form.airDest">
                </el-input>
            </el-form-item>
            <el-form-item label="excuted_on">
                    <el-date-picker
                    v-model="form.excutedOn"
                    type="date"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd" style="width: 206.4px;">
            </el-date-picker>
            </el-form-item>
            <el-form-item label="place">
                <el-input v-model="form.place">
                </el-input>
            </el-form-item>
            <el-form-item label="         ">
                <el-button type="primary" @click="onSubmit" style="width: 206.4px;">{{$t('main.search')}}</el-button>
            </el-form-item>
            </el-form>
            <div style="text-align: center">
            <el-table
                    border="true"
                    max-height="800"
                    header-align="center"
                    align="center"
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        fixed="left"
                        prop="mawb"
                        label="mawb"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="shipperNo"
                        label="shipper_no"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="shipper"
                        label="shipper"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="consigneeNo"
                        label="consignee_no"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="consignee"
                        label="consignee"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="issuedBy"
                        label="issued_by"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="issuingCarrier"
                        label="issuing_carrier"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="agentIata"
                        label="agent_iata"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="accountNo"
                        label="account_no"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="airDeparture"
                        label="air_departure"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="airDest"
                        label="air_dest"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="to1"
                        label="to1"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="by1"
                        label="to1"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="to2"
                        label="to1"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="by2"
                        label="to1"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="to3"
                        label="to1"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="by3"
                        label="to1"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="flightNo"
                        label="flight_no"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="flightDate"
                        label="flight_date"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="accountInfo"
                        label="account_info"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="currency"
                        label="currency"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="chgCode"
                        label="chg_code"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="wtVal"
                        label="wt_val"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="other"
                        label="other"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="declaredCarriage"
                        label="declared_carriage"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="declaredCustoms"
                        label="declared_customs"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="amountInsurance"
                        label="amount_insurance"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="handlingInfo"
                        label="handling_info"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="sci"
                        label="sci"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="noPieces"
                        label="no_pieces"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="grossWeight"
                        label="gross_weight"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="totalPieces"
                        label="total_pieces"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="totalWeight"
                        label="total_weight"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="kgLb"
                        label="kg_lb"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="rateClass"
                        label="rate_class"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="itemNo"
                        label="item_no"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="chargeWeight"
                        label="charge_weight"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="rate"
                        label="rate"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="total1"
                        label="total1"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="total2"
                        label="total2"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="nature"
                        label="nature"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="weightPpd"
                        label="weight_ppd"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="weightColl"
                        label="weight_coll"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="valPpd"
                        label="val_ppd"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="valColl"
                        label="val_coll"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="taxPpd"
                        label="tax_ppd"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="taxColl"
                        label="tax_coll"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="agentPpd"
                        label="agent_ppd"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="agentColl"
                        label="agent_coll"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="carrierPpd"
                        label="carrier_ppd"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="carrierColl"
                        label="carrier_coll"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="totalPpd"
                        label="total_ppd"
                        width="180">
                </el-table-column>
                 <el-table-column
                        prop="totalColl"
                        label="total_coll"
                        width="180">
                </el-table-column>
                 <el-table-column
                        prop="currencyRates"
                        label="currency_rates"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="destCurrency"
                        label="dest_currency"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="chargesDest"
                        label="charges_dest"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="totalcollCharges"
                        label="totalcoll_charges"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="otherCharges"
                        label="other_charges"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="shipperCertifies"
                        label="shipper_certifies"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="excutedOn"
                        label="excuted_on"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="place"
                        label="place"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="signatureShipper"
                        label="signature_shipper"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="signatureCarrier"
                        label="signature_carrier"
                        width="180">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="operating"
                        width="100">
                     <template slot-scope="scope">
                    <el-button @click="update(scope.row)" type="primary" size="medium">{{$t('main.update')}}</el-button>
                     </template>
                </el-table-column>
            </el-table>
            </div>
    </div>
</template>
<script>
  export default {
    name: 'selectmawb',
      data(){
        return{
            form:{
            mawb:null,
            flightNo:null,
            shipper:null,
            consignee:null,
            date1:null,
            date2:null,
            airDeparture:null,
            airDest:null,
            excutedOn:null,
            place:null
            }, 
            tableData:[],
            ships:null,
            consignees:null
        }
      },
      mounted() {
          this.getShipper()
          this.getConsignee()
      },
      methods: {
          onSubmit() {
              let _this=this;
              var param=this.form;
              this.$api.selectmawb(param).then(res=>{
                  _this.tableData=res.data;
              })

          },
          getShipper(value) {
              this.$api.getmaShips().then(res => {
                  const result = []
                  res.data.forEach(item => {
                      result.push({
                          value: item,
                          label: item
                      })
                  })
                  this.ships = result
              }, err => {
              })

          },
          getConsignee(value) {
              this.$api.getmaConsignees().then(res => {
                  const result = []
                  res.data.forEach(item => {
                      result.push({
                          value: item,
                          label: item
                      })
                  })
                  this.consignees = result
              }, err => {
              })

          }
      }
  }
</script>