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
                    <el-button @click="editShow(scope.row)" type="primary" size="small">{{$t('main.update')}}</el-button>
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
                    <el-button @click="print(scope.row)" type="primary" size="small">{{$t('main.print')}}</el-button>
                     </template>
                    </el-table-column>
                    </el-table>
            </div>
            <el-dialog title="invoice" :visible.sync="dialogFormVisible">
                <el-form ref="form1"  :model="form1" label-width="125px" inline :rules="rules" size="large" >
        <el-form-item  label="invoice_no" prop="">
        <el-input type="text" v-model="form1.invoiceNo"></el-input>
        </el-form-item>
      <el-form-item  label="date" prop="form1date">
            <el-date-picker
                        v-model="form1.date"
                        type="date"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd" style="width: 206.4px;">
            </el-date-picker>
      </el-form-item>
      <el-form-item  label="terms" prop="">
        <el-input type="text" v-model="form1.terms"></el-input>
      </el-form-item>
      <el-form-item  label="invoice_to" prop="">
        <el-input type="textarea" autosize  v-model="form1.invoiceTo"></el-input>
      </el-form-item>
      <el-form-item  label="bill_laden" prop="">
        <el-input type="text" v-model="form1.billLaden"></el-input>
      </el-form-item>
       <el-form-item  label="origin" prop="">
        <el-input type="text" v-model="form1.origin"></el-input>
      </el-form-item>
      <el-form-item  label="dstn" prop="">
        <el-input type="text" v-model="form1.dstn"></el-input>
      </el-form-item>
      <el-form-item  label="nature" prop="">
        <el-input type="textarea" autosize v-model="form1.nature"></el-input>
        </el-form-item>
        <el-form-item  label="total" prop="">
        <el-input type="text" v-model="form1.total"></el-input>
      </el-form-item> 
         <el-form-item
        v-for="(domain, index) in gridData"
        :label="''+index"
        :key="domain.key"
         >
     <el-input v-model="domain.description" style="width:206.4px" placeholder="description"></el-input>
    <el-input v-model="domain.amount" style="width:206.4px" placeholder="amount"></el-input>
    </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="update('form1')">确 定</el-button>
    </div>
    </el-dialog>
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
                dstn:'',
            },
            tableData:[],
            gridData:[],
            dialogFormVisible:false,
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
        }
    },
    methods:{
        editShow(row){
            var role=this.$store.getters.role
                if(role=='manager'){
                this.form1=row
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
              this.$api.selectdetail(param).then(res=>{
                  _this.gridData=res.data;
              })
          }

    }
    }
</script>