<template>
    <div class="app-container">
        <el-form ref="form" inline :model="form" label-width="125px" size="large">
            <el-form-item label="invoice_no">
                <el-input v-model="form.invoiceNo"></el-input>
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
             <el-form-item label="invoice_to">
                <el-input  v-model="form.invoiceTo"></el-input>
            </el-form-item>
             <el-form-item label="bill_laden">
                <el-input  v-model="form.billLaden"></el-input>
            </el-form-item>
             <el-form-item label="origin">
                <el-input v-model="form.origin"></el-input>
            </el-form-item>
             <el-form-item label="dstn">
                <el-input v-model="form.dstn"></el-input>
            </el-form-item>
            <el-form-item label="         ">
                <el-button type="primary" @click="onSubmit" style="width: 206.4px;">{{$t('main.search')}}</el-button>
            </el-form-item>
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
                        prop="invoiceNo"
                        label="invoice_no"
                        width="125">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="date"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="terms"
                        label="terms"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="invoiceTo"
                        label="invoice_to"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="billLaden"
                        label="bill_laden"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="origin"
                        label="origin"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="dstn"
                        label="dstn"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="nature"
                        label="nature"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="total"
                        label="total"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        fixed="right"
                        label="operating"
                        width="240">
                    <template slot-scope="scope">
                    <el-button @click="update(scope.row)" type="primary" size="small">{{$t('main.update')}}</el-button>
                    <el-button @click="print(scope.row)" type="primary" size="small">{{$t('main.print')}}</el-button>
                    <el-popover
                    ref="detail"
                    placement="left"
                     width="300"
                    trigger="click">
                    <el-table :data="gridData">
                    <el-table-column width="100" prop="invoiceNo" label="invoice_no"></el-table-column>
                    <el-table-column width="100" prop="description" label="description"></el-table-column>
                    <el-table-column width="100" prop="amount" label="amount"></el-table-column>
                    </el-table>
                    </el-popover>
                    <el-button v-popover:detail @click="detail(scope.row.invoiceNo)" type="primary" size="small">{{$t('main.detail')}}</el-button>
                     </template>
                    </el-table-column>
                    </el-table>
            </div>
        </el-form>
    </div>
</template>

<script>
    export default {
    name: 'selectinvoice',
    data(){
        return{
            form:{
                invoiceNo:'',
                date1:'',
                date2:'',
                invoiceTo:'',
                billLaden:'',
                origin:'',
                dstn:''
            },
            tableData:[],
            gridData:[]
        }

    },
    methods:{
         onSubmit() {
              let _this=this;
              var param=this.form;
              this.$api.selectinvoice(param).then(res=>{
                  _this.tableData=res.data;
              })
          },
          detail(invoiceno){
            let _this=this
            var param={
                invoiceNo:invoiceno
            }
            debugger
              this.$api.selectdetail(param).then(res=>{
                  _this.gridData=res.data;
              })
          }

    }
    }
</script>