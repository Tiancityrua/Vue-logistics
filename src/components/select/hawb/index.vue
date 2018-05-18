<template>
    <div class="app-container">
        <el-form ref="form1" inline :model="form1" label-width="125px" size="large">
            <el-form-item label="hawb">
                <el-input  v-model="form1.hawb"></el-input>
            </el-form-item>
            <el-form-item label="mawb">
                <el-input  v-model="form1.mawb"></el-input>
            </el-form-item>
            <el-form-item label="flight_no">
                <el-input v-model="form1.flightNo"></el-input>
            </el-form-item>
            <el-form-item label="shipper">
                <el-select
                    v-model="form1.shipper"
                    clearable
                    filterable
                    style="width: 206.4px;">
                    <el-option v-for="list in ships" :key="list.value"
                                :value="list.value" :label="list.label"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="consignee">
                <el-select
                        v-model="form1.consignee"
                        clearable
                        filterable
                         style="width: 206.4px;">
                    <el-option v-for="list in consignees" :key="list.value"
                               :value="list.value" :label="list.label"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="start_time">
            <el-date-picker
                        v-model="form1.date1"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd" style="width: 206.4px;">
            </el-date-picker>
            </el-form-item>
            <el-form-item label="end_time">
            <el-date-picker
                    v-model="form1.date2"
                    type="date"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd" style="width: 206.4px;">
            </el-date-picker>
            </el-form-item>
            <el-form-item label="air_departure">
                <el-input v-model="form1.airDeparture">
                </el-input>
            </el-form-item>
            <el-form-item label="air_dest">
                <el-input v-model="form1.airDest">
                </el-input>
            </el-form-item>
            <el-form-item label="excuted_on">
                    <el-date-picker
                    v-model="form1.excutedOn"
                    type="date"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd" style="width: 206.4px;">
            </el-date-picker>
            </el-form-item>
            <el-form-item label="place">
                <el-input v-model="form1.place">
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
                        prop="hawb"
                        label="hawb"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="mawb"
                        label="mawb"
                        width="180">
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
                        width="240">
                     <template slot-scope="scope">
                    <el-button @click="editShow(scope.row)" type="primary" size="small">{{$t('main.update')}}</el-button>
                <el-button @click="print(scope.row)" type="primary" size="small">{{$t('main.print')}}</el-button>
                <el-button @click="deletehawb(scope.row.hawb,scope.$index,tableData)" type="danger" size="small">{{$t('main.delete')}}</el-button>
                     </template>
                </el-table-column>
            </el-table>
            </div>
            <el-dialog title="hawb" :visible.sync="dialogFormVisible">
                <el-form ref="form"  :model="form" label-width="125px" inline :rules="rules" size="large">
        <el-form-item  label="hawb" prop="hawb">
        <el-input type="text"  v-model="form.hawb" :disabled="true"></el-input>
        </el-form-item>
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
        </el-form>
        <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{$t('main.cancel')}}</el-button>
        <el-button type="primary" @click="update('form')">{{$t('main.confirm')}}</el-button>
        </div>
        </el-dialog>
    </div>
</template>
<script>
  export default {
    name: 'selecthawb',
      data(){
        return{
            form1:{
            hawb:'',
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
            consignees:null,
            dialogFormVisible:false,
            form:{
                hawb:'',
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
                hawb:[
                    {required: true,trigger: 'change' }
                ],
                  mawb:[
                       {required: true,trigger: 'change' }
                  ],
                  airDeparture:[
                      {required: true,message:'air_departure is required', trigger: 'change' }
                  ],
                  airDest:[
                      {required: true,message:'air_dest is required', trigger: 'change' }
                  ],
                  shipper:[
                      {required: true, trigger: 'change' }
                  ],
                  consignee:[
                      {required: true, trigger: 'change' }
                  ],
                  flightNo:[
                      {required: true, message:'flight_no is required', trigger: 'change' }
                  ],
                  flightDate:[
                      {required: true, message:'flight_date is required', trigger: 'change' }
                  ],
                  accountInfo:[
                      {required: true,  message:'account_info is required',trigger: 'change' }
                  ],
                  currency:[
                    {required: true,  trigger: 'change' }
                  ],
                  wtVal:[
                    {required: true, message:'wt_val is required',trigger: 'change' }                      
                  ],
                  other:[
                     {required: true,  trigger: 'change' }  
                  ],
                  declaredCarriage:[
                      {required: true,  message:'declared_carriage is required', trigger: 'change' }
                  ],
                  declaredCustoms:[
                      {required: true,  message:'declared_customs is required',trigger: 'change' }
                  ],
                  amountInsurance:[
                      {required: true, message:'amount_insurance is required', trigger: 'change' }
                  ],
                  handlingInfo:[
                    {required: true, message:'handling_info is required', trigger: 'change' }
                  ],
                  noPieces:[
                    {required: true,  message:'no_pieces is required',trigger: 'change' }
                  ],
                  grossWeight:[
                    {required: true,  message:'gross_weight is required',trigger: 'change' },
                     {type: 'number', message: 'gross_weight must be number'}
                  ],
                  totalPieces:[
                     {required: true,  message:'total_pieces is required',trigger: 'change' }
                  ],
                  totalWeight:[
                     {required: true, message:'total_weight is required', trigger: 'change' },
                     {type: 'number', message: 'total_weight must be number'}  
                  ],
                  kgLb:[
                    {required: true,  message:'kg_lb is required', trigger: 'change' }  
                  ],
                  itemNo:[
                     {required: true, message:'item_no is required', trigger: 'change' }    
                  ],
                  chargeWeight:[
                     {required: true,  message:'charge_weight is required',trigger: 'change' },
                     {type: 'number', message: 'charge_weight must be number'}   
                  ],
                  rate:[
                     {required: true,  trigger: 'change' }  
                  ],
                  total1:[
                     {required: true,  trigger: 'change' } 
                  ],
                  total2:[
                      {required: true,  trigger: 'change' }
                  ],
                  nature:[
                      {required: true,  trigger: 'change' }
                  ],
                  excutedOn:[
                      {required: true,message:'excuted_on is required',  trigger: 'change' } 
                  ],
                  place:[
                      {required: true,  trigger: 'change' } 
                  ]
            }
        }
      },
      mounted() {
          this.getShipper()
          this.getConsignee()
      },
      methods: {
              print(row){
                this.$api.printhawb     (row).then(res=>{
                console.log(row)
                var blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'})
                var downloadElement = document.createElement('a');
                var href = window.URL.createObjectURL(blob); //创建下载的链接
    　　        downloadElement.href = href;
                downloadElement.download = 'hawb.xls'
    　　        document.body.appendChild(downloadElement);
    　　        downloadElement.click(); //点击下载
    　　        document.body.removeChild(downloadElement); //下载完成移除元素
    　　        window.URL.revokeObjectURL(href); //释放掉blob对象 
                })
              },
          update(formname){
                let _this=this;
                this.$refs[formname].validate((valid)=>{
                if(valid){
                var param=_this.form;
                _this.$api.updatehawb(param).then(function (response) {
                    var type=response.msg;
                    var message=response.event;
                    if(type=='success'){
                        _this.dialogFormVisible=false
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
          editShow(row){
                var role=this.$store.getters.role
                if(role=='manager'){
                this.form=row
                this.dialogFormVisible=true
                }
                else{
                    this.$message(
                        {
                            message:'permission denied',
                            type:'warning'
                        }
                    )
                }
          },
          deletehawb(hawb,index,rows){
                var role=this.$store.getters.role
                if(role=='manager'){
                var param={"hawb":hawb}
                this.$confirm('确认删除？','提示',{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(()=>{
                this.$api.deletehawb(param).then(res=>{
                        this.$message({
                        type: res.msg,
                        message: res.event
                        })
                        if(res.msg=='success'){ 
                             rows.splice(index, 1)
                        }
                })}).catch(()=>{
                        this.$message({
                        type: 'info',
                        message: '已取消删除'
                        })
                })
                }
                else{
                 this.$message(
                        {
                            message:'permission denied',
                            type:'warning'
                        }
                    )
                }
          },
          onSubmit() {
              let _this=this;
              var param=this.form1;
              this.$api.selecthawb(param).then(res=>{
                  _this.tableData=res.data;
              })

          },
          getShipper(value) {
              this.$api.gethaShips().then(res => {
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
              this.$api.gethaConsignees().then(res => {
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